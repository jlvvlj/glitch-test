module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, __root;
    __root = require('jadelet')(this);
    Loader = require("./loader");
    __root.buffer(__root.element("section", this, {
      "class": ["analytics", this.hiddenUnlessCurrentUserIsOnTeam]
    }, function(__root) {
      __root.buffer(__root.element("script", this, {
        "src": "https://cdn.plot.ly/plotly-1.34.0.min.js",
        "load": this.plotlyLoad,
        "async": "4eva"
      }, function(__root) {}));
      __root.buffer(__root.element("section", this, {
        "class": ["chart-container"]
      }, function(__root) {
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessGettingAnalytics]
        }, function(__root) {
          __root.buffer(Loader);
        }));
        __root.buffer(__root.element("h3", this, {}, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("" + (this.totalRemixes()) + " Remixes Over the " + (this.analyticsTimeLabel()));
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "emoji-in-title", "microphone"]
          }, function(__root) {}));
        }));
        __root.buffer(this.AnalyticsTimePop);
        __root.buffer(this.AnalyticsProjectPop);
        __root.buffer(this.remixesChartElement);
        __root.buffer(__root.element("h4", this, {
          "class": ["from-header"]
        }, function(__root) {
          __root.buffer("From\n");
        }));
        __root.buffer(this.remixesReferrersBars);
      }));
      __root.buffer(__root.element("section", this, {
        "class": ["chart-container"]
      }, function(__root) {
        __root.buffer(__root.element("span", this, {
          "class": [this.hiddenUnlessGettingAnalytics]
        }, function(__root) {
          __root.buffer(Loader);
        }));
        __root.buffer(__root.element("h3", this, {}, function(__root) {
          __root.buffer(__root.element("span", this, {}, function(__root) {
            __root.buffer("" + (this.totalVisits()) + " Visits Over the " + (this.analyticsTimeLabel()));
          }));
          __root.buffer(__root.element("span", this, {
            "class": ["emoji", "emoji-in-title", "eyes"]
          }, function(__root) {}));
        }));
        __root.buffer(this.AnalyticsTimePop);
        __root.buffer(this.AnalyticsProjectPop);
        __root.buffer(this.visitsChartElement);
        __root.buffer(__root.element("h4", this, {
          "class": ["from-header"]
        }, function(__root) {
          __root.buffer("From\n");
        }));
        __root.buffer(this.visitsReferrersBars);
      }));
    }));
    return __root.root;
  }).call(data);
};
