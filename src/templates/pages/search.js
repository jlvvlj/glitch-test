module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, ProjectListPresenter, Reactlet, TeamItem, UserItem, cat, context, __root;
    __root = require('jadelet')(this);
    cat = "https://cdn.gomix.com/us-east-1%3Acba180f4-ee65-4dfc-8dd5-f143280d3c10%2Fcat.svg";
    Loader = require("../includes/loader");
    ProjectListPresenter = this.ProjectListPresenter;
    context = this.application;
    Reactlet = this.Reactlet;
    TeamItem = this.TeamItem;
    UserItem = this.UserItem;
    __root.buffer(__root.element("main", this, {
      "class": ["search-results"],
      "role": "main"
    }, function(__root) {
      __root.buffer(__root.element("article", this, {
        "class": [this.hiddenIfSearchResultsHaveNoTeams]
      }, function(__root) {
        __root.buffer(__root.element("h2", this, {}, function(__root) {
          __root.buffer("Teams\n");
        }));
        __root.buffer(__root.element("ul", this, {
          "class": ["teams-container"]
        }, function(__root) {
          this.searchResultsTeams().forEach(function(team) {
            return __root.buffer(__root.element("li", this, {}, function(__root) {
              __root.buffer(Reactlet(TeamItem, {
                team: team.asProps()
              }, 'search-team-' + team.id()));
            }));
          });
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfSearchResultsTeamsLoaded]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
      }));
      __root.buffer(__root.element("article", this, {
        "class": [this.hiddenIfSearchResultsHaveNoUsers]
      }, function(__root) {
        __root.buffer(__root.element("h2", this, {}, function(__root) {
          __root.buffer("Users\n");
        }));
        __root.buffer(__root.element("ul", this, {
          "class": ["users-container"]
        }, function(__root) {
          this.searchResultsUsers().forEach(function(user) {
            return __root.buffer(__root.element("li", this, {}, function(__root) {
              __root.buffer(Reactlet(UserItem, {
                user: user.asProps()
              }, 'search-user-' + user.id()));
            }));
          });
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfSearchResultsUsersLoaded]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
      }));
      __root.buffer(__root.element("article", this, {
        "class": ["projects", this.hiddenIfSearchResultsHaveNoProjects]
      }, function(__root) {
        __root.buffer(ProjectListPresenter());
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfSearchResultsProjectsLoaded]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
      }));
      __root.buffer(__root.element("article", this, {
        "class": ["no-results", this.hiddenUnlessSearchHasNoResults]
      }, function(__root) {
        __root.buffer(__root.element("p", this, {}, function(__root) {
          __root.buffer("no results found\n");
        }));
        __root.buffer(__root.element("img", this, {
          "src": cat
        }, function(__root) {}));
      }));
      __root.buffer(this.Categories);
    }));
    return __root.root;
  }).call(data);
};
