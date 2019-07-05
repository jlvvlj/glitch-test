module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("div", this, {
      "class": ["new-stuff-footer"]
    }, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["new-stuff", "opens-pop-over", this.hiddenUnlessNewStuffNotificationVisible],
        "click": this.showNewStuffOverlay
      }, function(__root) {
        __root.buffer(__root.element("figure", this, {
          "class": ["new-stuff-avatar"],
          "data-tooltip": "New",
          "data-tooltip-top": true,
          "data-tooltip-persistent": true
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["overlay-background", this.visibility]
      }, function(__root) {
        __root.buffer(__root.element("dialog", this, {
          "class": ["pop-over", "overlay", "new-stuff-overlay", "overlay-narrow"]
        }, function(__root) {
          __root.buffer(__root.element("section", this, {
            "class": ["pop-over-info"]
          }, function(__root) {
            __root.buffer(__root.element("figure", this, {
              "class": ["new-stuff-avatar"]
            }, function(__root) {}));
            __root.buffer(__root.element("div", this, {
              "class": ["overlay-title"]
            }, function(__root) {
              __root.buffer("New Stuff\n");
            }));
            __root.buffer(__root.element("div", this, {}, function(__root) {
              __root.buffer(__root.element("label", this, {
                "class": ["button", "button-small"]
              }, function(__root) {
                __root.buffer(__root.element("input", this, {
                  "class": ["button-checkbox"],
                  "type": "checkbox",
                  "checked": this.checked
                }, function(__root) {}));
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("Keep showing me these\n");
                }));
              }));
            }));
          }));
          __root.buffer(__root.element("section", this, {
            "class": ["pop-over-actions"]
          }, function(__root) {
            var mdToNode, updates;
            updates = this.newStuff();
            mdToNode = this.mdToNode;
            updates.forEach(function(update) {
              return __root.buffer(__root.element("article", this, {}, function(__root) {
                __root.buffer(__root.element("div", this, {
                  "class": ["title"]
                }, function(__root) {
                  __root.buffer(update.title);
                }));
                __root.buffer(__root.element("div", this, {
                  "class": ["body"]
                }, function(__root) {
                  __root.buffer(mdToNode(update.body));
                }));
                if (update.link) {
                  __root.buffer(__root.element("p", this, {}, function(__root) {
                    __root.buffer(__root.element("a", this, {
                      "class": ["link"],
                      "href": update.link
                    }, function(__root) {
                      __root.buffer("Read the blog post →\n");
                    }));
                  }));
                }
              }));
            });
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
