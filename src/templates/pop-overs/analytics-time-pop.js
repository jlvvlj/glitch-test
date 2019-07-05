module.exports = function(data) {
  "use strict";
  return (function() {
    var __root;
    __root = require('jadelet')(this);
    __root.buffer(__root.element("dialog", this, {
      "class": ["pop-over", "results-list", "analytics-time-pop", "disposable"],
      "click": this.stopPropagation
    }, function(__root) {
      __root.buffer(__root.element("section", this, {
        "class": ["pop-over-actions", "last-section"]
      }, function(__root) {
        __root.buffer(__root.element("ul", this, {
          "class": ["results"]
        }, function(__root) {
          __root.buffer(__root.element("li", this, {
            "class": ["result", this.activeIfLabelIsMonths],
            "click": this.selectMonthFrame
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["result-container"]
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["result-name"]
              }, function(__root) {
                __root.buffer("Last 4 Weeks\n");
              }));
            }));
          }));
          __root.buffer(__root.element("li", this, {
            "class": ["result", this.activeIfLabelIsWeeks],
            "click": this.selectWeeksFrame
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["result-container"]
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["result-name"]
              }, function(__root) {
                __root.buffer("Last 2 Weeks\n");
              }));
            }));
          }));
          __root.buffer(__root.element("li", this, {
            "class": ["result", this.activeIfLabelIsHours],
            "click": this.selectHoursFrame
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["result-container"]
            }, function(__root) {
              __root.buffer(__root.element("div", this, {
                "class": ["result-name"]
              }, function(__root) {
                __root.buffer("Last 24 Hours\n");
              }));
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
