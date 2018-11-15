webpackJsonp([11],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(588)
}
var normalizeComponent = __webpack_require__(206)
/* script */
var __vue_script__ = __webpack_require__(590)
/* template */
var __vue_template__ = __webpack_require__(591)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0eb55334"
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
Component.options.__file = "resources/assets/js/components/page/BaseTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eb55334", Component.options)
  } else {
    hotAPI.reload("data-v-0eb55334", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(589);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(207)("bab4f05c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0eb55334\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BaseTable.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0eb55334\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BaseTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "\n.handle-box[data-v-0eb55334] {\n    margin-bottom: 20px;\n}\n.handle-select[data-v-0eb55334] {\n    width: 120px;\n}\n.handle-input[data-v-0eb55334] {\n    width: 300px;\n    display: inline-block;\n}\n.del-dialog-cnt[data-v-0eb55334]{\n    font-size: 16px;\n    text-align: center\n}\n.table[data-v-0eb55334]{\n    width: 100%;\n    font-size: 14px;\n}\n.red[data-v-0eb55334]{\n    color: #ff0000;\n}\n", ""]);

// exports


/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'basetable',
    data: function data() {
        return {
            url: './static/vuetable.json',
            tableData: [],
            cur_page: 1,
            multipleSelection: [],
            select_cate: '',
            select_word: '',
            del_list: [],
            is_search: false,
            editVisible: false,
            delVisible: false,
            form: {
                name: '',
                date: '',
                address: ''
            },
            idx: -1
        };
    },
    created: function created() {
        this.getData();
    },

    computed: {
        data: function data() {
            var _this = this;

            return this.tableData.filter(function (d) {
                var is_del = false;
                for (var i = 0; i < _this.del_list.length; i++) {
                    if (d.name === _this.del_list[i].name) {
                        is_del = true;
                        break;
                    }
                }
                if (!is_del) {
                    if (d.address.indexOf(_this.select_cate) > -1 && (d.name.indexOf(_this.select_word) > -1 || d.address.indexOf(_this.select_word) > -1)) {
                        return d;
                    }
                }
            });
        }
    },
    methods: {
        // 分页导航
        handleCurrentChange: function handleCurrentChange(val) {
            this.cur_page = val;
            this.getData();
        },

        // 获取 easy-mock 的模拟数据
        getData: function getData() {
            var _this2 = this;

            // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
            if (true) {
                this.url = '/ms/table/list';
            };
            this.$axios.post(this.url, {
                page: this.cur_page
            }).then(function (res) {
                _this2.tableData = res.data.list;
            });
        },
        search: function search() {
            this.is_search = true;
        },
        formatter: function formatter(row, column) {
            return row.address;
        },
        filterTag: function filterTag(value, row) {
            return row.tag === value;
        },
        handleEdit: function handleEdit(index, row) {
            this.idx = index;
            var item = this.tableData[index];
            this.form = {
                name: item.name,
                date: item.date,
                address: item.address
            };
            this.editVisible = true;
        },
        handleDelete: function handleDelete(index, row) {
            this.idx = index;
            this.delVisible = true;
        },
        delAll: function delAll() {
            var length = this.multipleSelection.length;
            var str = '';
            this.del_list = this.del_list.concat(this.multipleSelection);
            for (var i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error('删除了' + str);
            this.multipleSelection = [];
        },
        handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        // 保存编辑
        saveEdit: function saveEdit() {
            this.$set(this.tableData, this.idx, this.form);
            this.editVisible = false;
            this.$message.success('\u4FEE\u6539\u7B2C ' + (this.idx + 1) + ' \u884C\u6210\u529F');
        },

        // 确定删除
        deleteRow: function deleteRow() {
            this.tableData.splice(this.idx, 1);
            this.$message.success('删除成功');
            this.delVisible = false;
        }
    }
});

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "table" },
    [
      _c(
        "div",
        { staticClass: "crumbs" },
        [
          _c(
            "el-breadcrumb",
            { attrs: { separator: "/" } },
            [
              _c("el-breadcrumb-item", [
                _c("i", { staticClass: "el-icon-lx-cascades" }),
                _vm._v(" 基础表格")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "div",
            { staticClass: "handle-box" },
            [
              _c(
                "el-button",
                {
                  staticClass: "handle-del mr10",
                  attrs: { type: "primary", icon: "delete" },
                  on: { click: _vm.delAll }
                },
                [_vm._v("批量删除")]
              ),
              _vm._v(" "),
              _c(
                "el-select",
                {
                  staticClass: "handle-select mr10",
                  attrs: { placeholder: "筛选省份" },
                  model: {
                    value: _vm.select_cate,
                    callback: function($$v) {
                      _vm.select_cate = $$v
                    },
                    expression: "select_cate"
                  }
                },
                [
                  _c("el-option", {
                    key: "1",
                    attrs: { label: "广东省", value: "广东省" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    key: "2",
                    attrs: { label: "湖南省", value: "湖南省" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "handle-input mr10",
                attrs: { placeholder: "筛选关键词" },
                model: {
                  value: _vm.select_word,
                  callback: function($$v) {
                    _vm.select_word = $$v
                  },
                  expression: "select_word"
                }
              }),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", icon: "search" },
                  on: { click: _vm.search }
                },
                [_vm._v("搜索")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              ref: "multipleTable",
              staticClass: "table",
              attrs: { data: _vm.data, border: "" },
              on: { "selection-change": _vm.handleSelectionChange }
            },
            [
              _c("el-table-column", {
                attrs: { type: "selection", width: "55", align: "center" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "date",
                  label: "日期",
                  sortable: "",
                  width: "150"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "name", label: "姓名", width: "120" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "address",
                  label: "地址",
                  formatter: _vm.formatter
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "180", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", icon: "el-icon-edit" },
                            on: {
                              click: function($event) {
                                _vm.handleEdit(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("编辑")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            staticClass: "red",
                            attrs: { type: "text", icon: "el-icon-delete" },
                            on: {
                              click: function($event) {
                                _vm.handleDelete(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pagination" },
            [
              _c("el-pagination", {
                attrs: {
                  background: "",
                  layout: "prev, pager, next",
                  total: 1000
                },
                on: { "current-change": _vm.handleCurrentChange }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "编辑", visible: _vm.editVisible, width: "30%" },
          on: {
            "update:visible": function($event) {
              _vm.editVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "form", attrs: { model: _vm.form, "label-width": "50px" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "日期" } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: {
                      type: "date",
                      placeholder: "选择日期",
                      "value-format": "yyyy-MM-dd"
                    },
                    model: {
                      value: _vm.form.date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date", $$v)
                      },
                      expression: "form.date"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "姓名" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "地址" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.address,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.editVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.saveEdit } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "提示",
            visible: _vm.delVisible,
            width: "300px",
            center: ""
          },
          on: {
            "update:visible": function($event) {
              _vm.delVisible = $event
            }
          }
        },
        [
          _c("div", { staticClass: "del-dialog-cnt" }, [
            _vm._v("删除不可恢复，是否确定删除？")
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.delVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.deleteRow } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0eb55334", module.exports)
  }
}

/***/ })

});