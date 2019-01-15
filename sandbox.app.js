/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/KVF":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "7dT6",
	"./en.json": "7dT6"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "/KVF";

/***/ }),

/***/ "/kYV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("201c");
__webpack_require__("7NIr");
module.exports = __webpack_require__("LiWt");


/***/ }),

/***/ "4Me+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VPDz");
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tab9");




var Accounts = function Accounts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    action: "CREATE",
    doctype: "io.cozy.accounts",
    onComplete: function onComplete(res) {
      return alert('intent has completed ! ' + JSON.stringify(res));
    },
    onDismiss: function onDismiss() {
      return alert('intent has been dismissed !');
    },
    options: {
      slug: 'trainline'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Create account for Trainline")));
};

/* harmony default export */ __webpack_exports__["default"] = (Accounts);

/***/ }),

/***/ "7dT6":
/***/ (function(module) {

module.exports = {"Nav":{"intents":"Intents"}};

/***/ }),

/***/ "Bubq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VPDz");
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tab9");




var Apps = function Apps() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Install app"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    action: "INSTALL",
    doctype: "io.cozy.apps",
    onComplete: function onComplete(res) {
      return alert('intent has completed ! ' + JSON.stringify(res));
    },
    onDismiss: function onDismiss() {
      return alert('intent has been dismissed !');
    },
    options: {
      slug: 'trainline'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Install app Trainline")));
};

/* harmony default export */ __webpack_exports__["default"] = (Apps);

/***/ }),

/***/ "Gb0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('client'),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;



/***/ }),

/***/ "LiWt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/kYV");
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XOpu");
/* harmony import */ var cozy_interapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("P422");
/* harmony import */ var cozy_interapp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_interapp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_ClientProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Gb0V");
/* global cozy */







var appLocale;

var renderApp = function renderApp(clientV2) {
  var App = __webpack_require__("xYwX").default;

  Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["I18n"], {
    lang: appLocale,
    dictRequire: function dictRequire(appLocale) {
      return __webpack_require__("/KVF")("./".concat(appLocale));
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ClientProvider__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    value: clientV2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null))), document.querySelector('[role=application]'));
}; // return a defaultData if the template hasn't been replaced by cozy-stack


var getDataOrDefault = function getDataOrDefault(toTest, defaultData) {
  var templateRegex = /^\{\{\.[a-zA-Z]*\}\}$/; // {{.Example}}

  return templateRegex.test(toTest) ? defaultData : toTest;
}; // initial rendering of the application


document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var data = root.dataset;
  var appIcon = getDataOrDefault(data.cozyIconPath, __webpack_require__("ZAKO"));
  var appNamePrefix = getDataOrDefault(data.cozyAppNamePrefix || __webpack_require__("pZg0").name_prefix, '');
  var appName = getDataOrDefault(data.cozyAppName, __webpack_require__("pZg0").name);
  appLocale = getDataOrDefault(data.cozyLocale, 'en');
  var protocol = window.location ? window.location.protocol : 'https:';
  var url = "".concat(protocol, "//").concat(data.cozyDomain);
  var clientV2 = new cozy_client__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: url,
    token: data.cozyToken
  });
  var intents = new cozy_interapp__WEBPACK_IMPORTED_MODULE_5__["Intents"]({
    client: clientV2
  });
  clientV2.intents = intents;
  cozy.client.init({
    cozyURL: url,
    token: data.cozyToken
  }); // initialize the bar, common of all applications, it allows
  // platform features like apps navigation without doing anything

  cozy.bar.init({
    appName: appName,
    appNamePrefix: appNamePrefix,
    iconPath: appIcon,
    lang: appLocale,
    replaceTitleOnMobile: true
  });
  renderApp(clientV2);
});

/***/ }),

/***/ "O36E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-bullet-point_d352b52b7796892e87fcb971b42de3a6",
  "use": "icon-bullet-point_d352b52b7796892e87fcb971b42de3a6-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-bullet-point_d352b52b7796892e87fcb971b42de3a6\">\n  <path d=\"M14,5c0,-1.656 -1.344,-3 -3,-3l-6,0c-1.656,0 -3,1.344 -3,3l0,6c0,1.656 1.344,3 3,3l6,0c1.656,0 3,-1.344 3,-3l0,-6Z\" />\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "R2tU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VPDz");
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tab9");




var Apps = function Apps() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Folder picker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    action: "PICK",
    doctype: "io.cozy.files",
    onComplete: function onComplete(res) {
      return alert('intent has completed ! ' + JSON.stringify(res));
    },
    onDismiss: function onDismiss() {
      return alert('intent has been dismissed !');
    },
    options: {
      hint: null
    },
    size: 'xlarge'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Pick folder")));
};

