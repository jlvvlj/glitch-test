module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("div", this, {
      "class": ["content"]
    }, function(__root) {
      __root.buffer(this.header);
      __root.buffer(this.content);
      __root.buffer(this.footer);
    }));
    return __root.root;
  }).call(data);
};
