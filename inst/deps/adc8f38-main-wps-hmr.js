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
/* harmony import */ var _blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core/lib/css/blueprint.css */ "./node_modules/@blueprintjs/core/lib/css/blueprint.css");
/* harmony import */ var _blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_2__);
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint no-magic-numbers: 0 */




var data = _toConsumableArray(Array(1000).keys()).map(function (i) {
  return {
    x: Math.trunc(Math.random() * 50),
    value: Math.trunc(Math.random() * 50) + 50
  };
});

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "300px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["RangeSelector"], {
        data: data // yLines={[220,240,260]}
        ,
        isDate: false,
        selectSingle: false,
        group: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        text: "foo",
        intent: "success",
        minimal: true
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiQXJyYXkiLCJrZXlzIiwibWFwIiwiaSIsIngiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJ2YWx1ZSIsIkFwcCIsInN0YXRlIiwic2V0UHJvcHMiLCJiaW5kIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsbUJBQUlDLEtBQUssQ0FBQyxJQUFELENBQUwsQ0FBWUMsSUFBWixFQUFKLEVBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxDQUFELEVBQU87QUFDNUMsU0FBTztBQUNIQyxLQUFDLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FEQTtBQUVIQyxTQUFLLEVBQUVILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUM7QUFGckMsR0FBUDtBQUlILENBTFksQ0FBYjs7SUFPTUUsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RGLFdBQUssRUFBRTtBQURFLEtBQWI7QUFHQSxVQUFLRyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFMVTtBQU1iOzs7O1dBRUQsa0JBQVNDLFFBQVQsRUFBbUI7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFDSTtBQUFLLGFBQUssRUFBRTtBQUFDRSxnQkFBTSxFQUFFO0FBQVQ7QUFBWixzQkFDSSwyREFBQyxrREFBRDtBQUNJLFlBQUksRUFBRWhCLElBRFYsQ0FFSTtBQUZKO0FBR0ksY0FBTSxFQUFFLEtBSFo7QUFJSSxvQkFBWSxFQUFFLEtBSmxCO0FBS0ksYUFBSyxFQUFFO0FBTFgsUUFESixlQVNJLDJEQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLEtBQWI7QUFBbUIsY0FBTSxFQUFDLFNBQTFCO0FBQW9DLGVBQU8sRUFBRTtBQUE3QyxRQVRKLENBREo7QUFhSDs7OztFQTVCYWlCLCtDOztBQStCSFAsa0VBQWYsRSIsImZpbGUiOiJhZGM4ZjM4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmFuZ2VTZWxlY3RvciwgQnV0dG9uIH0gZnJvbSAnLi4vbGliJztcblxuaW1wb3J0IFwiQGJsdWVwcmludGpzL2NvcmUvbGliL2Nzcy9ibHVlcHJpbnQuY3NzXCI7XG5cbmNvbnN0IGRhdGEgPSBbLi4uQXJyYXkoMTAwMCkua2V5cygpXS5tYXAoKGkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiA1MCksXG4gICAgICAgIHZhbHVlOiBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1MFxuICAgIH07XG59KVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjMwMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8UmFuZ2VTZWxlY3RvciBcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgLy8geUxpbmVzPXtbMjIwLDI0MCwyNjBdfVxuICAgICAgICAgICAgICAgICAgICBpc0RhdGU9e2ZhbHNlfSAgXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFNpbmdsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cImZvb1wiIGludGVudD1cInN1Y2Nlc3NcIiBtaW5pbWFsPXt0cnVlfT48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9