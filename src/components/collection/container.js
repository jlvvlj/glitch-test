import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'react-pluralize';
import { partition, sampleSize } from 'lodash';
import classnames from 'classnames';

import { isDarkColor } from 'Models/collection';
import Text from 'Components/text/text';
import Image from 'Components/images/image';
import FeaturedProject from 'Components/project/featured-project';
import { ProfileItem } from 'Components/profile-list';
import ProjectsList from 'Components/containers/projects-list';
import CollectionNameInput from 'Components/fields/collection-name-input';
import AddCollectionProject from 'Components/collection/add-collection-project-pop';
import EditCollectionColor from 'Components/collection/edit-collection-color-pop';
import AuthDescription from 'Components/fields/auth-description';
import { CollectionAvatar } from 'Components/images/avatar';
import { CollectionLink } from 'Components/link';
import Arrow from 'Components/arrow';
import { useCollectionCurator } from 'State/collection';

import styles from './container.styl';

const CollectionContainer = ({ collection, showFeaturedProject, isAuthorized, preview, funcs }) => {
  const { value: curator } = useCollectionCurator(collection);
  const [previewProjects, setPreviewProjects] = useState(sampleSize(collection.projects, 3));
  useEffect(() => {
    setPreviewProjects(sampleSize(collection.projects, 3));
  }, [collection]);
  const collectionHasProjects = collection.projects.length > 0;
  let featuredProject = null;
  let { projects } = collection;
  if (preview) {
    projects = previewProjects;
  }
  if (showFeaturedProject && collection.featuredProjectId) {
    [[featuredProject], projects] = partition(collection.projects, (p) => p.id === collection.featuredProjectId);
  }

  let collectionName = collection.name;
  if (isAuthorized) {
    collectionName = <CollectionNameInput name={collection.name} onChange={funcs.onNameChange} />;
  } else if (preview) {
    collectionName = <CollectionLink collection={collection}>{collection.name}</CollectionLink>;
  }

  const enableSorting = isAuthorized && projects.length > 1;

  return (
    <article className={classnames(styles.container, isDarkColor(collection.coverColor) && styles.dark, preview && styles.preview)}>
      <header className={styles.collectionHeader} style={{ backgroundColor: collection.coverColor }}>
        <div className={styles.imageContainer}>
          {collection.avatarUrl ? <Image src={collection.avatarUrl} alt="" /> : <CollectionAvatar collection={collection} />}
        </div>

        <div className={styles.collectionInfo}>
          <h1 className={styles.name}>{collectionName}</h1>

          <div className={styles.owner}>
            <ProfileItem hasLink {...curator} glitchTeam={collection.glitchTeam} />
          </div>

          <div className={styles.description}>
            <AuthDescription
              authorized={isAuthorized}
              description={collection.description}
              update={funcs.updateDescription}
              placeholder="Tell us about your collection"
            />
          </div>

          {!preview && (
            <div className={styles.projectCount}>
              <Text>
                <Pluralize count={collection.projects.length} singular="Project" />
              </Text>
            </div>
          )}

          {isAuthorized && funcs.updateColor && <EditCollectionColor update={funcs.updateColor} initialColor={collection.coverColor} />}
        </div>
      </header>

      <div className={styles.collectionContents}>
        <div className={styles.collectionProjectContainerHeader}>
          {isAuthorized && funcs.addProjectToCollection && (
            <AddCollectionProject addProjectToCollection={funcs.addProjectToCollection} collection={collection} />
          )}
        </div>
        {!collectionHasProjects && isAuthorized && (
          <div className={styles.emptyCollectionHint}>
            <Image src="https://cdn.glitch.com/1afc1ac4-170b-48af-b596-78fe15838ad3%2Fpsst-pink.svg?1541086338934" alt="psst" width="" height="" />
            <Text>You can add any project, created by any user</Text>
          </div>
        )}
        {!collectionHasProjects && !isAuthorized && <div className={styles.emptyCollectionHint}>No projects to see in this collection just yet.</div>}
        {featuredProject && (
          <FeaturedProject
            isAuthorized={isAuthorized}
            featuredProject={featuredProject}
            unfeatureProject={funcs.unfeatureProject}
            addProjectToCollection={funcs.addProjectToCollection}
            collection={collection}
            displayNewNote={funcs.displayNewNote}
            updateNote={funcs.updateNote}
            hideNote={funcs.hideNote}
          />
        )}
        {collectionHasProjects && (
          <ProjectsList
            layout={preview ? 'row' : 'gridCompact'}
            projects={projects}
            collection={collection}
            enableSorting={enableSorting}
            onReorder={funcs.updateProjectOrder}
            noteOptions={{
              hideNote: funcs.hideNote,
              updateNote: funcs.updateNote,
              isAuthorized,
            }}
            projectOptions={{ ...funcs, collection }}
          />
        )}
        {enableSorting && (
          <Text>Drag to reorder, or move focus to a project and press space. Move it with the arrow keys and press space again to save.</Text>
        )}
        {preview && (
          <CollectionLink collection={collection} className={styles.viewAll}>
            View all <Pluralize count={collection.projects.length} singular="project" /> <Arrow />
          </CollectionLink>
        )}
      </div>
    </article>
  );
};

CollectionContainer.propTypes = {
  collection: PropTypes.shape({
    projects: PropTypes.array.isRequired,
    coverColor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    featuredProjectId: PropTypes.string,
  }).isRequired,
  showFeaturedProject: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  preview: PropTypes.bool,
  funcs: PropTypes.object,
};
CollectionContainer.defaultProps = {
  showFeaturedProject: false,
  isAuthorized: false,
  preview: false,
  funcs: {},
};

export default CollectionContainer;
