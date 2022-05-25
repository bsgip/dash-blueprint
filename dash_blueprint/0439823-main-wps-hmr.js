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

/* eslint no-magic-numbers: 0 */



var TREE = [{
  id: 0,
  hasCaret: true,
  icon: 'folder-close',
  label: 'Folder 0'
}, {
  id: 1,
  icon: 'folder-close',
  isExpanded: true,
  label: 'FOLDER 1',
  childNodes: [{
    id: 2,
    icon: 'document',
    label: 'Item 0',
    secondaryLabel: 'SECONDARY'
  }, {
    id: 3,
    label: 'Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.'
  }, {
    id: 4,
    hasCaret: true,
    icon: 'folder-close',
    childNodes: [{
      id: 5,
      label: 'No-Icon Item'
    }, {
      id: 6,
      icon: 'tag',
      label: 'Item 1'
    }, {
      id: 7,
      hasCaret: true,
      icon: 'folder-close',
      label: 'Folder 3',
      childNodes: [{
        id: 8,
        icon: 'document',
        label: 'Item 0'
      }, {
        id: 9,
        icon: 'tag',
        label: 'Item 1'
      }]
    }]
  }]
}, {
  id: 2,
  hasCaret: true,
  icon: 'folder-close',
  label: 'Super secret files',
  disabled: true
}];

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
          height: '300px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Tree"], {
        nodes: TREE
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJUUkVFIiwiaWQiLCJoYXNDYXJldCIsImljb24iLCJsYWJlbCIsImlzRXhwYW5kZWQiLCJjaGlsZE5vZGVzIiwic2Vjb25kYXJ5TGFiZWwiLCJkaXNhYmxlZCIsIkFwcCIsInN0YXRlIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiaGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFBQ0MsSUFBRSxFQUFFLENBQUw7QUFBUUMsVUFBUSxFQUFFLElBQWxCO0FBQXdCQyxNQUFJLEVBQUUsY0FBOUI7QUFBOENDLE9BQUssRUFBRTtBQUFyRCxDQURTLEVBRVQ7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUUsTUFBSSxFQUFFLGNBRlY7QUFHSUUsWUFBVSxFQUFFLElBSGhCO0FBSUlELE9BQUssRUFBRSxVQUpYO0FBS0lFLFlBQVUsRUFBRSxDQUNSO0FBQ0lMLE1BQUUsRUFBRSxDQURSO0FBRUlFLFFBQUksRUFBRSxVQUZWO0FBR0lDLFNBQUssRUFBRSxRQUhYO0FBSUlHLGtCQUFjLEVBQUU7QUFKcEIsR0FEUSxFQU9SO0FBQ0lOLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFDRDtBQUhSLEdBUFEsRUFZUjtBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxZQUFRLEVBQUUsSUFGZDtBQUdJQyxRQUFJLEVBQUUsY0FIVjtBQUlJRyxjQUFVLEVBQUUsQ0FDUjtBQUFDTCxRQUFFLEVBQUUsQ0FBTDtBQUFRRyxXQUFLLEVBQUU7QUFBZixLQURRLEVBRVI7QUFBQ0gsUUFBRSxFQUFFLENBQUw7QUFBUUUsVUFBSSxFQUFFLEtBQWQ7QUFBcUJDLFdBQUssRUFBRTtBQUE1QixLQUZRLEVBR1I7QUFDSUgsUUFBRSxFQUFFLENBRFI7QUFFSUMsY0FBUSxFQUFFLElBRmQ7QUFHSUMsVUFBSSxFQUFFLGNBSFY7QUFJSUMsV0FBSyxFQUFFLFVBSlg7QUFLSUUsZ0JBQVUsRUFBRSxDQUNSO0FBQUNMLFVBQUUsRUFBRSxDQUFMO0FBQVFFLFlBQUksRUFBRSxVQUFkO0FBQTBCQyxhQUFLLEVBQUU7QUFBakMsT0FEUSxFQUVSO0FBQUNILFVBQUUsRUFBRSxDQUFMO0FBQVFFLFlBQUksRUFBRSxLQUFkO0FBQXFCQyxhQUFLLEVBQUU7QUFBNUIsT0FGUTtBQUxoQixLQUhRO0FBSmhCLEdBWlE7QUFMaEIsQ0FGUyxFQXdDVDtBQUNJSCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxVQUFRLEVBQUUsSUFGZDtBQUdJQyxNQUFJLEVBQUUsY0FIVjtBQUlJQyxPQUFLLEVBQUUsb0JBSlg7QUFLSUksVUFBUSxFQUFFO0FBTGQsQ0F4Q1MsQ0FBYjs7SUFpRE1DLEc7Ozs7O0FBQ0YsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUU7QUFERSxLQUFiO0FBR0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBTFU7QUFNYjs7OztXQUVELGtCQUFTQyxRQUFULEVBQW1CO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsMEJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0UsZ0JBQU0sRUFBRTtBQUFUO0FBQVosc0JBQ0ksMkRBQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUVoQjtBQUFiLFFBREosZUFFSSwyREFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxLQUFiO0FBQW1CLGNBQU0sRUFBQyxTQUExQjtBQUFvQyxlQUFPLEVBQUU7QUFBN0MsUUFGSixDQURKO0FBTUg7Ozs7RUFwQmFpQiwrQzs7QUF1QkhSLGtFQUFmLEUiLCJmaWxlIjoiMDQzOTgyMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7VHJlZSwgQnV0dG9ufSBmcm9tICcuLi9saWInO1xuXG5pbXBvcnQgJ0BibHVlcHJpbnRqcy9jb3JlL2xpYi9jc3MvYmx1ZXByaW50LmNzcyc7XG5cbmNvbnN0IFRSRUUgPSBbXG4gICAge2lkOiAwLCBoYXNDYXJldDogdHJ1ZSwgaWNvbjogJ2ZvbGRlci1jbG9zZScsIGxhYmVsOiAnRm9sZGVyIDAnfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpY29uOiAnZm9sZGVyLWNsb3NlJyxcbiAgICAgICAgaXNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdGT0xERVIgMScsXG4gICAgICAgIGNoaWxkTm9kZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBpY29uOiAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnSXRlbSAwJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlMYWJlbDogJ1NFQ09OREFSWScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAnT3JnYW5pYyBtZWRpdGF0aW9uIGdsdXRlbi1mcmVlLCBzcmlyYWNoYSBWSFMgZHJpbmtpbmcgdmluZWdhciBiZWFyZCBtYW4uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgaGFzQ2FyZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZvbGRlci1jbG9zZScsXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlczogW1xuICAgICAgICAgICAgICAgICAgICB7aWQ6IDUsIGxhYmVsOiAnTm8tSWNvbiBJdGVtJ30sXG4gICAgICAgICAgICAgICAgICAgIHtpZDogNiwgaWNvbjogJ3RhZycsIGxhYmVsOiAnSXRlbSAxJ30sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2FyZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZm9sZGVyLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRm9sZGVyIDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogOCwgaWNvbjogJ2RvY3VtZW50JywgbGFiZWw6ICdJdGVtIDAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IDksIGljb246ICd0YWcnLCBsYWJlbDogJ0l0ZW0gMSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGhhc0NhcmV0OiB0cnVlLFxuICAgICAgICBpY29uOiAnZm9sZGVyLWNsb3NlJyxcbiAgICAgICAgbGFiZWw6ICdTdXBlciBzZWNyZXQgZmlsZXMnLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuXTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMzAwcHgnfX0+XG4gICAgICAgICAgICAgICAgPFRyZWUgbm9kZXM9e1RSRUV9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiZm9vXCIgaW50ZW50PVwic3VjY2Vzc1wiIG1pbmltYWw9e3RydWV9PjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9