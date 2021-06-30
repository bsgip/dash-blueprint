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
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_6__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
    _this.filterRows = _this.filterRows.bind(_assertThisInitialized(_this)); // this.handleRowClick = this.handleRowClick.bind(this);
    // this.filterRows = this.filterRows.bind(this);
    // this.renderPagination = this.renderPagination.bind(this);
    // this.Trs = {};
    // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0,
      page_size: props.page_size
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
    key: "filterRows",
    value: function filterRows() {
      var pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
      var filteredRows = this.props.rows.slice(1, pageSize);
      console.log('filtered rows to length ' + pageSize);
      console.log(filteredRows);
      return filteredRows;
    }
  }, {
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
      var filteredRows = this.filterRows(rows);
      var body = filteredRows.map(function (row) {
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
  show_more_size: 10,
  // n_clicks: 0,
  rows: [],
  selectable: true,
  show_more_less: true
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

  /**
   * Number of rows to increase/decrease page size by
   * (for use in simple show more mode)
   */
  show_more_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL0hpc3RvZ3JhbS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZW5kZXJIaXN0b2dyYW0iLCJzY2FsZWRWYWx1ZSIsIndpZHRoIiwidG9QcmVjaXNpb24iLCJib3JkZXJSYWRpdXMiLCJIaXN0b2dyYW0iLCJwcm9wcyIsImhhbmRsZVJvd0NsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyTW9yZUxlc3NCdXR0b25zIiwiZmlsdGVyUm93cyIsInN0YXRlIiwibl9jbGlja3MiLCJwYWdlX3NpemUiLCJwYWdlU2l6ZSIsInNldFByb3BzIiwiZmlsdGVyZWRSb3dzIiwicm93cyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIm1heENvdW50IiwidGFibGVQcm9wcyIsInNjYWxpbmdDb25zdGFudCIsIk1hdGgiLCJtYXgiLCJtYXAiLCJyb3ciLCJjb3VudCIsImhlYWRlciIsIm9yZGVyZWRLZXlzIiwia2V5Iiwicm93U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiYm9keSIsImluZGV4T2YiLCJldmVudCIsImxhYmVsIiwicGFnaW5hdGlvbiIsInNob3dfbW9yZV9sZXNzIiwibGVuZ3RoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzaG93X21vcmVfc2l6ZSIsInNlbGVjdGFibGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJudW1iZXIiLCJyb3dfY2xpY2siLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxXQUF6QixFQUFzQztBQUNsQztBQUNBLHNCQUFRO0FBQUssYUFBUyxFQUFF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Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0o7QUFDQTtBQUNJQyxXQUFTLEVBQUVMLGlEQUFTLENBQUNDLE1BL0VIO0FBaUZsQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0luQyxXQUFTLEVBQUVrQyxpREFBUyxDQUFDSSxNQWxISDtBQW9IbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDSVAsZ0JBQWMsRUFBRUcsaURBQVMsQ0FBQ0ksTUE3SFI7O0FBK0hsQjtBQUNKO0FBQ0E7QUFDSVosZ0JBQWMsRUFBRVEsaURBQVMsQ0FBQ00sSUFsSVI7O0FBb0lsQjtBQUNKO0FBQ0E7QUFDSVIsWUFBVSxFQUFFRSxpREFBUyxDQUFDTSxJQXZJSjs7QUF5SWxCO0FBQ0o7QUFDQTtBQUNJcEIsV0FBUyxFQUFFYyxpREFBUyxDQUFDRyxLQTVJSCxDQThJbEI7O0FBOUlrQixDQUF0QixDIiwiZmlsZSI6ImE2YjI0ZTQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIVE1MVGFibGUgYXMgQlBIVE1MVGFibGUsIEVkaXRhYmxlVGV4dCwgQnV0dG9uLCBQcm9ncmVzc0JhciwgSW50ZW50LCBUZXh0IH0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCI7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24ucmVhY3RcIjtcbmltcG9ydCBUciBmcm9tICcuLi9Uci5yZWFjdCc7XG5pbXBvcnQgeyBJTlRFTlRfU1VDQ0VTUyB9IGZyb20gJ0BibHVlcHJpbnRqcy9jb3JlL2xpYi9lc20vY29tbW9uL2NsYXNzZXMnO1xuLy8gaW1wb3J0IHsgSFRNTFRhYmxlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uLnJlYWN0JztcbmltcG9ydCB7IGhhbmRsZVJvd0NsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFuZGxlUm93Q2xpY2snO1xuaW1wb3J0IHsgcmVuZGVyTW9yZUxlc3NCdXR0b25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVuZGVyTW9yZUxlc3NCdXR0b25zJztcblxuaW1wb3J0ICcuLi8uLi8uLi9jc3MvaGlzdG9ncmFtLmNzcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhpc3RvZ3JhbShzY2FsZWRWYWx1ZSkge1xuICAgIC8vIHJvdy5jb3VudCA+IHNjYWxpbmdDb25zdGFudCA/IEludGVudC5XQVJOSU5HIDogSW50ZW50LlNVQ0NFU1NcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1iYXIgYnAzLWludGVudC1zdWNjZXNzIGJwMy1uby1hbmltYXRpb24gYnAzLW5vLXN0cmlwZXMgYnAzLWhpc3RvZ3JhbVwifVxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjBweFwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtbWV0ZXJcIn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogKHNjYWxlZFZhbHVlICogMTAwKS50b1ByZWNpc2lvbigyKSArIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgQmx1ZXByaW50IHN0eWxpbmcgdG8gbmF0aXZlIEhUTUwgdGFibGVzLlxuICogXG4gKiBJdCBhbHNvIGluY2x1ZGVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3Igc2VhcmNoaW5nLCBvcmRlcmluZyBhbmQgcGFnaW5hdGlvbiBvZlxuICogZGF0YSBpbiB0aGUgdGFibGUuXG4gKiBcbiAqIElNUE9SVEFOVDogV2hlbiBjcmVhdGluZyByb3dzLCB5b3UgTVVTVCB1c2UgdGhlIEJsdWVwcmludEpTIFRyIGNvbXBvbmVudCBpZiB5b3VcbiAqIHdhbnQgc2VsZWN0aW9uIHRvIHNob3cgcHJvcGVybHksIGFuZCB1c2UgY3NzIHRvIG1vZGlmeSByb3dzIHdpdGggY2xhc3NOYW1lICdzZWxlY3RlZCdcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9ncmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlU2VsZWN0aW9uID0gdGhpcy51cGRhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dDbGljayA9IGhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zID0gcmVuZGVyTW9yZUxlc3NCdXR0b25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZVJvd0NsaWNrID0gdGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmZpbHRlclJvd3MgPSB0aGlzLmZpbHRlclJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJQYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJQYWdpbmF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuVHJzID0ge307XG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe25fY2xpY2tzOiAwfSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuX2NsaWNrczogMCxcbiAgICAgICAgICAgIHBhZ2Vfc2l6ZTogcHJvcHMucGFnZV9zaXplXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlU2VsZWN0aW9uKGtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cob3JkZXJlZEtleXMpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgY29uc3Qgc2V0UHJvcHMgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5zZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGU7XG4gICAgLy8gICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUgfHwgdHJ1ZSkge1xuICAgIC8vICAgICAgICAgc2V0UHJvcHMoe1xuICAgIC8vICAgICAgICAgICAgIHNlbGVjdGlvbjogW2tleV0sXG4gICAgLy8gICAgICAgICAgICAgcm93X2NsaWNrOiBrZXlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgZmlsdGVyUm93cygpIHtcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5wYWdlX3NpemUgOiB0aGlzLnN0YXRlLnBhZ2Vfc2l6ZTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRSb3dzID0gdGhpcy5wcm9wcy5yb3dzLnNsaWNlKDEsIHBhZ2VTaXplKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlcmVkIHJvd3MgdG8gbGVuZ3RoICcgKyBwYWdlU2l6ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkUm93cylcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge3Jvd3MsIG1heENvdW50LCBzZXRQcm9wcywgLi4udGFibGVQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc2NhbGluZ0NvbnN0YW50ID0gbWF4Q291bnQ7XG4gICAgICAgIGlmICghc2NhbGluZ0NvbnN0YW50KSB7XG4gICAgICAgICAgICBzY2FsaW5nQ29uc3RhbnQgPSBNYXRoLm1heCguLi5yb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocm93cy5tYXAoKHJvdykgPT4gcm93LmNvdW50KSk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IDx0cj48dGggc3R5bGU9e3t3aWR0aDogXCIyMCVcIn19PntcIkxhYmVsXCJ9PC90aD48dGggc3R5bGU9e3t3aWR0aDogXCI4MCVcIn19PntcIkNvdW50XCJ9PC90aD48L3RyPjtcbiAgICAgICAgY29uc29sZS5sb2coc2NhbGluZ0NvbnN0YW50KTtcbiAgICAgICAgbGV0IG9yZGVyZWRLZXlzID0gcm93cy5tYXAocm93ID0+IHJvdy5rZXkpO1xuXG4gICAgICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9ICh0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5zZWxlY3Rpb24gOiB0aGlzLnN0YXRlLnNlbGVjdGlvbikgfHwgW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUm93cyA9IHRoaXMuZmlsdGVyUm93cyhyb3dzKTtcblxuICAgICAgICBjb25zdCBib2R5ID0gZmlsdGVyZWRSb3dzLm1hcChyb3cgPT4gKDxUciBzZWxlY3RlZD17cm93U2VsZWN0aW9uLmluZGV4T2Yocm93LmtleSkgPiAtMX0ga2V5PXtyb3cua2V5fSBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LmtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKX0+XG4gICAgICAgICAgICAgICAgPHRkIGtleT17XCJsYWJlbFwifT48VGV4dCBlbGxpcHNpemU9e3RydWV9Pntyb3cubGFiZWx9PC9UZXh0PjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGtleT17XCJjb3VudFwifT5cbiAgICAgICAgICAgICAgICB7cmVuZGVySGlzdG9ncmFtKHJvdy5jb3VudCAvIHNjYWxpbmdDb25zdGFudCl9XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZ3Jlc3NCYXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnQ9e3Jvdy5jb3VudCA+IHNjYWxpbmdDb25zdGFudCA/IEludGVudC5XQVJOSU5HIDogSW50ZW50LlNVQ0NFU1N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXBlcz17ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5jb3VudCAvIHNjYWxpbmdDb25zdGFudH0gLz4gKi99XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvVHI+KSk7XG4gICAgICAgIC8vIHJldHVybiA8ZGl2PntcInRlc3RcIn08L2Rpdj47XG4gICAgICAgIGxldCBwYWdpbmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93X21vcmVfbGVzcykge1xuICAgICAgICAgICAgcGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zKHJvd3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCUEhUTUxUYWJsZSBjbGFzc05hbWU9XCJoaXN0b2dyYW1cIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19IGludGVyYWN0aXZlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+e2hlYWRlcn08L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT57Ym9keX08L3Rib2R5PlxuICAgICAgICAgICAgPC9CUEhUTUxUYWJsZT5cbiAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5IaXN0b2dyYW0uZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIHNvcnRfZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAvLyBmaWx0ZXJfYnk6IHt9LFxuICAgIC8vIC8vIFRPRE8gcmVtb3ZlIHRoZXNlIGRlZmF1bHRzXG4gICAgLy8gZmlsdGVyX2NvbHVtbnM6IFtdLFxuICAgIC8vIHNvcnRfY29sdW1uczogW10sXG4gICAgLy8gZmlsdGVyX3N0cmluZ3M6IHt9LFxuICAgIHBhZ2Vfc2l6ZTogNSxcbiAgICAvLyBjdXJyZW50X3BhZ2U6IDEsXG4gICAgLy8gc2VsZWN0aW9uOiBbXSxcbiAgICBzaG93X21vcmVfc2l6ZTogMTAsXG4gICAgLy8gbl9jbGlja3M6IDAsXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBzaG93X21vcmVfbGVzczogdHJ1ZVxufTtcblxuSGlzdG9ncmFtLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhpcyBjb21wb25lbnQsIHVzZWQgdG8gaWRlbnRpZnkgZGFzaCBjb21wb25lbnRzXG4gICAgICogaW4gY2FsbGJhY2tzLiBUaGUgSUQgbmVlZHMgdG8gYmUgdW5pcXVlIGFjcm9zcyBhbGwgb2YgdGhlXG4gICAgICogY29tcG9uZW50cyBpbiBhbiBhcHAuXG4gICAgICovXG4gICAgJ2lkJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgICdjaGlsZHJlbic6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNvbXBvbmVudCwgdXNlZCB0byBpbXByb3ZlXG4gICAgICogcGVyZm9ybWFuY2UgYnkgUmVhY3QuanMgd2hpbGUgcmVuZGVyaW5nIGNvbXBvbmVudHNcbiAgICAgKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2xpc3RzLWFuZC1rZXlzLmh0bWwgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgICdrZXknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIEFSSUEgcm9sZSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAncm9sZSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIHdpbGRjYXJkIGRhdGEgYXR0cmlidXRlXG4gICAgICovXG4gICAgJ2RhdGEtKic6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIHdpbGRjYXJkIGFyaWEgYXR0cmlidXRlXG4gICAgICovXG4gICAgJ2FyaWEtKic6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBPZnRlbiB1c2VkIHdpdGggQ1NTIHRvIHN0eWxlIGVsZW1lbnRzIHdpdGggY29tbW9uIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgJ2NsYXNzTmFtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBSb3cgZGF0YSB1c2VkIHRvIGNyZWF0ZSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgcm93czogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogTWF4aW11bSBjb3VudCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgaGlzdG9ncmFtLiBWYWx1ZXMgYWJvdmUgdGhpcyBudW1iZXJcbiAgICAgKiB3aWxsIGJlIHJlbmRlcmVkIGEgZGlmZmVyZW50IGNvbG91clxuICAgICAqL1xuICAgIG1heENvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogRW5hYmxlcyBib3JkZXJzIGJldHdlZW4gcm93cyBhbmQgY2VsbHMuXG4gICAgLy8gICovXG4gICAgLy8gYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZS5cbiAgICAvLyAgKi9cbiAgICAvLyBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogRW5hYmxlcyBob3ZlciBzdHlsZXMgb24gcm93LlxuICAgIC8vICAqL1xuICAgIC8vIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFVzZSBzbWFsbCwgY29uZGVuc2VkIGFwcGVhcmFuY2UgZm9yIHRoaXMgZWxlbWVudCBhbmQgYWxsIGNoaWxkIGVsZW1lbnRzLlxuICAgIC8vICAqL1xuICAgIC8vIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFVzZSBhbiBhbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvciBvbiBvZGQgcm93cy5cbiAgICAvLyAgKi9cbiAgICAvLyBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEtleSBmb3IgdGhlIGNsaWNrZWQgcm93XG4gICAgICovXG4gICAgcm93X2NsaWNrOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIHRvIHNvcnQgdmFsdWVzIG9uXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9jb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBTb3J0IGRpcmVjdGlvbiAoYXNjIG9yIGRlc2MpXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9kaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBGaWx0ZXJpbmcgc3RyaW5nc1xuICAgIC8vICAqL1xuICAgIC8vIGZpbHRlcl9ieTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENvbHVtbiBudW1iZXJzIHRoYXQgbWF5IGJlIGZpbHRlcmVkXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENvbHVtbnMgdGhhdCBjYW4gYmUgc29ydGVkIG9uXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9jb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBTdHJpbmdzIHRvIGZpbHRlciBjb2x1bW5zIGJ5XG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX3N0cmluZ3M6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQYWdlIHNpemUgKGluIHJvd3MpXG4gICAgICovXG4gICAgcGFnZV9zaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ3VycmVudCBwYWdlIHRvIHNob3dcbiAgICAvLyAgKi9cbiAgICAvLyBjdXJyZW50X3BhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygcm93cyB0byBpbmNyZWFzZS9kZWNyZWFzZSBwYWdlIHNpemUgYnlcbiAgICAgKiAoZm9yIHVzZSBpbiBzaW1wbGUgc2hvdyBtb3JlIG1vZGUpXG4gICAgICovXG4gICAgc2hvd19tb3JlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHNpbXBsZSBtb3JlL2xlc3MgYnV0dG9ucyB0byBhZGp1c3QgcGFnZSBzaXplXG4gICAgICovXG4gICAgc2hvd19tb3JlX2xlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciByb3cgc2VsZWN0aW9uIGlzIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCByb3dzXG4gICAgICovXG4gICAgc2VsZWN0aW9uOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvLyBuX2NsaWNrczogUHJvcFR5cGVzLm51bWJlcixcblxuXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9