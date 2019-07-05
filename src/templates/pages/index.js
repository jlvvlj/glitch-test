module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("span", this, {}, function(__root) {
      __root.buffer(__root.element("main", this, {
        "role": "main"
      }, function(__root) {
        __root.buffer(__root.element("h1", this, {
          "class": ["headline"]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "href": "https://glitch.com"
          }, function(__root) {
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("Glitch");
            }));
          }));
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer(" ");
          }));
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("is the friendly community where you'll build the app of your dreams\n");
          }));
        }));
        if (this.currentUser().isSignedIn()) {
          __root.buffer(this.QuestionsPresenter);
        }
        __root.buffer(this.RecentProjectsPresenter);
        __root.buffer(this.featured);
        __root.buffer(this.randomCategories);
        __root.buffer(this.Categories);
        __root.buffer(this.WhatIsGlitch);
        __root.buffer(this.ByFogCreek);
        __root.buffer(__root.element("section", this, {
          "class": ["made-in-glitch"]
        }, function(__root) {
          __root.buffer(__root.element("p", this, {}, function(__root) {
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("Of course, this site was made on Glitch too\n");
            }));
          }));
          __root.buffer(__root.element("a", this, {
            "href": "https://glitch.com/edit/#!/community"
          }, function(__root) {
            __root.buffer(__root.element("button", this, {
              "class": ["has-emoji"]
            }, function(__root) {
              __root.buffer("View Source\n");
              __root.buffer(__root.element("div", this, {
                "class": ["emoji", "carp_streamer"]
              }, function(__root) {}));
            }));
          }));
        }));
      }));
      __root.buffer(__root.element("script", this, {
        "src": "//fast.wistia.com/embed/medias/vskja9agqj.jsonp",
        "async": true
      }, function(__root) {}));
      __root.buffer(__root.element("script", this, {
        "src": "//fast.wistia.com/assets/external/E-v1.js",
        "async": true
      }, function(__root) {}));
    }));
    return __root.root;
  }).call(data);
};
