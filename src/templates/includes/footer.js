module.exports = function(data) {
  "use strict";
  return (function() {
    var about, blog, help, hiring, legal, opensource, platforms, status, support, __root;
    __root = require('jadelet')(this);
    about = "https://glitch.com/about";
    blog = "https://medium.com/glitch";
    help = "https://glitch.com/faq";
    status = "http://status.glitch.com/";
    support = "https://support.glitch.com";
    legal = "https://glitch.com/legal";
    platforms = "https://glitch.com/forteams";
    opensource = "https://glitch.com/foropensource";
    hiring = "https://www.fogcreek.com/jobs/GlitchDesignEngineer";
    __root.buffer(__root.element("footer", this, {
      "role": "contentinfo"
    }, function(__root) {
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": about,
          "data-track": "footer → about"
        }, function(__root) {
          __root.buffer("About Glitch 🔮\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": blog,
          "data-track": "footer → blog"
        }, function(__root) {
          __root.buffer("Blog 📰\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": help,
          "data-track": "footer → faq"
        }, function(__root) {
          __root.buffer("FAQ ☂️\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": status,
          "data-track": "footer → system status"
        }, function(__root) {
          __root.buffer("System Status 🚥\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": support,
          "data-track": "footer → support forum"
        }, function(__root) {
          __root.buffer("Support Forum 🚑\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": legal,
          "data-track": "footer → legal stuff"
        }, function(__root) {
          __root.buffer("Legal Stuff 👮‍\n");
        }));
      }));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": hiring,
          "data-track": "footer → hiring"
        }, function(__root) {
          __root.buffer("Pssst... we're hiring a Design Engineer! 🙋‍\n");
        }));
      }));
      __root.buffer(__root.element("hr", this, {}, function(__root) {}));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer(__root.element("a", this, {
          "href": platforms,
          "data-track": "footer → platforms"
        }, function(__root) {
          __root.buffer(__root.element("img", this, {
            "class": ["for-platforms-icon"],
            "src": "https://cdn.glitch.com/be1ad2d2-68ab-404a-82f4-6d8e98d28d93%2Ffor-platforms-icon.svg?1506442305188"
          }, function(__root) {}));
          __root.buffer(__root.element("span", this, {
            "class": ["for-platforms-text"]
          }, function(__root) {
            __root.buffer("Glitch for Teams\n");
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
