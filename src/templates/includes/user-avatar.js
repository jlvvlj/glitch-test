module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("a", this, {
      "class": ["user"],
      style: [this.style],
      "href": this.userLink,
      "title": this.login,
      "data-tooltip": this.tooltipName,
      "data-tooltip-left": true
    }, function(__root) {
      __root.buffer(__root.element("img", this, {
        "class": ["anon-avatar", this.hiddenIfSignedIn],
        "width": 32,
        "height": 32,
        "src": this.anonAvatar,
        "alt": this.alt
      }, function(__root) {}));
      __root.buffer(__root.element("img", this, {
        "class": [this.hiddenUnlessSignedIn],
        "width": 32,
        "height": 32,
        "src": this.userAvatarUrl,
        "alt": this.alt
      }, function(__root) {}));
    }));
    return __root.root;
  }).call(data);
};
