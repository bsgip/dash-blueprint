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
/* harmony import */ var _Select_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Select.react */ "./src/lib/components/Select.react.js");
/* harmony import */ var _blueprintjs_core_lib_esm_common_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core/lib/esm/common/classes */ "./node_modules/@blueprintjs/core/lib/esm/common/classes.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../css/histogram.css */ "./src/css/histogram.css");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_histogram_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["rows", "columns", "actions", "maxCount", "setProps", "actionButtonProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { HTMLTable } from '../../index';



 // function renderHeader(columns, actions) {
//     // return columns.map((column) => {<th >{"header"}</th>});
//     // return columns.map((column) => {<td >{column.key}</td>});
//     const [sortBy, sortDirection] = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection];
//     const setProps = this.props.setProps || this.setState;
//     const headerCells = columns.map((column) => {
//         <th>
//             {column.label}
//             const sortAscending = <Button icon={"chevron-up"} small={true} style={{cursor: "default"}}
//                 disabled={sortBy === column.key && sortDirection === 'asc'}
//                 onClick={() => setProps({
//                     sortBy: column.key,
//                     sortDirection: 'asc'
//                 })}
//             />;
//             </th>});
//     console.log(headerCells);
//     return headerCells;
// }

function renderFilterHeader(columns, rows, setProps, filter) {
  console.log('filter is');
  console.log(filter);
  var filterCells = columns.map(function (column) {
    switch (column.filter) {
      case "string":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
          value: filter ? filter[column.key] : "",
          onChange: function onChange(event) {
            return setProps({
              filter: _objectSpread(_objectSpread({}, filter), {}, _defineProperty({}, column.key, event.target.value))
            });
          }
        }));

      case "select":
        var selectOptions = _toConsumableArray(new Set(rows.map(function (row) {
          return row[column.key];
        }))).filter(function (item) {
          return item !== undefined;
        }).map(function (item) {
          return {
            label: item
          };
        });

        console.log(selectOptions);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          items: selectOptions,
          onChange: function onChange(event) {
            return console.log(event);
          },
          setParentProps: function setParentProps(val) {
            return setProps({
              filter: _objectSpread(_objectSpread({}, filter), {}, _defineProperty({}, column.key, val.value.label))
            });
          },
          value: filter ? filter[column.key] : null
        }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null);
  });
  return filterCells;
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

    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_6__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_7__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
    _this.filterRows = _this.filterRows.bind(_assertThisInitialized(_this));
    _this.sortRows = _this.sortRows.bind(_assertThisInitialized(_this));
    _this.renderHeader = _this.renderHeader.bind(_assertThisInitialized(_this));
    _this.truncateRows = _this.truncateRows.bind(_assertThisInitialized(_this)); // this.handleRowClick = this.handleRowClick.bind(this);
    // this.filterRows = this.filterRows.bind(this);
    // this.renderPagination = this.renderPagination.bind(this);
    // this.Trs = {};
    // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0,
      page_size: props.page_size
    };
    return _this;
  }

  _createClass(PropertyTable, [{
    key: "renderHeader",
    value: function renderHeader(columns, actions) {
      // return columns.map((column) => {<th >{"header"}</th>});
      // return columns.map((column) => {<td >{column.key}</td>});
      var _ref = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref2 = _slicedToArray(_ref, 2),
          sortBy = _ref2[0],
          sortDirection = _ref2[1];

      var setProps = this.props.setProps || this.setState;
      console.log(sortBy, sortDirection);
      var headerCells = columns.map(function (column) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, column.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          icon: "chevron-up",
          small: true,
          style: {
            cursor: "default"
          },
          minimal: true,
          disabled: sortBy === column.key && sortDirection === 'asc',
          onClick: function onClick() {
            console.log('setting sort props');
            setProps({
              sortBy: column.key,
              sortDirection: 'asc'
            });
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          icon: "chevron-down",
          small: true,
          style: {
            cursor: "default"
          },
          minimal: true,
          disabled: sortBy === column.key && sortDirection === 'desc',
          onClick: function onClick() {
            console.log('setting sort props');
            setProps({
              sortBy: column.key,
              sortDirection: 'desc'
            });
          }
        }));
      });
      console.log(headerCells);
      return headerCells;
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

  }, {
    key: "sortRows",
    value: function sortRows(filteredRows) {
      var _ref3 = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref4 = _slicedToArray(_ref3, 2),
          sortBy = _ref4[0],
          sortDirection = _ref4[1];

      console.log('checking sort');
      console.log(sortBy, sortDirection);

      if (sortBy) {
        if (sortDirection == 'asc') {
          return filteredRows.sort(function (a, b) {
            return a[sortBy] >= b[sortBy] ? 1 : -1;
          });
        } else {
          return filteredRows.sort(function (a, b) {
            return a[sortBy] <= b[sortBy] ? 1 : -1;
          });
        }

        console.log('sorting rows');
        console.log(sortedRows);
        return sortedRows;
      }

      return filteredRows;
    }
  }, {
    key: "truncateRows",
    value: function truncateRows(filteredRows) {
      var pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
      return filteredRows.slice(0, pageSize);
    }
  }, {
    key: "filterRows",
    value: function filterRows() {
      var filteredRows = this.props.rows;
      var filter = this.props.filter || this.state.filter;

      if (filter) {
        filteredRows = filteredRows.filter(function (row) {
          return Object.entries(filter).every(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                k = _ref6[0],
                v = _ref6[1];

            // console.log(row[k].toString().toLowerCase(), v.toLowerCase());
            // console.log(row[k].toString().toLowerCase().indexOf(v.toLowerCase()));
            // return row[k].toString().toLowerCase() == v;
            return row[k] != undefined && row[k].toString().toLowerCase().indexOf(v.toString().toLowerCase()) >= 0;
          });
        });
      }

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
      var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, this.renderHeader(columns, actions));
      var filterHeader;

      if (columns.find(function (column) {
        return column.filter;
      })) {
        filterHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, renderFilterHeader(columns, rows, setProps ? setProps : this.setState, setProps ? this.props.filter : this.state.filter));
      }

      ;
      console.log(this.renderHeader(columns, actions));
      console.log(columns);
      var orderedKeys = rows.map(function (row) {
        return row.key;
      });
      var rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
      var filteredRows = this.filterRows(rows);
      var sortedRows = this.sortRows(filteredRows);
      var truncateRows = this.truncateRows(sortedRows);
      var body = truncateRows.map(function (row) {
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
        pagination = this.renderMoreLessButtons(sortedRows.length);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"], {
        className: "histogram",
        style: {
          width: "100%"
        },
        interactive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, [header, filterHeader]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body)), pagination);
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
  page_size: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL1Byb3BlcnR5VGFibGUucmVhY3QuanMiXSwibmFtZXMiOlsicmVuZGVyRmlsdGVySGVhZGVyIiwiY29sdW1ucyIsInJvd3MiLCJzZXRQcm9wcyIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJDZWxscyIsIm1hcCIsImNvbHVtbiIsImtleSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RPcHRpb25zIiwiU2V0Iiwicm93IiwiaXRlbSIsInVuZGVmaW5lZCIsImxhYmVsIiwidmFsIiwicmVuZGVyUm93IiwiYWN0aW9ucyIsImFjdGlvbkJ1dHRvblByb3BzIiwidHlwZSIsImljb24iLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb24iLCJQcm9wZXJ0eVRhYmxlIiwicHJvcHMiLCJoYW5kbGVSb3dDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsInJlbmRlck1vcmVMZXNzQnV0dG9ucyIsImZpbHRlclJvd3MiLCJzb3J0Um93cyIsInJlbmRlckhlYWRlciIsInRydW5jYXRlUm93cyIsInN0YXRlIiwibl9jbGlja3MiLCJwYWdlX3NpemUiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiaGVhZGVyQ2VsbHMiLCJjdXJzb3IiLCJmaWx0ZXJlZFJvd3MiLCJzb3J0IiwiYSIsImIiLCJzb3J0ZWRSb3dzIiwicGFnZVNpemUiLCJzbGljZSIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsImsiLCJ2IiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXhDb3VudCIsInRhYmxlUHJvcHMiLCJzY2FsaW5nQ29uc3RhbnQiLCJNYXRoIiwibWF4IiwiY291bnQiLCJoZWFkZXIiLCJmaWx0ZXJIZWFkZXIiLCJmaW5kIiwib3JkZXJlZEtleXMiLCJyb3dTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJib2R5IiwicGFnaW5hdGlvbiIsInNob3dfbW9yZV9sZXNzIiwibGVuZ3RoIiwid2lkdGgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNob3dfbW9yZV9zaXplIiwic2VsZWN0YWJsZSIsIm1pbmltYWwiLCJzbWFsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsIm51bWJlciIsInJvd19jbGljayIsImJvb2wiLCJhcnJheU9mIiwib2JqZWN0IiwibG9jYXRlQWN0aW9uIiwiaW5mb0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckMsRUFBMkNDLFFBQTNDLEVBQXFEQyxNQUFyRCxFQUE2RDtBQUV6REMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLE1BQU1HLFdBQVcsR0FBR04sT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3hDLFlBQVFBLE1BQU0sQ0FBQ0wsTUFBZjtBQUNJLFdBQUssUUFBTDtBQUNJLDRCQUFPLG9GQUFJLDJEQUFDLDREQUFEO0FBQ1gsZUFBSyxFQUFFQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxHQUFSLENBQVQsR0FBd0IsRUFEMUI7QUFFWCxrQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsbUJBQVdSLFFBQVEsQ0FBQztBQUMxQkMsb0JBQU0sa0NBQ0NBLE1BREQsMkJBRURLLE1BQU0sQ0FBQ0MsR0FG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Q0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0lDLFdBQVMsRUFBRUwsaURBQVMsQ0FBQ0MsTUEvRUM7QUFpRnRCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNKO0FBQ0E7QUFDSTlDLFdBQVMsRUFBRTZDLGlEQUFTLENBQUNJLE1BbEhDO0FBb0h0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNJVCxnQkFBYyxFQUFFSyxpREFBUyxDQUFDSSxNQTdISjs7QUErSHRCO0FBQ0o7QUFDQTtBQUNJZixnQkFBYyxFQUFFVyxpREFBUyxDQUFDTSxJQWxJSjs7QUFvSXRCO0FBQ0o7QUFDQTtBQUNJVixZQUFVLEVBQUVJLGlEQUFTLENBQUNNLElBdklBOztBQXlJdEI7QUFDSjtBQUNBO0FBQ0lwQixXQUFTLEVBQUVjLGlEQUFTLENBQUNHLEtBNUlDOztBQThJdEI7QUFDSjtBQUNBO0FBQ0l2RixTQUFPLEVBQUVvRixpREFBUyxDQUFDRyxLQWpKRzs7QUFtSnRCO0FBQ0o7QUFDQTtBQUNJbEUsU0FBTyxFQUFFK0QsaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0MsTUFBNUIsQ0F0SmE7QUF3SnRCOztBQUVBO0FBQ0o7QUFDQTtBQUNJL0QsbUJBQWlCLEVBQUU4RCxpREFBUyxDQUFDUSxNQTdKUDs7QUErSnRCO0FBQ0o7QUFDQTtBQUNJQyxjQUFZLEVBQUVULGlEQUFTLENBQUNRLE1BbEtGOztBQW9LdEI7QUFDSjtBQUNBO0FBQ0lFLFlBQVUsRUFBRVYsaURBQVMsQ0FBQ1E7QUF2S0EsQ0FBMUIsQyIsImZpbGUiOiJhNzhkZjRlLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSFRNTFRhYmxlIGFzIEJQSFRNTFRhYmxlLCBFZGl0YWJsZVRleHQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIsIEludGVudCwgVGV4dCwgSW5wdXRHcm91cCB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuaW1wb3J0IFRyIGZyb20gJy4uL1RyLnJlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0LnJlYWN0JztcbmltcG9ydCB7IElOVEVOVF9TVUNDRVNTIH0gZnJvbSAnQGJsdWVwcmludGpzL2NvcmUvbGliL2VzbS9jb21tb24vY2xhc3Nlcyc7XG4vLyBpbXBvcnQgeyBIVE1MVGFibGUgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBoYW5kbGVSb3dDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZVJvd0NsaWNrJztcbmltcG9ydCB7IHJlbmRlck1vcmVMZXNzQnV0dG9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbmRlck1vcmVMZXNzQnV0dG9ucyc7XG5cbmltcG9ydCAnLi4vLi4vLi4vY3NzL2hpc3RvZ3JhbS5jc3MnO1xuXG4vLyBmdW5jdGlvbiByZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucykge1xuLy8gICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRoID57XCJoZWFkZXJcIn08L3RoPn0pO1xuLy8gICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRkID57Y29sdW1uLmtleX08L3RkPn0pO1xuLy8gICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbi8vICAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgfHwgdGhpcy5zZXRTdGF0ZTtcbiAgICBcbi8vICAgICBjb25zdCBoZWFkZXJDZWxscyA9IGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbi8vICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbi8vICAgICAgICAgICAgIGNvbnN0IHNvcnRBc2NlbmRpbmcgPSA8QnV0dG9uIGljb249e1wiY2hldnJvbi11cFwifSBzbWFsbD17dHJ1ZX0gc3R5bGU9e3tjdXJzb3I6IFwiZGVmYXVsdFwifX1cbi8vICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c29ydEJ5ID09PSBjb2x1bW4ua2V5ICYmIHNvcnREaXJlY3Rpb24gPT09ICdhc2MnfVxuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb3BzKHtcbi8vICAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiBjb2x1bW4ua2V5LFxuLy8gICAgICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAnYXNjJ1xuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgLz47XG4vLyAgICAgICAgICAgICA8L3RoPn0pO1xuLy8gICAgIGNvbnNvbGUubG9nKGhlYWRlckNlbGxzKTtcbi8vICAgICByZXR1cm4gaGVhZGVyQ2VsbHM7XG4vLyB9XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlckhlYWRlcihjb2x1bW5zLCByb3dzLCBzZXRQcm9wcywgZmlsdGVyKSB7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2ZpbHRlciBpcycpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgY29uc3QgZmlsdGVyQ2VsbHMgPSBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uLmZpbHRlcikge1xuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8dGg+PElucHV0R3JvdXAgXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlcltjb2x1bW4ua2V5XSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW4ua2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX0gLz48L3RoPjtcbiAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gWy4uLm5ldyBTZXQocm93cy5tYXAocm93ID0+IHJvd1tjb2x1bW4ua2V5XSkpXS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQpLm1hcChpdGVtID0+IHtyZXR1cm4ge2xhYmVsOiBpdGVtfX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiA8dGg+PFNlbGVjdCBpdGVtcz17c2VsZWN0T3B0aW9uc30gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgICAgICAgICAgIHNldFBhcmVudFByb3BzPXsodmFsKSA9PiBzZXRQcm9wcyh7ZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgW2NvbHVtbi5rZXldOiB2YWwudmFsdWUubGFiZWxcbiAgICAgICAgICAgICAgICB9fSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlcltjb2x1bW4ua2V5XSA6IG51bGx9XG4gICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8dGg+PC90aD5cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyQ2VsbHM7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyUm93KHJvdywgY29sdW1ucywgYWN0aW9ucywgc2V0UHJvcHMsIGFjdGlvbkJ1dHRvblByb3BzKSB7XG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi50eXBlID09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA8dGQgPjxCdXR0b24gaWNvbj17Y29sdW1uLmljb259IFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBTdG9wIHRoZSBldmVudCBjb250cmlidXRpbmcgdG8gc2VsZWN0aW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe1tjb2x1bW4uYWN0aW9uICsgXCJBY3Rpb25cIl06IHJvd30pO1xuICAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgICAgey4uLmFjdGlvbkJ1dHRvblByb3BzfSAvPjwvdGQ+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDx0ZCA+e3Jvd1tjb2x1bW4ua2V5XX08L3RkPlxuICAgIH0pO1xuICAgIC8vIC8vIHJvdy5jb3VudCA+IHNjYWxpbmdDb25zdGFudCA/IEludGVudC5XQVJOSU5HIDogSW50ZW50LlNVQ0NFU1NcbiAgICAvLyByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1iYXIgYnAzLWludGVudC1zdWNjZXNzIGJwMy1uby1hbmltYXRpb24gYnAzLW5vLXN0cmlwZXMgYnAzLWhpc3RvZ3JhbVwifVxuICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjBweFwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIn19XG4gICAgLy8gICAgICAgICA+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtbWV0ZXJcIn1cbiAgICAvLyAgICAgICAgICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogKHNjYWxlZFZhbHVlICogMTAwKS50b1ByZWNpc2lvbigyKSArIFwiJVwiLFxuICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCJcbiAgICAvLyAgICAgICAgICAgICB9fVxuICAgIC8vICAgICAgICAgPlxuXG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPC9kaXY+KTtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgQmx1ZXByaW50IHN0eWxpbmcgdG8gbmF0aXZlIEhUTUwgdGFibGVzLlxuICogXG4gKiBJdCBhbHNvIGluY2x1ZGVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3Igc2VhcmNoaW5nLCBvcmRlcmluZyBhbmQgcGFnaW5hdGlvbiBvZlxuICogZGF0YSBpbiB0aGUgdGFibGUuXG4gKiBcbiAqIElNUE9SVEFOVDogV2hlbiBjcmVhdGluZyByb3dzLCB5b3UgTVVTVCB1c2UgdGhlIEJsdWVwcmludEpTIFRyIGNvbXBvbmVudCBpZiB5b3VcbiAqIHdhbnQgc2VsZWN0aW9uIHRvIHNob3cgcHJvcGVybHksIGFuZCB1c2UgY3NzIHRvIG1vZGlmeSByb3dzIHdpdGggY2xhc3NOYW1lICdzZWxlY3RlZCdcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVNlbGVjdGlvbiA9IHRoaXMudXBkYXRlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSBoYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyA9IHJlbmRlck1vcmVMZXNzQnV0dG9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlclJvd3MgPSB0aGlzLmZpbHRlclJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb3J0Um93cyA9IHRoaXMuc29ydFJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRydW5jYXRlUm93cyA9IHRoaXMudHJ1bmNhdGVSb3dzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSB0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlclBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5UcnMgPSB7fTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bl9jbGlja3M6IDB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5fY2xpY2tzOiAwLFxuICAgICAgICAgICAgcGFnZV9zaXplOiBwcm9wcy5wYWdlX3NpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucykge1xuICAgICAgICAvLyByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gezx0aCA+e1wiaGVhZGVyXCJ9PC90aD59KTtcbiAgICAgICAgLy8gcmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHs8dGQgPntjb2x1bW4ua2V5fTwvdGQ+fSk7XG4gICAgICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbiAgICAgICAgY29uc3Qgc2V0UHJvcHMgPSB0aGlzLnByb3BzLnNldFByb3BzIHx8IHRoaXMuc2V0U3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRCeSwgc29ydERpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGhlYWRlckNlbGxzID0gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXtcImNoZXZyb24tdXBcIn0gc21hbGw9e3RydWV9IHN0eWxlPXt7Y3Vyc29yOiBcImRlZmF1bHRcIn19XG4gICAgICAgICAgICAgICAgICAgIG1pbmltYWxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NvcnRCeSA9PT0gY29sdW1uLmtleSAmJiBzb3J0RGlyZWN0aW9uID09PSAnYXNjJ31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgc29ydCBwcm9wcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeTogY29sdW1uLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAnYXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249e1wiY2hldnJvbi1kb3duXCJ9IHNtYWxsPXt0cnVlfSBzdHlsZT17e2N1cnNvcjogXCJkZWZhdWx0XCJ9fVxuICAgICAgICAgICAgICAgICAgICBtaW5pbWFsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzb3J0QnkgPT09IGNvbHVtbi5rZXkgJiYgc29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBzb3J0IHByb3BzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiBjb2x1bW4ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGg+KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlckNlbGxzKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckNlbGxzO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZVNlbGVjdGlvbihrZXksIGV2ZW50LCBvcmRlcmVkS2V5cykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG9yZGVyZWRLZXlzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IHNldFByb3BzID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlO1xuICAgIC8vICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RhYmxlIHx8IHRydWUpIHtcbiAgICAvLyAgICAgICAgIHNldFByb3BzKHtcbiAgICAvLyAgICAgICAgICAgICBzZWxlY3Rpb246IFtrZXldLFxuICAgIC8vICAgICAgICAgICAgIHJvd19jbGljazoga2V5XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgc29ydFJvd3MoZmlsdGVyZWRSb3dzKSB7XG4gICAgICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nIHNvcnQnKTtcbiAgICAgICAgY29uc29sZS5sb2coc29ydEJ5LCBzb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgaWYgKHNvcnRCeSkge1xuICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhW3NvcnRCeV0gPj0gYltzb3J0QnldKSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYVtzb3J0QnldIDw9IGJbc29ydEJ5XSkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzb3J0aW5nIHJvd3MnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvcnRlZFJvd3MpO1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJvd3M7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgIH1cblxuICAgIHRydW5jYXRlUm93cyhmaWx0ZXJlZFJvd3MpIHtcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5wYWdlX3NpemUgOiB0aGlzLnN0YXRlLnBhZ2Vfc2l6ZTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cy5zbGljZSgwLCBwYWdlU2l6ZSk7XG4gICAgfVxuICAgIFxuICAgIGZpbHRlclJvd3MoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFJvd3MgPSB0aGlzLnByb3BzLnJvd3M7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMucHJvcHMuZmlsdGVyIHx8IHRoaXMuc3RhdGUuZmlsdGVyO1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3MuZmlsdGVyKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGZpbHRlcikuZXZlcnkoKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dba10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLCB2LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dba10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yodi50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByb3dba10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09IHY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dba10gIT0gdW5kZWZpbmVkICYmIHJvd1trXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge3Jvd3MsIGNvbHVtbnMsIGFjdGlvbnMsIG1heENvdW50LCBzZXRQcm9wcywgYWN0aW9uQnV0dG9uUHJvcHMsIC4uLnRhYmxlUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNjYWxpbmdDb25zdGFudCA9IG1heENvdW50O1xuICAgICAgICBpZiAoIXNjYWxpbmdDb25zdGFudCkge1xuICAgICAgICAgICAgc2NhbGluZ0NvbnN0YW50ID0gTWF0aC5tYXgoLi4ucm93cy5tYXAoKHJvdykgPT4gcm93LmNvdW50KSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAoPHRyPnt0aGlzLnJlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKX08L3RyPik7XG4gICAgICAgIGxldCBmaWx0ZXJIZWFkZXI7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKGNvbHVtbnMuZmluZCgoY29sdW1uKSA9PiBjb2x1bW4uZmlsdGVyKSkge1xuICAgICAgICAgICAgZmlsdGVySGVhZGVyID0gPHRyPntyZW5kZXJGaWx0ZXJIZWFkZXIoY29sdW1ucywgcm93cywgc2V0UHJvcHMgPyBzZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGUsIHNldFByb3BzID8gdGhpcy5wcm9wcy5maWx0ZXIgOiB0aGlzLnN0YXRlLmZpbHRlcil9PC90cj47XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVuZGVySGVhZGVyKGNvbHVtbnMsIGFjdGlvbnMpKTtcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1ucyk7XG4gICAgICAgIGxldCBvcmRlcmVkS2V5cyA9IHJvd3MubWFwKHJvdyA9PiByb3cua2V5KTtcblxuICAgICAgICBjb25zdCByb3dTZWxlY3Rpb24gPSAodGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2VsZWN0aW9uIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb24pIHx8IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmZpbHRlclJvd3Mocm93cyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZFJvd3MgPSB0aGlzLnNvcnRSb3dzKGZpbHRlcmVkUm93cyk7XG5cbiAgICAgICAgY29uc3QgdHJ1bmNhdGVSb3dzID0gdGhpcy50cnVuY2F0ZVJvd3Moc29ydGVkUm93cyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBib2R5ID0gdHJ1bmNhdGVSb3dzLm1hcChyb3cgPT4gKDxUciBzZWxlY3RlZD17cm93U2VsZWN0aW9uLmluZGV4T2Yocm93LmtleSkgPiAtMX0ga2V5PXtyb3cua2V5fSBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LmtleSwgZXZlbnQsIG9yZGVyZWRLZXlzKX0+XG4gICAgICAgICAgICAgICAge3JlbmRlclJvdyhyb3csIGNvbHVtbnMsIGFjdGlvbnMsIHNldFByb3BzID8gc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlLCBhY3Rpb25CdXR0b25Qcm9wcyl9XG4gICAgICAgICAgICA8L1RyPikpO1xuICAgICAgICBsZXQgcGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd19tb3JlX2xlc3MpIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb24gPSB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyhzb3J0ZWRSb3dzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QlBIVE1MVGFibGUgY2xhc3NOYW1lPVwiaGlzdG9ncmFtXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fSBpbnRlcmFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPntbaGVhZGVyLCBmaWx0ZXJIZWFkZXJdfTwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5Pntib2R5fTwvdGJvZHk+XG4gICAgICAgICAgICA8L0JQSFRNTFRhYmxlPlxuICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblByb3BlcnR5VGFibGUuZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIHNvcnRfZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAvLyBmaWx0ZXJfYnk6IHt9LFxuICAgIC8vIC8vIFRPRE8gcmVtb3ZlIHRoZXNlIGRlZmF1bHRzXG4gICAgLy8gZmlsdGVyX2NvbHVtbnM6IFtdLFxuICAgIC8vIHNvcnRfY29sdW1uczogW10sXG4gICAgLy8gZmlsdGVyX3N0cmluZ3M6IHt9LFxuICAgIHBhZ2Vfc2l6ZTogMTAsXG4gICAgLy8gY3VycmVudF9wYWdlOiAxLFxuICAgIC8vIHNlbGVjdGlvbjogW10sXG4gICAgc2hvd19tb3JlX3NpemU6IDEwLFxuICAgIC8vIG5fY2xpY2tzOiAwLFxuICAgIHJvd3M6IFtdLFxuICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgc2hvd19tb3JlX2xlc3M6IHRydWUsXG4gICAgYWN0aW9uQnV0dG9uUHJvcHM6IHtcbiAgICAgICAgbWluaW1hbDogdHJ1ZSxcbiAgICAgICAgc21hbGw6IHRydWVcbiAgICB9XG59O1xuXG5Qcm9wZXJ0eVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhpcyBjb21wb25lbnQsIHVzZWQgdG8gaWRlbnRpZnkgZGFzaCBjb21wb25lbnRzXG4gICAgICogaW4gY2FsbGJhY2tzLiBUaGUgSUQgbmVlZHMgdG8gYmUgdW5pcXVlIGFjcm9zcyBhbGwgb2YgdGhlXG4gICAgICogY29tcG9uZW50cyBpbiBhbiBhcHAuXG4gICAgICovXG4gICAgJ2lkJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgICdjaGlsZHJlbic6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNvbXBvbmVudCwgdXNlZCB0byBpbXByb3ZlXG4gICAgICogcGVyZm9ybWFuY2UgYnkgUmVhY3QuanMgd2hpbGUgcmVuZGVyaW5nIGNvbXBvbmVudHNcbiAgICAgKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2xpc3RzLWFuZC1rZXlzLmh0bWwgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgICdrZXknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIEFSSUEgcm9sZSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAncm9sZSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIHdpbGRjYXJkIGRhdGEgYXR0cmlidXRlXG4gICAgICovXG4gICAgJ2RhdGEtKic6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIHdpbGRjYXJkIGFyaWEgYXR0cmlidXRlXG4gICAgICovXG4gICAgJ2FyaWEtKic6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBPZnRlbiB1c2VkIHdpdGggQ1NTIHRvIHN0eWxlIGVsZW1lbnRzIHdpdGggY29tbW9uIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgJ2NsYXNzTmFtZSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBSb3cgZGF0YSB1c2VkIHRvIGNyZWF0ZSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgcm93czogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogTWF4aW11bSBjb3VudCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgaGlzdG9ncmFtLiBWYWx1ZXMgYWJvdmUgdGhpcyBudW1iZXJcbiAgICAgKiB3aWxsIGJlIHJlbmRlcmVkIGEgZGlmZmVyZW50IGNvbG91clxuICAgICAqL1xuICAgIG1heENvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogRW5hYmxlcyBib3JkZXJzIGJldHdlZW4gcm93cyBhbmQgY2VsbHMuXG4gICAgLy8gICovXG4gICAgLy8gYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZS5cbiAgICAvLyAgKi9cbiAgICAvLyBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogRW5hYmxlcyBob3ZlciBzdHlsZXMgb24gcm93LlxuICAgIC8vICAqL1xuICAgIC8vIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFVzZSBzbWFsbCwgY29uZGVuc2VkIGFwcGVhcmFuY2UgZm9yIHRoaXMgZWxlbWVudCBhbmQgYWxsIGNoaWxkIGVsZW1lbnRzLlxuICAgIC8vICAqL1xuICAgIC8vIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFVzZSBhbiBhbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvciBvbiBvZGQgcm93cy5cbiAgICAvLyAgKi9cbiAgICAvLyBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEtleSBmb3IgdGhlIGNsaWNrZWQgcm93XG4gICAgICovXG4gICAgcm93X2NsaWNrOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIHRvIHNvcnQgdmFsdWVzIG9uXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9jb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBTb3J0IGRpcmVjdGlvbiAoYXNjIG9yIGRlc2MpXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9kaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBGaWx0ZXJpbmcgc3RyaW5nc1xuICAgIC8vICAqL1xuICAgIC8vIGZpbHRlcl9ieTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENvbHVtbiBudW1iZXJzIHRoYXQgbWF5IGJlIGZpbHRlcmVkXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENvbHVtbnMgdGhhdCBjYW4gYmUgc29ydGVkIG9uXG4gICAgLy8gICovXG4gICAgLy8gc29ydF9jb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBTdHJpbmdzIHRvIGZpbHRlciBjb2x1bW5zIGJ5XG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX3N0cmluZ3M6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQYWdlIHNpemUgKGluIHJvd3MpXG4gICAgICovXG4gICAgcGFnZV9zaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ3VycmVudCBwYWdlIHRvIHNob3dcbiAgICAvLyAgKi9cbiAgICAvLyBjdXJyZW50X3BhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygcm93cyB0byBpbmNyZWFzZS9kZWNyZWFzZSBwYWdlIHNpemUgYnlcbiAgICAgKiAoZm9yIHVzZSBpbiBzaW1wbGUgc2hvdyBtb3JlIG1vZGUpXG4gICAgICovXG4gICAgc2hvd19tb3JlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHNpbXBsZSBtb3JlL2xlc3MgYnV0dG9ucyB0byBhZGp1c3QgcGFnZSBzaXplXG4gICAgICovXG4gICAgc2hvd19tb3JlX2xlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciByb3cgc2VsZWN0aW9uIGlzIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCByb3dzXG4gICAgICovXG4gICAgc2VsZWN0aW9uOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBwcm9wZXJ0aWVzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogQSBzZXQgb2YgYWN0aW9ucyB0byBkaXNwbGF5IGluIHRoZSBmaXJzdCBjb2x1bW5cbiAgICAgKi9cbiAgICBhY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcblxuICAgIC8vIG5fY2xpY2tzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdG8gcGFzcyB0aHJvdWdoIHRvIHRoZSBhY3Rpb24gYnV0dG9uXG4gICAgICovXG4gICAgYWN0aW9uQnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBSb3cgc2VsZWN0ZWQgZm9yIGxvY2F0ZSBhY3Rpb25cbiAgICAgKi9cbiAgICBsb2NhdGVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBSb3cgY2xpY2tlZCBmb3IgaW5mbyBhY3Rpb25cbiAgICAgKi9cbiAgICBpbmZvQWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG5cblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=