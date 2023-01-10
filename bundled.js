/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/main.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/main.less ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon.down-chevron {\n  height: 10px;\n  width: 10px;\n  position: relative;\n}\n.icon.down-chevron:after,\n.icon.down-chevron:before {\n  content: '';\n  position: absolute;\n  background: #ececec;\n  width: 10px;\n  height: 2px;\n}\n.icon.down-chevron:after {\n  transform: rotate(45deg);\n}\n.icon.down-chevron:before {\n  transform: rotate(-45deg);\n  left: 6px;\n}\n::selection {\n  background: rgba(236, 236, 236, 0.1);\n}\nbody {\n  margin: 0;\n  background: #222222;\n  color: #ececec;\n  font-family: 'Space Grotesk', sans-serif;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  flex-direction: column;\n}\n/* ====== canvas ===== */\ncanvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n/* ====== pages ====== */\n.page-container {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  position: relative;\n}\n.page-container > .page {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n.page-content {\n  margin: 50px;\n}\n/* ====== home ====== */\n#home {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.next-page {\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n}\n.next-page .icon {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.next-page p {\n  margin: 5px;\n}\n.card,\n.filled-page {\n  background: rgba(236, 236, 236, 0.1);\n}\n.card {\n  text-align: center;\n  max-width: 250px;\n  padding: 50px;\n  border-radius: 5px;\n}\n.links img {\n  width: 2em;\n  height: 2em;\n  margin: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/icons.less","webpack://./src/styles/main.less","webpack://./src/styles/selection.less"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EAEA,kBAAA;ACAJ;ADEI;;EACI,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;ACCR;ADEI;EACI,wBAAA;ACAR;ADGI;EACI,yBAAA;EACA,SAAA;ACDR;ACnBA;EACI,oCAAA;ADqBJ;AAnBA;EACI,SAAA;EACA,mBAAA;EACA,cAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EAEA,sBAAA;AAoBJ;AACA,wBAAwB;AAhBxB;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;AAkBJ;AACA,wBAAwB;AAfxB;EACI,YAAA;EACA,WAAA;EACA,OAAA;EACA,kBAAA;AAiBJ;AAfI;EACI,YAAA;EACA,kBAAA;EACA,WAAA;AAiBR;AAbA;EACI,YAAA;AAeJ;AACA,uBAAuB;AAZvB;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAcJ;AAXA;EACI,eAAA;EACA,kBAAA;EACA,SAAA;EAYA,aAAA;AAEJ;AAjBA;EAMQ,kBAAA;EACA,SAAA;EACA,2BAAA;AAcR;AAtBA;EAYQ,WAAA;AAaR;AAPA;;EACI,oCAAA;AAUJ;AAPA;EACI,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;AASJ;AANA;EACI,UAAA;EACA,WAAA;EACA,YAAA;AAQJ","sourcesContent":[".icon.down-chevron {\n    height: 10px;\n    width: 10px;\n\n    position: relative;\n    \n    &:after, &:before {\n        content: '';\n        position: absolute;\n        background: rgb(236, 236, 236);\n        width: 10px;\n        height: 2px;\n    }\n\n    &:after {\n        transform: rotate(45deg);\n    }\n    \n    &:before {\n        transform: rotate(-45deg);\n        left: 6px;\n    }\n}","@import \"./icons.less\";\n@import \"./selection.less\";\n\nbody {\n    margin: 0;\n    background: rgb(34, 34, 34);\n    color: rgb(236, 236, 236);\n    font-family: 'Space Grotesk', sans-serif;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    \n    flex-direction: column;\n}\n\n/* ====== canvas ===== */\n\ncanvas {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n}\n\n/* ====== pages ====== */\n.page-container {\n    height: 100%;\n    width: 100%;\n    flex: 1;\n    position: relative;\n\n    & > .page {\n        height: 100%;\n        position: absolute;\n        width: 100%;\n    }\n}\n\n.page-content {\n    margin: 50px;\n}\n\n/* ====== home ====== */\n#home {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.next-page {\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n\n    .icon {\n        position: relative;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    p {\n        margin: 5px;\n    }\n    \n    padding: 10px;\n}\n\n.card, .filled-page {\n    background: rgba(236, 236, 236, .1);\n}\n\n.card {\n    text-align: center;\n    max-width: 250px;\n    padding: 50px;\n    border-radius: 5px;\n}\n\n.links img {\n    width: 2em;\n    height: 2em;\n    margin: 10px;\n}\n\n","::selection {\n    background: rgba(236, 236, 236, .1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.less":
/*!******************************!*\
  !*** ./src/styles/main.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./main.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/main.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/FallingStarsDrawer.ts":
/*!****************************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/FallingStarsDrawer.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Drawer_1 = __importDefault(__webpack_require__(/*! ../util-bg/2d-draw/Drawer */ "./src/backgrounds/util-bg/2d-draw/Drawer.ts"));
const FixedStar_1 = __importDefault(__webpack_require__(/*! ./Sprite/FixedStar */ "./src/backgrounds/falling-stars-bg/Sprite/FixedStar.ts"));
class FallingStarsDrawer extends Drawer_1.default {
    constructor(canvas, ctx) {
        super(canvas, ctx, 2);
        this.createStars();
    }
    createStars() {
        const nbOfStars = Math.floor(Math.random() * 20);
        this.addObject(new FixedStar_1.default({ x: 10, y: 10 }));
        // Array(nbOfStars).fill(0).map(_ => new FixedStar(this.randomPosition())).forEach(s => this.addObject(s))
    }
    randomPosition() {
        return { x: Math.random() * this.canvas.width, y: Math.random() * this.canvas.height };
    }
}
exports["default"] = FallingStarsDrawer;


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/Sprite/AnimatedSpriteObject.ts":
/*!*************************************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/Sprite/AnimatedSpriteObject.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const SpriteObject_1 = __importDefault(__webpack_require__(/*! ./SpriteObject */ "./src/backgrounds/falling-stars-bg/Sprite/SpriteObject.ts"));
class AnimatedSpriteObject extends SpriteObject_1.default {
    constructor(position, animatedSprite) {
        super(position, {
            height: animatedSprite.height,
            width: animatedSprite.width,
            imgData: animatedSprite.frames[0]
        }); // can not use fromAnimatedToStatic :(
        this.animatedSprite = animatedSprite;
        this.currentFrame = 0;
        this.beforeNextFrame = 0;
        this.nbFrames = animatedSprite.frames.length;
    }
    draw(ctx) {
        this.beforeNextFrame++;
        if (this.beforeNextFrame >= this.animatedSprite.frameTime) {
            this.currentFrame = (this.currentFrame + 1) % this.nbFrames;
            this.beforeNextFrame = 0;
        }
        this.sprite = this.fromAnimatedToStatic();
        super.draw(ctx);
    }
    fromAnimatedToStatic() {
        return {
            height: this.animatedSprite.height,
            width: this.animatedSprite.width,
            imgData: this.animatedSprite.frames[this.currentFrame]
        };
    }
}
exports["default"] = AnimatedSpriteObject;


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/Sprite/FixedStar.ts":
/*!**************************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/Sprite/FixedStar.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Stars_1 = __importDefault(__webpack_require__(/*! ../res/Stars */ "./src/backgrounds/falling-stars-bg/res/Stars.ts"));
const AnimatedSpriteObject_1 = __importDefault(__webpack_require__(/*! ./AnimatedSpriteObject */ "./src/backgrounds/falling-stars-bg/Sprite/AnimatedSpriteObject.ts"));
class FixedStar extends AnimatedSpriteObject_1.default {
    constructor(pos) {
        const star = Stars_1.default[Math.floor(Math.random() * Stars_1.default.length)];
        super(pos, star);
    }
    draw(ctx) {
        super.draw(ctx);
    }
}
exports["default"] = FixedStar;


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/Sprite/SpriteObject.ts":
/*!*****************************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/Sprite/SpriteObject.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DrawableObject_1 = __importDefault(__webpack_require__(/*! ../../util-bg/2d-draw/DrawableObject */ "./src/backgrounds/util-bg/2d-draw/DrawableObject.ts"));
class SpriteObject extends DrawableObject_1.default {
    constructor(position, sprite) {
        super();
        this.position = position;
        this.sprite = sprite;
        this.pixelSize = 5;
    }
    draw(ctx) {
        for (let y = 0; y < this.sprite.height; y++) {
            for (let x = 0; x < this.sprite.width; x++) {
                const color = this.sprite.imgData[x + y * this.sprite.width];
                this.drawPixel(ctx, color, { x: this.position.x + x, y: this.position.y + y });
            }
        }
    }
    drawPixel(ctx, color, position) {
        // color is in format 0xaabbggrr
        ctx.fillStyle = '#' + (color & 0xffffffff).toString(16);
        ctx.fillRect(position.x * this.pixelSize, position.y * this.pixelSize, this.pixelSize, this.pixelSize);
    }
}
exports["default"] = SpriteObject;


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/entry.ts":
/*!***************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/entry.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../util-bg/canvas-resizer */ "./src/backgrounds/util-bg/canvas-resizer.ts");
const FallingStarsDrawer_1 = __importDefault(__webpack_require__(/*! ./FallingStarsDrawer */ "./src/backgrounds/falling-stars-bg/FallingStarsDrawer.ts"));
(() => {
    const rdy = () => {
        const canvas = document.querySelector('canvas');
        if (!canvas) {
            console.error("Could not find canvas.");
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Could not get drawing context for canvas.");
            return;
        }
        const drawer = new FallingStarsDrawer_1.default(canvas, ctx);
        // drawer.setupAnimFrame()
    };
    document.addEventListener('DOMContentLoaded', () => rdy());
})();


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/res/Star1.ts":
/*!*******************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/res/Star1.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = { height: 7, width: 7, frameTime: 1, frames: [
        [
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0xffffe7d0, 0xfffff8f2, 0xfffffdfb, 0xfffffdfb, 0xfffffdfb, 0xfffff8f2, 0xffffe7d0,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000
        ],
        [
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0xffffe7d0, 0xfffff8f2, 0xfffffdfb, 0xfffffdfb, 0xfffffdfb, 0xfffff8f2, 0xffffe7d0,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000
        ],
        [
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0xffffe7d0, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0xffffe7d0,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xfffff8f2, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000
        ],
        [
            0x00000000, 0x00000000, 0x00000000, 0xffffddbc, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0xffffddbc, 0xffffe7d0, 0xfffffdfb, 0xfffffdfb, 0xfffffdfb, 0xffffe7d0, 0xffffddbc,
            0x00000000, 0x00000000, 0xfffff8f2, 0xfffffdfb, 0xfffff8f2, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffe7d0, 0x00000000, 0x00000000, 0x00000000,
            0x00000000, 0x00000000, 0x00000000, 0xffffddbc, 0x00000000, 0x00000000, 0x00000000
        ]
    ] };


/***/ }),

