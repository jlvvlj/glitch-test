module.exports = function(data) {
  "use strict";
  return (function() {
    var glitchTeamAvatar, __root;
    __root = require('jadelet')(this);
    glitchTeamAvatar = "https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fglitch-team-avatar.svg?1489266029267";
    __root.buffer(__root.element("span", this, {}, function(__root) {
      __root.buffer(__root.element("div", this, {
        "class": ["users", this.hiddenIfShowAsGlitchTeam]
      }, function(__root) {
        this.users().forEach(function(user) {
          var alt, anonAvatar, hiddenIfSignedIn, hiddenUnlessSignedIn, style, tooltipName, userAvatarUrl, userLink;
          userLink = user.userLink, tooltipName = user.tooltipName, style = user.style, hiddenIfSignedIn = user.hiddenIfSignedIn, anonAvatar = user.anonAvatar, alt = user.alt, hiddenUnlessSignedIn = user.hiddenUnlessSignedIn, userAvatarUrl = user.userAvatarUrl;
          return __root.buffer(__root.element("a", this, {
            "class": ["user"],
            style: [style],
            "href": userLink,
            "data-tooltip": tooltipName,
            "data-tooltip-left": true
          }, function(__root) {
            __root.buffer(__root.element("img", this, {
              "class": ["anon-avatar", hiddenIfSignedIn],
              "width": 32,
              "height": 32,
              "src": anonAvatar,
              "alt": alt
            }, function(__root) {}));
            __root.buffer(__root.element("img", this, {
              "class": [hiddenUnlessSignedIn],
              "width": 32,
              "height": 32,
              "src": userAvatarUrl,
              "alt": alt
            }, function(__root) {}));
          }));
        });
      }));
      __root.buffer(__root.element("div", this, {
        "class": ["users", this.hiddenUnlessShowAsGlitchTeam]
      }, function(__root) {
        __root.buffer(__root.element("div", this, {
          "class": ["user", "made-by-glitch"],
          style: ["background-color:#74ecfc"],
          "data-tooltip": 'Glitch Team',
          "data-tooltip-left": true
        }, function(__root) {
          __root.buffer(__root.element("img", this, {
            "width": 32,
            "height": 32,
            "src": glitchTeamAvatar,
            "alt": "Glitch Team"
          }, function(__root) {}));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
