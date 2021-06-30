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
      var filteredRows = this.props.rows.slice(0, pageSize - 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL0hpc3RvZ3JhbS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZW5kZXJIaXN0b2dyYW0iLCJzY2FsZWRWYWx1ZSIsIndpZHRoIiwidG9QcmVjaXNpb24iLCJib3JkZXJSYWRpdXMiLCJIaXN0b2dyYW0iLCJwcm9wcyIsImhhbmRsZVJvd0NsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyTW9yZUxlc3NCdXR0b25zIiwiZmlsdGVyUm93cyIsInN0YXRlIiwibl9jbGlja3MiLCJwYWdlX3NpemUiLCJwYWdlU2l6ZSIsInNldFByb3BzIiwiZmlsdGVyZWRSb3dzIiwicm93cyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIm1heENvdW50IiwidGFibGVQcm9wcyIsInNjYWxpbmdDb25zdGFudCIsIk1hdGgiLCJtYXgiLCJtYXAiLCJyb3ciLCJjb3VudCIsImhlYWRlciIsIm9yZGVyZWRLZXlzIiwia2V5Iiwicm93U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiYm9keSIsImluZGV4T2YiLCJldmVudCIsImxhYmVsIiwicGFnaW5hdGlvbiIsInNob3dfbW9yZV9sZXNzIiwibGVuZ3RoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzaG93X21vcmVfc2l6ZSIsInNlbGVjdGFibGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJudW1iZXIiLCJyb3dfY2xpY2siLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxXQUF6QixFQUFzQztBQUNsQztBQUNBLHNCQUFRO0FBQUssYUFBUyxFQUFF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Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNKO0FBQ0E7QUFDSUMsV0FBUyxFQUFFTCxpREFBUyxDQUFDQyxNQS9FSDtBQWlGbEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0o7QUFDQTtBQUNJbkMsV0FBUyxFQUFFa0MsaURBQVMsQ0FBQ0ksTUFsSEg7QUFvSGxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0lQLGdCQUFjLEVBQUVHLGlEQUFTLENBQUNJLE1BN0hSOztBQStIbEI7QUFDSjtBQUNBO0FBQ0laLGdCQUFjLEVBQUVRLGlEQUFTLENBQUNNLElBbElSOztBQW9JbEI7QUFDSjtBQUNBO0FBQ0lSLFlBQVUsRUFBRUUsaURBQVMsQ0FBQ00sSUF2SUo7O0FBeUlsQjtBQUNKO0FBQ0E7QUFDSXBCLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0csS0E1SUgsQ0E4SWxCOztBQTlJa0IsQ0FBdEIsQyIsImZpbGUiOiJhNmIyNGU0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSFRNTFRhYmxlIGFzIEJQSFRNTFRhYmxlLCBFZGl0YWJsZVRleHQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIsIEludGVudCwgVGV4dCB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uLnJlYWN0XCI7XG5pbXBvcnQgVHIgZnJvbSAnLi4vVHIucmVhY3QnO1xuaW1wb3J0IHsgSU5URU5UX1NVQ0NFU1MgfSBmcm9tICdAYmx1ZXByaW50anMvY29yZS9saWIvZXNtL2NvbW1vbi9jbGFzc2VzJztcbi8vIGltcG9ydCB7IEhUTUxUYWJsZSB9IGZyb20gJy4uLy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbi5yZWFjdCc7XG5pbXBvcnQgeyBoYW5kbGVSb3dDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZVJvd0NsaWNrJztcbmltcG9ydCB7IHJlbmRlck1vcmVMZXNzQnV0dG9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbmRlck1vcmVMZXNzQnV0dG9ucyc7XG5cbmltcG9ydCAnLi4vLi4vLi4vY3NzL2hpc3RvZ3JhbS5jc3MnO1xuXG5mdW5jdGlvbiByZW5kZXJIaXN0b2dyYW0oc2NhbGVkVmFsdWUpIHtcbiAgICAvLyByb3cuY291bnQgPiBzY2FsaW5nQ29uc3RhbnQgPyBJbnRlbnQuV0FSTklORyA6IEludGVudC5TVUNDRVNTXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtYmFyIGJwMy1pbnRlbnQtc3VjY2VzcyBicDMtbm8tYW5pbWF0aW9uIGJwMy1uby1zdHJpcGVzIGJwMy1oaXN0b2dyYW1cIn1cbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17e2JvcmRlclJhZGl1czogXCIwcHhcIiwgYmFja2dyb3VuZDogXCJub25lXCJ9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYnAzLXByb2dyZXNzLW1ldGVyXCJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IChzY2FsZWRWYWx1ZSAqIDEwMCkudG9QcmVjaXNpb24oMikgKyBcIiVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIEJsdWVwcmludCBzdHlsaW5nIHRvIG5hdGl2ZSBIVE1MIHRhYmxlcy5cbiAqIFxuICogSXQgYWxzbyBpbmNsdWRlcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgZm9yIHNlYXJjaGluZywgb3JkZXJpbmcgYW5kIHBhZ2luYXRpb24gb2ZcbiAqIGRhdGEgaW4gdGhlIHRhYmxlLlxuICogXG4gKiBJTVBPUlRBTlQ6IFdoZW4gY3JlYXRpbmcgcm93cywgeW91IE1VU1QgdXNlIHRoZSBCbHVlcHJpbnRKUyBUciBjb21wb25lbnQgaWYgeW91XG4gKiB3YW50IHNlbGVjdGlvbiB0byBzaG93IHByb3Blcmx5LCBhbmQgdXNlIGNzcyB0byBtb2RpZnkgcm93cyB3aXRoIGNsYXNzTmFtZSAnc2VsZWN0ZWQnXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3RvZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVNlbGVjdGlvbiA9IHRoaXMudXBkYXRlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSBoYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyA9IHJlbmRlck1vcmVMZXNzQnV0dG9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlclJvd3MgPSB0aGlzLmZpbHRlclJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVSb3dDbGljayA9IHRoaXMuaGFuZGxlUm93Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5maWx0ZXJSb3dzID0gdGhpcy5maWx0ZXJSb3dzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyUGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyUGFnaW5hdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLlRycyA9IHt9O1xuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtuX2NsaWNrczogMH0pO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbl9jbGlja3M6IDAsXG4gICAgICAgICAgICBwYWdlX3NpemU6IHByb3BzLnBhZ2Vfc2l6ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZVNlbGVjdGlvbihrZXksIGV2ZW50LCBvcmRlcmVkS2V5cykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG9yZGVyZWRLZXlzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IHNldFByb3BzID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlO1xuICAgIC8vICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RhYmxlIHx8IHRydWUpIHtcbiAgICAvLyAgICAgICAgIHNldFByb3BzKHtcbiAgICAvLyAgICAgICAgICAgICBzZWxlY3Rpb246IFtrZXldLFxuICAgIC8vICAgICAgICAgICAgIHJvd19jbGljazoga2V5XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIFxuICAgIGZpbHRlclJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMucGFnZV9zaXplIDogdGhpcy5zdGF0ZS5wYWdlX3NpemU7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUm93cyA9IHRoaXMucHJvcHMucm93cy5zbGljZSgwLCBwYWdlU2l6ZSAtIDEpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWQgcm93cyB0byBsZW5ndGggJyArIHBhZ2VTaXplKTtcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRSb3dzKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7cm93cywgbWF4Q291bnQsIHNldFByb3BzLCAuLi50YWJsZVByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzY2FsaW5nQ29uc3RhbnQgPSBtYXhDb3VudDtcbiAgICAgICAgaWYgKCFzY2FsaW5nQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25zdGFudCA9IE1hdGgubWF4KC4uLnJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gPHRyPjx0aCBzdHlsZT17e3dpZHRoOiBcIjIwJVwifX0+e1wiTGFiZWxcIn08L3RoPjx0aCBzdHlsZT17e3dpZHRoOiBcIjgwJVwifX0+e1wiQ291bnRcIn08L3RoPjwvdHI+O1xuICAgICAgICBjb25zb2xlLmxvZyhzY2FsaW5nQ29uc3RhbnQpO1xuICAgICAgICBsZXQgb3JkZXJlZEtleXMgPSByb3dzLm1hcChyb3cgPT4gcm93LmtleSk7XG5cbiAgICAgICAgY29uc3Qgcm93U2VsZWN0aW9uID0gKHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNlbGVjdGlvbiA6IHRoaXMuc3RhdGUuc2VsZWN0aW9uKSB8fCBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRSb3dzID0gdGhpcy5maWx0ZXJSb3dzKHJvd3MpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBmaWx0ZXJlZFJvd3MubWFwKHJvdyA9PiAoPFRyIHNlbGVjdGVkPXtyb3dTZWxlY3Rpb24uaW5kZXhPZihyb3cua2V5KSA+IC0xfSBrZXk9e3Jvdy5rZXl9IG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVSb3dDbGljayhyb3cua2V5LCBldmVudCwgb3JkZXJlZEtleXMpfT5cbiAgICAgICAgICAgICAgICA8dGQga2V5PXtcImxhYmVsXCJ9PjxUZXh0IGVsbGlwc2l6ZT17dHJ1ZX0+e3Jvdy5sYWJlbH08L1RleHQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQga2V5PXtcImNvdW50XCJ9PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJIaXN0b2dyYW0ocm93LmNvdW50IC8gc2NhbGluZ0NvbnN0YW50KX1cbiAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9ncmVzc0JhciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2ZhbHNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVudD17cm93LmNvdW50ID4gc2NhbGluZ0NvbnN0YW50ID8gSW50ZW50LldBUk5JTkcgOiBJbnRlbnQuU1VDQ0VTU30gXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVzPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmNvdW50IC8gc2NhbGluZ0NvbnN0YW50fSAvPiAqL31cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9Ucj4pKTtcbiAgICAgICAgLy8gcmV0dXJuIDxkaXY+e1widGVzdFwifTwvZGl2PjtcbiAgICAgICAgbGV0IHBhZ2luYXRpb247XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dfbW9yZV9sZXNzKSB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJNb3JlTGVzc0J1dHRvbnMocm93cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEJQSFRNTFRhYmxlIGNsYXNzTmFtZT1cImhpc3RvZ3JhbVwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0gaW50ZXJhY3RpdmU9e3RydWV9PlxuICAgICAgICAgICAgICAgIDx0aGVhZD57aGVhZGVyfTwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5Pntib2R5fTwvdGJvZHk+XG4gICAgICAgICAgICA8L0JQSFRNTFRhYmxlPlxuICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbkhpc3RvZ3JhbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gc29ydF9kaXJlY3Rpb246ICdhc2MnLFxuICAgIC8vIGZpbHRlcl9ieToge30sXG4gICAgLy8gLy8gVE9ETyByZW1vdmUgdGhlc2UgZGVmYXVsdHNcbiAgICAvLyBmaWx0ZXJfY29sdW1uczogW10sXG4gICAgLy8gc29ydF9jb2x1bW5zOiBbXSxcbiAgICAvLyBmaWx0ZXJfc3RyaW5nczoge30sXG4gICAgcGFnZV9zaXplOiA1LFxuICAgIC8vIGN1cnJlbnRfcGFnZTogMSxcbiAgICAvLyBzZWxlY3Rpb246IFtdLFxuICAgIHNob3dfbW9yZV9zaXplOiAxMCxcbiAgICAvLyBuX2NsaWNrczogMCxcbiAgICByb3dzOiBbXSxcbiAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIHNob3dfbW9yZV9sZXNzOiB0cnVlXG59O1xuXG5IaXN0b2dyYW0ucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGlzIGNvbXBvbmVudCwgdXNlZCB0byBpZGVudGlmeSBkYXNoIGNvbXBvbmVudHNcbiAgICAgKiBpbiBjYWxsYmFja3MuIFRoZSBJRCBuZWVkcyB0byBiZSB1bmlxdWUgYWNyb3NzIGFsbCBvZiB0aGVcbiAgICAgKiBjb21wb25lbnRzIGluIGFuIGFwcC5cbiAgICAgKi9cbiAgICAnaWQnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgJ2NoaWxkcmVuJzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdyb2xlJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgZGF0YSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnZGF0YS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICAnY2xhc3NOYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFJvdyBkYXRhIHVzZWQgdG8gY3JlYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgKi9cbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGNvdW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBoaXN0b2dyYW0uIFZhbHVlcyBhYm92ZSB0aGlzIG51bWJlclxuICAgICAqIHdpbGwgYmUgcmVuZGVyZWQgYSBkaWZmZXJlbnQgY29sb3VyXG4gICAgICovXG4gICAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGJvcmRlcnMgYmV0d2VlbiByb3dzIGFuZCBjZWxscy5cbiAgICAvLyAgKi9cbiAgICAvLyBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlLlxuICAgIC8vICAqL1xuICAgIC8vIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGhvdmVyIHN0eWxlcyBvbiByb3cuXG4gICAgLy8gICovXG4gICAgLy8gaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhbGwgY2hpbGQgZWxlbWVudHMuXG4gICAgLy8gICovXG4gICAgLy8gc21hbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIGFuIGFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIG9kZCByb3dzLlxuICAgIC8vICAqL1xuICAgIC8vIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogS2V5IGZvciB0aGUgY2xpY2tlZCByb3dcbiAgICAgKi9cbiAgICByb3dfY2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gdG8gc29ydCB2YWx1ZXMgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNvcnQgZGlyZWN0aW9uIChhc2Mgb3IgZGVzYylcbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEZpbHRlcmluZyBzdHJpbmdzXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIG51bWJlcnMgdGhhdCBtYXkgYmUgZmlsdGVyZWRcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1ucyB0aGF0IGNhbiBiZSBzb3J0ZWQgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFN0cmluZ3MgdG8gZmlsdGVyIGNvbHVtbnMgYnlcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfc3RyaW5nczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBhZ2Ugc2l6ZSAoaW4gcm93cylcbiAgICAgKi9cbiAgICBwYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDdXJyZW50IHBhZ2UgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIGN1cnJlbnRfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIHRvIGluY3JlYXNlL2RlY3JlYXNlIHBhZ2Ugc2l6ZSBieVxuICAgICAqIChmb3IgdXNlIGluIHNpbXBsZSBzaG93IG1vcmUgbW9kZSlcbiAgICAgKi9cbiAgICBzaG93X21vcmVfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFNob3cgc2ltcGxlIG1vcmUvbGVzcyBidXR0b25zIHRvIGFkanVzdCBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBzaG93X21vcmVfbGVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHJvdyBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHJvd3NcbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIG5fY2xpY2tzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG5cblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=