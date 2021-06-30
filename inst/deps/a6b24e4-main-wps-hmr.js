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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL1Byb3BlcnR5VGFibGUucmVhY3QuanMiXSwibmFtZXMiOlsicmVuZGVySGVhZGVyIiwiY29sdW1ucyIsImFjdGlvbnMiLCJoZWFkZXJDZWxscyIsIm1hcCIsImNvbHVtbiIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInJlbmRlclJvdyIsInJvdyIsInNldFByb3BzIiwiYWN0aW9uQnV0dG9uUHJvcHMiLCJ0eXBlIiwiaWNvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9uIiwia2V5IiwiUHJvcGVydHlUYWJsZSIsInByb3BzIiwiaGFuZGxlUm93Q2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJyZW5kZXJNb3JlTGVzc0J1dHRvbnMiLCJmaWx0ZXJSb3dzIiwic3RhdGUiLCJuX2NsaWNrcyIsInBhZ2Vfc2l6ZSIsInBhZ2VTaXplIiwiZmlsdGVyZWRSb3dzIiwicm93cyIsInNsaWNlIiwibWF4Q291bnQiLCJ0YWJsZVByb3BzIiwic2NhbGluZ0NvbnN0YW50IiwiTWF0aCIsIm1heCIsImNvdW50IiwiaGVhZGVyIiwib3JkZXJlZEtleXMiLCJyb3dTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJib2R5IiwiaW5kZXhPZiIsInBhZ2luYXRpb24iLCJzaG93X21vcmVfbGVzcyIsImxlbmd0aCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzaG93X21vcmVfc2l6ZSIsInNlbGVjdGFibGUiLCJtaW5pbWFsIiwic21hbGwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJudW1iZXIiLCJyb3dfY2xpY2siLCJib29sIiwiYXJyYXlPZiIsIm9iamVjdCIsImxvY2F0ZUFjdGlvbiIsImluZm9BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNKO0FBQ0E7QUFDSTlCLFdBQVMsRUFBRTZCLGlEQUFTLENBQUNJLE1BbEhDO0FBb0h0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNJVCxnQkFBYyxFQUFFSyxpREFBUyxDQUFDSSxNQTdISjs7QUErSHRCO0FBQ0o7QUFDQTtBQUNJZixnQkFBYyxFQUFFVyxpREFBUyxDQUFDTSxJQWxJSjs7QUFvSXRCO0FBQ0o7QUFDQTtBQUNJVixZQUFVLEVBQUVJLGlEQUFTLENBQUNNLElBdklBOztBQXlJdEI7QUFDSjtBQUNBO0FBQ0lyQixXQUFTLEVBQUVlLGlEQUFTLENBQUNHLEtBNUlDOztBQThJdEI7QUFDSjtBQUNBO0FBQ0kzRCxTQUFPLEVBQUV3RCxpREFBUyxDQUFDRyxLQWpKRzs7QUFtSnRCO0FBQ0o7QUFDQTtBQUNJMUQsU0FBTyxFQUFFdUQsaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0MsTUFBNUIsQ0F0SmE7QUF3SnRCOztBQUVBO0FBQ0o7QUFDQTtBQUNJOUMsbUJBQWlCLEVBQUU2QyxpREFBUyxDQUFDUSxNQTdKUDs7QUErSnRCO0FBQ0o7QUFDQTtBQUNJQyxjQUFZLEVBQUVULGlEQUFTLENBQUNRLE1BbEtGOztBQW9LdEI7QUFDSjtBQUNBO0FBQ0lFLFlBQVUsRUFBRVYsaURBQVMsQ0FBQ1E7QUF2S0EsQ0FBMUIsQyIsImZpbGUiOiJhNmIyNGU0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSFRNTFRhYmxlIGFzIEJQSFRNTFRhYmxlLCBFZGl0YWJsZVRleHQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIsIEludGVudCwgVGV4dCB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuaW1wb3J0IFRyIGZyb20gJy4uL1RyLnJlYWN0JztcbmltcG9ydCB7IElOVEVOVF9TVUNDRVNTIH0gZnJvbSAnQGJsdWVwcmludGpzL2NvcmUvbGliL2VzbS9jb21tb24vY2xhc3Nlcyc7XG4vLyBpbXBvcnQgeyBIVE1MVGFibGUgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBoYW5kbGVSb3dDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZVJvd0NsaWNrJztcbmltcG9ydCB7IHJlbmRlck1vcmVMZXNzQnV0dG9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbmRlck1vcmVMZXNzQnV0dG9ucyc7XG5cbmltcG9ydCAnLi4vLi4vLi4vY3NzL2hpc3RvZ3JhbS5jc3MnO1xuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucykge1xuICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRoID57XCJoZWFkZXJcIn08L3RoPn0pO1xuICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRkID57Y29sdW1uLmtleX08L3RkPn0pO1xuICAgIGNvbnN0IGhlYWRlckNlbGxzID0gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gPHRoPntjb2x1bW4ubGFiZWx9PC90aD4pO1xuICAgIGNvbnNvbGUubG9nKGhlYWRlckNlbGxzKTtcbiAgICByZXR1cm4gaGVhZGVyQ2VsbHM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclJvdyhyb3csIGNvbHVtbnMsIGFjdGlvbnMsIHNldFByb3BzLCBhY3Rpb25CdXR0b25Qcm9wcykge1xuICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udHlwZSA9PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gPHRkID48QnV0dG9uIGljb249e2NvbHVtbi5pY29ufSBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gU3RvcCB0aGUgZXZlbnQgY29udHJpYnV0aW5nIHRvIHNlbGVjdGlvbiBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzKHtbY29sdW1uLmFjdGlvbiArIFwiQWN0aW9uXCJdOiByb3d9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hY3Rpb25CdXR0b25Qcm9wc30gLz48L3RkPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8dGQgPntyb3dbY29sdW1uLmtleV19PC90ZD5cbiAgICB9KTtcbiAgICAvLyAvLyByb3cuY291bnQgPiBzY2FsaW5nQ29uc3RhbnQgPyBJbnRlbnQuV0FSTklORyA6IEludGVudC5TVUNDRVNTXG4gICAgLy8gcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtYmFyIGJwMy1pbnRlbnQtc3VjY2VzcyBicDMtbm8tYW5pbWF0aW9uIGJwMy1uby1zdHJpcGVzIGJwMy1oaXN0b2dyYW1cIn1cbiAgICAvLyAgICAgICAgICAgICAvLyBzdHlsZT17e2JvcmRlclJhZGl1czogXCIwcHhcIiwgYmFja2dyb3VuZDogXCJub25lXCJ9fVxuICAgIC8vICAgICAgICAgPlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYnAzLXByb2dyZXNzLW1ldGVyXCJ9XG4gICAgLy8gICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICAgICAgICAgICAgd2lkdGg6IChzY2FsZWRWYWx1ZSAqIDEwMCkudG9QcmVjaXNpb24oMikgKyBcIiVcIixcbiAgICAvLyAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiXG4gICAgLy8gICAgICAgICAgICAgfX1cbiAgICAvLyAgICAgICAgID5cblxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgIDwvZGl2Pik7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIEJsdWVwcmludCBzdHlsaW5nIHRvIG5hdGl2ZSBIVE1MIHRhYmxlcy5cbiAqIFxuICogSXQgYWxzbyBpbmNsdWRlcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgZm9yIHNlYXJjaGluZywgb3JkZXJpbmcgYW5kIHBhZ2luYXRpb24gb2ZcbiAqIGRhdGEgaW4gdGhlIHRhYmxlLlxuICogXG4gKiBJTVBPUlRBTlQ6IFdoZW4gY3JlYXRpbmcgcm93cywgeW91IE1VU1QgdXNlIHRoZSBCbHVlcHJpbnRKUyBUciBjb21wb25lbnQgaWYgeW91XG4gKiB3YW50IHNlbGVjdGlvbiB0byBzaG93IHByb3Blcmx5LCBhbmQgdXNlIGNzcyB0byBtb2RpZnkgcm93cyB3aXRoIGNsYXNzTmFtZSAnc2VsZWN0ZWQnXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVTZWxlY3Rpb24gPSB0aGlzLnVwZGF0ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvd0NsaWNrID0gaGFuZGxlUm93Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNb3JlTGVzc0J1dHRvbnMgPSByZW5kZXJNb3JlTGVzc0J1dHRvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJSb3dzID0gdGhpcy5maWx0ZXJSb3dzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSB0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlclBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5UcnMgPSB7fTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bl9jbGlja3M6IDB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5fY2xpY2tzOiAwLFxuICAgICAgICAgICAgcGFnZV9zaXplOiBwcm9wcy5wYWdlX3NpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVTZWxlY3Rpb24oa2V5LCBldmVudCwgb3JkZXJlZEtleXMpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhvcmRlcmVkS2V5cyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNldFByb3BzIDogdGhpcy5zZXRTdGF0ZTtcbiAgICAvLyAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSB8fCB0cnVlKSB7XG4gICAgLy8gICAgICAgICBzZXRQcm9wcyh7XG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0aW9uOiBba2V5XSxcbiAgICAvLyAgICAgICAgICAgICByb3dfY2xpY2s6IGtleVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBcbiAgICBmaWx0ZXJSb3dzKCkge1xuICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnBhZ2Vfc2l6ZSA6IHRoaXMuc3RhdGUucGFnZV9zaXplO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJvd3MgPSB0aGlzLnByb3BzLnJvd3Muc2xpY2UoMSwgcGFnZVNpemUpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWQgcm93cyB0byBsZW5ndGggJyArIHBhZ2VTaXplKTtcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRSb3dzKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7cm93cywgY29sdW1ucywgYWN0aW9ucywgbWF4Q291bnQsIHNldFByb3BzLCBhY3Rpb25CdXR0b25Qcm9wcywgLi4udGFibGVQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc2NhbGluZ0NvbnN0YW50ID0gbWF4Q291bnQ7XG4gICAgICAgIGlmICghc2NhbGluZ0NvbnN0YW50KSB7XG4gICAgICAgICAgICBzY2FsaW5nQ29uc3RhbnQgPSBNYXRoLm1heCguLi5yb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocm93cy5tYXAoKHJvdykgPT4gcm93LmNvdW50KSk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9ICg8dHI+e3JlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKX08L3RyPik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgICAgICBsZXQgb3JkZXJlZEtleXMgPSByb3dzLm1hcChyb3cgPT4gcm93LmtleSk7XG5cbiAgICAgICAgY29uc3Qgcm93U2VsZWN0aW9uID0gKHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNlbGVjdGlvbiA6IHRoaXMuc3RhdGUuc2VsZWN0aW9uKSB8fCBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRSb3dzID0gdGhpcy5maWx0ZXJSb3dzKHJvd3MpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYm9keSA9IGZpbHRlcmVkUm93cy5tYXAocm93ID0+ICg8VHIgc2VsZWN0ZWQ9e3Jvd1NlbGVjdGlvbi5pbmRleE9mKHJvdy5rZXkpID4gLTF9IGtleT17cm93LmtleX0gb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdy5rZXksIGV2ZW50LCBvcmRlcmVkS2V5cyl9PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJSb3cocm93LCBjb2x1bW5zLCBhY3Rpb25zLCBzZXRQcm9wcyA/IHNldFByb3BzIDogdGhpcy5zZXRTdGF0ZSwgYWN0aW9uQnV0dG9uUHJvcHMpfVxuICAgICAgICAgICAgPC9Ucj4pKTtcbiAgICAgICAgbGV0IHBhZ2luYXRpb247XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dfbW9yZV9sZXNzKSB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJNb3JlTGVzc0J1dHRvbnMocm93cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEJQSFRNTFRhYmxlIGNsYXNzTmFtZT1cImhpc3RvZ3JhbVwiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0gaW50ZXJhY3RpdmU9e3RydWV9PlxuICAgICAgICAgICAgICAgIDx0aGVhZD57aGVhZGVyfTwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5Pntib2R5fTwvdGJvZHk+XG4gICAgICAgICAgICA8L0JQSFRNTFRhYmxlPlxuICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblByb3BlcnR5VGFibGUuZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIHNvcnRfZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAvLyBmaWx0ZXJfYnk6IHt9LFxuICAgIC8vIC8vIFRPRE8gcmVtb3ZlIHRoZXNlIGRlZmF1bHRzXG4gICAgLy8gZmlsdGVyX2NvbHVtbnM6IFtdLFxuICAgIC8vIHNvcnRfY29sdW1uczogW10sXG4gICAgLy8gZmlsdGVyX3N0cmluZ3M6IHt9LFxuICAgIHBhZ2Vfc2l6ZTogNSxcbiAgICAvLyBjdXJyZW50X3BhZ2U6IDEsXG4gICAgLy8gc2VsZWN0aW9uOiBbXSxcbiAgICBzaG93X21vcmVfc2l6ZTogMTAsXG4gICAgLy8gbl9jbGlja3M6IDAsXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBzaG93X21vcmVfbGVzczogdHJ1ZSxcbiAgICBhY3Rpb25CdXR0b25Qcm9wczoge1xuICAgICAgICBtaW5pbWFsOiB0cnVlLFxuICAgICAgICBzbWFsbDogdHJ1ZVxuICAgIH1cbn07XG5cblByb3BlcnR5VGFibGUucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGlzIGNvbXBvbmVudCwgdXNlZCB0byBpZGVudGlmeSBkYXNoIGNvbXBvbmVudHNcbiAgICAgKiBpbiBjYWxsYmFja3MuIFRoZSBJRCBuZWVkcyB0byBiZSB1bmlxdWUgYWNyb3NzIGFsbCBvZiB0aGVcbiAgICAgKiBjb21wb25lbnRzIGluIGFuIGFwcC5cbiAgICAgKi9cbiAgICAnaWQnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgJ2NoaWxkcmVuJzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdyb2xlJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgZGF0YSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnZGF0YS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICAnY2xhc3NOYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFJvdyBkYXRhIHVzZWQgdG8gY3JlYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgKi9cbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGNvdW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBoaXN0b2dyYW0uIFZhbHVlcyBhYm92ZSB0aGlzIG51bWJlclxuICAgICAqIHdpbGwgYmUgcmVuZGVyZWQgYSBkaWZmZXJlbnQgY29sb3VyXG4gICAgICovXG4gICAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGJvcmRlcnMgYmV0d2VlbiByb3dzIGFuZCBjZWxscy5cbiAgICAvLyAgKi9cbiAgICAvLyBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlLlxuICAgIC8vICAqL1xuICAgIC8vIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGhvdmVyIHN0eWxlcyBvbiByb3cuXG4gICAgLy8gICovXG4gICAgLy8gaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhbGwgY2hpbGQgZWxlbWVudHMuXG4gICAgLy8gICovXG4gICAgLy8gc21hbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIGFuIGFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIG9kZCByb3dzLlxuICAgIC8vICAqL1xuICAgIC8vIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogS2V5IGZvciB0aGUgY2xpY2tlZCByb3dcbiAgICAgKi9cbiAgICByb3dfY2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gdG8gc29ydCB2YWx1ZXMgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNvcnQgZGlyZWN0aW9uIChhc2Mgb3IgZGVzYylcbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEZpbHRlcmluZyBzdHJpbmdzXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIG51bWJlcnMgdGhhdCBtYXkgYmUgZmlsdGVyZWRcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1ucyB0aGF0IGNhbiBiZSBzb3J0ZWQgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFN0cmluZ3MgdG8gZmlsdGVyIGNvbHVtbnMgYnlcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfc3RyaW5nczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBhZ2Ugc2l6ZSAoaW4gcm93cylcbiAgICAgKi9cbiAgICBwYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDdXJyZW50IHBhZ2UgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIGN1cnJlbnRfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIHRvIGluY3JlYXNlL2RlY3JlYXNlIHBhZ2Ugc2l6ZSBieVxuICAgICAqIChmb3IgdXNlIGluIHNpbXBsZSBzaG93IG1vcmUgbW9kZSlcbiAgICAgKi9cbiAgICBzaG93X21vcmVfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFNob3cgc2ltcGxlIG1vcmUvbGVzcyBidXR0b25zIHRvIGFkanVzdCBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBzaG93X21vcmVfbGVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHJvdyBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHJvd3NcbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGVcbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBBIHNldCBvZiBhY3Rpb25zIHRvIGRpc3BsYXkgaW4gdGhlIGZpcnN0IGNvbHVtblxuICAgICAqL1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuXG4gICAgLy8gbl9jbGlja3M6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBwYXNzIHRocm91Z2ggdG8gdGhlIGFjdGlvbiBidXR0b25cbiAgICAgKi9cbiAgICBhY3Rpb25CdXR0b25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBzZWxlY3RlZCBmb3IgbG9jYXRlIGFjdGlvblxuICAgICAqL1xuICAgIGxvY2F0ZUFjdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBjbGlja2VkIGZvciBpbmZvIGFjdGlvblxuICAgICAqL1xuICAgIGluZm9BY3Rpb246IFByb3BUeXBlcy5vYmplY3RcblxuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==