module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("article", this, {
      "class": ["projects"],
      style: [this.style]
    }, function(__root) {
      __root.buffer(__root.element("header", this, {
        "class": ["category"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "class": ["category-name"],
          "href": this.url
        }, function(__root) {
          __root.buffer(__root.element("h2", this, {}, function(__root) {
            __root.buffer(this.name);
            __root.buffer(__root.element("span", this, {
              "class": ["arrow"]
            }, function(__root) {
              __root.buffer("→\n");
            }));
          }));
        }));
        __root.buffer(__root.element("span", this, {
          "class": ["category-image-container"]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "class": ["category-image"],
            "href": this.url
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "src": this.category.avatarUrl,
              "alt": this.name
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("p", this, {
          "class": ["category-description"]
        }, function(__root) {
          __root.buffer(this.description);
        }));
      }));
      __root.buffer(this.projects());
    }));
    return __root.root;
  }).call(data);
};
