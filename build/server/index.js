/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(12);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

var _default = __webpack_require__(18);

var allRoutes0 = _interopRequireWildcard(_default);

var _statics = __webpack_require__(23);

var allRoutes1 = _interopRequireWildcard(_statics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allRoutes = [allRoutes0, allRoutes1];

var app = new _express2.default();

var init = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            //Server route definations
            _lodash2.default.each(_lodash2.default.sortBy(allRoutes, [function (_ref2) {
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
    console.log("Application running", 'PORT: ' + _config2.default['webapp_port']);
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _public = __webpack_require__(16);

var _public2 = _interopRequireDefault(_public);

var _private = __webpack_require__(17);

var _private2 = _interopRequireDefault(_private);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = void 0;

if (true) {
  config = (0, _assign2.default)({}, _public2.default, _private2.default);
} else {
  config = (0, _assign2.default)({}, _public2.default);
}

exports.default = config;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {};

exports.default = config;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = exports.url = undefined;

var _express = __webpack_require__(0);

var _default = __webpack_require__(19);

var Router = (0, _express.Router)();

Router.use(_default.defaultResponse);

var url = exports.url = "";

var route = exports.route = Router;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultResponse = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _server2 = _interopRequireDefault(_server);

var _httpProxyMiddleware = __webpack_require__(2);

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

var _Html = __webpack_require__(21);

var _Html2 = _interopRequireDefault(_Html);

var _Splash = __webpack_require__(22);

var _Splash2 = _interopRequireDefault(_Splash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultResponse = exports.defaultResponse = function defaultResponse(req, res) {
  var html = _react2.default.createElement(_Html2.default, {
    content: _react2.default.createElement(_Splash2.default, null)
  });

  res.status(200);
  res.send('<!doctype html>\n' + _server2.default.renderToStaticMarkup(html));
  res.end();
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function (_React$Component) {
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
          style: {
            height: "100%",
            width: "100%"
          }
        },
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/statics/css/index.css' })
        ),
        _react2.default.createElement(
          'body',
          {
            style: {
              height: "100%",
              width: "100%",
              margin: 0
            }
          },
          _react2.default.createElement(
            'div',
            {
              style: {
                height: "100%",
                width: "100%"
              },
              id: 'application'
            },
            this.props.content
          ),
          _react2.default.createElement('script', { src: '/statics/index.js', charSet: 'UTF-8' })
        )
      );
    }
  }]);
  return Html;
}(_react2.default.Component);

Html.propTypes = {
  content: _propTypes2.default.object.isRequired
};

exports.default = Html;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

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
        null,
        'Splash'
      );
    }
  }]);
  return Splash;
}(_react2.default.Component);

Splash.propTypes = {};

exports.default = Splash;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = exports.url = undefined;

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(24);

var _path2 = _interopRequireDefault(_path);

var _httpProxyMiddleware = __webpack_require__(2);

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = (0, _express.Router)();

if (true) {
  Router.get('/index.js', function (req, res, next) {
    return res.sendFile(_path2.default.join(process.cwd(), 'build/client/index.js'));
  });
  Router.use(_express2.default.static(_path2.default.join(process.cwd(), '/build/client/statics')));
} else {
  Router.use('/index.js', (0, _httpProxyMiddleware2.default)({ target: 'http://localhost:3001', pathRewrite: { '^/statics': '' } }));
  Router.use('/', (0, _httpProxyMiddleware2.default)({ target: 'http://localhost:3001' }));
}

var url = exports.url = "/statics";

var route = exports.route = Router;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map