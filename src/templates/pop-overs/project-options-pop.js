module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "project-options-pop", "disposable"],
      style: [this.style],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", this.hiddenIfProjectIsPinned]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["button-link"],
          "click": this.addPin
        }, function(__root) {
          __root.buffer(__root.element("button", this, {
            "class": ["button-small", "has-emoji", "button-tertiary"]
          }, function(__root) {
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("Pin This\n");
            }));
            __root.buffer(__root.element("span", this, {
              "class": ["emoji", "pushpin"]
            }, function(__root) {}));
          }));
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", this.hiddenUnlessProjectIsPinned]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["button-link"],
          "click": this.removePin
        }, function(__root) {
          __root.buffer(__root.element("button", this, {
            "class": ["button-small", "has-emoji", "button-tertiary"]
          }, function(__root) {
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("Un-Pin This\n");
            }));
            __root.buffer(__root.element("span", this, {
              "class": ["emoji", "pushpin"]
            }, function(__root) {}));
          }));
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "team-options", "danger-zone", "last-section", this.hiddenUnlessPageIsTeamPage]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button-small", "has-emoji", "button-tertiary"],
          "click": this.removeProjectFromTeam
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Remove Project\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "thumbs_down"]
          }, function(__root) {}));
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "danger-zone", "last-section", this.hiddenIfPageIsTeamPage]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button", "button-small", "has-emoji", "button-tertiary"],
          "click": this.deleteProject
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Delete This\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "bomb"]
          }, function(__root) {}));
        }));
        __root.buffer(__root.element("button", this, {
          "class": ["button", "button-small", "has-emoji", "button-tertiary"],
          "click": this.leaveProject
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Leave This\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "wave"]
          }, function(__root) {}));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
