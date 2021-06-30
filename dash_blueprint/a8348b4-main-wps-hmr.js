webpackHotUpdatedash_blueprint("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dash_blueprint/blueprint.css */ "./dash_blueprint/blueprint.css");
/* harmony import */ var _dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */




var rows = [{
  key: "1",
  label: "Object 1",
  count: 20,
  "type": "object"
}, {
  key: "2",
  label: "Object with a really super long name",
  count: 10,
  "type": "object"
}, {
  key: "3",
  label: "Object 3",
  count: 5,
  "type": "object"
}, {
  key: "4",
  label: "Object 4",
  count: 5,
  "type": "object"
}, {
  key: "5",
  label: "Object 5",
  count: 5,
  "type": "concept"
}, {
  key: "6",
  label: "Object 6",
  count: 5
}, {
  key: "7",
  label: "Object 7",
  count: 5
}, {
  key: "8",
  label: "Object 8",
  count: 5
}, {
  key: "9",
  label: "Object 9",
  count: 5
}, {
  key: "10",
  label: "Object 10",
  count: 5
}];
var columns = [{
  "label": null,
  "type": "action",
  "icon": "locate"
}, {
  "label": "Name",
  "key": "label",
  "type": "string",
  "filter": "string"
}, {
  "label": "Count",
  "key": "count",
  "type": "number",
  "filter": "string"
}, {
  "label": "Type",
  "key": "type",
  "type": "string",
  "filter": "select"
}];
var actions = ["target", "info"];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      value: ''
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PropertyTable"], {
        rows: rows,
        columns: columns,
        actions: actions
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJyb3dzIiwia2V5IiwibGFiZWwiLCJjb3VudCIsImNvbHVtbnMiLCJhY3Rpb25zIiwiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQUNDLEtBQUcsRUFBRSxHQUFOO0FBQVdDLE9BQUssRUFBRSxVQUFsQjtBQUE4QkMsT0FBSyxFQUFFLEVBQXJDO0FBQXlDLFVBQVE7QUFBakQsQ0FEUyxFQUVUO0FBQUNGLEtBQUcsRUFBRSxHQUFOO0FBQVdDLE9BQUssRUFBRSxzQ0FBbEI7QUFBMERDLE9BQUssRUFBRSxFQUFqRTtBQUFxRSxVQUFRO0FBQTdFLENBRlMsRUFHVDtBQUFDRixLQUFHLEVBQUUsR0FBTjtBQUFXQyxPQUFLLEVBQUUsVUFBbEI7QUFBOEJDLE9BQUssRUFBRSxDQUFyQztBQUF3QyxVQUFRO0FBQWhELENBSFMsRUFJVDtBQUFDRixLQUFHLEVBQUUsR0FBTjtBQUFXQyxPQUFLLEVBQUUsVUFBbEI7QUFBOEJDLE9BQUssRUFBRSxDQUFyQztBQUF3QyxVQUFRO0FBQWhELENBSlMsRUFLVDtBQUFDRixLQUFHLEVBQUUsR0FBTjtBQUFXQyxPQUFLLEVBQUUsVUFBbEI7QUFBOEJDLE9BQUssRUFBRSxDQUFyQztBQUF3QyxVQUFRO0FBQWhELENBTFMsRUFNVDtBQUFDRixLQUFHLEVBQUUsR0FBTjtBQUFXQyxPQUFLLEVBQUUsVUFBbEI7QUFBOEJDLE9BQUssRUFBRTtBQUFyQyxDQU5TLEVBT1Q7QUFBQ0YsS0FBRyxFQUFFLEdBQU47QUFBV0MsT0FBSyxFQUFFLFVBQWxCO0FBQThCQyxPQUFLLEVBQUU7QUFBckMsQ0FQUyxFQVFUO0FBQUNGLEtBQUcsRUFBRSxHQUFOO0FBQVdDLE9BQUssRUFBRSxVQUFsQjtBQUE4QkMsT0FBSyxFQUFFO0FBQXJDLENBUlMsRUFTVDtBQUFDRixLQUFHLEVBQUUsR0FBTjtBQUFXQyxPQUFLLEVBQUUsVUFBbEI7QUFBOEJDLE9BQUssRUFBRTtBQUFyQyxDQVRTLEVBVVQ7QUFBQ0YsS0FBRyxFQUFFLElBQU47QUFBWUMsT0FBSyxFQUFFLFdBQW5CO0FBQWdDQyxPQUFLLEVBQUU7QUFBdkMsQ0FWUyxDQUFiO0FBYUEsSUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFDSSxXQUFTLElBRGI7QUFFSSxVQUFRLFFBRlo7QUFHSSxVQUFRO0FBSFosQ0FEWSxFQU1aO0FBQ0ksV0FBUyxNQURiO0FBRUksU0FBTyxPQUZYO0FBR0ksVUFBUSxRQUhaO0FBSUksWUFBVTtBQUpkLENBTlksRUFZWjtBQUNJLFdBQVMsT0FEYjtBQUVJLFNBQU8sT0FGWDtBQUdJLFVBQVEsUUFIWjtBQUlJLFlBQVU7QUFKZCxDQVpZLEVBa0JaO0FBQ0ksV0FBUyxNQURiO0FBRUksU0FBTyxNQUZYO0FBR0ksVUFBUSxRQUhaO0FBSUksWUFBVTtBQUpkLENBbEJZLENBQWhCO0FBMEJBLElBQU1DLE9BQU8sR0FBRyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQWhCOztJQUVNQyxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFO0FBREUsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUxVO0FBTWI7Ozs7V0FFRCxrQkFBU0MsUUFBVCxFQUFtQjtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLDBCQUNJLHFGQUNJLDJEQUFDLGtEQUFEO0FBQWUsWUFBSSxFQUFFWCxJQUFyQjtBQUEyQixlQUFPLEVBQUVJLE9BQXBDO0FBQTZDLGVBQU8sRUFBRUM7QUFBdEQsUUFESixDQURKO0FBS0g7Ozs7RUFwQmFRLCtDOztBQXVCSFAsa0VBQWYsRSIsImZpbGUiOiJhODM0OGI0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IFByb3BlcnR5VGFibGUgfSBmcm9tICcuLi9saWInO1xuaW1wb3J0ICcuLi8uLi9kYXNoX2JsdWVwcmludC9ibHVlcHJpbnQuY3NzJ1xuXG5jb25zdCByb3dzID0gW1xuICAgIHtrZXk6IFwiMVwiLCBsYWJlbDogXCJPYmplY3QgMVwiLCBjb3VudDogMjAsIFwidHlwZVwiOiBcIm9iamVjdFwifSxcbiAgICB7a2V5OiBcIjJcIiwgbGFiZWw6IFwiT2JqZWN0IHdpdGggYSByZWFsbHkgc3VwZXIgbG9uZyBuYW1lXCIsIGNvdW50OiAxMCwgXCJ0eXBlXCI6IFwib2JqZWN0XCJ9LFxuICAgIHtrZXk6IFwiM1wiLCBsYWJlbDogXCJPYmplY3QgM1wiLCBjb3VudDogNSwgXCJ0eXBlXCI6IFwib2JqZWN0XCJ9LFxuICAgIHtrZXk6IFwiNFwiLCBsYWJlbDogXCJPYmplY3QgNFwiLCBjb3VudDogNSwgXCJ0eXBlXCI6IFwib2JqZWN0XCJ9LFxuICAgIHtrZXk6IFwiNVwiLCBsYWJlbDogXCJPYmplY3QgNVwiLCBjb3VudDogNSwgXCJ0eXBlXCI6IFwiY29uY2VwdFwifSxcbiAgICB7a2V5OiBcIjZcIiwgbGFiZWw6IFwiT2JqZWN0IDZcIiwgY291bnQ6IDV9LFxuICAgIHtrZXk6IFwiN1wiLCBsYWJlbDogXCJPYmplY3QgN1wiLCBjb3VudDogNX0sXG4gICAge2tleTogXCI4XCIsIGxhYmVsOiBcIk9iamVjdCA4XCIsIGNvdW50OiA1fSxcbiAgICB7a2V5OiBcIjlcIiwgbGFiZWw6IFwiT2JqZWN0IDlcIiwgY291bnQ6IDV9LFxuICAgIHtrZXk6IFwiMTBcIiwgbGFiZWw6IFwiT2JqZWN0IDEwXCIsIGNvdW50OiA1fSxcbl1cblxuY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICAgIFwibGFiZWxcIjogbnVsbCxcbiAgICAgICAgXCJ0eXBlXCI6IFwiYWN0aW9uXCIsXG4gICAgICAgIFwiaWNvblwiOiBcImxvY2F0ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibGFiZWxcIjogXCJOYW1lXCIsXG4gICAgICAgIFwia2V5XCI6IFwibGFiZWxcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiZmlsdGVyXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJsYWJlbFwiOiBcIkNvdW50XCIsXG4gICAgICAgIFwia2V5XCI6IFwiY291bnRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgIFwiZmlsdGVyXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJsYWJlbFwiOiBcIlR5cGVcIixcbiAgICAgICAgXCJrZXlcIjogXCJ0eXBlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImZpbHRlclwiOiBcInNlbGVjdFwiLFxuICAgIH1cbl1cblxuY29uc3QgYWN0aW9ucyA9IFtcInRhcmdldFwiLCBcImluZm9cIl1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UHJvcGVydHlUYWJsZSByb3dzPXtyb3dzfSBjb2x1bW5zPXtjb2x1bW5zfSBhY3Rpb25zPXthY3Rpb25zfT48L1Byb3BlcnR5VGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==