/* harmony default export */ __webpack_exports__["default"] = (Apps);

/***/ }),

/***/ "ZAKO":
/***/ (function(module, exports) {

module.exports = "/img/icon.svg";

/***/ }),

/***/ "ZfQy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Apps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bubq");
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Me+");
/* harmony import */ var _FileIntent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yj4K");
/* harmony import */ var _Claudy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("trWq");
/* harmony import */ var _PickFolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("R2tU");
/* harmony import */ var _Custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fazM");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
};

var Intents = function Intents() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: styles.grid
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Apps__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FileIntent__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Claudy__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PickFolder__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Custom__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Intents);

/***/ }),

/***/ "fH6n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B7OX");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XOpu");
/* harmony import */ var cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VL0Z");
/* harmony import */ var cozy_ui_react_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c903");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eO8H");
/* harmony import */ var _assets_icons_icon_bullet_point_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("O36E");







var NavLink = Object(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_3__["genNavLink"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"]);
var Sidebar = function Sidebar(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, {
    to: "/intents",
    className: "c-nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "c-nav-icon",
    icon: _assets_icons_icon_bullet_point_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), t('Nav.intents')))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(Sidebar));

/***/ }),

/***/ "fazM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tab9");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VPDz");
/* harmony import */ var cozy_ui_react_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sz63");
/* harmony import */ var cozy_ui_react_Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wh1t");
/* harmony import */ var cozy_ui_react_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iCey");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var FileIntent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FileIntent, _React$Component);

  function FileIntent() {
    var _this;

    _classCallCheck(this, FileIntent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileIntent).call(this));
    _this.state = {
      action: localStorage.getItem('customAction'),
      doctype: localStorage.getItem('customDoctype'),
      options: _this.parseAndHandleError(localStorage.getItem('customOptions')),
      parsingError: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FileIntent, [{
    key: "handleChange",
    value: function handleChange(ev) {
      var value = ev.target.value;

      switch (ev.target.name) {
        case 'action':
          this.setState({
            action: value
          });
          localStorage.setItem('customAction', value);
          break;

        case 'doctype':
          this.setState({
            doctype: value
          });
          localStorage.setItem('customDoctype', value);
          break;

        case 'options':
          {
            var parsed = this.parseAndHandleError(value);
            this.setState({
              options: parsed
            });
            localStorage.setItem('customOptions', JSON.stringify(parsed));
            break;
          }

        default:
          return;
      }
    }
  }, {
    key: "parseAndHandleError",
    value: function parseAndHandleError(toParse) {
      if (!toParse) return null;

      try {
        var parsed = JSON.parse(toParse);
        this.setState({
          parsingError: false
        });
        return parsed;
      } catch (e) {
        this.setState({
          parsingError: true
        });
        return toParse;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          action = _this$state.action,
          doctype = _this$state.doctype,
          options = _this$state.options,
          parsingError = _this$state.parsingError;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-intent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Interapp maker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "customAction"
      }, "Action:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "customAction",
        type: "text",
        name: "action",
        onChange: this.handleChange,
        value: action,
        size: "tiny"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "customDoctype"
      }, "Doctype:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "customDoctype",
        type: "text",
        name: "doctype",
        onChange: this.handleChange,
        value: doctype,
        size: "tiny"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "customOptions"
      }, "Options:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "customOptions",
        type: "text",
        name: "options",
        onChange: this.handleChange,
        value: parsingError ? options : options && JSON.stringify(options, null, 2),
        size: "medium",
        error: parsingError
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__["default"], {
        action: action,
        doctype: doctype,
        options: parsingError ? 'JSON PARSING ERROR' : options,
        onComplete: function onComplete(res) {
          return alert('intent has completed ! ' + JSON.stringify(res));
        },
        onDismiss: function onDismiss() {
          return alert('intent has been dismissed !');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: !action || !doctype
      }, "Shake the magic box and see")));
    }
  }]);

  return FileIntent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FileIntent);

/***/ }),

