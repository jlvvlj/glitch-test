module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, cat, __root;
    __root = require('jadelet')(this);
    cat = "https://cdn.gomix.com/us-east-1%3Acba180f4-ee65-4dfc-8dd5-f143280d3c10%2Fcat.svg";
    Loader = require("../includes/loader");
    __root.buffer(__root.element("main", this, {
      "class": ["profile-page", "user-page"],
      "role": "main"
    }, function(__root) {
      __root.buffer(__root.element("span", this, {
        "class": ["hidden", this.visibleIfUserNotFound]
      }, function(__root) {
        __root.buffer(this.userNotFound);
      }));
      __root.buffer(__root.element("span", this, {
        "class": [this.hiddenIfUserNotFound]
      }, function(__root) {
        __root.buffer(__root.element("section", this, {}, function(__root) {
          __root.buffer(this.Profile);
        }));
        __root.buffer(__root.element("span", this, {}, function(__root) {
          __root.buffer(this.userProjects);
          if (this.isCurrentUser()) {
            __root.buffer(this.deletedProjects);
          }
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
