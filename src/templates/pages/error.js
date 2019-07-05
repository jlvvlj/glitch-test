module.exports = function(data) {
  "use strict";
  return (function() {
    var logo, __root;
    __root = require('jadelet')(this);
    logo = "https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fcarp.svg";
    __root.buffer(__root.element("div", this, {
      "class": ["content", "error-page"]
    }, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["container"]
      }, function(__root) {
        __root.buffer(__root.element("h1", this, {}, function(__root) {
          __root.buffer(this.title);
        }));
        __root.buffer(__root.element("h2", this, {}, function(__root) {
          __root.buffer(this.description);
        }));
        __root.buffer(__root.element("div", this, {
          "class": ["actions"]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "href": "/"
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "src": logo,
              "width": "80px",
              "height": "66px"
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("canvas", this, {
          id: ["stars"]
        }, function(__root) {}));
        __root.buffer(__root.element("script", this, {
          "src": "https://glitch.com/edit/error-page.js"
        }, function(__root) {}));
      }));
    }));
    return __root.root;
  }).call(data);
};
