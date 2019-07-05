module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("div", this, {
      "class": ["overlay-background", this.hiddenUnlessOverlayVideoVisible]
    }, function(__root) {
      __root.buffer(__root.element("dialog", this, {
        "class": ["overlay", "video-overlay"],
        "click": this.stopPropagation,
        "tabindex": "-1"
      }, function(__root) {
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-actions"]
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["wistia_responsive_padding"]
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["wistia_responsive_wrapper"]
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["wistia_embed", "wistia_async_vskja9agqj"],
                "videoFoam": true
              }, function(__root) {}));
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
