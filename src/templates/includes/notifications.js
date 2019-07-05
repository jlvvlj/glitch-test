module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("aside", this, {
      "class": ["notifications"]
    }, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["notification", "notifyUserDescriptionUpdated", this.notifyUserDescriptionUpdated]
      }, function(__root) {
        __root.buffer("Description updated\n");
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["notification", "notifyUploadFailure", this.notifyUploadFailure]
      }, function(__root) {
        __root.buffer("File upload failed. Try again in a few minutes?\n");
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["notification", "notifyUploading", this.notifyUploading]
      }, function(__root) {
        __root.buffer("Uploading\n");
        if (this.uploadFilesRemaining() > 1) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer(" " + (this.uploadFilesRemaining()) + " assets");
          }));
        } else {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("asset\n");
          }));
        }
        __root.buffer(__root.element("progress", this, {
          "class": ["notify-progress"],
          "value": this.uploadProgress,
          "max": 100
        }, function(__root) {}));
      }));
    }));
    return __root.root;
  }).call(data);
};
