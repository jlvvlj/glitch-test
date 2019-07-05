module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "user-options-pop", this.hiddenUnlessUserOptionsPopVisible],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": "https://glitch.com/edit"
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-cta", "button-small"]
          }, function(__root) {
            __root.buffer("Resume Coding\n");
          }));
        }));
        __root.buffer(__root.element("a", this, {
          "class": ["button-link"],
          "href": this.yourProfileLink
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-small", "has-emoji", "button-tertiary"]
          }, function(__root) {
            __root.buffer(__root.element("span", this, {}, function(__root) {
              __root.buffer("Your Profile\n");
            }));
            __root.buffer(__root.element("img", this, {
              "class": ["emoji", "avatar"],
              "src": this.yourProfileAvatar
            }, function(__root) {}));
          }));
        }));
        __root.buffer(__root.element("button", this, {
          "class": ["button-small", "has-emoji", "button-tertiary"],
          "click": this.showNewStuffOverlay
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("New Stuff\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "dog-face"]
          }, function(__root) {}));
        }));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", this.hiddenUnlesssUserHasTeams]
      }, function(__root) {
        this.teams().forEach(function(team) {
          var avatarUrl, name, url;
          url = team.url;
          name = team.name;
          avatarUrl = team.teamAvatarUrl;
          return __root.buffer(__root.element("a", this, {
            "class": ["button-link"],
            "href": url
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button", "button-small", "has-emoji", "button-tertiary"]
            }, function(__root) {
              __root.buffer(__root.element("span", this, {}, function(__root) {
                __root.buffer(name);
              }));
              __root.buffer(__root.element("span", this, {}, function(__root) {
                __root.buffer(" ");
              }));
              __root.buffer(__root.element("img", this, {
                "class": ["emoji", "avatar"],
                "src": avatarUrl
              }, function(__root) {}));
            }));
          }));
        });
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info", "last-section", "section-has-tertiary-buttons"]
      }, function(__root) {
        __root.buffer(__root.element("button", this, {
          "class": ["button-small", "has-emoji", "button-tertiary", "button-on-secondary-background"],
          "click": this.signOut
        }, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("Sign Out\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "balloon"]
          }, function(__root) {}));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
