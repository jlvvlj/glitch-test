module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("li", this, {}, function(__root) {
      if (this.link()) {
        __root.buffer(__root.element("a", this, {
          "href": this.link
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["featured-container"],
            "data-track": "featured project",
            "data-track-label": this.title
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["featured"],
              "src": this.src,
              "title": this.imgTitle,
              "alt": ""
            }, function(__root) {}));
            __root.buffer(__root.element("p", this, {
              "class": ["project-name"]
            }, function(__root) {
              __root.buffer(this.title);
            }));
          }));
        }));
      } else {
        __root.buffer(__root.element("span", this, {}, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["featured-container"],
            "data-track": "featured project",
            "data-track-label": this.title
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["featured"],
              "src": this.src,
              "title": this.imgTitle,
              "alt": ""
            }, function(__root) {}));
            __root.buffer(__root.element("p", this, {
              "class": ["project-name"]
            }, function(__root) {
              __root.buffer(this.title);
            }));
          }));
        }));
      }
    }));
    return __root.root;
  }).call(data);
};
