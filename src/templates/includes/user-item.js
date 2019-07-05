module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("li", this, {}, function(__root) {
      __root.buffer(__root.element("a", this, {
        "href": this.userLink
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["item"],
          style: [this.style]
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["content"]
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["avatar"],
              "src": this.avatarUrl,
              "alt": this.login
            }, function(__root) {}));
            __root.buffer(__root.element("div", this, {
              "class": ["information"]
            }, function(__root) {
              __root.buffer(__root.element("h3", this, {
                "class": ["name", this.hiddenUnlessName]
              }, function(__root) {
                __root.buffer(this.name);
              }));
              __root.buffer(__root.element("div", this, {
                "class": ["button"]
              }, function(__root) {
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer(this.login);
                }));
              }));
              __root.buffer(__root.element("p", this, {
                "class": ["thanks", this.hiddenUnlessThanks]
              }, function(__root) {
                __root.buffer(this.thanks);
                __root.buffer(__root.element("span", this, {
                  "class": ["emoji", "sparkling_heart"]
                }, function(__root) {}));
              }));
              __root.buffer(__root.element("p", this, {
                "class": ["description", this.hiddenUnlessDescription]
              }, function(__root) {
                __root.buffer(this.truncatedDescription);
              }));
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