/***/ "./src/backgrounds/falling-stars-bg/res/Stars.ts":
/*!*******************************************************!*\
  !*** ./src/backgrounds/falling-stars-bg/res/Stars.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Star1_1 = __importDefault(__webpack_require__(/*! ./Star1 */ "./src/backgrounds/falling-stars-bg/res/Star1.ts"));
exports["default"] = [Star1_1.default];


/***/ }),

/***/ "./src/backgrounds/util-bg/2d-draw/DrawableObject.ts":
/*!***********************************************************!*\
  !*** ./src/backgrounds/util-bg/2d-draw/DrawableObject.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DrawableObject {
    constructor() {
    }
}
exports["default"] = DrawableObject;


/***/ }),

/***/ "./src/backgrounds/util-bg/2d-draw/Drawer.ts":
/*!***************************************************!*\
  !*** ./src/backgrounds/util-bg/2d-draw/Drawer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Drawer {
    // sfp stands for seconds per frame i.e. how many seconds per frame
    // = 0 => illimited
    constructor(canvas, ctx, spf = 0) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.spf = spf;
        this.objs = [];
        this.lastTime = Date.now();
    }
    drawHandler(dt) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objs.forEach(d => d.draw(this.ctx));
    }
    addObject(obj) {
        this.objs.push(obj);
    }
    setupAnimFrame() {
        const animFrame = () => {
            const curr = Date.now();
            const dt = (curr - this.lastTime) / 1000;
            if (this.spf > 0 && dt < this.spf) {
                return requestAnimationFrame(animFrame);
            }
            this.drawHandler(dt);
            this.lastTime = curr;
            requestAnimationFrame(animFrame);
        };
        animFrame();
    }
}
exports["default"] = Drawer;


/***/ }),

