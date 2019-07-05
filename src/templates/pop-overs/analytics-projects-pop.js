module.exports = function(data) {
  "use strict";
  return (function() {
    var ProjectResultPresenter, bentoBox, __root;
    __root = require('jadelet')(this);
    ProjectResultPresenter = this.ProjectResultPresenter;
    bentoBox = 'https://cdn.glitch.com/55f8497b-3334-43ca-851e-6c9780082244%2Fbento-box.png?1502469566743';
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "results-list", "analytics-projects-pop", "disposable"],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-info"]
      }, function(__root) {
        __root.buffer(__root.element("input", this, {
          id: ["analytics-project-search"],
          "class": ["pop-over-input", "search-input", "pop-over-search"],
          "input": this.filter,
          "keyup": this.spacekeyDoesntClosePop,
          "placeholder": "Filter projects"
        }, function(__root) {}));
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "last-section"]
      }, function(__root) {
        __root.buffer(__root.element("ul", this, {
          "class": ["results"]
        }, function(__root) {
          var analytics, options;
          __root.buffer(__root.element("div", this, {
            "class": ["result-container", this.activeIfAllProjects],
            "click": this.selectAllProjects
          }, function(__root) {
            __root.buffer(__root.element("li", this, {
              "class": ["result"]
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["result-information"]
              }, function(__root) {
                __root.buffer(__root.element("img", this, {
                  "class": ["result-avatar"],
                  "src": bentoBox
                }, function(__root) {}));
                __root.buffer(__root.element("div", this, {
                  "class": ["result-name"]
                }, function(__root) {
                  __root.buffer("All Projects\n");
                }));
              }));
            }));
          }));
          options = {};
          analytics = this.analytics;
          this.teamProjects().forEach(function(project) {
            return __root.buffer(ProjectResultPresenter(application, project, options, analytics));
          });
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
