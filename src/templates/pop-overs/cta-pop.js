module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "cta-pop", this.hiddenUnlessCtaPopVisible],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "last-section"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": this.newProjectLink,
          "onclick": this.trackNewProject
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "has-emoji"]
          }, function(__root) {
            __root.buffer("Create a Node App\n");
            __root.buffer(__root.element("div", this, {
              "class": ["emoji", "sparkles"]
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": this.newWebsiteLink,
          "onclick": this.trackNewWebsite
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "has-emoji"]
          }, function(__root) {
            __root.buffer("Create a Website\n");
            __root.buffer(__root.element("div", this, {
              "class": ["emoji", "framed_picture"]
            }, function(__root) {}));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
