module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, UserResultPresenter, __root;
    __root = require('jadelet')(this);
    Loader = require("../includes/loader");
    UserResultPresenter = this.UserResultPresenter;
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "add-team-user-pop", "results-list", this.hiddenUnlessAddTeamUserPopVisible],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info"]
      }, function(__root) {
        __root.buffer(__root.element("input", this, {
          id: ["team-user-search"],
          "class": ["pop-over-input", "search-input", "pop-over-search"],
          "input": this.search,
          "keyup": this.spacekeyDoesntClosePop,
          "placeholder": "Search for a user or email"
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "last-section", this.hiddenIfNoSearch]
      }, function(__root) {
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessSearching]
        }, function(__root) {
          __root.buffer(Loader(this));
        }));
        __root.buffer(__root.element("ul", this, {
          "class": ["results"]
        }, function(__root) {
          var application;
          application = this.application;
          this.searchResults().forEach(function(user) {
            return __root.buffer(UserResultPresenter(application, user));
          });
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
