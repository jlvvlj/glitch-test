import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { sampleSize } from 'lodash';

import CoverContainer from 'Components/containers/cover-container';
import DataLoader from 'Components/data-loader';
import Loader from 'Components/loader';
import SmallCollectionItem from 'Components/collection/collection-item-small';
import Heading from 'Components/text/heading';
import Row from 'Components/containers/row';
import Arrow from 'Components/arrow';
import { UserLink, TeamLink } from 'Components/link';
import { getDisplayName } from 'Models/user';
import { getSingleItem } from 'Shared/api';
import { useCollectionContext } from 'State/collection';

import styles from './styles.styl';

const loadMoreCollectionsFromAuthor = ({ api, collection }) => {
  const authorType = collection.teamId === -1 ? 'user' : 'team';
  const authorEndpoint = `${authorType}s`;
  const authorId = authorType === 'user' ? collection.userId : collection.teamId;

  // get up to 10 collections from the author
  return getSingleItem(api, `v1/${authorEndpoint}/${authorId}/collections?limit=10&orderKey=createdAt&orderDirection=DESC`, 'items');
};

function useCollectionsWithProjects(collections) {
  const getCollectionProjects = useCollectionContext();
  const responses = collections.map(getCollectionProjects);
  const [collectionsWithProjects, setCollectionsWithProjects] = useState(null);
  useEffect(() => {
    setCollectionsWithProjects((prev) => {
      if (prev) return prev;

      const allResponsesComplete = responses.every((r) => r.status !== 'loading');
      if (!allResponsesComplete) return null;

      const moreCollectionsWithProjects = [];
      responses.forEach((response, i) => {
        if (response.status === 'ready' && response.value.length > 0) {
          moreCollectionsWithProjects.push({ ...collections[i], projects: response.value });
        }
      });
      return sampleSize(moreCollectionsWithProjects, 3);
    });
  }, [responses]);
  return collectionsWithProjects;
}

const MoreCollections = ({ currentCollection, collections }) => {
  const collectionsWithProjects = useCollectionsWithProjects(collections);
  if (!collectionsWithProjects) return <Loader />;
  if (!collectionsWithProjects.length) return null;

  const isUserCollection = currentCollection.teamId === -1;
  const type = isUserCollection ? 'user' : 'team';
  return (
    <>
      <div className={styles.moreByLinkWrap}>
        <Heading tagName="h2">
          {isUserCollection ? (
            <UserLink user={currentCollection.user}>More by {getDisplayName(currentCollection.user)} <Arrow /></UserLink>
          ) : (
            <TeamLink team={currentCollection.team}>More from {currentCollection.team.name} <Arrow /></TeamLink>
          )}
        </Heading>
      </div>
      <CoverContainer type={type} item={currentCollection[type]}>
        <Row items={collectionsWithProjects}>{(collection) => <SmallCollectionItem key={collection.id} collection={collection} />}</Row>
      </CoverContainer>
    </>
  );
};

MoreCollections.propTypes = {
  currentCollection: PropTypes.object.isRequired,
  collections: PropTypes.array.isRequired,
};

const MoreCollectionsContainer = ({ collection }) => (
  <DataLoader get={(api) => loadMoreCollectionsFromAuthor({ api, collection })}>
    {(collections) => (collections.length > 0 ? <MoreCollections currentCollection={collection} collections={collections} /> : null)}
  </DataLoader>
);

MoreCollectionsContainer.propTypes = {
  collection: PropTypes.object.isRequired,
};

export default MoreCollectionsContainer;
