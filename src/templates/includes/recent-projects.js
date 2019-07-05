module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("section", this, {
      "class": ["profile", "recent-projects", this.hiddenUnlessCurrentUser]
    }, function(__root) {
      __root.buffer(__root.element("h2", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": this.userLink
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Your Projects →\n");
          }));
        }));
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["cover-container"],
        style: [this.style]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["profile-avatar"]
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["user-avatar-container"]
          }, function(__root) {
            __root.buffer(__root.element("a", this, {
              "href": this.userLink
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["user-avatar", this.userAvatarIsAnon],
                style: [this.userAvatarStyle],
                "alt": "Your avatar"
              }, function(__root) {}));
            }));
          }));
          if (this.currentUser.isAnon()) {
            __root.buffer(__root.element("div", this, {
              "class": ["anon-user-sign-up"]
            }, function(__root) {
              __root.buffer(this.SignInPop);
            }));
          }
        }));
        __root.buffer(__root.element("article", this, {
          "class": ["projects"]
        }, function(__root) {
          __root.buffer(__root.element("span", this, {
            "class": [this.hiddenIfUserIsFetched]
          }, function(__root) {
            __root.buffer(this.loader);
          }));
          __root.buffer(this.projects);
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
