module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "sign-in-pop"],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "last-section"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": this.facebookAuthLink
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-small"]
          }, function(__root) {
            __root.buffer("Sign in with Facebook\n");
            __root.buffer(__root.element("span", this, {
              "class": ["emoji", "facebook"]
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": this.githubAuthLink
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-small"]
          }, function(__root) {
            __root.buffer("Sign in with GitHub\n");
            __root.buffer(__root.element("span", this, {
              "class": ["emoji", "octocat"]
            }, function(__root) {}));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
