module.exports = function(data) {
  "use strict";
  return (function() {
    var Loader, defaultAvatar, showIcon, __root;
    __root = require('jadelet')(this);
    Loader = require("../includes/loader");
    showIcon = "https://cdn.gomix.com/6ce807b5-7214-49d7-aadd-f11803bc35fd%2Fshow-app.svg";
    defaultAvatar = "https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fglitch-team-avatar.svg";
    __root.buffer(__root.element("div", this, {
      "class": ["overlay-background", this.hiddenUnlessOverlayProjectVisible],
      "click": this.hideOverlay
    }, function(__root) {
      __root.buffer(__root.element("dialog", this, {
        "class": ["overlay", "project-overlay"],
        "click": this.stopPropagation,
        "tabindex": "-1"
      }, function(__root) {
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-info"]
        }, function(__root) {
          __root.buffer(__root.element("img", this, {
            "class": ["avatar", this.hiddenIfProjectNotFound],
            "src": this.projectAvatar
          }, function(__root) {}));
          __root.buffer(__root.element("div", this, {
            "class": ["overlay-title"]
          }, function(__root) {
            __root.buffer(this.projectDomain);
          }));
        }));
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-actions", "has-buttons", this.hiddenIfCurrentUserInProject, this.hiddenIfProjectNotFound]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "show-app-link"],
            "href": this.showLink
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button", "show-app"]
            }, function(__root) {
              __root.buffer(__root.element("img", this, {
                "src": showIcon
              }, function(__root) {}));
              __root.buffer(__root.element("span", this, {}, function(__root) {
                __root.buffer("Preview\n");
              }));
            }));
          }));
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "project-link"],
            "href": this.editorLink
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button"]
            }, function(__root) {
              __root.buffer("View Source\n");
            }));
          }));
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "remix-link"],
            "href": this.remixLink,
            "onclick": this.trackRemix
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button", "button-cta"]
            }, function(__root) {
              __root.buffer("Remix your own\n");
              __root.buffer(__root.element("span", this, {
                "class": ["emoji", "microphone"]
              }, function(__root) {}));
            }));
          }));
        }));
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-actions", "has-buttons", "editor-actions", this.hiddenUnlessCurrentUserInProject]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "show-app-link"],
            "href": this.showLink
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button", "show-app"]
            }, function(__root) {
              __root.buffer(__root.element("img", this, {
                "src": showIcon
              }, function(__root) {}));
              __root.buffer(__root.element("span", this, {}, function(__root) {
                __root.buffer("Preview\n");
              }));
            }));
          }));
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "project-link"],
            "href": this.editorLink
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button", "button-cta"]
            }, function(__root) {
              __root.buffer("Edit Project\n");
            }));
          }));
          __root.buffer(__root.element("a", this, {
            "class": ["button-link", "remix-link"],
            "href": this.remixLink,
            "onclick": this.trackRemix
          }, function(__root) {
            __root.buffer(__root.element("div", this, {
              "class": ["button"]
            }, function(__root) {
              __root.buffer("Remix This\n");
              __root.buffer(__root.element("span", this, {
                "class": ["emoji", "microphone"]
              }, function(__root) {}));
            }));
          }));
        }));
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-actions", "markdown-container", this.warningIfProjectNotFound]
        }, function(__root) {
          __root.buffer(this.UsersList);
          __root.buffer(__root.element("div", this, {
            "class": ["markdown-content"]
          }, function(__root) {
            __root.buffer(this.overlayReadme);
            __root.buffer(__root.element("span", this, {
              "class": [this.hiddenUnlessProjectNotFound]
            }, function(__root) {
              __root.buffer(__root.element("h1", this, {}, function(__root) {
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("" + (this.projectDomain()) + " ");
                }));
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("couldn't be found\n");
                }));
              }));
              __root.buffer(__root.element("p", this, {}, function(__root) {
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("It might've been renamed or removed. If you can't find it let us know on the\n");
                  __root.buffer(__root.element("a", this, {
                    "href": "https://support.glitch.com"
                  }, function(__root) {
                    __root.buffer("support forum\n");
                  }));
                  __root.buffer(__root.element("span", this, {}, function(__root) {
                    __root.buffer(".\n");
                  }));
                }));
              }));
            }));
            __root.buffer(__root.element("span", this, {
              "class": [this.hiddenUnlessReadmeNotFound, this.hiddenIfProjectNotFound]
            }, function(__root) {
              __root.buffer(__root.element("h1", this, {}, function(__root) {
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("This is\n");
                }));
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer(" " + (this.projectDomain()));
                }));
              }));
              __root.buffer(__root.element("p", this, {}, function(__root) {
                __root.buffer(__root.element("span", this, {}, function(__root) {
                  __root.buffer("This project would even better with a\n");
                }));
                __root.buffer(__root.element("code", this, {}, function(__root) {
                  __root.buffer("README.md\n");
                }));
              }));
            }));
          }));
          __root.buffer(__root.element("span", this, {
            "class": [this.hiddenIfOverlayReadmeLoaded]
          }, function(__root) {
            __root.buffer(Loader(this));
          }));
        }));
        __root.buffer(__root.element("section", this, {
          "class": ["pop-over-info", "last-section"]
        }, function(__root) {
          __root.buffer(__root.element("a", this, {
            "class": ["thoughts-link"],
            "href": this.projectThoughtsMailto
          }, function(__root) {
            __root.buffer(__root.element("button", this, {
              "class": ["button-small", "thoughts"]
            }, function(__root) {
              __root.buffer("What do you think?\n");
            }));
          }));
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
