module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("main", this, {
      "class": ["questions-page"],
      "role": "main"
    }, function(__root) {
      __root.buffer(this.questions);
      __root.buffer(this.Categories);
    }));
    return __root.root;
  }).call(data);
};
