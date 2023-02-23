/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/langSwitcher.js":
/*!*******************************************!*\
  !*** ./src/js/components/langSwitcher.js ***!
  \*******************************************/
/***/ (() => {

const rus = document.getElementById('rus');
const eng = document.getElementById('eng');
const ukr = document.getElementById('ukr');
const langSwitcher = document.querySelector('.js-nav__lang');
const languages = document.querySelectorAll('.js-nav__lang--country');
rus.addEventListener('click', () => {
  rus.dataset.country = "1";
  eng.dataset.country = "2";
  ukr.dataset.country = "3";
});
eng.addEventListener('click', () => {
  eng.dataset.country = "1";
  rus.dataset.country = "2";
  ukr.dataset.country = "3";
});
ukr.addEventListener('click', () => {
  if (rus.dataset.country = "1") {
    ukr.dataset.country = "2";
    eng.dataset.country = "3";
    setTimeout(() => {
      ukr.dataset.country = "1";
      rus.dataset.country = "2";
    }, 100);
  } else {
    ukr.dataset.country = "2";
    rus.dataset.country = "3";
    setTimeout(() => {
      ukr.dataset.country = "1";
      eng.dataset.country = "2";
    }, 100);
  }

  // ukr.dataset.country = "1"
  // rus.dataset.country = "2"
  // eng.dataset.country = "3"
});

/***/ }),

/***/ "./src/js/translation.js":
/*!*******************************!*\
  !*** ./src/js/translation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/i18next.min */ "./src/js/vendor/i18next.min.js");
/* harmony import */ var _vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0__);

let lang = navigator.language || navigator.userLanguage;
let translationEn = {
  "translate1": "Главн=sdfая"
};
let translationRu = {
  "translate1": "Главная"
};
const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};
_vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0___default().init({
  resources
});
function changeToEng() {
  lang = 'eng';
  document.getElementById('translate1').innerHTML = _vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0___default().t(translationEn.translate1);
}
function changeToRu() {
  lang = 'rus';
  document.getElementById('translate1').innerHTML = _vendor_i18next_min__WEBPACK_IMPORTED_MODULE_0___default().t(translationRu.translate1);
}
document.getElementById('rus').addEventListener('click', () => changeToRu());
document.getElementById('eng').addEventListener('click', () => changeToEng());

// window.addEventListener('DOMContentLoaded', () => {
//     if ((lang === 'ru-RU') || (lang === 'kk') || (lang === 'uk') || (lang === 'ru')) {
//         lang = 'rus'
//     } else {
//         lang = 'eng'
//         changeToEng()
//     }
// })

/***/ }),

