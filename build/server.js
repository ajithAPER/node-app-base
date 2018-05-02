!function(e){var t={};function r(u){if(t[u])return t[u].exports;var n=t[u]={i:u,l:!1,exports:{}};return e[u].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,u){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:u})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.w={},r(r.s=35)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("graphql-compose")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mwGraphiql=t.mwGraphql=void 0;var u,n=r(22),o=r(21),a=(u=o)&&u.__esModule?u:{default:u};t.mwGraphql=(0,n.graphqlExpress)({schema:a.default}),t.mwGraphiql=(0,n.graphiqlExpress)({endpointURL:"/graphql"})},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("babel-runtime/helpers/inherits")},function(e,t){e.exports=require("babel-runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/core-js/object/get-prototype-of")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mwStatics=t.mwStaticsClient=t.msGzipHeaders=void 0;var u=o(r(0)),n=o(r(15));o(r(11));function o(e){return e&&e.__esModule?e:{default:e}}var a=u.default.static(n.default.join(process.cwd(),"/build/statics"));t.msGzipHeaders=function(e,t,r){/.gz$/.test(e.originalUrl)&&(t.set("Content-Encoding","gzip"),t.set("Content-Type","text/event-stream")),r()},t.mwStaticsClient=void 0,t.mwStatics=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.route=t.url=void 0;var u=r(0),n=r(16),o=(0,u.Router)();o.use(n.msGzipHeaders),o.use(n.mwStatics),n.mwStaticsClient&&o.use(n.mwStaticsClient);t.url="/statics",t.route=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.route=t.url=void 0;var u,n=r(0),o=r(4),a=(u=o)&&u.__esModule?u:{default:u},i=r(3);var l=(0,n.Router)();l.use(a.default.json()),l.use(i.mwGraphql);t.url="/graphql",t.route=l},function(e,t){e.exports=require("graphql")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(14)),n=a(r(13)),o=r(19);function a(e){return e&&e.__esModule?e:{default:e}}var i=new(r(2).Resolver)({name:"test",type:o.GraphQLString,resolve:function(){var e=(0,n.default)(u.default.mark(function e(t){t.source,t.args,t.context,t.info;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","Working");case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()});t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,n=r(2),o=r(12),a=(u=o)&&u.__esModule?u:{default:u};var i=[function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(20))],l={};a.default.each(i,function(e){var t=e.default;l[t.name]=t}),n.GQC.rootQuery().addFields(l),t.default=n.GQC.buildSchema()},function(e,t){e.exports=require("apollo-server-express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.route=t.url=void 0;var u,n=r(0),o=r(4),a=((u=o)&&u.__esModule,r(3));var i=(0,n.Router)();i.use(a.mwGraphiql);t.url="/graphiql",t.route=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=s(r(10)),n=s(r(9)),o=s(r(8)),a=s(r(7)),i=s(r(6)),l=s(r(1));s(r(5));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,n.default)(this,t),(0,a.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return l.default.createElement("div",null,"Splash")}}]),t}(l.default.Component);t.default=c},function(e,t){e.exports="/statics/images/237587dfe0b89e49b328d24fa49ef6b0.ico"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,n,o=p(r(10)),a=p(r(9)),i=p(r(8)),l=p(r(7)),s=p(r(6)),c=p(r(1)),f=p(r(5)),d=p(r(25));function p(e){return e&&e.__esModule?e:{default:e}}var v=(n=u=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return c.default.createElement("html",{lang:"en"},c.default.createElement("head",null,c.default.createElement("meta",{charSet:"utf-8"}),c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.default.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:d.default}),c.default.createElement("link",{rel:"icon",type:"image/x-icon",href:d.default}),c.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/statics/css/index.css"})),c.default.createElement("body",null,c.default.createElement("div",{id:"application"},this.props.children),c.default.createElement("script",{src:this.props.jsFileUrl,charSet:"UTF-8"})))}}]),t}(c.default.Component),u.propTypes={children:f.default.element.isRequired,jsFileUrl:f.default.string.isRequired},u.defaultProps={jsFileUrl:"/statics/js/index.js"},n);t.default=v},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mwDefault=t.mwSetCompressedJsUrl=void 0;var u=i(r(1)),n=i(r(27)),o=(i(r(11)),i(r(26))),a=i(r(24));function i(e){return e&&e.__esModule?e:{default:e}}t.mwSetCompressedJsUrl=function(e,t,r){e.headers["accept-encoding"]&&/gzip/.test(e.headers["accept-encoding"])&&(t._jsFileUrl="/statics/js/index.js.gz"),r()},t.mwDefault=function(e,t){var r=u.default.createElement(o.default,{jsFileUrl:t._jsFileUrl},u.default.createElement(a.default,null));t.status(200),t.send("<!doctype html>\n"+n.default.renderToStaticMarkup(r)),t.end()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.route=t.url=void 0;var u=r(0),n=r(28),o=(0,u.Router)();o.use(n.mwSetCompressedJsUrl),o.use(n.mwDefault);t.url="",t.route=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={webapp_port:3e3}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={}},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(32)),n=a(r(31)),o=a(r(30));function a(e){return e&&e.__esModule?e:{default:e}}var i=void 0;i=(0,u.default)({},n.default,o.default),t.default=i},function(e,t){e.exports=require("source-map-support/register")},function(e,t,r){"use strict";var u=s(r(14)),n=s(r(13));r(34);var o=s(r(0)),a=s(r(12)),i=s(r(33));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}var c,f=[l(r(29)),l(r(23)),l(r(18)),l(r(17))],d=new o.default;(c=(0,n.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.default.each(a.default.sortBy(f,[function(e){e.route;return e.url}]).reverse(),function(e){var t=e.route,r=e.url;r?d.use(r,t):d.use(t)});case 1:case"end":return e.stop()}},e,void 0)})),function(){return c.apply(this,arguments)})().then(function(){d.listen(i.default.webapp_port,function(){console.log("Application running","PORT: "+i.default.webapp_port)})})}]);
//# sourceMappingURL=server.js.map