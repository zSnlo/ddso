"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

if (process.env.NODE_ENV == 'production') {
  _vue["default"].prototype.imgUrl = 'https://zsnlo.github.io/ddso/'; //设置图片的基础路径
} else if (process.env.NODE_ENV == 'development') {
  _vue["default"].prototype.imgUrl = ''; //设置图片的基础路径
}

;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');