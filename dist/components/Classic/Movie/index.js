(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/Classic/Movie/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _movie = __webpack_require__(/*! ../images/movie.png */ "./src/components/Classic/images/movie.png");

var _movie2 = _interopRequireDefault(_movie);

__webpack_require__(/*! ./index.scss */ "./src/components/Classic/Movie/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Movie, _Taro$Component);

  function Movie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Movie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Movie.__proto__ || Object.getPrototypeOf(Movie)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imageUrl", "movieTag", "content"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Movie, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var props = this.__props;

      var imageUrl = props.imageUrl,
          content = props.content;

      Object.assign(this.__state, {
        imageUrl: imageUrl,
        movieTag: _movie2.default,
        content: content
      });
      return this.__state;
    }
  }]);

  return Movie;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "components/Classic/Movie/index", _temp2);
exports.default = Movie;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Movie));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\MSI\\Desktop\\编程\\taro-oldLand\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/MSI/Desktop/编程/taro-oldLand/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/Classic/Movie/index.wxml";

/***/ }),

/***/ "./src/components/Classic/Movie/index.scss":
/*!*************************************************!*\
  !*** ./src/components/Classic/Movie/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Classic/Movie/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Classic/Movie/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************!*\
  !*** ./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Classic/Movie/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************!*\
  !*** ./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_C_Users_MSI_Desktop_taro_oldLand_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/MSI/Desktop/编程/taro-oldLand/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\MSI\\Desktop\\编程\\taro-oldLand\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Classic/Movie/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_C_Users_MSI_Desktop_taro_oldLand_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_C_Users_MSI_Desktop_taro_oldLand_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_C_Users_MSI_Desktop_taro_oldLand_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_C_Users_MSI_Desktop_taro_oldLand_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/Classic/images/movie.png":
/*!*************************************************!*\
  !*** ./src/components/Classic/images/movie.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAACOCAYAAABOpTrZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA4MzM3Qzg2QkQwMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQ2N0E4NkM2QkQ3MTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDgzMzdDNjZCRDAxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDgzMzdDNzZCRDAxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrY3q94AAASJSURBVHja7JyPUbMwFMCD1wVYAUfAEeIIdQQ6Ao7QjoAjwAh0BBgBR2hH4Ev0RXMI+Q8N373c5aq2hJ+Pl/cvSQlZoY3jSFkvDT/r1MlK4GfWb2uCP5GdNgRHcASPtCULJqpiL0ePcVN4vXvyvbF+nXvjoLnxh+MNKeu5x/UZCC6zdSA1690DHVA+frcCHRCCIziCI7iyHVTej9tTDwdCfK93BecXd56C6R4h8U/WL47jHsHtnzwkXlpfhS4frQqCIziCI/gjY5Xc1IksJdse13uB3z1cPoV+8eRr9ubyscyM4AEaVU3OJlJoHqe3rL/OgidJEiv4TzF1b6oictF+r+Bkj+D9muCfUN5IV7Ao/WpiYcAZJLtVQM9JYUz+Or+UEgj+DCWGK3SXZZU7qAeVpP2yukJCeWEY/Rsfo5SfQPLo2ea6oQBjFQRHcARHcARHcARHcARHcARHcARHcARHcASPryVJkrJO5b9Nl1L4Xqoy8H35HvBPH2jyve7DX5+XwHlllG+5uwQA5uNQ8rtu4wLNx6jh11fVZ7m0Qx1rKmAs5d5Dxckq/vRvQtrRryyDPtcg6YZBvrL+p7Z+iAyaS1msYnDga9RWhesy6y1ImcM+q6BVEh83Ys4Y8Bn0uddJ2QT8PQQUTNC5RsEQUDCVJwb84XOzta0K/3mAv/P9MIXrfpWtJ2cP/UQWDiaZtkdYlbcQgxwUKhNCxzdrQi9D9szFcy5409znzHLICWwDLe6buoJTkxgkJLikCaWPxFMYpNgCfA7a53j7IMUUq4FL6lFO30vgzdJR8jY7Iu5yIiCDL8QvFUj7nX3mMmcOrxtZLKN/EjKeGubSG4OOc2PbRDUoJA832fRt9hUOtuCgdjXocz2X8UQHDnospHz0CbJanwR3Jqg6KfxBBZ61gdDWeLIfFrJzEcX5tOOCk8pAHcR9XhhwkJ1tt0BBVk2WD+lVIHGyl3hcNNfDe9xccmE0u6odMugCVOz6tCNobjDOUGvZ1abgUlazg0OGvnkGBDXEUmcybwGzH+3JFgMPmUI02obwnB3o2xbxeA3CTGMwh6YqUoIj+1P4fFLE2q5uPw0EfYSnejItywnPNjioSk0sj7QvqIfIa8820WEm0iUH8Mw2ZFBAV7ZhrZgMrpOztKkCLCTGlW08Tg0zeJ1VaU1VRgKplhJjE/DO8IY6cBuVEV8VYZVIuD5iEzv+U3nSfOYG42UuXxuYG0xIFwc0kN/lvqlKdjrLoQP/camWlSwT8GIybi4lxZ0uk9eBUwBPFbHLTdL/EX63DaJauHYQ2Y9PBpQYSi2dFHYaYn+u5ww5ZmNSydJ61kjqKtYNt30gOIIjOIIjOIIjOIL/p02UjzuI1UV2lca86ibWNUVGVE+SFRojuCiFtNNEmfx+j8q4BP/I9qUWGnX4Up+YwEVVoTDc8pHHsrdW1G5065u9VDSKwhzeJYuiszhR2fFemqC6CWzyZDZtLVFs7wB14u/XsVkVUUETxdFUMoWipjgsOaIYvKaw19PeqrxnFAUhWMcU5yn4xL3qdlT8E2AAAXu85ziGQuYAAAAASUVORK5CYII="

/***/ })

},[["./src/components/Classic/Movie/index.tsx","runtime","vendors"]]]);