/***/ "nY3O":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_lib/build_formatting_tokens_reg_exp/index": "kOWh",
	"./ar/build_distance_in_words_locale/index": "XxX6",
	"./ar/build_format_locale/index": "alis",
	"./ar/index": "EDRf",
	"./bg/build_distance_in_words_locale/index": "7K3h",
	"./bg/build_format_locale/index": "RrdL",
	"./bg/index": "isx8",
	"./ca/build_distance_in_words_locale/index": "wqqj",
	"./ca/build_format_locale/index": "qcV0",
	"./ca/index": "Vwa+",
	"./cs/build_distance_in_words_locale/index": "ZKDM",
	"./cs/build_format_locale/index": "ipyF",
	"./cs/index": "dvhP",
	"./da/build_distance_in_words_locale/index": "2Mgc",
	"./da/build_format_locale/index": "Gned",
	"./da/index": "7ur/",
	"./de/build_distance_in_words_locale/index": "5IWf",
	"./de/build_format_locale/index": "THCn",
	"./de/index": "bgw5",
	"./el/build_distance_in_words_locale/index": "o/GB",
	"./el/build_format_locale/index": "8T9h",
	"./el/index": "dH0v",
	"./en/build_distance_in_words_locale/index": "LZbM",
	"./en/build_format_locale/index": "6DAA",
	"./en/index": "Us+F",
	"./eo/build_distance_in_words_locale/index": "qrnn",
	"./eo/build_format_locale/index": "Bl15",
	"./eo/index": "UB7v",
	"./es/build_distance_in_words_locale/index": "GEfZ",
	"./es/build_format_locale/index": "O+zC",
	"./es/index": "/S0t",
	"./fi/build_distance_in_words_locale/index": "VHtQ",
	"./fi/build_format_locale/index": "Oydx",
	"./fi/index": "ndVD",
	"./fil/build_distance_in_words_locale/index": "uq4p",
	"./fil/build_format_locale/index": "d7hw",
	"./fil/index": "pNfm",
	"./fr/build_distance_in_words_locale/index": "IzMR",
	"./fr/build_format_locale/index": "I3Zg",
	"./fr/index": "LKA2",
	"./hr/build_distance_in_words_locale/index": "DPvn",
	"./hr/build_format_locale/index": "puw3",
	"./hr/index": "L9Jq",
	"./hu/build_distance_in_words_locale/index": "w2RQ",
	"./hu/build_format_locale/index": "/0iD",
	"./hu/index": "Nm+E",
	"./id/build_distance_in_words_locale/index": "JbvB",
	"./id/build_format_locale/index": "0wlw",
	"./id/index": "A6C3",
	"./is/build_distance_in_words_locale/index": "qzMC",
	"./is/build_format_locale/index": "S3yD",
	"./is/index": "N4bE",
	"./it/build_distance_in_words_locale/index": "MDEp",
	"./it/build_format_locale/index": "aUJd",
	"./it/index": "hmb4",
	"./ja/build_distance_in_words_locale/index": "nNvt",
	"./ja/build_format_locale/index": "buui",
	"./ja/index": "uAXs",
	"./ko/build_distance_in_words_locale/index": "oEw+",
	"./ko/build_format_locale/index": "9SQf",
	"./ko/index": "iW8+",
	"./mk/build_distance_in_words_locale/index": "nmwZ",
	"./mk/build_format_locale/index": "htxJ",
	"./mk/index": "GzBU",
	"./nb/build_distance_in_words_locale/index": "SL1f",
	"./nb/build_format_locale/index": "CJ5F",
	"./nb/index": "73vv",
	"./nl/build_distance_in_words_locale/index": "Uyu0",
	"./nl/build_format_locale/index": "doCD",
	"./nl/index": "hCQt",
	"./pl/build_distance_in_words_locale/index": "FUBD",
	"./pl/build_format_locale/index": "nOYf",
	"./pl/index": "B6yL",
	"./pt/build_distance_in_words_locale/index": "aTPA",
	"./pt/build_format_locale/index": "TTT0",
	"./pt/index": "gdks",
	"./ro/build_distance_in_words_locale/index": "gI+A",
	"./ro/build_format_locale/index": "njjO",
	"./ro/index": "r2yp",
	"./ru/build_distance_in_words_locale/index": "KmPx",
	"./ru/build_format_locale/index": "UUBw",
	"./ru/index": "nz/o",
	"./sk/build_distance_in_words_locale/index": "q2Bs",
	"./sk/build_format_locale/index": "9sxn",
	"./sk/index": "Wqan",
	"./sl/build_distance_in_words_locale/index": "mlv2",
	"./sl/build_format_locale/index": "vHkZ",
	"./sl/index": "KYSo",
	"./sv/build_distance_in_words_locale/index": "UNBN",
	"./sv/build_format_locale/index": "zTNB",
	"./sv/index": "hxgj",
	"./th/build_distance_in_words_locale/index": "XAGa",
	"./th/build_format_locale/index": "We2s",
	"./th/index": "Pk+z",
	"./tr/build_distance_in_words_locale/index": "aFZF",
	"./tr/build_format_locale/index": "jh7A",
	"./tr/index": "3ZWG",
	"./zh_cn/build_distance_in_words_locale/index": "KdB7",
	"./zh_cn/build_format_locale/index": "l4EP",
	"./zh_cn/index": "8tMq",
	"./zh_tw/build_distance_in_words_locale/index": "vyyr",
	"./zh_tw/build_format_locale/index": "uYH7",
	"./zh_tw/index": "QPlQ"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "nY3O";

