module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, __root;
    __root = require('jadelet')(this);
    Loader = require("../includes/loader");
    __root.buffer(__root.element("main", this, {
      "class": ["category-page"],
      "role": "main"
    }, function(__root) {
      __root.buffer(__root.element("article", this, {
        "class": ["projects"],
        style: [this.style]
      }, function(__root) {
        __root.buffer(__root.element("header", this, {
          "class": ["category"]
        }, function(__root) {
          __root.buffer(__root.element("h2", this, {
            "class": ["category-name"]
          }, function(__root) {
            __root.buffer(this.name);
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["category-image-container"]
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "src": this.avatarUrl
            }, function(__root) {}));
          }));
          __root.buffer(__root.element("p", this, {
            "class": ["description"]
          }, function(__root) {
            __root.buffer(this.description);
          }));
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfCategoryProjectsLoaded]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
        __root.buffer(this.projects);
      }));
      __root.buffer(this.Categories);
    }));
    return __root.root;
  }).call(data);
};
