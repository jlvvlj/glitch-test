module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("a", this, {
      "class": ["user", "opens-pop-over", "team-user-avatar"],
      style: [this.style],
      "click": this.showTeamUserOptionsPop,
      "title": this.login,
      "data-tooltip": this.tooltipName,
      "data-tooltip-left": true
    }, function(__root) {
      __root.buffer(__root.element("img", this, {
        "width": 32,
        "height": 32,
        "src": this.avatarUrl,
        "alt": this.alt
      }, function(__root) {}));
      __root.buffer(__root.element("div", this, {
        "class": ["button-borderless"]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["down-arrow"]
        }, function(__root) {}));
      }));
    }));
    return __root.root;
  }).call(data);
};
