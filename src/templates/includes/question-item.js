module.exports = function(data) {
  "use strict";
  return (function() {
    var iconHelp, __root;
    __root = require('jadelet')(this);
    iconHelp = 'https://cdn.glitch.com/f7224274-1330-4022-a8f2-8ae09dbd68a8%2Fask-for-help.svg?1494954687906';
    __root.buffer(__root.element("li", this, {}, function(__root) {
      __root.buffer(__root.element("img", this, {
        "class": ["help-icon"],
        "src": iconHelp
      }, function(__root) {}));
      __root.buffer(__root.element("a", this, {
        "href": this.projectUrl
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["project"],
          style: [this.outerColor],
          "data-track": "question",
          "data-track-label": this.domain
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["project-container"],
            style: [this.innerColor]
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["avatar"],
              style: [this.userColor],
              "src": this.userAvatar
            }, function(__root) {}));
            __root.buffer(__root.element("button", this, {}, function(__root) {
              __root.buffer("Help " + (this.userLogin()));
            }));
            __root.buffer(__root.element("div", this, {
              "class": ["description", "question"],
              "title": this.fullQuestion
            }, function(__root) {
              __root.buffer(this.filteredQuestion);
            }));
            __root.buffer(__root.element("div", this, {
              "class": ["description", "tags"]
            }, function(__root) {
              var context;
              context = this;
              this.question.tags().forEach(function(tag) {
                var filteredTag;
                filteredTag = context.filteredTag(tag);
                return __root.buffer(__root.element("div", this, {
                  "class": ["tag"],
                  "alt": tag
                }, function(__root) {
                  __root.buffer(filteredTag);
                }));
              });
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
