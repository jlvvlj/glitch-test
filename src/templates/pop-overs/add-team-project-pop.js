module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, ProjectResultPresenter, __root;
    __root = require('jadelet')(this);
    Loader = require("../includes/loader");
    ProjectResultPresenter = this.ProjectResultPresenter;
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "add-team-project-pop", "results-list", this.hiddenUnlessAddTeamProjectPopVisible],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info"]
      }, function(__root) {
        __root.buffer(__root.element("input", this, {
          id: ["team-project-search"],
          "class": ["pop-over-input", "search-input", "pop-over-search"],
          "input": this.search,
          "keyup": this.spacekeyDoesntClosePop,
          "placeholder": "Search for a project"
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", this.hiddenIfNoSearch]
      }, function(__root) {
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessSearching]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
        __root.buffer(__root.element("ul", this, {
          "class": ["results"]
        }, function(__root) {
          var application, options;
          application = this.application;
          options = {
            addProjectToTeam: true
          };
          this.searchResults().forEach(function(project) {
            return __root.buffer(ProjectResultPresenter(application, project, options));
          });
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info", "last-section"]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["info-description"]
        }, function(__root) {
          __root.buffer("You can add projects you've made, or ones by other cool people\n");
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
