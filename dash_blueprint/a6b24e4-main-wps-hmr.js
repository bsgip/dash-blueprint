webpackHotUpdatedash_blueprint("main",{

/***/ "./src/lib/components/hocs/PropertyTable.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/hocs/PropertyTable.react.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyTable; });
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

var _excluded = ["rows", "columns", "actions", "maxCount", "setProps", "actionButtonProps"];

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import { HTMLTable } from '../../index';





function renderHeader(columns, actions) {
  // return columns.map((column) => {<th >{"header"}</th>});
  // return columns.map((column) => {<td >{column.key}</td>});
  var headerCells = columns.map(function (column) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, column.label);
  });
  console.log(headerCells);
  return headerCells;
}

function renderRow(row, columns, actions, setProps, actionButtonProps) {
  return columns.map(function (column) {
    if (column.type == "action") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
        icon: column.icon,
        onClick: function onClick(event) {
          event.stopPropagation(); // Stop the event contributing to selection change

          setProps(_defineProperty({}, column.action + "Action", row));
        }
      }, actionButtonProps)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row[column.key]);
  }); // // row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS
  // return (<div className={"bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram"}
  //             // style={{borderRadius: "0px", background: "none"}}
  //         >
  //         <div className={"bp3-progress-meter"}
  //             style={{
  //                 width: (scaledValue * 100).toPrecision(2) + "%",
  //                 borderRadius: "0px"
  //             }}
  //         >
  //         </div>
  //     </div>);
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


var PropertyTable = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyTable, _React$Component);

  var _super = _createSuper(PropertyTable);

  function PropertyTable(props) {
    var _this;

    _classCallCheck(this, PropertyTable);

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


  _createClass(PropertyTable, [{
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
          columns = _this$props.columns,
          actions = _this$props.actions,
          maxCount = _this$props.maxCount,
          setProps = _this$props.setProps,
          actionButtonProps = _this$props.actionButtonProps,
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
      var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, renderHeader(columns, actions));
      console.log(renderHeader(columns, actions));
      console.log(columns);
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
        }, renderRow(row, columns, actions, setProps ? setProps : _this2.setState, actionButtonProps));
      });
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

  return PropertyTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


