module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("div", this, {
      "class": ["result-container"],
      style: [this.hoverBackground]
    }, function(__root) {
      __root.buffer(__root.element("li", this, {
        "class": ["result", "user-result"],
        "tabindex": 0,
        "click": this.addUserToTeam,
        "keydown": this.userResultKey
      }, function(__root) {
        __root.buffer(__root.element("img", this, {
          "class": ["result-avatar"],
          "src": this.avatarUrl
        }, function(__root) {}));
        __root.buffer(__root.element("div", this, {
          "class": ["result-information"]
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["result-name", "result-info", this.hiddenUnlessName]
          }, function(__root) {
            __root.buffer(this.name);
          }));
          __root.buffer(__root.element("div", this, {
            "class": ["result-login", "result-info"]
          }, function(__root) {
            __root.buffer(this.login);
          }));
          __root.buffer(__root.element("div", this, {
            "class": ["result-thanks", this.hiddenUnlessThanks, this.hiddenUnlessShowingThanks]
          }, function(__root) {
            __root.buffer(this.thanks);
            __root.buffer(__root.element("span", this, {
              "class": ["emoji", "sparkling_heart"]
            }, function(__root) {}));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
