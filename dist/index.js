var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.mint-button{\n  border:none;\n  background: #f00;\n  color:#FFF;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mt-button',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<button class=\"mint-button\" :type=\"type\" name=\"button\">\n  <slot></slot>\n</button>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.mint-button{\n  border:none;\n  background: #f00;\n  color:#FFF;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-7e85a61f", module.exports)
  } else {
    hotAPI.update("_v-7e85a61f", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}