/***/ }),

/***/ "pZg0":
/***/ (function(module, exports) {

module.exports = {"name":"Cozy Sandbox","slug":"sandbox","icon":"icon.svg","categories":[],"version":"0.1.0","licence":"AGPL-3.0","editor":"","source":"https://github.com/Cozy/cozy-sandbox.git@build","developer":{"name":"Cozy","url":""},"routes":{"/":{"folder":"/","index":"index.html","public":false}},"permissions":{"apps":{"description":"Required by the cozy-bar to display the icons of the apps","type":"io.cozy.apps","verbs":["GET"]}}}

/***/ }),

/***/ "tab9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_IntentOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l92k");
/* harmony import */ var _ClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Gb0V");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var _VerboseIntentOpener =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_VerboseIntentOpener, _React$Component);

  function _VerboseIntentOpener() {
    var _this;

    _classCallCheck(this, _VerboseIntentOpener);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_VerboseIntentOpener).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      v2: false
    };
    return _this;
  }

  _createClass(_VerboseIntentOpener, [{
    key: "handleChange",
    value: function handleChange(ev) {
      this.setState({
        v2: ev.target.checked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          client = _this$props.client,
          forwardProps = _objectWithoutProperties(_this$props, ["client"]);

      var _this$props2 = this.props,
          action = _this$props2.action,
          doctype = _this$props2.doctype,
          options = _this$props2.options;
      var v2 = this.state.v2;
      var create = v2 ? client.intents.create.bind(client.intents) : undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Client V2 :", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        checked: v2,
        type: "checkbox",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "Action: ", action, '\n', "Doctype: ", doctype, '\n', "Options: ", JSON.stringify(options, null, 2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_IntentOpener__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        create: create
      }, forwardProps)));
    }
  }]);

  return _VerboseIntentOpener;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var VerboseIntentOpener = function VerboseIntentOpener(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientProvider__WEBPACK_IMPORTED_MODULE_2__["Consumer"], null, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener, _extends({
      client: client
    }, props));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (VerboseIntentOpener);

/***/ }),

/***/ "trWq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tab9");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VPDz");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ClaudyIntent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClaudyIntent, _React$Component);

  function ClaudyIntent() {
    _classCallCheck(this, ClaudyIntent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClaudyIntent).apply(this, arguments));
  }

  _createClass(ClaudyIntent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Open Claudy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__["default"], {
        action: "CLAUDY",
        doctype: "io.cozy.settings",
        options: {},
        onComplete: function onComplete(res) {
          return alert('intent has completed ! ' + JSON.stringify(res));
        },
        onDismiss: function onDismiss() {
          return alert('intent has been dismissed !');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Open Claudy")));
    }
  }]);

  return ClaudyIntent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClaudyIntent);

/***/ }),

/***/ "xYwX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0cfB");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eO8H");
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e2oC");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("B7OX");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fH6n");
/* harmony import */ var _Intents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZfQy");








var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Main"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    className: "app-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/intents",
    component: _Intents__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    from: "/",
    to: "/intents"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    from: "*",
    to: "/intents"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__["Sprite"], null)));
};
/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "yj4K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tab9");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VPDz");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var FileIntent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FileIntent, _React$Component);

  function FileIntent() {
    var _this;

    _classCallCheck(this, FileIntent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileIntent).call(this));
    _this.state = {
      fileId: localStorage.getItem('fileId')
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FileIntent, [{
    key: "handleChange",
    value: function handleChange(ev) {
      var fileId = ev.target.value;
      this.setState({
        fileId: ev.target.value
      });
      localStorage.setItem('fileId', fileId);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Open file"), "File id :", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        value: this.state.fileId
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerboseIntentOpener__WEBPACK_IMPORTED_MODULE_1__["default"], {
        action: "OPEN",
        doctype: "io.cozy.files",
        options: {
          id: this.state.fileId
        },
        onComplete: function onComplete(res) {
          return alert('intent has completed ! ' + JSON.stringify(res));
        },
        onDismiss: function onDismiss() {
          return alert('intent has been dismissed !');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: !this.state.fileId
      }, "Open file")));
    }
  }]);

  return FileIntent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FileIntent);

/***/ })

/******/ });
//# sourceMappingURL=sandbox.app.js.map