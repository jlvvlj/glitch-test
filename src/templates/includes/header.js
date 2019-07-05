module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("header", this, {
      "role": "banner"
    }, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["header-info"]
      }, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": this.baseUrl
        }, function(__root) {
          __root.buffer(__root.element("img", this, {
            "class": ["logo"],
            "src": this.logo,
            "alt": "Glitch"
          }, function(__root) {}));
        }));
      }));
      __root.buffer(__root.element("nav", this, {
        "role": "navigation"
      }, function(__root) {
        __root.buffer(__root.element("form", this, {
          "action": "" + this.baseUrl + "search",
          "method": "get",
          "role": "search",
          "submit": this.submit
        }, function(__root) {
          __root.buffer(__root.element("label", this, {
            "class": ["screen-reader-text"],
            "for": "search-projects"
          }, function(__root) {
            __root.buffer("Search Glitch projects\n");
          }));
          __root.buffer(__root.element("input", this, {
            id: ["search-projects"],
            "class": ["search-input"],
            "name": "q",
            "placeholder": "bots, apps, users",
            "value": this.application.searchQuery
          }, function(__root) {}));
        }));
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenIfSignedIn]
        }, function(__root) {
          __root.buffer(__root.element("button", this, {
            "class": ["button", "button-small", "opens-pop-over"],
            "click": this.toggleSignInPopVisible
          }, function(__root) {
            __root.buffer("Sign in\n");
          }));
          __root.buffer(__root.element("span", this, {
            "class": [this.hiddenUnlessSignInPopVisible]
          }, function(__root) {
            __root.buffer(this.SignInPop);
          }));
        }));
        __root.buffer(__root.element("a", this, {
          "class": [this.hiddenUnlessSignedIn],
          "href": "https://glitch.com/edit/",
          "data-track": "resume coding"
        }, function(__root) {
          __root.buffer(__root.element("div", this, {
            "class": ["button", "button-small", "button-cta"]
          }, function(__root) {
            __root.buffer("Resume Coding\n");
          }));
        }));
        __root.buffer(__root.element("div", this, {
          "class": ["button", "user-options-pop-button", "opens-pop-over", this.hiddenUnlessSignedIn],
          "data-tooltip": "User options",
          "data-tooltip-right": true
        }, function(__root) {
          __root.buffer(__root.element("button", this, {
            "class": ["user"],
            "click": this.toggleUserOptionsPopVisible
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "src": this.userAvatar,
              "width": 30,
              "height": 30,
              "alt": "User options"
            }, function(__root) {}));
            __root.buffer(__root.element("span", this, {
              "class": ["down-arrow", "icon"]
            }, function(__root) {}));
          }));
          __root.buffer(this.UserOptionsPop(this.application.userOptionsPopVisible()));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
