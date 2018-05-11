/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _public = __webpack_require__(/*! ./public */ "./src/config/public.js");

var _public2 = _interopRequireDefault(_public);

var _private = __webpack_require__(/*! ./private */ "./src/config/private.js");

var _private2 = _interopRequireDefault(_private);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = void 0;

if (true) {
  config = (0, _assign2.default)({}, _public2.default, _private2.default);
} else {}

exports.default = config;

/***/ }),

/***/ "./src/config/private.js":
/*!*******************************!*\
  !*** ./src/config/private.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  'webapp_port': 3000
};

exports.default = config;

/***/ }),

/***/ "./src/config/public.js":
/*!******************************!*\
  !*** ./src/config/public.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {};

exports.default = config;

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _config = __webpack_require__(/*! ../config */ "./src/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _default = __webpack_require__(/*! ./routes/default.js */ "./src/server/routes/default.js");

var AllRoutes0 = _interopRequireWildcard(_default);

var _statics = __webpack_require__(/*! ./routes/statics.js */ "./src/server/routes/statics.js");

var AllRoutes1 = _interopRequireWildcard(_statics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllRoutes = [AllRoutes0, AllRoutes1];

var app = new _express2.default();

var init = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            //Server route definations
            _lodash2.default.each(_lodash2.default.sortBy(AllRoutes, [function (_ref2) {
              var route = _ref2.route,
                  url = _ref2.url;

              return url;
            }]).reverse(), function (_ref3) {
              var route = _ref3.route,
                  url = _ref3.url;

              if (url) {
                app.use(url, route);
              } else {
                app.use(route);
              }
            });
            //----------------------

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init().then(function () {
  app.listen(_config2.default['webapp_port'], function () {
    console.log('Application running', 'PORT: ' + _config2.default['webapp_port']);
  });
});

/***/ }),

/***/ "./src/server/middlewares/default.js":
/*!*******************************************!*\
  !*** ./src/server/middlewares/default.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mwDefault = exports.mwSetCompressedJsUrl = undefined;
var _jsxFileName = '/home/ajith/Projects/node-app-base/src/server/middlewares/default.js';

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _httpProxyMiddleware = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

var _html = __webpack_require__(/*! ../../universal/components/html */ "./src/universal/components/html/index.js");

var _html2 = _interopRequireDefault(_html);

var _splash = __webpack_require__(/*! ../../universal/components/splash */ "./src/universal/components/splash/index.js");

var _splash2 = _interopRequireDefault(_splash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mwSetCompressedJsUrl = exports.mwSetCompressedJsUrl = function mwSetCompressedJsUrl(req, res, next) {
  if (false) {}
  next();
};

var mwDefault = exports.mwDefault = function mwDefault(req, res) {
  var html = _react2.default.createElement(
    _html2.default,
    {
      jsFileUrl: res._jsFileUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    },
    _react2.default.createElement(_splash2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    })
  );

  res.status(200);
  res.send('<!doctype html>\n' + _server2.default.renderToStaticMarkup(html));
  res.end();
};

/***/ }),

/***/ "./src/server/middlewares/statics.js":
/*!*******************************************!*\
  !*** ./src/server/middlewares/statics.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mwStatics = exports.mwStaticsClient = exports.msGzipHeaders = undefined;

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _httpProxyMiddleware = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mwStaticsClient = void 0;

if (true) {
  exports.mwStaticsClient = mwStaticsClient = (0, _httpProxyMiddleware2.default)({ target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } });
}

var mwStatics = _express2.default.static(_path2.default.join(process.cwd(), '/build/statics'));

var msGzipHeaders = function msGzipHeaders(req, res, next) {
  if (/.gz$/.test(req.originalUrl)) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/event-stream');
  }
  next();
};

exports.msGzipHeaders = msGzipHeaders;
exports.mwStaticsClient = mwStaticsClient;
exports.mwStatics = mwStatics;

/***/ }),

/***/ "./src/server/routes/default.js":
/*!**************************************!*\
  !*** ./src/server/routes/default.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = exports.url = undefined;

var _express = __webpack_require__(/*! express */ "express");

var _default = __webpack_require__(/*! ../middlewares/default */ "./src/server/middlewares/default.js");

var Router = (0, _express.Router)();

Router.use(_default.mwSetCompressedJsUrl);
Router.use(_default.mwDefault);

var url = exports.url = '';

var route = exports.route = Router;

/***/ }),

/***/ "./src/server/routes/statics.js":
/*!**************************************!*\
  !*** ./src/server/routes/statics.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = exports.url = undefined;

var _express = __webpack_require__(/*! express */ "express");

var _statics = __webpack_require__(/*! ../middlewares/statics */ "./src/server/middlewares/statics.js");

var Router = (0, _express.Router)();

Router.use(_statics.msGzipHeaders);
Router.use(_statics.mwStatics);
if (_statics.mwStaticsClient) {
  Router.use(_statics.mwStaticsClient);
}

var url = exports.url = '/statics';

var route = exports.route = Router;

/***/ }),

/***/ "./src/universal/components/html/index.js":
/*!************************************************!*\
  !*** ./src/universal/components/html/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class,
    _temp,
    _jsxFileName = '/home/ajith/Projects/node-app-base/src/universal/components/html/index.js';

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _favicon = __webpack_require__(/*! ../../images/favicon.ico */ "./src/universal/images/favicon.ico");

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Html, _React$Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'html',
        {
          lang: 'en',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          'head',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: _favicon2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'icon', type: 'image/x-icon', href: _favicon2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/statics/css/index.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            {
              id: 'application',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            this.props.children
          ),
          _react2.default.createElement('script', { src: this.props.jsFileUrl, charSet: 'UTF-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          })
        )
      );
    }
  }]);
  return Html;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.element.isRequired,
  jsFileUrl: _propTypes2.default.string.isRequired
}, _class.defaultProps = {
  jsFileUrl: '/statics/js/index.js'
}, _temp);
exports.default = Html;

/***/ }),

/***/ "./src/universal/components/splash/index.js":
/*!**************************************************!*\
  !*** ./src/universal/components/splash/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/home/ajith/Projects/node-app-base/src/universal/components/splash/index.js';

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Splash = function (_React$Component) {
  (0, _inherits3.default)(Splash, _React$Component);

  function Splash() {
    (0, _classCallCheck3.default)(this, Splash);
    return (0, _possibleConstructorReturn3.default)(this, (Splash.__proto__ || (0, _getPrototypeOf2.default)(Splash)).apply(this, arguments));
  }

  (0, _createClass3.default)(Splash, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        'Splash'
      );
    }
  }]);
  return Splash;
}(_react2.default.Component);

exports.default = Splash;

/***/ }),

/***/ "./src/universal/images/favicon.ico":
/*!******************************************!*\
  !*** ./src/universal/images/favicon.ico ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/statics/images/237587dfe0b89e49b328d24fa49ef6b0.ico";

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map