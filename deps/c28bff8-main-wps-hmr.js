webpackHotUpdatedash_blueprint("main",{

/***/ "./src/lib/components/hocs/Histogram.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/hocs/Histogram.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Histogram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _Tr_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tr.react */ "./src/lib/components/Tr.react.js");
/* harmony import */ var _blueprintjs_core_lib_esm_common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core/lib/esm/common/classes */ "./node_modules/@blueprintjs/core/lib/esm/common/classes.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../css/histogram.css */ "./src/css/histogram.css");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_histogram_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["rows", "maxCount", "setProps"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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



 // import { Button } from "./Button.react";


 // import { HTMLTable } from '../../index';
// import { Button } from '../Button.react';





function renderHistogram(scaledValue) {
  // row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram" // style={{borderRadius: "0px", background: "none"}}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-progress-meter",
    style: {
      width: (scaledValue * 100).toPrecision(2) + "%",
      borderRadius: "0px"
    }
  }));
}
/**
 * This component provides Blueprint styling to native HTML tables.
 * 
 * It also includes additional functionality for searching, ordering and pagination of
 * data in the table.
 * 
 * IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
 * want selection to show properly, and use css to modify rows with className 'selected'
 * @param props
 * @returns {*}
 * @constructor
 */


var Histogram = /*#__PURE__*/function (_React$Component) {
  _inherits(Histogram, _React$Component);

  var _super = _createSuper(Histogram);

  function Histogram(props) {
    var _this;

    _classCallCheck(this, Histogram);

    _this = _super.call(this, props); // this.updateSelection = this.updateSelection.bind(this);

    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_6__["renderMoreLessButtons"].bind(_assertThisInitialized(_this)); // this.handleRowClick = this.handleRowClick.bind(this);
    // this.filterRows = this.filterRows.bind(this);
    // this.renderPagination = this.renderPagination.bind(this);
    // this.Trs = {};
    // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0
    };
    return _this;
  } // updateSelection(key, event, orderedKeys) {
  //     console.log(event);
  //     console.log(orderedKeys);
  //     console.log(key);
  //     console.log(this.state);
  //     event.preventDefault();
  //     const setProps = this.props.setProps ? this.props.setProps : this.setState;
  //     if (this.props.selectable || true) {
  //         setProps({
  //             selection: [key],
  //             row_click: key
  //         })
  //     }
  // }


  _createClass(Histogram, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var _this$props = this.props,
          rows = _this$props.rows,
          maxCount = _this$props.maxCount,
          setProps = _this$props.setProps,
          tableProps = _objectWithoutProperties(_this$props, _excluded);

      var scalingConstant = maxCount;

      if (!scalingConstant) {
        scalingConstant = Math.max.apply(Math, _toConsumableArray(rows.map(function (row) {
          return row.count;
        })));
      }

      ;
      console.log(rows.map(function (row) {
        return row.count;
      }));
      var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: "20%"
        }
      }, "Label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: "80%"
        }
      }, "Count"));
      console.log(scalingConstant);
      var orderedKeys = rows.map(function (row) {
        return row.key;
      });
      var rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
      var body = rows.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tr_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          selected: rowSelection.indexOf(row.key) > -1,
          key: row.key,
          onClick: function onClick(event) {
            return _this2.handleRowClick(row.key, event, orderedKeys);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: "label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          ellipsize: true
        }, row.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: "count"
        }, renderHistogram(row.count / scalingConstant)));
      }); // return <div>{"test"}</div>;

      var pagination;

      if (this.props.show_more_less) {
        pagination = this.renderMoreLessButtons(rows.length);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"], {
        className: "histogram",
        style: {
          width: "100%"
        },
        interactive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body)), pagination);
    }
  }]);

  return Histogram;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Histogram.defaultProps = {
  // sort_direction: 'asc',
  // filter_by: {},
  // // TODO remove these defaults
  // filter_columns: [],
  // sort_columns: [],
  // filter_strings: {},
  page_size: 5,
  // current_page: 1,
  // selection: [],
  // show_more_size: 10,
  // n_clicks: 0,
  rows: [],
  selectable: true,
  show_more_less: false
};
Histogram.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  'id': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  'children': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  'key': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  'role': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  'className': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Row data used to create the histogram
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Maximum count to be included in the histogram. Values above this number
   * will be rendered a different colour
   */
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Enables borders between rows and cells.
  //  */
  // bordered: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance.
  //  */
  // condensed: PropTypes.bool,
  // /**
  //  * Enables hover styles on row.
  //  */
  // interactive: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance for this element and all child elements.
  //  */
  // small: PropTypes.bool,
  // /**
  //  * Use an alternate background color on odd rows.
  //  */
  // striped: PropTypes.bool,

  /**
   * Key for the clicked row
   */
  row_click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // /**
  //  * Column to sort values on
  //  */
  // sort_column: PropTypes.number,
  // /**
  //  * Sort direction (asc or desc)
  //  */
  // sort_direction: PropTypes.string,
  // /**
  //  * Filtering strings
  //  */
  // filter_by: PropTypes.object,
  // /**
  //  * Column numbers that may be filtered
  //  */
  // filter_columns: PropTypes.array,
  // /**
  //  * Columns that can be sorted on
  //  */
  // sort_columns: PropTypes.array,
  // /**
  //  * Strings to filter columns by
  //  */
  // filter_strings: PropTypes.object,

  /**
   * Page size (in rows)
   */
  page_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Current page to show
  //  */
  // current_page: PropTypes.number,
  // /**
  //  * Number of rows to increase/decrease page size by
  //  * (for use in simple show more mode)
  //  */
  // show_more_size: PropTypes.number,

  /**
   * Show simple more/less buttons to adjust page size
   */
  show_more_less: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether row selection is enabled
   */
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Currently selected rows
   */
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array // n_clicks: PropTypes.number,

};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL0hpc3RvZ3JhbS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZW5kZXJIaXN0b2dyYW0iLCJzY2FsZWRWYWx1ZSIsIndpZHRoIiwidG9QcmVjaXNpb24iLCJib3JkZXJSYWRpdXMiLCJIaXN0b2dyYW0iLCJwcm9wcyIsImhhbmRsZVJvd0NsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyTW9yZUxlc3NCdXR0b25zIiwic3RhdGUiLCJuX2NsaWNrcyIsInJvd3MiLCJtYXhDb3VudCIsInNldFByb3BzIiwidGFibGVQcm9wcyIsInNjYWxpbmdDb25zdGFudCIsIk1hdGgiLCJtYXgiLCJtYXAiLCJyb3ciLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJvcmRlcmVkS2V5cyIsImtleSIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGlvbiIsImJvZHkiLCJpbmRleE9mIiwiZXZlbnQiLCJsYWJlbCIsInBhZ2luYXRpb24iLCJzaG93X21vcmVfbGVzcyIsImxlbmd0aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicGFnZV9zaXplIiwic2VsZWN0YWJsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsIm51bWJlciIsInJvd19jbGljayIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXNDO0FBQ2xDO0FBQ0Esc0JBQVE7QUFBSyxhQUFTLEVBQUUsbUZBQWhCLENBQ0k7O0FBREosa0JBR0E7QUFBSyxhQUFTLEVBQUUsb0JBQWhCO0FBQ0ksU0FBSyxFQUFFO0FB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aG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIVE1MVGFibGUgYXMgQlBIVE1MVGFibGUsIEVkaXRhYmxlVGV4dCwgQnV0dG9uLCBQcm9ncmVzc0JhciwgSW50ZW50LCBUZXh0IH0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCI7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24ucmVhY3RcIjtcbmltcG9ydCBUciBmcm9tICcuLi9Uci5yZWFjdCc7XG5pbXBvcnQgeyBJTlRFTlRfU1VDQ0VTUyB9IGZyb20gJ0BibHVlcHJpbnRqcy9jb3JlL2xpYi9lc20vY29tbW9uL2NsYXNzZXMnO1xuLy8gaW1wb3J0IHsgSFRNTFRhYmxlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uLnJlYWN0JztcbmltcG9ydCB7IGhhbmRsZVJvd0NsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFuZGxlUm93Q2xpY2snO1xuaW1wb3J0IHsgcmVuZGVyTW9yZUxlc3NCdXR0b25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVuZGVyTW9yZUxlc3NCdXR0b25zJztcblxuaW1wb3J0ICcuLi8uLi8uLi9jc3MvaGlzdG9ncmFtLmNzcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhpc3RvZ3JhbShzY2FsZWRWYWx1ZSkge1xuICAgIC8vIHJvdy5jb3VudCA+IHNjYWxpbmdDb25zdGFudCA/IEludGVudC5XQVJOSU5HIDogSW50ZW50LlNVQ0NFU1NcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1iYXIgYnAzLWludGVudC1zdWNjZXNzIGJwMy1uby1hbmltYXRpb24gYnAzLW5vLXN0cmlwZXMgYnAzLWhpc3RvZ3JhbVwifVxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjBweFwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtbWV0ZXJcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogKHNjYWxlZFZhbHVlICogMTAwKS50b1ByZWNpc2lvbigyKSArIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgQmx1ZXByaW50IHN0eWxpbmcgdG8gbmF0aXZlIEhUTUwgdGFibGVzLlxuICogXG4gKiBJdCBhbHNvIGluY2x1ZGVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3Igc2VhcmNoaW5nLCBvcmRlcmluZyBhbmQgcGFnaW5hdGlvbiBvZlxuICogZGF0YSBpbiB0aGUgdGFibGUuXG4gKiBcbiAqIElNUE9SVEFOVDogV2hlbiBjcmVhdGluZyByb3dzLCB5b3UgTVVTVCB1c2UgdGhlIEJsdWVwcmludEpTIFRyIGNvbXBvbmVudCBpZiB5b3VcbiAqIHdhbnQgc2VsZWN0aW9uIHRvIHNob3cgcHJvcGVybHksIGFuZCB1c2UgY3NzIHRvIG1vZGlmeSByb3dzIHdpdGggY2xhc3NOYW1lICdzZWxlY3RlZCdcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9ncmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlU2VsZWN0aW9uID0gdGhpcy51cGRhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dDbGljayA9IGhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zID0gcmVuZGVyTW9yZUxlc3NCdXR0b25zLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSB0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlclBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5UcnMgPSB7fTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bl9jbGlja3M6IDB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtuX2NsaWNrczogMH07XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlU2VsZWN0aW9uKGtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cob3JkZXJlZEtleXMpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgY29uc3Qgc2V0UHJvcHMgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5zZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGU7XG4gICAgLy8gICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUgfHwgdHJ1ZSkge1xuICAgIC8vICAgICAgICAgc2V0UHJvcHMoe1xuICAgIC8vICAgICAgICAgICAgIHNlbGVjdGlvbjogW2tleV0sXG4gICAgLy8gICAgICAgICAgICAgcm93X2NsaWNrOiBrZXlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7cm93cywgbWF4Q291bnQsIHNldFByb3BzLCAuLi50YWJsZVByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzY2FsaW5nQ29uc3RhbnQgPSBtYXhDb3VudDtcbiAgICAgICAgaWYgKCFzY2FsaW5nQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25zdGFudCA9IE1hdGgubWF4KC4uLnJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gPHRyPjx0aCBzdHlsZT17e3dpZHRoOiBcIjIwJVwifX0+e1wiTGFiZWxcIn08L3RoPjx0aCBzdHlsZT17e3dpZHRoOiBcIjgwJVwifX0+e1wiQ291bnRcIn08L3RoPjwvdHI+O1xuICAgICAgICBjb25zb2xlLmxvZyhzY2FsaW5nQ29uc3RhbnQpO1xuICAgICAgICBsZXQgb3JkZXJlZEtleXMgPSByb3dzLm1hcChyb3cgPT4gcm93LmtleSk7XG5cbiAgICAgICAgY29uc3Qgcm93U2VsZWN0aW9uID0gKHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNlbGVjdGlvbiA6IHRoaXMuc3RhdGUuc2VsZWN0aW9uKSB8fCBbXTtcblxuICAgICAgICBjb25zdCBib2R5ID0gcm93cy5tYXAocm93ID0+ICg8VHIgc2VsZWN0ZWQ9e3Jvd1NlbGVjdGlvbi5pbmRleE9mKHJvdy5rZXkpID4gLTF9IGtleT17cm93LmtleX0gb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdy5rZXksIGV2ZW50LCBvcmRlcmVkS2V5cyl9PlxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wibGFiZWxcIn0+PFRleHQgZWxsaXBzaXplPXt0cnVlfT57cm93LmxhYmVsfTwvVGV4dD48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e1wiY291bnRcIn0+XG4gICAgICAgICAgICAgICAge3JlbmRlckhpc3RvZ3JhbShyb3cuY291bnQgLyBzY2FsaW5nQ29uc3RhbnQpfVxuICAgICAgICAgICAgICAgICAgICB7LyogPFByb2dyZXNzQmFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50PXtyb3cuY291bnQgPiBzY2FsaW5nQ29uc3RhbnQgPyBJbnRlbnQuV0FSTklORyA6IEludGVudC5TVUNDRVNTfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwZXM9e2ZhbHNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuY291bnQgLyBzY2FsaW5nQ29uc3RhbnR9IC8+ICovfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L1RyPikpO1xuICAgICAgICAvLyByZXR1cm4gPGRpdj57XCJ0ZXN0XCJ9PC9kaXY+O1xuICAgICAgICBsZXQgcGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd19tb3JlX2xlc3MpIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb24gPSB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyhyb3dzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QlBIVE1MVGFibGUgY2xhc3NOYW1lPVwiaGlzdG9ncmFtXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fSBpbnRlcmFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPntoZWFkZXJ9PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+e2JvZHl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvQlBIVE1MVGFibGU+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuSGlzdG9ncmFtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogJ2FzYycsXG4gICAgLy8gZmlsdGVyX2J5OiB7fSxcbiAgICAvLyAvLyBUT0RPIHJlbW92ZSB0aGVzZSBkZWZhdWx0c1xuICAgIC8vIGZpbHRlcl9jb2x1bW5zOiBbXSxcbiAgICAvLyBzb3J0X2NvbHVtbnM6IFtdLFxuICAgIC8vIGZpbHRlcl9zdHJpbmdzOiB7fSxcbiAgICBwYWdlX3NpemU6IDUsXG4gICAgLy8gY3VycmVudF9wYWdlOiAxLFxuICAgIC8vIHNlbGVjdGlvbjogW10sXG4gICAgLy8gc2hvd19tb3JlX3NpemU6IDEwLFxuICAgIC8vIG5fY2xpY2tzOiAwLFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgc2hvd19tb3JlX2xlc3M6IGZhbHNlXG59O1xuXG5IaXN0b2dyYW0ucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGlzIGNvbXBvbmVudCwgdXNlZCB0byBpZGVudGlmeSBkYXNoIGNvbXBvbmVudHNcbiAgICAgKiBpbiBjYWxsYmFja3MuIFRoZSBJRCBuZWVkcyB0byBiZSB1bmlxdWUgYWNyb3NzIGFsbCBvZiB0aGVcbiAgICAgKiBjb21wb25lbnRzIGluIGFuIGFwcC5cbiAgICAgKi9cbiAgICAnaWQnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgJ2NoaWxkcmVuJzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdyb2xlJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgZGF0YSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnZGF0YS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICAnY2xhc3NOYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFJvdyBkYXRhIHVzZWQgdG8gY3JlYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgKi9cbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGNvdW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBoaXN0b2dyYW0uIFZhbHVlcyBhYm92ZSB0aGlzIG51bWJlclxuICAgICAqIHdpbGwgYmUgcmVuZGVyZWQgYSBkaWZmZXJlbnQgY29sb3VyXG4gICAgICovXG4gICAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGJvcmRlcnMgYmV0d2VlbiByb3dzIGFuZCBjZWxscy5cbiAgICAvLyAgKi9cbiAgICAvLyBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlLlxuICAgIC8vICAqL1xuICAgIC8vIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGhvdmVyIHN0eWxlcyBvbiByb3cuXG4gICAgLy8gICovXG4gICAgLy8gaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhbGwgY2hpbGQgZWxlbWVudHMuXG4gICAgLy8gICovXG4gICAgLy8gc21hbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIGFuIGFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIG9kZCByb3dzLlxuICAgIC8vICAqL1xuICAgIC8vIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogS2V5IGZvciB0aGUgY2xpY2tlZCByb3dcbiAgICAgKi9cbiAgICByb3dfY2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gdG8gc29ydCB2YWx1ZXMgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNvcnQgZGlyZWN0aW9uIChhc2Mgb3IgZGVzYylcbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEZpbHRlcmluZyBzdHJpbmdzXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIG51bWJlcnMgdGhhdCBtYXkgYmUgZmlsdGVyZWRcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1ucyB0aGF0IGNhbiBiZSBzb3J0ZWQgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFN0cmluZ3MgdG8gZmlsdGVyIGNvbHVtbnMgYnlcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfc3RyaW5nczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBhZ2Ugc2l6ZSAoaW4gcm93cylcbiAgICAgKi9cbiAgICBwYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDdXJyZW50IHBhZ2UgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIGN1cnJlbnRfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIE51bWJlciBvZiByb3dzIHRvIGluY3JlYXNlL2RlY3JlYXNlIHBhZ2Ugc2l6ZSBieVxuICAgIC8vICAqIChmb3IgdXNlIGluIHNpbXBsZSBzaG93IG1vcmUgbW9kZSlcbiAgICAvLyAgKi9cbiAgICAvLyBzaG93X21vcmVfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFNob3cgc2ltcGxlIG1vcmUvbGVzcyBidXR0b25zIHRvIGFkanVzdCBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBzaG93X21vcmVfbGVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHJvdyBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHJvd3NcbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIG5fY2xpY2tzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG5cblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=