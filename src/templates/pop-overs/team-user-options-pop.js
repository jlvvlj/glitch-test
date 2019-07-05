module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "team-user-options-pop", "disposable"],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info", "user-result"]
      }, function(__root) {
        __root.buffer(__root.element("ul", this, {
          "class": ["results"]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "href": this.userLink
          }, function(__root) {
            __root.buffer(this.UserResultPresenter(this.application, this.user, {
              showThanks: true
            }));
          }));
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info", "last-section", "section-has-tertiary-buttons", "danger-zone"]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button-small", "has-emoji", "button-tertiary", "button-on-secondary-background", this.hiddenIfUserIsCurrentUser],
          "click": this.removeUser
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Remove from Team\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "wave"]
          }, function(__root) {}));
        }));
        __root.buffer(__root.element("button", this, {
          "class": ["button-small", "has-emoji", "button-tertiary", "button-on-secondary-background", this.hiddenUnlessUserIsCurrentUser],
          "click": this.removeUser
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Leave this Team\n");
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
