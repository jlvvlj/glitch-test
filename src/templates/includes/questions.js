module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, __root;
    __root = require('jadelet')(this);
    Loader = require("./loader");
    __root.buffer(__root.element("section", this, {
      "class": ["questions"]
    }, function(__root) {
      __root.buffer(__root.element("h2", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": "/questions"
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Help Others, Get Thanks →");
          }));
        }));
        __root.buffer(__root.element("span", this, {}, function(__root) {
          __root.buffer(" ");
        }));
        __root.buffer(__root.element("div", this, {
          "class": ["loader-pie"],
          "title": "Looking for more questions..."
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["left-side"]
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["slice", this.animatedUnlessLookingForQuestions]
            }, function(__root) {}));
          }));
          __root.buffer(__root.element("div", this, {
            "class": ["right-side"]
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["slice", this.animatedUnlessLookingForQuestions]
            }, function(__root) {}));
          }));
        }));
      }));
      __root.buffer(__root.element("article", this, {
        "class": ["projects"]
      }, function(__root) {
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfQuestions]
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer(this.kaomoji);
          }));
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer(" ");
          }));
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Looks like nobody is asking for help right now.\n");
            __root.buffer(__root.element("a", this, {
              "class": ["general-link"],
              "href": "/help/how-can-i-get-help-with-code-in-my-project/"
            }, function(__root) {
              __root.buffer(__root.element("span", this, {}, function(__root) {
                __root.buffer("Learn about helping\n");
              }));
            }));
          }));
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessQuestions]
        }, function(__root) {
          __root.buffer(__root.element("ul", this, {
            "class": ["projects-container"]
          }, function(__root) {
            this.questions().forEach(function(question) {
              return __root.buffer(question);
            });
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
