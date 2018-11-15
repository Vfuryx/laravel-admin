webpackJsonp([9],{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(655)
}
var normalizeComponent = __webpack_require__(206)
/* script */
var __vue_script__ = __webpack_require__(657)
/* template */
var __vue_template__ = __webpack_require__(658)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08bc34a0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/page/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08bc34a0", Component.options)
  } else {
    hotAPI.reload("data-v-08bc34a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(207)("d930ae48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@1.0.1@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08bc34a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@1.0.1@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08bc34a0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "\n.login-wrap[data-v-08bc34a0] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-image: url(/img/login-bg.jpg);\n  background-size: 100%;\n}\n.ms-title[data-v-08bc34a0] {\n  width: 100%;\n  line-height: 50px;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n.ms-login[data-v-08bc34a0] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 350px;\n  margin: -190px 0 0 -175px;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.3);\n  overflow: hidden;\n}\n.ms-content[data-v-08bc34a0] {\n  padding: 30px 30px;\n}\n.login-btn[data-v-08bc34a0] {\n  text-align: center;\n}\n.login-btn button[data-v-08bc34a0] {\n  width: 100%;\n  height: 36px;\n  margin-bottom: 10px;\n}\n.login-tips[data-v-08bc34a0] {\n  font-size: 12px;\n  line-height: 30px;\n  color: #fff;\n}\n.yzc-ipt .el-input-group[data-v-08bc34a0]{\n  line-height: 0;\n}\n.yzc[data-v-08bc34a0]{\n  padding: 0;\n  margin-top: -4px;\n}\n.yzc img[data-v-08bc34a0]{\n  height: 30px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_index_js__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123123",
        code: "",
        key: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      src: "",
      loading: false
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var data = {
            username: _this.ruleForm.username,
            password: _this.ruleForm.password,
            captcha_key: _this.ruleForm.key,
            captcha_code: _this.ruleForm.code
          };
          _this.$store.dispatch("Login", data).then(function () {
            _this.$message({
              message: "登录成功!",
              type: "success"
            });
            _this.$store.dispatch("Profile");
            __WEBPACK_IMPORTED_MODULE_0__router_index_js__["a" /* default */].push({
              path: "/",
              query: { redirect: __WEBPACK_IMPORTED_MODULE_0__router_index_js__["a" /* default */].currentRoute.fullPath }
            });
          }).catch(function (error) {
            if (error.response) {
              var msg = error.response.data.message;
              _this.$message.error({
                message: msg
              });
              _this.getCode();
              _this.loginForm.code = "";
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    getCode: function getCode() {
      var _this2 = this;

      this.$post("/captchas").then(function (res) {
        _this2.src = res.captcha_image_content;
        _this2.ruleForm.key = res.captcha_key;
        _this2.ruleForm.code = "";
      });
    }
  },
  mounted: function mounted() {
    this.getCode();
  }
});

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-wrap" }, [
    _c(
      "div",
      { staticClass: "ms-login" },
      [
        _c("div", { staticClass: "ms-title" }, [_vm._v("后台管理系统")]),
        _vm._v(" "),
        _c(
          "el-form",
          {
            ref: "ruleForm",
            staticClass: "ms-content",
            attrs: {
              model: _vm.ruleForm,
              rules: _vm.rules,
              "label-width": "0px"
            }
          },
          [
            _c(
              "el-form-item",
              { attrs: { prop: "username" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { placeholder: "username" },
                    model: {
                      value: _vm.ruleForm.username,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "username", $$v)
                      },
                      expression: "ruleForm.username"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "prepend", icon: "el-icon-lx-people" },
                      slot: "prepend"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { prop: "password" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { type: "password", placeholder: "password" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        _vm.submitForm("ruleForm")
                      }
                    },
                    model: {
                      value: _vm.ruleForm.password,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "password", $$v)
                      },
                      expression: "ruleForm.password"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "prepend", icon: "el-icon-lx-lock" },
                      slot: "prepend"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { staticClass: "yzc-ipt", attrs: { prop: "code" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { type: "text", placeholder: "请输入验证码" },
                    model: {
                      value: _vm.ruleForm.code,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "code", $$v)
                      },
                      expression: "ruleForm.code"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "prepend", icon: "el-icon-lx-edit" },
                      slot: "prepend"
                    }),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        staticClass: "yzc",
                        attrs: { slot: "append" },
                        slot: "append"
                      },
                      [
                        _c("img", {
                          attrs: { src: _vm.src, alt: "" },
                          on: {
                            click: function($event) {
                              _vm.getCode()
                            }
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "login-btn" },
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary", loading: _vm.loading },
                    on: {
                      click: function($event) {
                        _vm.submitForm("ruleForm")
                      }
                    }
                  },
                  [_vm._v("登录")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-08bc34a0", module.exports)
  }
}

/***/ })

});