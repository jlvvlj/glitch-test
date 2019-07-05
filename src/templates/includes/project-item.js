module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("li", this, {}, function(__root) {
      __root.buffer(this.UsersList);
      __root.buffer(__root.element("div", this, {
        "class": ["project-options", "button-borderless", "opens-pop-over", "hidden", this.visibleIfUserHasProjectOptions],
        "click": this.showProjectOptionsPop
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["down-arrow"]
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("a", this, {
        "href": this.projectLink,
        "click": this.showProject
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["project", this.projectIsPrivate],
          style: [this.style],
          "data-track": "project",
          "data-track-label": this.project.domain
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["project-container"]
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["avatar"],
              "src": this.avatar,
              "alt": "" + (this.project.domain()) + " avatar"
            }, function(__root) {}));
            __root.buffer(__root.element("button", this, {
              "class": [this.buttonCtaIfCurrentUser]
            }, function(__root) {
              __root.buffer(__root.element("span", this, {
                "class": ["private-project-badge"]
              }, function(__root) {}));
              __root.buffer(__root.element("div", this, {
                "class": ["project-name"]
              }, function(__root) {
                __root.buffer(this.project.domain);
              }));
            }));
            __root.buffer(__root.element("div", this, {
              "class": ["description"]
            }, function(__root) {
              __root.buffer(this.project.description);
            }));
            __root.buffer(__root.element("div", this, {
              "class": ["overflow-mask"],
              style: [this.maskStyle]
            }, function(__root) {}));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