PropertyTable.defaultProps = {
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
  show_more_less: true,
  actionButtonProps: {
    minimal: true,
    small: true
  }
};
PropertyTable.propTypes = {
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
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * An array of properties to display in the table
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * A set of actions to display in the first column
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  // n_clicks: PropTypes.number,

  /**
   * Props to pass through to the action button
   */
  actionButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Row selected for locate action
   */
  locateAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Row clicked for info action
   */
  infoAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL1Byb3BlcnR5VGFibGUucmVhY3QuanMiXSwibmFtZXMiOlsicmVuZGVySGVhZGVyIiwiY29sdW1ucyIsImFjdGlvbnMiLCJoZWFkZXJDZWxscyIsIm1hcCIsImNvbHVtbiIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInJlbmRlclJvdyIsInJvdyIsInNldFByb3BzIiwiYWN0aW9uQnV0dG9uUHJvcHMiLCJ0eXBlIiwiaWNvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9uIiwia2V5IiwiUHJvcGVydHlUYWJsZSIsInByb3BzIiwiaGFuZGxlUm93Q2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJyZW5kZXJNb3JlTGVzc0J1dHRvbnMiLCJmaWx0ZXJSb3dzIiwic3RhdGUiLCJuX2NsaWNrcyIsInBhZ2Vfc2l6ZSIsInBhZ2VTaXplIiwiZmlsdGVyZWRSb3dzIiwicm93cyIsInNsaWNlIiwibWF4Q291bnQiLCJ0YWJsZVByb3BzIiwic2NhbGluZ0NvbnN0YW50IiwiTWF0aCIsIm1heCIsImNvdW50IiwiaGVhZGVyIiwib3JkZXJlZEtleXMiLCJyb3dTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJib2R5IiwiaW5kZXhPZiIsInBhZ2luYXRpb24iLCJzaG93X21vcmVfbGVzcyIsImxlbmd0aCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzaG93X21vcmVfc2l6ZSIsInNlbGVjdGFibGUiLCJtaW5pbWFsIiwic21hbGwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJudW1iZXIiLCJyb3dfY2xpY2siLCJib29sIiwiYXJyYXlPZiIsIm9iamVjdCIsImxvY2F0ZUFjdGlvbiIsImluZm9BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0M7QUFDcEM7QUFDQTtBQUNBLE1BQU1DLFdBQVcsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLHdCQUFZLHVFQUFLQSxNQUFNLENBQUNDLEtBQVosQ0FBWjtBQUFBLEdBQVosQ0FBcEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVo7QUFDQSxTQUFPQSxXQUFQO0FBQ0g7O0FBRUQsU0FBU00sU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JULE9BQXhCLEVBQWlDQyxPQUFqQyxFQUEwQ1MsUUFBMUMsRUFBb0RDLGlCQUFwRCxFQUF1RTtBQUNuRSxTQUFPWCxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDM0IsUUFBSUEsTUFBTSxDQUFDUSxJQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDekIsMEJBQU8sb0ZBQUssMkRBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUVSLE1BQU0sQ0FBQ1MsSUFBckI7QUFDSixlQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBVztBQUNoQkEsZUFBSyxDQUFDQyxlQUFOLEdBRGdCLENBQ1M7O0FBQ3pCTCxrQkFBUSxxQkFBR04sTUFBTSxDQUFDWSxNQUFQLEdBQWdCLFFBQW5CLEVBQThCUCxHQUE5QixFQUFSO0FBQ0g7QUFKRyxTQUtBRSxpQkFMQSxFQUFMLENBQVA7QUFNSDs7QUFDRCx3QkFBTyx1RUFBTUYsR0FBRyxDQUFDTCxNQUFNLENBQUNhLEdBQVIsQ0FBVCxDQUFQO0FBQ0gsR0FWTSxDQUFQLENBRG1FLENBWW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJDLGE7Ozs7O0FBQ2pCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU4sRUFEZSxDQUVmOztBQUNBLFVBQUtDLGNBQUwsR0FBc0JBLG9FQUFjLENBQUNDLElBQWYsK0JBQXRCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsK0JBQWhCO0FBQ0EsVUFBS0UscUJBQUwsR0FBNkJBLGtGQUFxQixDQUFDRixJQUF0QiwrQkFBN0I7QUFDQSxVQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLCtCQUFsQixDQU5lLENBT2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFLSSxLQUFMLEdBQWE7QUFDVEMsY0FBUSxFQUFFLENBREQ7QUFFVEMsZUFBUyxFQUFFUixLQUFLLENBQUNRO0FBRlIsS0FBYjtBQVplO0FBZ0JsQixHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FFQSxzQkFBYTtBQUNULFVBQU1DLFFBQVEsR0FBRyxLQUFLVCxLQUFMLENBQVdULFFBQVgsR0FBc0IsS0FBS1MsS0FBTCxDQUFXUSxTQUFqQyxHQUE2QyxLQUFLRixLQUFMLENBQVdFLFNBQXpFO0FBQ0EsVUFBTUUsWUFBWSxHQUFHLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUJILFFBQVEsR0FBRyxDQUFwQyxDQUFyQjtBQUNBdEIsYUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQTZCcUIsUUFBekM7QUFDQXRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsWUFBWjtBQUNBLGFBQU9BLFlBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDTCxVQUFNVixLQUFLLEdBQUcsS0FBS0EsS0FBbkI7O0FBQ0Esd0JBQXVGLEtBQUtBLEtBQTVGO0FBQUEsVUFBT1csSUFBUCxlQUFPQSxJQUFQO0FBQUEsVUFBYTlCLE9BQWIsZUFBYUEsT0FBYjtBQUFBLFVBQXNCQyxPQUF0QixlQUFzQkEsT0FBdEI7QUFBQSxVQUErQitCLFFBQS9CLGVBQStCQSxRQUEvQjtBQUFBLFVBQXlDdEIsUUFBekMsZUFBeUNBLFFBQXpDO0FBQUEsVUFBbURDLGlCQUFuRCxlQUFtREEsaUJBQW5EO0FBQUEsVUFBeUVzQixVQUF6RTs7QUFDQSxVQUFJQyxlQUFlLEdBQUdGLFFBQXRCOztBQUNBLFVBQUksQ0FBQ0UsZUFBTCxFQUFzQjtBQUNsQkEsdUJBQWUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUkscUJBQVFMLElBQUksQ0FBQzNCLEdBQUwsQ0FBUyxVQUFDTSxHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQzRCLEtBQWI7QUFBQSxTQUFULENBQVIsRUFBdEI7QUFDSDs7QUFBQTtBQUNEL0IsYUFBTyxDQUFDQyxHQUFSLENBQVl1QixJQUFJLENBQUMzQixHQUFMLENBQVMsVUFBQ00sR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQzRCLEtBQWI7QUFBQSxPQUFULENBQVo7QUFDQSxVQUFNQyxNQUFNLGdCQUFJLHVFQUFLdkMsWUFBWSxDQUFDQyxPQUFELEVBQVVDLE9BQVYsQ0FBakIsQ0FBaEI7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVlSLFlBQVksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLENBQXhCO0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaO0FBQ0EsVUFBSXVDLFdBQVcsR0FBR1QsSUFBSSxDQUFDM0IsR0FBTCxDQUFTLFVBQUFNLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNRLEdBQVI7QUFBQSxPQUFaLENBQWxCO0FBRUEsVUFBTXVCLFlBQVksR0FBRyxDQUFDLEtBQUtyQixLQUFMLENBQVdULFFBQVgsR0FBc0IsS0FBS1MsS0FBTCxDQUFXc0IsU0FBakMsR0FBNkMsS0FBS2hCLEtBQUwsQ0FBV2dCLFNBQXpELEtBQXVFLEVBQTVGO0FBQ0EsVUFBTVosWUFBWSxHQUFHLEtBQUtMLFVBQUwsQ0FBZ0JNLElBQWhCLENBQXJCO0FBRUEsVUFBTVksSUFBSSxHQUFHYixZQUFZLENBQUMxQixHQUFiLENBQWlCLFVBQUFNLEdBQUc7QUFBQSw0QkFBSywyREFBQyxpREFBRDtBQUFJLGtCQUFRLEVBQUUrQixZQUFZLENBQUNHLE9BQWIsQ0FBcUJsQyxHQUFHLENBQUNRLEdBQXpCLElBQWdDLENBQUMsQ0FBL0M7QUFBa0QsYUFBRyxFQUFFUixHQUFHLENBQUNRLEdBQTNEO0FBQWdFLGlCQUFPLEVBQUUsaUJBQUNILEtBQUQ7QUFBQSxtQkFBVyxNQUFJLENBQUNNLGNBQUwsQ0FBb0JYLEdBQUcsQ0FBQ1EsR0FBeEIsRUFBNkJILEtBQTdCLEVBQW9DeUIsV0FBcEMsQ0FBWDtBQUFBO0FBQXpFLFdBQzdCL0IsU0FBUyxDQUFDQyxHQUFELEVBQU1ULE9BQU4sRUFBZUMsT0FBZixFQUF3QlMsUUFBUSxHQUFHQSxRQUFILEdBQWMsTUFBSSxDQUFDWSxRQUFuRCxFQUE2RFgsaUJBQTdELENBRG9CLENBQUw7QUFBQSxPQUFwQixDQUFiO0FBR0EsVUFBSWlDLFVBQUo7O0FBQ0EsVUFBSSxLQUFLekIsS0FBTCxDQUFXMEIsY0FBZixFQUErQjtBQUMzQkQsa0JBQVUsR0FBRyxLQUFLckIscUJBQUwsQ0FBMkJPLElBQUksQ0FBQ2dCLE1BQWhDLENBQWI7QUFDSDs7QUFDRCwwQkFBUSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAscUJBQ0osMkRBQUMsMkRBQUQ7QUFBYSxpQkFBUyxFQUFDLFdBQXZCO0FBQW1DLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUU7QUFBUixTQUExQztBQUEyRCxtQkFBVyxFQUFFO0FBQXhFLHNCQUNJLDBFQUFRVCxNQUFSLENBREosZUFFSSwwRUFBUUksSUFBUixDQUZKLENBREksRUFLSEUsVUFMRyxDQUFSO0FBUUg7Ozs7RUF6RXNDSSw0Q0FBSyxDQUFDQyxTOzs7QUE2RWpEL0IsYUFBYSxDQUFDZ0MsWUFBZCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXZCLFdBQVMsRUFBRSxDQVBjO0FBUXpCO0FBQ0E7QUFDQXdCLGdCQUFjLEVBQUUsRUFWUztBQVd6QjtBQUNBckIsTUFBSSxFQUFFLEVBWm1CO0FBYXpCc0IsWUFBVSxFQUFFLElBYmE7QUFjekJQLGdCQUFjLEVBQUUsSUFkUztBQWV6QmxDLG1CQUFpQixFQUFFO0FBQ2YwQyxXQUFPLEVBQUUsSUFETTtBQUVmQyxTQUFLLEVBQUU7QUFGUTtBQWZNLENBQTdCO0FBcUJBcEMsYUFBYSxDQUFDcUMsU0FBZCxHQUEwQjtBQUN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksUUFBTUMsaURBQVMsQ0FBQ0MsTUFOTTs7QUFRdEI7QUFDSjtBQUNBO0FBQ0ksY0FBWUQsaURBQVMsQ0FBQ0UsSUFYQTs7QUFhdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLFNBQU9GLGlEQUFTLENBQUNDLE1BbEJLOztBQW9CdEI7QUFDSjtBQUNBO0FBQ0ksVUFBUUQsaURBQVMsQ0FBQ0MsTUF2Qkk7O0FBeUJ0QjtBQUNKO0FBQ0E7QUFDSSxZQUFVRCxpREFBUyxDQUFDQyxNQTVCRTs7QUE4QnRCO0FBQ0o7QUFDQTtBQUNJLFlBQVVELGlEQUFTLENBQUNDLE1BakNFOztBQW1DdEI7QUFDSjtBQUNBO0FBQ0ksZUFBYUQsaURBQVMsQ0FBQ0MsTUF0Q0Q7O0FBd0N0QjtBQUNKO0FBQ0E7QUFDSTNCLE1BQUksRUFBRTBCLGlEQUFTLENBQUNHLEtBM0NNOztBQTZDdEI7QUFDSjtBQUNBO0FBQ0E7QUFDSTNCLFVBQVEsRUFBRXdCLGlEQUFTLENBQUNJLE1BakRFO0FBbUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0o7QUFDQTtBQUNJQyxXQUFTLEVBQUVMLGlEQUFTLENBQUNDLE1BL0VDO0FBaUZ0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0k5QixXQUFTLEVBQUU2QixpREFBUyxDQUFDSSxNQWxIQztBQW9IdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDSVQsZ0JBQWMsRUFBRUssaURBQVMsQ0FBQ0ksTUE3SEo7O0FBK0h0QjtBQUNKO0FBQ0E7QUFDSWYsZ0JBQWMsRUFBRVcsaURBQVMsQ0FBQ00sSUFsSUo7O0FBb0l0QjtBQUNKO0FBQ0E7QUFDSVYsWUFBVSxFQUFFSSxpREFBUyxDQUFDTSxJQXZJQTs7QUF5SXRCO0FBQ0o7QUFDQTtBQUNJckIsV0FBUyxFQUFFZSxpREFBUyxDQUFDRyxLQTVJQzs7QUE4SXRCO0FBQ0o7QUFDQTtBQUNJM0QsU0FBTyxFQUFFd0QsaURBQVMsQ0FBQ0csS0FqSkc7O0FBbUp0QjtBQUNKO0FBQ0E7QUFDSTFELFNBQU8sRUFBRXVELGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNDLE1BQTVCLENBdEphO0FBd0p0Qjs7QUFFQTtBQUNKO0FBQ0E7QUFDSTlDLG1CQUFpQixFQUFFNkMsaURBQVMsQ0FBQ1EsTUE3SlA7O0FBK0p0QjtBQUNKO0FBQ0E7QUFDSUMsY0FBWSxFQUFFVCxpREFBUyxDQUFDUSxNQWxLRjs7QUFvS3RCO0FBQ0o7QUFDQTtBQUNJRSxZQUFVLEVBQUVWLGlEQUFTLENBQUNRO0FBdktBLENBQTFCLEMiLCJmaWxlIjoiYTZiMjRlNC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEhUTUxUYWJsZSBhcyBCUEhUTUxUYWJsZSwgRWRpdGFibGVUZXh0LCBCdXR0b24sIFByb2dyZXNzQmFyLCBJbnRlbnQsIFRleHQgfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIjtcbmltcG9ydCBUciBmcm9tICcuLi9Uci5yZWFjdCc7XG5pbXBvcnQgeyBJTlRFTlRfU1VDQ0VTUyB9IGZyb20gJ0BibHVlcHJpbnRqcy9jb3JlL2xpYi9lc20vY29tbW9uL2NsYXNzZXMnO1xuLy8gaW1wb3J0IHsgSFRNTFRhYmxlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgaGFuZGxlUm93Q2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVSb3dDbGljayc7XG5pbXBvcnQgeyByZW5kZXJNb3JlTGVzc0J1dHRvbnMgfSBmcm9tICcuLi8uLi91dGlscy9yZW5kZXJNb3JlTGVzc0J1dHRvbnMnO1xuXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9oaXN0b2dyYW0uY3NzJztcblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKGNvbHVtbnMsIGFjdGlvbnMpIHtcbiAgICAvLyByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gezx0aCA+e1wiaGVhZGVyXCJ9PC90aD59KTtcbiAgICAvLyByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gezx0ZCA+e2NvbHVtbi5rZXl9PC90ZD59KTtcbiAgICBjb25zdCBoZWFkZXJDZWxscyA9IGNvbHVtbnMubWFwKChjb2x1bW4pID0+IDx0aD57Y29sdW1uLmxhYmVsfTwvdGg+KTtcbiAgICBjb25zb2xlLmxvZyhoZWFkZXJDZWxscyk7XG4gICAgcmV0dXJuIGhlYWRlckNlbGxzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJSb3cocm93LCBjb2x1bW5zLCBhY3Rpb25zLCBzZXRQcm9wcywgYWN0aW9uQnV0dG9uUHJvcHMpIHtcbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIDx0ZCA+PEJ1dHRvbiBpY29uPXtjb2x1bW4uaWNvbn0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFN0b3AgdGhlIGV2ZW50IGNvbnRyaWJ1dGluZyB0byBzZWxlY3Rpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7W2NvbHVtbi5hY3Rpb24gKyBcIkFjdGlvblwiXTogcm93fSk7XG4gICAgICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgICAgICB7Li4uYWN0aW9uQnV0dG9uUHJvcHN9IC8+PC90ZD5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPHRkID57cm93W2NvbHVtbi5rZXldfTwvdGQ+XG4gICAgfSk7XG4gICAgLy8gLy8gcm93LmNvdW50ID4gc2NhbGluZ0NvbnN0YW50ID8gSW50ZW50LldBUk5JTkcgOiBJbnRlbnQuU1VDQ0VTU1xuICAgIC8vIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1wiYnAzLXByb2dyZXNzLWJhciBicDMtaW50ZW50LXN1Y2Nlc3MgYnAzLW5vLWFuaW1hdGlvbiBicDMtbm8tc3RyaXBlcyBicDMtaGlzdG9ncmFtXCJ9XG4gICAgLy8gICAgICAgICAgICAgLy8gc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMHB4XCIsIGJhY2tncm91bmQ6IFwibm9uZVwifX1cbiAgICAvLyAgICAgICAgID5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1tZXRlclwifVxuICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAoc2NhbGVkVmFsdWUgKiAxMDApLnRvUHJlY2lzaW9uKDIpICsgXCIlXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIlxuICAgIC8vICAgICAgICAgICAgIH19XG4gICAgLy8gICAgICAgICA+XG5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Rpdj4pO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBwcm92aWRlcyBCbHVlcHJpbnQgc3R5bGluZyB0byBuYXRpdmUgSFRNTCB0YWJsZXMuXG4gKiBcbiAqIEl0IGFsc28gaW5jbHVkZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBzZWFyY2hpbmcsIG9yZGVyaW5nIGFuZCBwYWdpbmF0aW9uIG9mXG4gKiBkYXRhIGluIHRoZSB0YWJsZS5cbiAqIFxuICogSU1QT1JUQU5UOiBXaGVuIGNyZWF0aW5nIHJvd3MsIHlvdSBNVVNUIHVzZSB0aGUgQmx1ZXByaW50SlMgVHIgY29tcG9uZW50IGlmIHlvdVxuICogd2FudCBzZWxlY3Rpb24gdG8gc2hvdyBwcm9wZXJseSwgYW5kIHVzZSBjc3MgdG8gbW9kaWZ5IHJvd3Mgd2l0aCBjbGFzc05hbWUgJ3NlbGVjdGVkJ1xuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlU2VsZWN0aW9uID0gdGhpcy51cGRhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dDbGljayA9IGhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zID0gcmVuZGVyTW9yZUxlc3NCdXR0b25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZVJvd0NsaWNrID0gdGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmZpbHRlclJvd3MgPSB0aGlzLmZpbHRlclJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJQYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJQYWdpbmF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuVHJzID0ge307XG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe25fY2xpY2tzOiAwfSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuX2NsaWNrczogMCxcbiAgICAgICAgICAgIHBhZ2Vfc2l6ZTogcHJvcHMucGFnZV9zaXplXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlU2VsZWN0aW9uKGtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cob3JkZXJlZEtleXMpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgY29uc3Qgc2V0UHJvcHMgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5zZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGU7XG4gICAgLy8gICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUgfHwgdHJ1ZSkge1xuICAgIC8vICAgICAgICAgc2V0UHJvcHMoe1xuICAgIC8vICAgICAgICAgICAgIHNlbGVjdGlvbjogW2tleV0sXG4gICAgLy8gICAgICAgICAgICAgcm93X2NsaWNrOiBrZXlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgZmlsdGVyUm93cygpIHtcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5wYWdlX3NpemUgOiB0aGlzLnN0YXRlLnBhZ2Vfc2l6ZTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRSb3dzID0gdGhpcy5wcm9wcy5yb3dzLnNsaWNlKDAsIHBhZ2VTaXplIC0gMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZCByb3dzIHRvIGxlbmd0aCAnICsgcGFnZVNpemUpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFJvd3MpXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2x1bW5zLCBhY3Rpb25zLCBtYXhDb3VudCwgc2V0UHJvcHMsIGFjdGlvbkJ1dHRvblByb3BzLCAuLi50YWJsZVByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzY2FsaW5nQ29uc3RhbnQgPSBtYXhDb3VudDtcbiAgICAgICAgaWYgKCFzY2FsaW5nQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25zdGFudCA9IE1hdGgubWF4KC4uLnJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gKDx0cj57cmVuZGVySGVhZGVyKGNvbHVtbnMsIGFjdGlvbnMpfTwvdHI+KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVuZGVySGVhZGVyKGNvbHVtbnMsIGFjdGlvbnMpKTtcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1ucyk7XG4gICAgICAgIGxldCBvcmRlcmVkS2V5cyA9IHJvd3MubWFwKHJvdyA9PiByb3cua2V5KTtcblxuICAgICAgICBjb25zdCByb3dTZWxlY3Rpb24gPSAodGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2VsZWN0aW9uIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb24pIHx8IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmZpbHRlclJvd3Mocm93cyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBib2R5ID0gZmlsdGVyZWRSb3dzLm1hcChyb3cgPT4gKDxUciBzZWxlY3RlZD17cm93U2VsZWN0aW9uLmluZGV4T2Yocm93LmtleSkgPiAtMX0ga2V5PXtyb3cua2V5fSBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LmtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKX0+XG4gICAgICAgICAgICAgICAge3JlbmRlclJvdyhyb3csIGNvbHVtbnMsIGFjdGlvbnMsIHNldFByb3BzID8gc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlLCBhY3Rpb25CdXR0b25Qcm9wcyl9XG4gICAgICAgICAgICA8L1RyPikpO1xuICAgICAgICBsZXQgcGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd19tb3JlX2xlc3MpIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb24gPSB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyhyb3dzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QlBIVE1MVGFibGUgY2xhc3NOYW1lPVwiaGlzdG9ncmFtXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fSBpbnRlcmFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPntoZWFkZXJ9PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+e2JvZHl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvQlBIVE1MVGFibGU+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuUHJvcGVydHlUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gc29ydF9kaXJlY3Rpb246ICdhc2MnLFxuICAgIC8vIGZpbHRlcl9ieToge30sXG4gICAgLy8gLy8gVE9ETyByZW1vdmUgdGhlc2UgZGVmYXVsdHNcbiAgICAvLyBmaWx0ZXJfY29sdW1uczogW10sXG4gICAgLy8gc29ydF9jb2x1bW5zOiBbXSxcbiAgICAvLyBmaWx0ZXJfc3RyaW5nczoge30sXG4gICAgcGFnZV9zaXplOiA1LFxuICAgIC8vIGN1cnJlbnRfcGFnZTogMSxcbiAgICAvLyBzZWxlY3Rpb246IFtdLFxuICAgIHNob3dfbW9yZV9zaXplOiAxMCxcbiAgICAvLyBuX2NsaWNrczogMCxcbiAgICByb3dzOiBbXSxcbiAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIHNob3dfbW9yZV9sZXNzOiB0cnVlLFxuICAgIGFjdGlvbkJ1dHRvblByb3BzOiB7XG4gICAgICAgIG1pbmltYWw6IHRydWUsXG4gICAgICAgIHNtYWxsOiB0cnVlXG4gICAgfVxufTtcblxuUHJvcGVydHlUYWJsZS5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoaXMgY29tcG9uZW50LCB1c2VkIHRvIGlkZW50aWZ5IGRhc2ggY29tcG9uZW50c1xuICAgICAqIGluIGNhbGxiYWNrcy4gVGhlIElEIG5lZWRzIHRvIGJlIHVuaXF1ZSBhY3Jvc3MgYWxsIG9mIHRoZVxuICAgICAqIGNvbXBvbmVudHMgaW4gYW4gYXBwLlxuICAgICAqL1xuICAgICdpZCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICAnY2hpbGRyZW4nOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb21wb25lbnQsIHVzZWQgdG8gaW1wcm92ZVxuICAgICAqIHBlcmZvcm1hbmNlIGJ5IFJlYWN0LmpzIHdoaWxlIHJlbmRlcmluZyBjb21wb25lbnRzXG4gICAgICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9saXN0cy1hbmQta2V5cy5odG1sIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICAna2V5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUklBIHJvbGUgYXR0cmlidXRlXG4gICAgICovXG4gICAgJ3JvbGUnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSB3aWxkY2FyZCBkYXRhIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdkYXRhLSonOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSB3aWxkY2FyZCBhcmlhIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdhcmlhLSonOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogT2Z0ZW4gdXNlZCB3aXRoIENTUyB0byBzdHlsZSBlbGVtZW50cyB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgICdjbGFzc05hbWUnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogUm93IGRhdGEgdXNlZCB0byBjcmVhdGUgdGhlIGhpc3RvZ3JhbVxuICAgICAqL1xuICAgIHJvd3M6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIE1heGltdW0gY291bnQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGhpc3RvZ3JhbS4gVmFsdWVzIGFib3ZlIHRoaXMgbnVtYmVyXG4gICAgICogd2lsbCBiZSByZW5kZXJlZCBhIGRpZmZlcmVudCBjb2xvdXJcbiAgICAgKi9cbiAgICBtYXhDb3VudDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEVuYWJsZXMgYm9yZGVycyBiZXR3ZWVuIHJvd3MgYW5kIGNlbGxzLlxuICAgIC8vICAqL1xuICAgIC8vIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFVzZSBzbWFsbCwgY29uZGVuc2VkIGFwcGVhcmFuY2UuXG4gICAgLy8gICovXG4gICAgLy8gY29uZGVuc2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEVuYWJsZXMgaG92ZXIgc3R5bGVzIG9uIHJvdy5cbiAgICAvLyAgKi9cbiAgICAvLyBpbnRlcmFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlIGZvciB0aGlzIGVsZW1lbnQgYW5kIGFsbCBjaGlsZCBlbGVtZW50cy5cbiAgICAvLyAgKi9cbiAgICAvLyBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2UgYW4gYWx0ZXJuYXRlIGJhY2tncm91bmQgY29sb3Igb24gb2RkIHJvd3MuXG4gICAgLy8gICovXG4gICAgLy8gc3RyaXBlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBLZXkgZm9yIHRoZSBjbGlja2VkIHJvd1xuICAgICAqL1xuICAgIHJvd19jbGljazogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENvbHVtbiB0byBzb3J0IHZhbHVlcyBvblxuICAgIC8vICAqL1xuICAgIC8vIHNvcnRfY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogU29ydCBkaXJlY3Rpb24gKGFzYyBvciBkZXNjKVxuICAgIC8vICAqL1xuICAgIC8vIHNvcnRfZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogRmlsdGVyaW5nIHN0cmluZ3NcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfYnk6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gbnVtYmVycyB0aGF0IG1heSBiZSBmaWx0ZXJlZFxuICAgIC8vICAqL1xuICAgIC8vIGZpbHRlcl9jb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW5zIHRoYXQgY2FuIGJlIHNvcnRlZCBvblxuICAgIC8vICAqL1xuICAgIC8vIHNvcnRfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogU3RyaW5ncyB0byBmaWx0ZXIgY29sdW1ucyBieVxuICAgIC8vICAqL1xuICAgIC8vIGZpbHRlcl9zdHJpbmdzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUGFnZSBzaXplIChpbiByb3dzKVxuICAgICAqL1xuICAgIHBhZ2Vfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEN1cnJlbnQgcGFnZSB0byBzaG93XG4gICAgLy8gICovXG4gICAgLy8gY3VycmVudF9wYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJvd3MgdG8gaW5jcmVhc2UvZGVjcmVhc2UgcGFnZSBzaXplIGJ5XG4gICAgICogKGZvciB1c2UgaW4gc2ltcGxlIHNob3cgbW9yZSBtb2RlKVxuICAgICAqL1xuICAgIHNob3dfbW9yZV9zaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogU2hvdyBzaW1wbGUgbW9yZS9sZXNzIGJ1dHRvbnMgdG8gYWRqdXN0IHBhZ2Ugc2l6ZVxuICAgICAqL1xuICAgIHNob3dfbW9yZV9sZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgcm93IHNlbGVjdGlvbiBpcyBlbmFibGVkXG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50bHkgc2VsZWN0ZWQgcm93c1xuICAgICAqL1xuICAgIHNlbGVjdGlvbjogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgcHJvcGVydGllcyB0byBkaXNwbGF5IGluIHRoZSB0YWJsZVxuICAgICAqL1xuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIEEgc2V0IG9mIGFjdGlvbnMgdG8gZGlzcGxheSBpbiB0aGUgZmlyc3QgY29sdW1uXG4gICAgICovXG4gICAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgICAvLyBuX2NsaWNrczogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgYWN0aW9uIGJ1dHRvblxuICAgICAqL1xuICAgIGFjdGlvbkJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUm93IHNlbGVjdGVkIGZvciBsb2NhdGUgYWN0aW9uXG4gICAgICovXG4gICAgbG9jYXRlQWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUm93IGNsaWNrZWQgZm9yIGluZm8gYWN0aW9uXG4gICAgICovXG4gICAgaW5mb0FjdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9