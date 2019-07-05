module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("section", this, {
      "class": ["cta-buttons"]
    }, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["buttons-wrap"]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button", "has-emoji", "opens-pop-over"],
          "click": this.toggleCtaPop
        }, function(__root) {
          __root.buffer("Start a New Project\n");
          __root.buffer(__root.element("div", this, {
            "class": ["emoji", "sparkles"]
          }, function(__root) {}));
        }));
        __root.buffer(this.ctaPop);
        __root.buffer(__root.element("a", this, {
          "class": [this.hiddenUnlessIsSignedIn],
          "href": "https://glitch.com/edit/",
          "data-track": "cta → resume coding"
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-cta"]
          }, function(__root) {
            __root.buffer("Resume Coding\n");
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
