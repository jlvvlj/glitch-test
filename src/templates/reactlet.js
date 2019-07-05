module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("span", this, {
      id: [this.id]
    }, function(__root) {}));
    return __root.root;
  }).call(data);
};
