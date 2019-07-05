module.exports = function(data) {
  "use strict";
  return (function() {
    var free, play, whatsGlitchNarrow, whatsGlitchWide, __root;
    __root = require('jadelet')(this);
    play = "https://cdn.hyperdev.com/6ce807b5-7214-49d7-aadd-f11803bc35fd%2Fplay.svg";
    whatsGlitchWide = "https://cdn.glitch.com/f7224274-1330-4022-a8f2-8ae09dbd68a8%2Fwhats-glitch-wide.svg?1499885209761";
    whatsGlitchNarrow = "https://cdn.glitch.com/f7224274-1330-4022-a8f2-8ae09dbd68a8%2Fwhats-glitch-narrow.svg?1499884900667";
    free = "https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Ffree.svg?1499350845981";
    __root.buffer(__root.element("section", this, {
      "class": ["what-is-glitch", this.hiddenIfUserIsSignedIn]
    }, function(__root) {
      __root.buffer(__root.element("h1", this, {
        "class": ["headline"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": this.baseUrl
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
      __root.buffer(__root.element("span", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": "https://glitch.com/about"
        }, function(__root) {
          __root.buffer(__root.element("figure", this, {
            "title": "How Glitch works"
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["wide"],
              "src": whatsGlitchWide,
              "alt": "Create a node app, or remix one. It updates as you type. Code with Friends!"
            }, function(__root) {}));
            __root.buffer(__root.element("img", this, {
              "class": ["narrow"],
              "src": whatsGlitchNarrow,
              "alt": "Create a node app, or remix one. It updates as you type. Code with Friends!"
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("p", this, {}, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("And it's\n");
            __root.buffer(__root.element("img", this, {
              "class": ["free"],
              "src": free,
              "alt": "free"
            }, function(__root) {}));
          }));
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer(". ");
          }));
          __root.buffer(__root.element("div", this, {
            "class": ["video"],
            "click": this.showVideoOverlay
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["play-button"],
              "src": play,
              "alt": "play"
            }, function(__root) {}));
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("How it works in 2 minutes\n");
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