/***/ "./src/backgrounds/util-bg/canvas-resizer.ts":
/*!***************************************************!*\
  !*** ./src/backgrounds/util-bg/canvas-resizer.ts ***!
  \***************************************************/
/***/ (() => {


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.querySelector('canvas');
        if (!canvas) {
            console.warn('Could not get canvas');
            return;
        }
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
    });
})();


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/entry.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/main.less */ "./src/styles/main.less");
__webpack_require__(/*! ./backgrounds/falling-stars-bg/entry */ "./src/backgrounds/falling-stars-bg/entry.ts");

})();

var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO1lBQ2xGLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7WUFDbEYsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtZQUNsRixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO1lBQ2xGLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDakY7UUFDRDtZQUNBLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7WUFDbEYsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtZQUNsRixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO1lBQ2xGLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7WUFDbEYsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtZQUNsRixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO1lBQ2xGLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7U0FDakY7UUFDRDtZQUNBLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFF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QUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVTtZQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXO1FBQ3RDLENBQUM7UUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUN6QyxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsRUFBRTs7Ozs7OztVQ2hCSjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBLHdFQUEyQjtBQUMzQiwrR0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4ubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5sZXNzPzFmMzMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZHMvZmFsbGluZy1zdGFycy1iZy9GYWxsaW5nU3RhcnNEcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmRzL2ZhbGxpbmctc3RhcnMtYmcvU3ByaXRlL0FuaW1hdGVkU3ByaXRlT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kcy9mYWxsaW5nLXN0YXJzLWJnL1Nwcml0ZS9GaXhlZFN0YXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmRzL2ZhbGxpbmctc3RhcnMtYmcvU3ByaXRlL1Nwcml0ZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZHMvZmFsbGluZy1zdGFycy1iZy9lbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZHMvZmFsbGluZy1zdGFycy1iZy9yZXMvU3RhcjEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmRzL2ZhbGxpbmctc3RhcnMtYmcvcmVzL1N0YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kcy91dGlsLWJnLzJkLWRyYXcvRHJhd2FibGVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmRzL3V0aWwtYmcvMmQtZHJhdy9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmRzL3V0aWwtYmcvY2FudmFzLXJlc2l6ZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb24uZG93bi1jaGV2cm9uIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaWNvbi5kb3duLWNoZXZyb246YWZ0ZXIsXFxuLmljb24uZG93bi1jaGV2cm9uOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMnB4O1xcbn1cXG4uaWNvbi5kb3duLWNoZXZyb246YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4uaWNvbi5kb3duLWNoZXZyb246YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBsZWZ0OiA2cHg7XFxufVxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC4xKTtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgY29sb3I6ICNlY2VjZWM7XFxuICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4vKiA9PT09PT0gY2FudmFzID09PT09ICovXFxuY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLyogPT09PT09IHBhZ2VzID09PT09PSAqL1xcbi5wYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wYWdlLWNvbnRhaW5lciA+IC5wYWdlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFnZS1jb250ZW50IHtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuLyogPT09PT09IGhvbWUgPT09PT09ICovXFxuI2hvbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubmV4dC1wYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5uZXh0LXBhZ2UgLmljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4ubmV4dC1wYWdlIHAge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbi5jYXJkLFxcbi5maWxsZWQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuMSk7XFxufVxcbi5jYXJkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGlua3MgaW1nIHtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pY29ucy5sZXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4ubGVzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zZWxlY3Rpb24ubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUNBSjtBREVJOztFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDUjtBREVJO0VBQ0ksd0JBQUE7QUNBUjtBREdJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FDRFI7QUNuQkE7RUFDSSxvQ0FBQTtBRHFCSjtBQW5CQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtBQW9CSjtBQUNBLHdCQUF3QjtBQWhCeEI7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBa0JKO0FBQ0Esd0JBQXdCO0FBZnhCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFmSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFpQlI7QUFiQTtFQUNJLFlBQUE7QUFlSjtBQUNBLHVCQUF1QjtBQVp2QjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWNKO0FBWEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBWUEsYUFBQTtBQUVKO0FBakJBO0VBTVEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFjUjtBQXRCQTtFQVlRLFdBQUE7QUFhUjtBQVBBOztFQUNJLG9DQUFBO0FBVUo7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQU5BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb24uZG93bi1jaGV2cm9uIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICB9XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB9XFxuICAgIFxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICB9XFxufVwiLFwiQGltcG9ydCBcXFwiLi9pY29ucy5sZXNzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL3NlbGVjdGlvbi5sZXNzXFxcIjtcXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDM0LCAzNCk7XFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qID09PT09PSBjYW52YXMgPT09PT0gKi9cXG5cXG5jYW52YXMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qID09PT09PSBwYWdlcyA9PT09PT0gKi9cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICYgPiAucGFnZSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cXG4vKiA9PT09PT0gaG9tZSA9PT09PT0gKi9cXG4jaG9tZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXh0LXBhZ2Uge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICAuaWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW46IDVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNhcmQsIC5maWxsZWQtcGFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMzYsIDIzNiwgLjEpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlua3MgaW1nIHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuXCIsXCI6OnNlbGVjdGlvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMzYsIDIzNiwgLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5sZXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5sZXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBEcmF3ZXIgZnJvbSBcIi4uL3V0aWwtYmcvMmQtZHJhdy9EcmF3ZXJcIlxyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsLWJnLzJkLWRyYXcvVHlwZXNcIlxyXG5pbXBvcnQgRml4ZWRTdGFyIGZyb20gXCIuL1Nwcml0ZS9GaXhlZFN0YXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFsbGluZ1N0YXJzRHJhd2VyIGV4dGVuZHMgRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIDIpXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RhcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlU3RhcnMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmJPZlN0YXJzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApXHJcblxyXG4gICAgICAgIHRoaXMuYWRkT2JqZWN0KG5ldyBGaXhlZFN0YXIoeyB4OiAxMCwgeTogMTAgfSkpXHJcbiAgICAgICAgLy8gQXJyYXkobmJPZlN0YXJzKS5maWxsKDApLm1hcChfID0+IG5ldyBGaXhlZFN0YXIodGhpcy5yYW5kb21Qb3NpdGlvbigpKSkuZm9yRWFjaChzID0+IHRoaXMuYWRkT2JqZWN0KHMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tUG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aCwgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLmhlaWdodCB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsLWJnLzJkLWRyYXcvVHlwZXNcIlxyXG5pbXBvcnQgeyBBbmltYXRlZFNwcml0ZSwgU3ByaXRlIH0gZnJvbSBcIi4uL3Jlcy9TdGFyc1wiXHJcbmltcG9ydCBTcHJpdGVPYmplY3QgZnJvbSBcIi4vU3ByaXRlT2JqZWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGVkU3ByaXRlT2JqZWN0IGV4dGVuZHMgU3ByaXRlT2JqZWN0IHtcclxuICAgIHByaXZhdGUgY3VycmVudEZyYW1lOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIGJlZm9yZU5leHRGcmFtZTogbnVtYmVyID0gMFxyXG4gICAgcHJpdmF0ZSBuYkZyYW1lczogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBwcm90ZWN0ZWQgYW5pbWF0ZWRTcHJpdGU6IEFuaW1hdGVkU3ByaXRlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhbmltYXRlZFNwcml0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBhbmltYXRlZFNwcml0ZS53aWR0aCxcclxuICAgICAgICAgICAgaW1nRGF0YTogYW5pbWF0ZWRTcHJpdGUuZnJhbWVzWyAwIF1cclxuICAgICAgICB9KSAvLyBjYW4gbm90IHVzZSBmcm9tQW5pbWF0ZWRUb1N0YXRpYyA6KFxyXG5cclxuICAgICAgICB0aGlzLm5iRnJhbWVzID0gYW5pbWF0ZWRTcHJpdGUuZnJhbWVzLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJlZm9yZU5leHRGcmFtZSsrXHJcbiAgICAgICAgaWYgKHRoaXMuYmVmb3JlTmV4dEZyYW1lID49IHRoaXMuYW5pbWF0ZWRTcHJpdGUuZnJhbWVUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gKHRoaXMuY3VycmVudEZyYW1lICsgMSkgJSB0aGlzLm5iRnJhbWVzXHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlTmV4dEZyYW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5mcm9tQW5pbWF0ZWRUb1N0YXRpYygpXHJcblxyXG4gICAgICAgIHN1cGVyLmRyYXcoY3R4KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZnJvbUFuaW1hdGVkVG9TdGF0aWMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmFuaW1hdGVkU3ByaXRlLmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuYW5pbWF0ZWRTcHJpdGUud2lkdGgsXHJcbiAgICAgICAgICAgIGltZ0RhdGE6IHRoaXMuYW5pbWF0ZWRTcHJpdGUuZnJhbWVzWyB0aGlzLmN1cnJlbnRGcmFtZSBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IERyYXdhYmxlT2JqZWN0IGZyb20gXCIuLi8uLi91dGlsLWJnLzJkLWRyYXcvRHJhd2FibGVPYmplY3RcIlxyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsLWJnLzJkLWRyYXcvVHlwZXNcIlxyXG5pbXBvcnQgU3RhcnMsIHsgQW5pbWF0ZWRTcHJpdGUgfSBmcm9tIFwiLi4vcmVzL1N0YXJzXCJcclxuaW1wb3J0IEFuaW1hdGVkU3ByaXRlT2JqZWN0IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlT2JqZWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkU3RhciBleHRlbmRzIEFuaW1hdGVkU3ByaXRlT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvczogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBzdGFyID0gU3RhcnNbIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFN0YXJzLmxlbmd0aCkgXVxyXG4gICAgICAgIHN1cGVyKHBvcywgc3RhcilcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdHgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHJhd2FibGVPYmplY3QgZnJvbSBcIi4uLy4uL3V0aWwtYmcvMmQtZHJhdy9EcmF3YWJsZU9iamVjdFwiXHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwtYmcvMmQtZHJhdy9UeXBlc1wiXHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuLi9yZXMvU3RhcnNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlT2JqZWN0IGV4dGVuZHMgRHJhd2FibGVPYmplY3Qge1xyXG4gICAgcHJpdmF0ZSBwaXhlbFNpemU6IG51bWJlciA9IDVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcG9zaXRpb246IFBvc2l0aW9uLCBwcm90ZWN0ZWQgc3ByaXRlOiBTcHJpdGUpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLnNwcml0ZS5oZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5zcHJpdGUud2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnNwcml0ZS5pbWdEYXRhW3ggKyB5ICogdGhpcy5zcHJpdGUud2lkdGhdXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQaXhlbChjdHgsIGNvbG9yLCB7IHg6IHRoaXMucG9zaXRpb24ueCArIHgsIHk6IHRoaXMucG9zaXRpb24ueSArIHkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdQaXhlbChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IG51bWJlciwgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gY29sb3IgaXMgaW4gZm9ybWF0IDB4YWFiYmdncnJcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMnICsgKGNvbG9yICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggKiB0aGlzLnBpeGVsU2l6ZSwgcG9zaXRpb24ueSAqIHRoaXMucGl4ZWxTaXplLCB0aGlzLnBpeGVsU2l6ZSwgdGhpcy5waXhlbFNpemUpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCIuLi91dGlsLWJnL2NhbnZhcy1yZXNpemVyXCJcclxuaW1wb3J0IEZhbGxpbmdTdGFyc0RyYXdlciBmcm9tIFwiLi9GYWxsaW5nU3RhcnNEcmF3ZXJcIlxyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IHJkeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmluZCBjYW52YXMuXCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgICAgIGlmICghY3R4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IGRyYXdpbmcgY29udGV4dCBmb3IgY2FudmFzLlwiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdlciA9IG5ldyBGYWxsaW5nU3RhcnNEcmF3ZXIoY2FudmFzLCBjdHgpXHJcbiAgICAgICAgLy8gZHJhd2VyLnNldHVwQW5pbUZyYW1lKClcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gcmR5KCkpXHJcbn0pKCkiLCJcbmV4cG9ydCBkZWZhdWx0IHtoZWlnaHQ6IDcsIHdpZHRoOiA3LCBmcmFtZVRpbWU6IDEsIGZyYW1lczpbXG5bXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZlN2QwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmY4ZjIsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZjhmMiwgMHhmZmZmZmRmYiwgMHhmZmZmZjhmMiwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weGZmZmZlN2QwLCAweGZmZmZmOGYyLCAweGZmZmZmZGZiLCAweGZmZmZmZGZiLCAweGZmZmZmZGZiLCAweGZmZmZmOGYyLCAweGZmZmZlN2QwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmZkZmIsIDB4ZmZmZmY4ZjIsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZjhmMiwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZlN2QwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwXG5dLFxuW1xuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZTdkMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZmOGYyLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmZkZmIsIDB4ZmZmZmY4ZjIsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHhmZmZmZTdkMCwgMHhmZmZmZjhmMiwgMHhmZmZmZmRmYiwgMHhmZmZmZmRmYiwgMHhmZmZmZmRmYiwgMHhmZmZmZjhmMiwgMHhmZmZmZTdkMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZmOGYyLCAweGZmZmZmZGZiLCAweGZmZmZmOGYyLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmY4ZjIsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZTdkMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMFxuXSxcbltcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmU3ZDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZjhmMiwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZmOGYyLCAweGZmZmZmZGZiLCAweGZmZmZmOGYyLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4ZmZmZmU3ZDAsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmZkZmIsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmZkZmIsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmU3ZDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZjhmMiwgMHhmZmZmZmRmYiwgMHhmZmZmZjhmMiwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZmOGYyLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmU3ZDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDBcbl0sXG5bXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZkZGJjLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmU3ZDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZjhmMiwgMHhmZmZmZmRmYiwgMHhmZmZmZjhmMiwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weGZmZmZkZGJjLCAweGZmZmZlN2QwLCAweGZmZmZmZGZiLCAweGZmZmZmZGZiLCAweGZmZmZmZGZiLCAweGZmZmZlN2QwLCAweGZmZmZkZGJjLCBcbjB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIDB4ZmZmZmY4ZjIsIDB4ZmZmZmZkZmIsIDB4ZmZmZmY4ZjIsIDB4MDAwMDAwMDAsIDB4MDAwMDAwMDAsIFxuMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHhmZmZmZTdkMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMCwgXG4weDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweGZmZmZkZGJjLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwLCAweDAwMDAwMDAwXG5dXG5dfVxuIiwiaW1wb3J0IFN0YXIxIGZyb20gXCIuL1N0YXIxXCJcclxuXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGVkU3ByaXRlID0ge1xyXG4gICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgZnJhbWVUaW1lOiBudW1iZXIsXHJcbiAgICBmcmFtZXM6IG51bWJlcltdW11cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3ByaXRlID0ge1xyXG4gICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaW1nRGF0YTogbnVtYmVyW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1N0YXIxXSBhcyBBbmltYXRlZFNwcml0ZVtdIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERyYXdhYmxlT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZFxyXG59IiwiaW1wb3J0IERyYXdhYmxlT2JqZWN0IGZyb20gXCIuL0RyYXdhYmxlT2JqZWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciB7XHJcbiAgICBwcm90ZWN0ZWQgb2JqczogRHJhd2FibGVPYmplY3RbXSA9IFtdXHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpXHJcblxyXG4gICAgLy8gc2ZwIHN0YW5kcyBmb3Igc2Vjb25kcyBwZXIgZnJhbWUgaS5lLiBob3cgbWFueSBzZWNvbmRzIHBlciBmcmFtZVxyXG4gICAgLy8gPSAwID0+IGlsbGltaXRlZFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcHJvdGVjdGVkIHNwZjogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdIYW5kbGVyKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcclxuICAgICAgICB0aGlzLm9ianMuZm9yRWFjaChkID0+IGQuZHJhdyh0aGlzLmN0eCkpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkT2JqZWN0KG9iajogRHJhd2FibGVPYmplY3QpIHtcclxuICAgICAgICB0aGlzLm9ianMucHVzaChvYmopXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBBbmltRnJhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbUZyYW1lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyID0gRGF0ZS5ub3coKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHQgPSAoY3VyciAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BmID4gMCAmJiBkdCA8IHRoaXMuc3BmKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1GcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRyYXdIYW5kbGVyKGR0KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyXHJcbiAgICBcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1GcmFtZSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBhbmltRnJhbWUoKVxyXG4gICAgfVxyXG5cclxufSIsIigoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcblxyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGdldCBjYW52YXMnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxyXG4gICAgICAgIHJlc2l6ZSgpXHJcbiAgICB9KVxyXG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5sZXNzXCJcclxuaW1wb3J0IFwiLi9iYWNrZ3JvdW5kcy9mYWxsaW5nLXN0YXJzLWJnL2VudHJ5XCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=