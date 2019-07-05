module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, __root;
    __root = require('jadelet')(this);
    Loader = require("./includes/loader");
    __root.buffer(__root.element("article", this, {
      "class": ["deleted-projects"]
    }, function(__root) {
      __root.buffer(__root.element("h2", this, {}, function(__root) {
        __root.buffer("Deleted Projects");
        __root.buffer(__root.element("span", this, {
          "class": ["emoji", "bomb", "emoji-in-title"]
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["deleted-project-loader", this.hiddenIfDeletedProjectsLoaded]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button-tertiary", this.hiddenIfDeletedProjectsLoadingOrLoaded],
          "click": this.getDeletedProjects
        }, function(__root) {
          __root.buffer("Show\n");
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessDeletedProjectsLoading]
        }, function(__root) {
          __root.buffer(Loader);
        }));
      }));
      __root.buffer(__root.element("ul", this, {
        "class": ["deleted-projects-container"]
      }, function(__root) {
        this.user().deletedProjects.forEach(function(project) {
          return __root.buffer(__root.element("li", this, {
            "class": ["deleted-project"],
            "click": project.presenterUndelete
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["avatar"],
              "src": project.avatar
            }, function(__root) {}));
            __root.buffer(__root.element("div", this, {
              "class": ["deleted-project-name"]
            }, function(__root) {
              __root.buffer(project.domain);
            }));
            __root.buffer(__root.element("button", this, {
              "class": ["button-small"]
            }, function(__root) {
              __root.buffer("Undelete\n");
            }));
          }));
        });
      }));
    }));
    return __root.root;
  }).call(data);
};
