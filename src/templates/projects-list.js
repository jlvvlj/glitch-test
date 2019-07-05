module.exports = function(data) {
  "use strict";
  return (function() {
    var psst, __root;
    __root = require('jadelet')(this);
    psst = "https://cdn.glitch.com/55f8497b-3334-43ca-851e-6c9780082244%2Fpsst.svg?1500486136908";
    __root.buffer(__root.element("article", this, {
      "class": ["projects"]
    }, function(__root) {
      __root.buffer(__root.element("h2", this, {}, function(__root) {
        __root.buffer(__root.element("span", this, {}, function(__root) {
          __root.buffer(this.sectionTitle);
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "pushpin", "emoji-in-title", this.hiddenUnlessTitleIsPinned]
          }, function(__root) {}));
        }));
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["placeholder", "hidden", this.visibleIfNoPins]
      }, function(__root) {
        __root.buffer(__root.element("img", this, {
          "class": ["psst"],
          "src": psst
        }, function(__root) {}));
        __root.buffer(__root.element("p", this, {}, function(__root) {
          __root.buffer("Pin your projects to show them off\n");
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "pushpin"]
          }, function(__root) {}));
        }));
      }));
      __root.buffer(__root.element("ul", this, {
        "class": ["projects-container"]
      }, function(__root) {
        __root.buffer(this.projects);
      }));
    }));
    return __root.root;
  }).call(data);
};