/***/ "./src/js/vendor/i18next.min.js":
/*!**************************************!*\
  !*** ./src/js/vendor/i18next.min.js ***!
  \**************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
  }
  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function n(t) {
    var n = function (t, n) {
      if ("object" !== e(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(t, n || "default");
        if ("object" !== e(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(n) ? n : String(n);
  }
  function r(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, n(o.key), o);
    }
  }
  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function i(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function a(e, t) {
    return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  function s(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && a(e, t);
  }
  function u(t, n) {
    if (n && ("object" === e(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return i(t);
  }
  function c(e) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function l(e, t, r) {
    return (t = n(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var g = {
      type: "logger",
      log: function (e) {
        this.output("log", e);
      },
      warn: function (e) {
        this.output("warn", e);
      },
      error: function (e) {
        this.output("error", e);
      },
      output: function (e, t) {
        console && console[e] && console[e].apply(console, t);
      }
    },
    h = new (function () {
      function e(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t(this, e), this.init(n, r);
      }
      return o(e, [{
        key: "init",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.prefix = t.prefix || "i18next:", this.logger = e || g, this.options = t, this.debug = t.debug;
        }
      }, {
        key: "setDebug",
        value: function (e) {
          this.debug = e;
        }
      }, {
        key: "log",
        value: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
      }, {
        key: "warn",
        value: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
      }, {
        key: "error",
        value: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
      }, {
        key: "deprecate",
        value: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
      }, {
        key: "forward",
        value: function (e, t, n, r) {
          return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
        }
      }, {
        key: "create",
        value: function (t) {
          return new e(this.logger, p(p({}, {
            prefix: "".concat(this.prefix, ":").concat(t, ":")
          }), this.options));
        }
      }, {
        key: "clone",
        value: function (t) {
          return (t = t || this.options).prefix = t.prefix || this.prefix, new e(this.logger, t);
        }
      }]), e;
    }())(),
    d = function () {
      function e() {
        t(this, e), this.observers = {};
      }
      return o(e, [{
        key: "on",
        value: function (e, t) {
          var n = this;
          return e.split(" ").forEach(function (e) {
            n.observers[e] = n.observers[e] || [], n.observers[e].push(t);
          }), this;
        }
      }, {
        key: "off",
        value: function (e, t) {
          this.observers[e] && (t ? this.observers[e] = this.observers[e].filter(function (e) {
            return e !== t;
          }) : delete this.observers[e]);
        }
      }, {
        key: "emit",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          if (this.observers[e]) {
            var o = [].concat(this.observers[e]);
            o.forEach(function (e) {
              e.apply(void 0, n);
            });
          }
          if (this.observers["*"]) {
            var i = [].concat(this.observers["*"]);
            i.forEach(function (t) {
              t.apply(t, [e].concat(n));
            });
          }
        }
      }]), e;
    }();
  function v() {
    var e,
      t,
      n = new Promise(function (n, r) {
        e = n, t = r;
      });
    return n.resolve = e, n.reject = t, n;
  }
  function y(e) {
    return null == e ? "" : "" + e;
  }
  function m(e, t, n) {
    e.forEach(function (e) {
      t[e] && (n[e] = t[e]);
    });
  }
  function b(e, t, n) {
    function r(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
    }
    function o() {
      return !e || "string" == typeof e;
    }
    for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
      if (o()) return {};
      var a = r(i.shift());
      !e[a] && n && (e[a] = new n()), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {};
    }
    return o() ? {} : {
      obj: e,
      k: r(i.shift())
    };
  }
  function O(e, t, n) {
    var r = b(e, t, Object);
    r.obj[r.k] = n;
  }
  function k(e, t) {
    var n = b(e, t),
      r = n.obj,
      o = n.k;
    if (r) return r[o];
  }
  function w(e, t, n) {
    var r = k(e, n);
    return void 0 !== r ? r : k(t, n);
  }
  function x(e, t, n) {
    for (var r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : x(e[r], t[r], n) : e[r] = t[r]);
    return e;
  }
  function S(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var j = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  function P(e) {
    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function (e) {
      return j[e];
    }) : e;
  }
  var L = "undefined" != typeof window && window.navigator && void 0 === window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
    R = [" ", ",", "?", "!", ";"];
  function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? N(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function E(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = c(e);
      if (t) {
        var o = c(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  function D(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
    if (e) {
      if (e[t]) return e[t];
      for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
        if (!o) return;
        if ("string" == typeof o[r[i]] && i + 1 < r.length) return;
        if (void 0 === o[r[i]]) {
          for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a;) a++, u = o[s = r.slice(i, i + a).join(n)];
          if (void 0 === u) return;
          if (null === u) return null;
          if (t.endsWith(s)) {
            if ("string" == typeof u) return u;
            if (s && "string" == typeof u[s]) return u[s];
          }
          var c = r.slice(i + a).join(n);
          return c ? D(u, c, n) : void 0;
        }
        o = o[r[i]];
      }
      return o;
    }
  }
  var F = function (e) {
      s(r, e);
      var n = E(r);
      function r(e) {
        var o,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
          };
        return t(this, r), o = n.call(this), L && d.call(i(o)), o.data = e || {}, o.options = a, void 0 === o.options.keySeparator && (o.options.keySeparator = "."), void 0 === o.options.ignoreJSONStructure && (o.options.ignoreJSONStructure = !0), o;
      }
      return o(r, [{
        key: "addNamespaces",
        value: function (e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        }
      }, {
        key: "removeNamespaces",
        value: function (e) {
          var t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
      }, {
        key: "getResource",
        value: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
            i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
            a = [e, t];
          n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."));
          var s = k(this.data, a);
          return s || !i || "string" != typeof n ? s : D(this.data && this.data[e] && this.data[e][t], n, o);
        }
      }, {
        key: "addResource",
        value: function (e, t, n, r) {
          var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
              silent: !1
            },
            i = this.options.keySeparator;
          void 0 === i && (i = ".");
          var a = [e, t];
          n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = t, t = (a = e.split("."))[1]), this.addNamespaces(t), O(this.data, a, r), o.silent || this.emit("added", e, t, n, r);
        }
      }, {
        key: "addResources",
        value: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            silent: !1
          };
          for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
            silent: !0
          });
          r.silent || this.emit("added", e, t, n);
        }
      }, {
        key: "addResourceBundle",
        value: function (e, t, n, r, o) {
          var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
              silent: !1
            },
            a = [e, t];
          e.indexOf(".") > -1 && (r = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
          var s = k(this.data, a) || {};
          r ? x(s, n, o) : s = C(C({}, s), n), O(this.data, a, s), i.silent || this.emit("added", e, t, n);
        }
      }, {
        key: "removeResourceBundle",
        value: function (e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
        }
      }, {
        key: "hasResourceBundle",
        value: function (e, t) {
          return void 0 !== this.getResource(e, t);
        }
      }, {
        key: "getResourceBundle",
        value: function (e, t) {
          return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? C(C({}, {}), this.getResource(e, t)) : this.getResource(e, t);
        }
      }, {
        key: "getDataByLanguage",
        value: function (e) {
          return this.data[e];
        }
      }, {
        key: "hasLanguageSomeTranslations",
        value: function (e) {
          var t = this.getDataByLanguage(e);
          return !!(t && Object.keys(t) || []).find(function (e) {
            return t[e] && Object.keys(t[e]).length > 0;
          });
        }
      }, {
        key: "toJSON",
        value: function () {
          return this.data;
        }
      }]), r;
    }(d),
    I = {
      processors: {},
      addPostProcessor: function (e) {
        this.processors[e.name] = e;
      },
      handle: function (e, t, n, r, o) {
        var i = this;
        return e.forEach(function (e) {
          i.processors[e] && (t = i.processors[e].process(t, n, r, o));
        }), t;
      }
    };
  function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function V(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = c(e);
      if (t) {
        var o = c(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  var U = {},
    K = function (n) {
      s(a, n);
      var r = V(a);
      function a(e) {
        var n,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t(this, a), n = r.call(this), L && d.call(i(n)), m(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, i(n)), n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = h.create("translator"), n;
      }
      return o(a, [{
        key: "changeLanguage",
        value: function (e) {
          e && (this.language = e);
        }
      }, {
        key: "exists",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            interpolation: {}
          };
          if (null == e) return !1;
          var n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
      }, {
        key: "extractFromKey",
        value: function (e, t) {
          var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
            o = t.ns || this.options.defaultNS || [],
            i = n && e.indexOf(n) > -1,
            a = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function (e, t, n) {
              t = t || "", n = n || "";
              var r = R.filter(function (e) {
                return t.indexOf(e) < 0 && n.indexOf(e) < 0;
              });
              if (0 === r.length) return !0;
              var o = new RegExp("(".concat(r.map(function (e) {
                  return "?" === e ? "\\?" : e;
                }).join("|"), ")")),
                i = !o.test(e);
              if (!i) {
                var a = e.indexOf(n);
                a > 0 && !o.test(e.substring(0, a)) && (i = !0);
              }
              return i;
            }(e, n, r));
          if (i && !a) {
            var s = e.match(this.interpolator.nestingRegexp);
            if (s && s.length > 0) return {
              key: e,
              namespaces: o
            };
            var u = e.split(n);
            (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), e = u.join(r);
          }
          return "string" == typeof o && (o = [o]), {
            key: e,
            namespaces: o
          };
        }
      }, {
        key: "translate",
        value: function (t, n, r) {
          var o = this;
          if ("object" !== e(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == t) return "";
          Array.isArray(t) || (t = [String(t)]);
          var i = void 0 !== n.returnDetails ? n.returnDetails : this.options.returnDetails,
            s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
            u = this.extractFromKey(t[t.length - 1], n),
            c = u.key,
            l = u.namespaces,
            f = l[l.length - 1],
            p = n.lng || this.language,
            g = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (p && "cimode" === p.toLowerCase()) {
            if (g) {
              var h = n.nsSeparator || this.options.nsSeparator;
              return i ? {
                res: "".concat(f).concat(h).concat(c),
                usedKey: c,
                exactUsedKey: c,
                usedLng: p,
                usedNS: f
              } : "".concat(f).concat(h).concat(c);
            }
            return i ? {
              res: c,
              usedKey: c,
              exactUsedKey: c,
              usedLng: p,
              usedNS: f
            } : c;
          }
          var d = this.resolve(t, n),
            v = d && d.res,
            y = d && d.usedKey || c,
            m = d && d.exactUsedKey || c,
            b = Object.prototype.toString.apply(v),
            O = ["[object Number]", "[object Function]", "[object RegExp]"],
            k = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
            w = !this.i18nFormat || this.i18nFormat.handleAsObject,
            x = "string" != typeof v && "boolean" != typeof v && "number" != typeof v;
          if (w && v && x && O.indexOf(b) < 0 && ("string" != typeof k || "[object Array]" !== b)) {
            if (!n.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              var S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, v, T(T({}, n), {}, {
                ns: l
              })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
              return i ? (d.res = S, d) : S;
            }
            if (s) {
              var j = "[object Array]" === b,
                P = j ? [] : {},
                L = j ? m : y;
              for (var R in v) if (Object.prototype.hasOwnProperty.call(v, R)) {
                var N = "".concat(L).concat(s).concat(R);
                P[R] = this.translate(N, T(T({}, n), {
                  joinArrays: !1,
                  ns: l
                })), P[R] === N && (P[R] = v[R]);
              }
              v = P;
            }
          } else if (w && "string" == typeof k && "[object Array]" === b) (v = v.join(k)) && (v = this.extendTranslation(v, t, n, r));else {
            var C = !1,
              E = !1,
              D = void 0 !== n.count && "string" != typeof n.count,
              F = a.hasDefaultValue(n),
              I = D ? this.pluralResolver.getSuffix(p, n.count, n) : "",
              A = n["defaultValue".concat(I)] || n.defaultValue;
            !this.isValidLookup(v) && F && (C = !0, v = A), this.isValidLookup(v) || (E = !0, v = c);
            var V = n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
              U = V && E ? void 0 : v,
              K = F && A !== v && this.options.updateMissing;
            if (E || C || K) {
              if (this.logger.log(K ? "updateKey" : "missingKey", p, f, c, K ? A : v), s) {
                var B = this.resolve(c, T(T({}, n), {}, {
                  keySeparator: !1
                }));
                B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var M = [],
                H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
              if ("fallback" === this.options.saveMissingTo && H && H[0]) for (var z = 0; z < H.length; z++) M.push(H[z]);else "all" === this.options.saveMissingTo ? M = this.languageUtils.toResolveHierarchy(n.lng || this.language) : M.push(n.lng || this.language);
              var J = function (e, t, r) {
                var i = F && r !== v ? r : U;
                o.options.missingKeyHandler ? o.options.missingKeyHandler(e, f, t, i, K, n) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, f, t, i, K, n), o.emit("missingKey", e, f, t, v);
              };
              this.options.saveMissing && (this.options.saveMissingPlurals && D ? M.forEach(function (e) {
                o.pluralResolver.getSuffixes(e, n).forEach(function (t) {
                  J([e], c + t, n["defaultValue".concat(t)] || A);
                });
              }) : J(M, c, A));
            }
            v = this.extendTranslation(v, t, n, d, r), E && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(f, ":").concat(c)), (E || C) && this.options.parseMissingKeyHandler && (v = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(f, ":").concat(c) : c, C ? v : void 0) : this.options.parseMissingKeyHandler(v));
          }
          return i ? (d.res = v, d) : v;
        }
      }, {
        key: "extendTranslation",
        value: function (e, t, n, r, o) {
          var i = this;
          if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, T(T({}, this.options.interpolation.defaultVariables), n), r.usedLng, r.usedNS, r.usedKey, {
            resolved: r
          });else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init(T(T({}, n), {
              interpolation: T(T({}, this.options.interpolation), n.interpolation)
            }));
            var a,
              s = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            if (s) {
              var u = e.match(this.interpolator.nestingRegexp);
              a = u && u.length;
            }
            var c = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (c = T(T({}, this.options.interpolation.defaultVariables), c)), e = this.interpolator.interpolate(e, c, n.lng || this.language, n), s) {
              var l = e.match(this.interpolator.nestingRegexp);
              a < (l && l.length) && (n.nest = !1);
            }
            !1 !== n.nest && (e = this.interpolator.nest(e, function () {
              for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
              return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, r.concat([t]));
            }, n)), n.interpolation && this.interpolator.reset();
          }
          var f = n.postProcess || this.options.postProcess,
            p = "string" == typeof f ? [f] : f;
          return null != e && p && p.length && !1 !== n.applyPostProcessor && (e = I.handle(p, e, t, this.options && this.options.postProcessPassResolved ? T({
            i18nResolved: r
          }, n) : n, this)), e;
        }
      }, {
        key: "resolve",
        value: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a = this,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e && (e = [e]), e.forEach(function (e) {
            if (!a.isValidLookup(t)) {
              var u = a.extractFromKey(e, s),
                c = u.key;
              n = c;
              var l = u.namespaces;
              a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
              var f = void 0 !== s.count && "string" != typeof s.count,
                p = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi(),
                g = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
              l.forEach(function (e) {
                a.isValidLookup(t) || (i = e, !U["".concat(h[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (U["".concat(h[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach(function (n) {
                  if (!a.isValidLookup(t)) {
                    o = n;
                    var i,
                      u = [c];
                    if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(u, c, n, e, s);else {
                      var l;
                      f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                      var h = "".concat(a.options.pluralSeparator, "zero");
                      if (f && (u.push(c + l), p && u.push(c + h)), g) {
                        var d = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                        u.push(d), f && (u.push(d + l), p && u.push(d + h));
                      }
                    }
                    for (; i = u.pop();) a.isValidLookup(t) || (r = i, t = a.getResource(n, e, i, s));
                  }
                }));
              });
            }
          }), {
            res: t,
            usedKey: n,
            exactUsedKey: r,
            usedLng: o,
            usedNS: i
          };
        }
      }, {
        key: "isValidLookup",
        value: function (e) {
          return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e);
        }
      }, {
        key: "getResource",
        value: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
        }
      }], [{
        key: "hasDefaultValue",
        value: function (e) {
          for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && "defaultValue" === t.substring(0, "defaultValue".length) && void 0 !== e[t]) return !0;
          return !1;
        }
      }]), a;
    }(d);
  function B(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var M = function () {
      function e(n) {
        t(this, e), this.options = n, this.supportedLngs = this.options.supportedLngs || !1, this.logger = h.create("languageUtils");
      }
      return o(e, [{
        key: "getScriptPartFromCode",
        value: function (e) {
          if (!e || e.indexOf("-") < 0) return null;
          var t = e.split("-");
          return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
        }
      }, {
        key: "getLanguagePartFromCode",
        value: function (e) {
          if (!e || e.indexOf("-") < 0) return e;
          var t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
      }, {
        key: "formatLanguageCode",
        value: function (e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return this.options.lowerCaseLng ? n = n.map(function (e) {
              return e.toLowerCase();
            }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = B(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = B(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = B(n[2].toLowerCase()))), n.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
        }
      }, {
        key: "isSupportedCode",
        value: function (e) {
          return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
        }
      }, {
        key: "getBestMatchFromCodes",
        value: function (e) {
          var t,
            n = this;
          return e ? (e.forEach(function (e) {
            if (!t) {
              var r = n.formatLanguageCode(e);
              n.options.supportedLngs && !n.isSupportedCode(r) || (t = r);
            }
          }), !t && this.options.supportedLngs && e.forEach(function (e) {
            if (!t) {
              var r = n.getLanguagePartFromCode(e);
              if (n.isSupportedCode(r)) return t = r;
              t = n.options.supportedLngs.find(function (e) {
                if (0 === e.indexOf(r)) return e;
              });
            }
          }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null;
        }
      }, {
        key: "getFallbackCodes",
        value: function (e, t) {
          if (!e) return [];
          if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
          if (!t) return e.default || [];
          var n = e[t];
          return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
        }
      }, {
        key: "toResolveHierarchy",
        value: function (e, t) {
          var n = this,
            r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            o = [],
            i = function (e) {
              e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
            };
          return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" == typeof e && i(this.formatLanguageCode(e)), r.forEach(function (e) {
            o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
          }), o;
        }
      }]), e;
    }(),
    H = [{
      lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
      nr: [1, 2],
      fc: 1
    }, {
      lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
      nr: [1, 2],
      fc: 2
    }, {
      lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
      nr: [1],
      fc: 3
    }, {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4
    }, {
      lngs: ["ar"],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
    }, {
      lngs: ["cs", "sk"],
      nr: [1, 2, 5],
      fc: 6
    }, {
      lngs: ["csb", "pl"],
      nr: [1, 2, 5],
      fc: 7
    }, {
      lngs: ["cy"],
      nr: [1, 2, 3, 8],
      fc: 8
    }, {
      lngs: ["fr"],
      nr: [1, 2],
      fc: 9
    }, {
      lngs: ["ga"],
      nr: [1, 2, 3, 7, 11],
      fc: 10
    }, {
      lngs: ["gd"],
      nr: [1, 2, 3, 20],
      fc: 11
    }, {
      lngs: ["is"],
      nr: [1, 2],
      fc: 12
    }, {
      lngs: ["jv"],
      nr: [0, 1],
      fc: 13
    }, {
      lngs: ["kw"],
      nr: [1, 2, 3, 4],
      fc: 14
    }, {
      lngs: ["lt"],
      nr: [1, 2, 10],
      fc: 15
    }, {
      lngs: ["lv"],
      nr: [1, 2, 0],
      fc: 16
    }, {
      lngs: ["mk"],
      nr: [1, 2],
      fc: 17
    }, {
      lngs: ["mnk"],
      nr: [0, 1, 2],
      fc: 18
    }, {
      lngs: ["mt"],
      nr: [1, 2, 11, 20],
      fc: 19
    }, {
      lngs: ["or"],
      nr: [2, 1],
      fc: 2
    }, {
      lngs: ["ro"],
      nr: [1, 2, 20],
      fc: 20
    }, {
      lngs: ["sl"],
      nr: [5, 1, 2, 3],
      fc: 21
    }, {
      lngs: ["he", "iw"],
      nr: [1, 2, 20, 21],
      fc: 22
    }],
    z = {
      1: function (e) {
        return Number(e > 1);
      },
      2: function (e) {
        return Number(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
      },
      5: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
      },
      6: function (e) {
        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
      },
      7: function (e) {
        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
      },
      8: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
      },
      9: function (e) {
        return Number(e >= 2);
      },
      10: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11: function (e) {
        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
      },
      12: function (e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return Number(0 !== e);
      },
      14: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
      },
      15: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
      },
      16: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
      },
      17: function (e) {
        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1);
      },
      18: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
      },
      19: function (e) {
        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
      },
      20: function (e) {
        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2);
      },
      21: function (e) {
        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
      },
      22: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
      }
    },
    J = ["v1", "v2", "v3"],
    _ = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
  function q() {
    var e = {};
    return H.forEach(function (t) {
      t.lngs.forEach(function (n) {
        e[n] = {
          numbers: t.nr,
          plurals: z[t.fc]
        };
      });
    }), e;
  }
  var $ = function () {
    function e(n) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t(this, e), this.languageUtils = n, this.options = r, this.logger = h.create("pluralResolver"), this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = q();
    }
    return o(e, [{
      key: "addRule",
      value: function (e, t) {
        this.rules[e] = t;
      }
    }, {
      key: "getRule",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.shouldUseIntlApi()) try {
          return new Intl.PluralRules(e, {
            type: t.ordinal ? "ordinal" : "cardinal"
          });
        } catch (e) {
          return;
        }
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
      }
    }, {
      key: "needsPlural",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this.getRule(e, t);
        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return this.getSuffixes(e, n).map(function (e) {
          return "".concat(t).concat(e);
        });
      }
    }, {
      key: "getSuffixes",
      value: function (e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = this.getRule(e, n);
        return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort(function (e, t) {
          return _[e] - _[t];
        }).map(function (e) {
          return "".concat(t.options.prepend).concat(e);
        }) : r.numbers.map(function (r) {
          return t.getSuffix(e, r, n);
        }) : [];
      }
    }, {
      key: "getSuffix",
      value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = this.getRule(e, n);
        return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t) : (this.logger.warn("no plural rule found for: ".concat(e)), "");
      }
    }, {
      key: "getSuffixRetroCompatible",
      value: function (e, t) {
        var n = this,
          r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
          o = e.numbers[r];
        this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
        var i = function () {
          return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
        };
        return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
      }
    }, {
      key: "shouldUseIntlApi",
      value: function () {
        return !J.includes(this.options.compatibilityJSON);
      }
    }]), e;
  }();
  function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? W(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var G = function () {
    function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.logger = h.create("interpolator"), this.options = n, this.format = n.interpolation && n.interpolation.format || function (e) {
        return e;
      }, this.init(n);
    }
    return o(e, [{
      key: "init",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.interpolation || (e.interpolation = {
          escapeValue: !0
        });
        var t = e.interpolation;
        this.escape = void 0 !== t.escape ? t.escape : P, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? S(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? S(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? S(t.nestingPrefix) : t.nestingPrefixEscaped || S("$t("), this.nestingSuffix = t.nestingSuffix ? S(t.nestingSuffix) : t.nestingSuffixEscaped || S(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function () {
        this.options && this.init(this.options);
      }
    }, {
      key: "resetRegExp",
      value: function () {
        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = new RegExp(e, "g");
        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        this.regexpUnescape = new RegExp(t, "g");
        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        this.nestingRegexp = new RegExp(n, "g");
      }
    }, {
      key: "interpolate",
      value: function (e, t, n, r) {
        var o,
          i,
          a,
          s = this,
          u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function c(e) {
          return e.replace(/\$/g, "$$$$");
        }
        var l = function (e) {
          if (e.indexOf(s.formatSeparator) < 0) {
            var o = w(t, u, e);
            return s.alwaysFormat ? s.format(o, void 0, n, Y(Y(Y({}, r), t), {}, {
              interpolationkey: e
            })) : o;
          }
          var i = e.split(s.formatSeparator),
            a = i.shift().trim(),
            c = i.join(s.formatSeparator).trim();
          return s.format(w(t, u, a), c, n, Y(Y(Y({}, r), t), {}, {
            interpolationkey: a
          }));
        };
        this.resetRegExp();
        var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
          p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
          regex: this.regexpUnescape,
          safeValue: function (e) {
            return c(e);
          }
        }, {
          regex: this.regexp,
          safeValue: function (e) {
            return s.escapeValue ? c(s.escape(e)) : c(e);
          }
        }].forEach(function (t) {
          for (a = 0; o = t.regex.exec(e);) {
            var n = o[1].trim();
            if (void 0 === (i = l(n))) {
              if ("function" == typeof f) {
                var u = f(e, o, r);
                i = "string" == typeof u ? u : "";
              } else if (r && Object.prototype.hasOwnProperty.call(r, n)) i = "";else {
                if (p) {
                  i = o[0];
                  continue;
                }
                s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)), i = "";
              }
            } else "string" == typeof i || s.useRawValueToEscape || (i = y(i));
            var c = t.safeValue(i);
            if (e = e.replace(o[0], c), p ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, ++a >= s.maxReplaces) break;
          }
        }), e;
      }
    }, {
      key: "nest",
      value: function (e, t) {
        var n,
          r,
          o,
          i = this,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        function s(e, t) {
          var n = this.nestingOptionsSeparator;
          if (e.indexOf(n) < 0) return e;
          var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
            i = "{".concat(r[1]);
          e = r[0];
          var a = (i = this.interpolate(i, o)).match(/'/g),
            s = i.match(/"/g);
          (a && a.length % 2 == 0 && !s || s.length % 2 != 0) && (i = i.replace(/'/g, '"'));
          try {
            o = JSON.parse(i), t && (o = Y(Y({}, t), o));
          } catch (t) {
            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(i);
          }
          return delete o.defaultValue, e;
        }
        for (; n = this.nestingRegexp.exec(e);) {
          var u = [];
          (o = (o = Y({}, a)).replace && "string" != typeof o.replace ? o.replace : o).applyPostProcessor = !1, delete o.defaultValue;
          var c = !1;
          if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
            var l = n[1].split(this.formatSeparator).map(function (e) {
              return e.trim();
            });
            n[1] = l.shift(), u = l, c = !0;
          }
          if ((r = t(s.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof r) return r;
          "string" != typeof r && (r = y(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), c && (r = u.reduce(function (e, t) {
            return i.format(e, t, a.lng, Y(Y({}, a), {}, {
              interpolationkey: n[1].trim()
            }));
          }, r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0;
        }
        return e;
      }
    }]), e;
  }();
  function Q(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function X(e) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return Q(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Z(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function te(e) {
    var t = e.toLowerCase().trim(),
      n = {};
    if (e.indexOf("(") > -1) {
      var r = e.split("(");
      t = r[0].toLowerCase().trim();
      var o = r[1].substring(0, r[1].length - 1);
      if ("currency" === t && o.indexOf(":") < 0) n.currency || (n.currency = o.trim());else if ("relativetime" === t && o.indexOf(":") < 0) n.range || (n.range = o.trim());else {
        o.split(";").forEach(function (e) {
          if (e) {
            var t = X(e.split(":")),
              r = t[0],
              o = t.slice(1).join(":").trim().replace(/^'+|'+$/g, "");
            n[r.trim()] || (n[r.trim()] = o), "false" === o && (n[r.trim()] = !1), "true" === o && (n[r.trim()] = !0), isNaN(o) || (n[r.trim()] = parseInt(o, 10));
          }
        });
      }
    }
    return {
      formatName: t,
      formatOptions: n
    };
  }
  function ne(e) {
    var t = {};
    return function (n, r, o) {
      var i = r + JSON.stringify(o),
        a = t[i];
      return a || (a = e(r, o), t[i] = a), a(n);
    };
  }
  var re = function () {
    function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.logger = h.create("formatter"), this.options = n, this.formats = {
        number: ne(function (e, t) {
          var n = new Intl.NumberFormat(e, ee({}, t));
          return function (e) {
            return n.format(e);
          };
        }),
        currency: ne(function (e, t) {
          var n = new Intl.NumberFormat(e, ee(ee({}, t), {}, {
            style: "currency"
          }));
          return function (e) {
            return n.format(e);
          };
        }),
        datetime: ne(function (e, t) {
          var n = new Intl.DateTimeFormat(e, ee({}, t));
          return function (e) {
            return n.format(e);
          };
        }),
        relativetime: ne(function (e, t) {
          var n = new Intl.RelativeTimeFormat(e, ee({}, t));
          return function (e) {
            return n.format(e, t.range || "day");
          };
        }),
        list: ne(function (e, t) {
          var n = new Intl.ListFormat(e, ee({}, t));
          return function (e) {
            return n.format(e);
          };
        })
      }, this.init(n);
    }
    return o(e, [{
      key: "init",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            interpolation: {}
          },
          n = t.interpolation;
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
      }
    }, {
      key: "add",
      value: function (e, t) {
        this.formats[e.toLowerCase().trim()] = t;
      }
    }, {
      key: "addCached",
      value: function (e, t) {
        this.formats[e.toLowerCase().trim()] = ne(t);
      }
    }, {
      key: "format",
      value: function (e, t, n) {
        var r = this,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = t.split(this.formatSeparator),
          a = i.reduce(function (e, t) {
            var i = te(t),
              a = i.formatName,
              s = i.formatOptions;
            if (r.formats[a]) {
              var u = e;
              try {
                var c = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
                  l = c.locale || c.lng || o.locale || o.lng || n;
                u = r.formats[a](e, l, ee(ee(ee({}, s), o), c));
              } catch (e) {
                r.logger.warn(e);
              }
              return u;
            }
            return r.logger.warn("there was no format function for ".concat(a)), e;
          }, e);
        return a;
      }
    }]), e;
  }();
  function oe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? oe(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ae(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = c(e);
      if (t) {
        var o = c(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  var se = function (e) {
    s(r, e);
    var n = ae(r);
    function r(e, o, a) {
      var s,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return t(this, r), s = n.call(this), L && d.call(i(s)), s.backend = e, s.store = o, s.services = a, s.languageUtils = a.languageUtils, s.options = u, s.logger = h.create("backendConnector"), s.waitingReads = [], s.maxParallelReads = u.maxParallelReads || 10, s.readingCalls = 0, s.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5, s.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350, s.state = {}, s.queue = [], s.backend && s.backend.init && s.backend.init(a, u.backend, u), s;
    }
    return o(r, [{
      key: "queueLoad",
      value: function (e, t, n, r) {
        var o = this,
          i = {},
          a = {},
          s = {},
          u = {};
        return e.forEach(function (e) {
          var r = !0;
          t.forEach(function (t) {
            var s = "".concat(e, "|").concat(t);
            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? void 0 === a[s] && (a[s] = !0) : (o.state[s] = 1, r = !1, void 0 === a[s] && (a[s] = !0), void 0 === i[s] && (i[s] = !0), void 0 === u[t] && (u[t] = !0)));
          }), r || (s[e] = !0);
        }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: r
        }), {
          toLoad: Object.keys(i),
          pending: Object.keys(a),
          toLoadLanguages: Object.keys(s),
          toLoadNamespaces: Object.keys(u)
        };
      }
    }, {
      key: "loaded",
      value: function (e, t, n) {
        var r = e.split("|"),
          o = r[0],
          i = r[1];
        t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), this.state[e] = t ? -1 : 2;
        var a = {};
        this.queue.forEach(function (n) {
          var r, s, u, c, l, f;
          r = n.loaded, s = i, c = b(r, [o], Object), l = c.obj, f = c.k, l[f] = l[f] || [], u && (l[f] = l[f].concat(s)), u || l[f].push(s), function (e, t) {
            void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--);
          }(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(function (e) {
            a[e] || (a[e] = {});
            var t = n.loaded[e];
            t.length && t.forEach(function (t) {
              void 0 === a[e][t] && (a[e][t] = !0);
            });
          }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback());
        }), this.emit("loaded", a), this.queue = this.queue.filter(function (e) {
          return !e.done;
        });
      }
    }, {
      key: "read",
      value: function (e, t, n) {
        var r = this,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
          a = arguments.length > 5 ? arguments[5] : void 0;
        if (!e.length) return a(null, {});
        if (this.readingCalls >= this.maxParallelReads) this.waitingReads.push({
          lng: e,
          ns: t,
          fcName: n,
          tried: o,
          wait: i,
          callback: a
        });else {
          this.readingCalls++;
          var s = function (s, u) {
              if (r.readingCalls--, r.waitingReads.length > 0) {
                var c = r.waitingReads.shift();
                r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback);
              }
              s && u && o < r.maxRetries ? setTimeout(function () {
                r.read.call(r, e, t, n, o + 1, 2 * i, a);
              }, i) : a(s, u);
            },
            u = this.backend[n].bind(this.backend);
          if (2 !== u.length) return u(e, t, s);
          try {
            var c = u(e, t);
            c && "function" == typeof c.then ? c.then(function (e) {
              return s(null, e);
            }).catch(s) : s(null, c);
          } catch (e) {
            s(e);
          }
        }
      }
    }, {
      key: "prepareLoading",
      value: function (e, t) {
        var n = this,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
        var i = this.queueLoad(e, t, r, o);
        if (!i.toLoad.length) return i.pending.length || o(), null;
        i.toLoad.forEach(function (e) {
          n.loadOne(e);
        });
      }
    }, {
      key: "load",
      value: function (e, t, n) {
        this.prepareLoading(e, t, {}, n);
      }
    }, {
      key: "reload",
      value: function (e, t, n) {
        this.prepareLoading(e, t, {
          reload: !0
        }, n);
      }
    }, {
      key: "loadOne",
      value: function (e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = e.split("|"),
          o = r[0],
          i = r[1];
        this.read(o, i, "read", void 0, void 0, function (r, a) {
          r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), t.loaded(e, r, a);
        });
      }
    }, {
      key: "saveMissing",
      value: function (e, t, n, r, o) {
        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if (null != n && "" !== n) {
          if (this.backend && this.backend.create) {
            var s = ie(ie({}, i), {}, {
                isUpdate: o
              }),
              u = this.backend.create.bind(this.backend);
            if (u.length < 6) try {
              var c;
              (c = 5 === u.length ? u(e, t, n, r, s) : u(e, t, n, r)) && "function" == typeof c.then ? c.then(function (e) {
                return a(null, e);
              }).catch(a) : a(null, c);
            } catch (e) {
              a(e);
            } else u(e, t, n, r, a, s);
          }
          e && e[0] && this.store.addResource(e[0], t, n, r);
        }
      }
    }]), r;
  }(d);
  function ue() {
    return {
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !0,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function (t) {
        var n = {};
        if ("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3])) {
          var r = t[3] || t[2];
          Object.keys(r).forEach(function (e) {
            n[e] = r[e];
          });
        }
        return n;
      },
      interpolation: {
        escapeValue: !0,
        format: function (e, t, n, r) {
          return e;
        },
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
      }
    };
  }
  function ce(e) {
    return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
  }
  function le(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function fe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? le(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function pe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = c(e);
      if (t) {
        var o = c(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  function ge() {}
  function he(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (t) {
      "function" == typeof e[t] && (e[t] = e[t].bind(e));
    });
  }
  var de = function (n) {
    s(a, n);
    var r = pe(a);
    function a() {
      var e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = arguments.length > 1 ? arguments[1] : void 0;
      if (t(this, a), e = r.call(this), L && d.call(i(e)), e.options = ce(n), e.services = {}, e.logger = h, e.modules = {
        external: []
      }, he(i(e)), o && !e.isInitialized && !n.isClone) {
        if (!e.options.initImmediate) return e.init(n, o), u(e, i(e));
        setTimeout(function () {
          e.init(n, o);
        }, 0);
      }
      return e;
    }
    return o(a, [{
      key: "init",
      value: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        "function" == typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
        var r = ue();
        function o(e) {
          return e ? "function" == typeof e ? new e() : e : null;
        }
        if (this.options = fe(fe(fe({}, r), this.options), ce(t)), "v1" !== this.options.compatibilityAPI && (this.options.interpolation = fe(fe({}, r.interpolation), this.options.interpolation)), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
          var i;
          this.modules.logger ? h.init(o(this.modules.logger), this.options) : h.init(null, this.options), this.modules.formatter ? i = this.modules.formatter : "undefined" != typeof Intl && (i = re);
          var a = new M(this.options);
          this.store = new F(this.options.resources, this.options);
          var s = this.services;
          s.logger = h, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new $(a, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          }), !i || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (s.formatter = o(i), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new G(this.options), s.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          }, s.backendConnector = new se(o(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function (t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            e.emit.apply(e, [t].concat(r));
          }), this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector), s.languageDetector.init && s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new K(this.services, this.options), this.translator.on("*", function (t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            e.emit.apply(e, [t].concat(r));
          }), this.modules.external.forEach(function (t) {
            t.init && t.init(e);
          });
        }
        if (this.format = this.options.interpolation.format, n || (n = ge), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0]);
        }
        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
        var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        c.forEach(function (t) {
          e[t] = function () {
            var n;
            return (n = e.store)[t].apply(n, arguments);
          };
        });
        var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
        l.forEach(function (t) {
          e[t] = function () {
            var n;
            return (n = e.store)[t].apply(n, arguments), e;
          };
        });
        var f = v(),
          p = function () {
            var t = function (t, r) {
              e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), f.resolve(r), n(t, r);
            };
            if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
            e.changeLanguage(e.options.lng, t);
          };
        return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), f;
      }
    }, {
      key: "loadResources",
      value: function (e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge,
          r = n,
          o = "string" == typeof e ? e : this.language;
        if ("function" == typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
          if (o && "cimode" === o.toLowerCase()) return r();
          var i = [],
            a = function (e) {
              e && t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                i.indexOf(e) < 0 && i.push(e);
              });
            };
          if (o) a(o);else {
            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            s.forEach(function (e) {
              return a(e);
            });
          }
          this.options.preload && this.options.preload.forEach(function (e) {
            return a(e);
          }), this.services.backendConnector.load(i, this.options.ns, function (e) {
            e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language), r(e);
          });
        } else r(null);
      }
    }, {
      key: "reloadResources",
      value: function (e, t, n) {
        var r = v();
        return e || (e = this.languages), t || (t = this.options.ns), n || (n = ge), this.services.backendConnector.reload(e, t, function (e) {
          r.resolve(), n(e);
        }), r;
      }
    }, {
      key: "use",
      value: function (e) {
        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && I.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this;
      }
    }, {
      key: "setResolvedLanguage",
      value: function (e) {
        if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) for (var t = 0; t < this.languages.length; t++) {
          var n = this.languages[t];
          if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
            this.resolvedLanguage = n;
            break;
          }
        }
      }
    }, {
      key: "changeLanguage",
      value: function (e, t) {
        var n = this;
        this.isLanguageChangingTo = e;
        var r = v();
        this.emit("languageChanging", e);
        var o = function (e) {
            n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.resolvedLanguage = void 0, n.setResolvedLanguage(e);
          },
          i = function (i) {
            e || i || !n.services.languageDetector || (i = []);
            var a = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
            a && (n.language || o(a), n.translator.language || n.translator.changeLanguage(a), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage && n.services.languageDetector.cacheUserLanguage(a)), n.loadResources(a, function (e) {
              !function (e, i) {
                i ? (o(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, r.resolve(function () {
                  return n.t.apply(n, arguments);
                }), t && t(e, function () {
                  return n.t.apply(n, arguments);
                });
              }(e, a);
            });
          };
        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), r;
      }
    }, {
      key: "getFixedT",
      value: function (t, n, r) {
        var o = this,
          i = function t(n, i) {
            var a;
            if ("object" !== e(i)) {
              for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) u[c - 2] = arguments[c];
              a = o.options.overloadTranslationOptionHandler([n, i].concat(u));
            } else a = fe({}, i);
            a.lng = a.lng || t.lng, a.lngs = a.lngs || t.lngs, a.ns = a.ns || t.ns, a.keyPrefix = a.keyPrefix || r || t.keyPrefix;
            var l,
              f = o.options.keySeparator || ".";
            return l = a.keyPrefix && Array.isArray(n) ? n.map(function (e) {
              return "".concat(a.keyPrefix).concat(f).concat(e);
            }) : a.keyPrefix ? "".concat(a.keyPrefix).concat(f).concat(n) : n, o.t(l, a);
          };
        return "string" == typeof t ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
      }
    }, {
      key: "t",
      value: function () {
        var e;
        return this.translator && (e = this.translator).translate.apply(e, arguments);
      }
    }, {
      key: "exists",
      value: function () {
        var e;
        return this.translator && (e = this.translator).exists.apply(e, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function (e) {
        this.options.defaultNS = e;
      }
    }, {
      key: "hasLoadedNamespace",
      value: function (e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        var r = this.resolvedLanguage || this.languages[0],
          o = !!this.options && this.options.fallbackLng,
          i = this.languages[this.languages.length - 1];
        if ("cimode" === r.toLowerCase()) return !0;
        var a = function (e, n) {
          var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
          return -1 === r || 2 === r;
        };
        if (n.precheck) {
          var s = n.precheck(this, a);
          if (void 0 !== s) return s;
        }
        return !!this.hasResourceBundle(r, e) || !(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e));
      }
    }, {
      key: "loadNamespaces",
      value: function (e, t) {
        var n = this,
          r = v();
        return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function (e) {
          n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
        }), this.loadResources(function (e) {
          r.resolve(), t && t(e);
        }), r) : (t && t(), Promise.resolve());
      }
    }, {
      key: "loadLanguages",
      value: function (e, t) {
        var n = v();
        "string" == typeof e && (e = [e]);
        var r = this.options.preload || [],
          o = e.filter(function (e) {
            return r.indexOf(e) < 0;
          });
        return o.length ? (this.options.preload = r.concat(o), this.loadResources(function (e) {
          n.resolve(), t && t(e);
        }), n) : (t && t(), Promise.resolve());
      }
    }, {
      key: "dir",
      value: function (e) {
        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
        var t = this.services && this.services.languageUtils || new M(ue());
        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
      }
    }, {
      key: "cloneInstance",
      value: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge,
          r = fe(fe(fe({}, this.options), t), {
            isClone: !0
          }),
          o = new a(r);
        void 0 === t.debug && void 0 === t.prefix || (o.logger = o.logger.clone(t));
        var i = ["store", "services", "language"];
        return i.forEach(function (t) {
          o[t] = e[t];
        }), o.services = fe({}, this.services), o.services.utils = {
          hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        }, o.translator = new K(o.services, o.options), o.translator.on("*", function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          o.emit.apply(o, [e].concat(n));
        }), o.init(r, n), o.translator.options = o.options, o.translator.backendConnector.services.utils = {
          hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        }, o;
      }
    }, {
      key: "toJSON",
      value: function () {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    }]), a;
  }(d);
  l(de, "createInstance", function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new de(e, t);
  });
  var ve = de.createInstance();
  return ve.createInstance = de.createInstance, ve;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation */ "./src/js/translation.js");
/* harmony import */ var _components_langSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/langSwitcher */ "./src/js/components/langSwitcher.js");
/* harmony import */ var _components_langSwitcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_langSwitcher__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;