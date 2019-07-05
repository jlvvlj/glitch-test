module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("div", this, {
      "class": ["result-container", this.activeIfSelectedProjects],
      style: [this.hoverBackground]
    }, function(__root) {
      __root.buffer(__root.element("li", this, {
        "class": ["result", "project-result"],
        "tabindex": 0,
        "click": this.projectAction,
        "keydown": this.projectResultKey
      }, function(__root) {
        __root.buffer(__root.element("img", this, {
          "class": ["result-avatar"],
          "src": this.avatarUrl
        }, function(__root) {}));
        __root.buffer(__root.element("div", this, {
          "class": ["result-information"]
        }, function(__root) {
          __root.buffer(this.UsersList);
          __root.buffer(__root.element("div", this, {
            "class": ["result-name", "result-info"]
          }, function(__root) {
            __root.buffer(this.name);
          }));
          __root.buffer(__root.element("div", this, {
            "class": ["result-description", "result-info"]
          }, function(__root) {
            __root.buffer(this.description);
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
