module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("main", this, {
      "class": ["profile-page", "team-page"],
      "role": "main"
    }, function(__root) {
      __root.buffer(__root.element("section", this, {}, function(__root) {
        __root.buffer(this.TeamProfile);
      }));
      __root.buffer(this.addTeamProjectButton);
      __root.buffer(this.TeamProjects);
      __root.buffer(this.teamAnalytics);
      __root.buffer(this.teamMarketing);
    }));
    return __root.root;
  }).call(data);
};
