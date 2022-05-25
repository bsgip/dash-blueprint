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
/* harmony import */ var _spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spark/Sparkline.react */ "./src/lib/components/spark/Sparkline.react.js");
/* harmony import */ var _blueprintjs_core_lib_esm_common_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core/lib/esm/common/classes */ "./node_modules/@blueprintjs/core/lib/esm/common/classes.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../css/histogram.css */ "./src/css/histogram.css");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_histogram_css__WEBPACK_IMPORTED_MODULE_9__);
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

function renderSparkline(data, columnProps) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    data: data
  }, columnProps));
}

function renderRow(row, columns, actions, setProps, actionButtonProps) {
  return columns.map(function (column) {
    if (column.type == "action") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
        icon: column.icon,
        onClick: function onClick(event) {
          event.stopPropagation(); // Stop the event contributing to selection change

          setProps(_defineProperty({}, column.action + "Action", row));
          setProps({
            action: {
              row: row,
              action: column.action
            }
          });
        }
      }, actionButtonProps)));
    } else if (column.type == "sparkline") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, renderSparkline(row[column.key], column.props));
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

function renderSort(column, setProps, sortBy, sortDirection) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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

    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_7__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_8__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, column.label, column.sort !== false && column.type !== "sparkline" && column.type !== "action" ? renderSort(column, setProps, sortBy, sortDirection) : null);
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
          console.log(filter);
          return Object.entries(filter).every(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                k = _ref6[0],
                v = _ref6[1];

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
      var rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
      var filteredRows = this.filterRows(rows);
      var sortedRows = this.sortRows(filteredRows);
      var orderedKeys = sortedRows.map(function (row) {
        return row.key;
      });
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
          width: "100%",
          tableLayout: "fixed"
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
  infoAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Generic action not covered by previous options
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL1Byb3BlcnR5VGFibGUucmVhY3QuanMiXSwibmFtZXMiOlsicmVuZGVyRmlsdGVySGVhZGVyIiwiY29sdW1ucyIsInJvd3MiLCJzZXRQcm9wcyIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJDZWxscyIsIm1hcCIsImNvbHVtbiIsImtleSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RPcHRpb25zIiwiU2V0Iiwicm93IiwiaXRlbSIsInVuZGVmaW5lZCIsImxhYmVsIiwidmFsIiwicmVuZGVyU3BhcmtsaW5lIiwiZGF0YSIsImNvbHVtblByb3BzIiwicmVuZGVyUm93IiwiYWN0aW9ucyIsImFjdGlvbkJ1dHRvblByb3BzIiwidHlwZSIsImljb24iLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb24iLCJwcm9wcyIsInJlbmRlclNvcnQiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiY3Vyc29yIiwiUHJvcGVydHlUYWJsZSIsImhhbmRsZVJvd0NsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyTW9yZUxlc3NCdXR0b25zIiwiZmlsdGVyUm93cyIsInNvcnRSb3dzIiwicmVuZGVySGVhZGVyIiwidHJ1bmNhdGVSb3dzIiwic3RhdGUiLCJuX2NsaWNrcyIsInBhZ2Vfc2l6ZSIsImhlYWRlckNlbGxzIiwic29ydCIsImZpbHRlcmVkUm93cyIsImEiLCJiIiwic29ydGVkUm93cyIsInBhZ2VTaXplIiwic2xpY2UiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJrIiwidiIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibWF4Q291bnQiLCJ0YWJsZVByb3BzIiwic2NhbGluZ0NvbnN0YW50IiwiTWF0aCIsIm1heCIsImNvdW50IiwiaGVhZGVyIiwiZmlsdGVySGVhZGVyIiwiZmluZCIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGlvbiIsIm9yZGVyZWRLZXlzIiwiYm9keSIsInBhZ2luYXRpb24iLCJzaG93X21vcmVfbGVzcyIsImxlbmd0aCIsIndpZHRoIiwidGFibGVMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNob3dfbW9yZV9zaXplIiwic2VsZWN0YWJsZSIsIm1pbmltYWwiLCJzbWFsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsIm51bWJlciIsInJvd19jbGljayIsImJvb2wiLCJhcnJheU9mIiwib2JqZWN0IiwibG9jYXRlQWN0aW9uIiwiaW5mb0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckMsRUFBMkNDLFFBQTNDLEVBQXFEQyxNQUFyRCxFQUE2RDtBQUV6REMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLE1BQU1HLFdBQVcsR0FBR04sT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3hDLFlBQVFBLE1BQU0sQ0FBQ0wsTUFBZjtBQUNJLFdBQUssUUFBTDtBQUNJLDRCQUFPLG9GQUFJLDJEQUFDLDREQUFEO0FBQ1gsZUFBSyxFQUFFQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxHQUFSLENBQVQsR0FBd0IsRUFEMUI7QUFFWCxrQkFBUSxFQUFFLGtCQUFDQyxL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QTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0k1QyxXQUFTLEVBQUUyQyxpREFBUyxDQUFDSSxNQWxIQztBQW9IdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDSVQsZ0JBQWMsRUFBRUssaURBQVMsQ0FBQ0ksTUE3SEo7O0FBK0h0QjtBQUNKO0FBQ0E7QUFDSWhCLGdCQUFjLEVBQUVZLGlEQUFTLENBQUNNLElBbElKOztBQW9JdEI7QUFDSjtBQUNBO0FBQ0lWLFlBQVUsRUFBRUksaURBQVMsQ0FBQ00sSUF2SUE7O0FBeUl0QjtBQUNKO0FBQ0E7QUFDSXRCLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNHLEtBNUlDOztBQThJdEI7QUFDSjtBQUNBO0FBQ0k1RixTQUFPLEVBQUV5RixpREFBUyxDQUFDRyxLQWpKRzs7QUFtSnRCO0FBQ0o7QUFDQTtBQUNJcEUsU0FBTyxFQUFFaUUsaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0MsTUFBNUIsQ0F0SmE7QUF3SnRCOztBQUVBO0FBQ0o7QUFDQTtBQUNJakUsbUJBQWlCLEVBQUVnRSxpREFBUyxDQUFDUSxNQTdKUDs7QUErSnRCO0FBQ0o7QUFDQTtBQUNJQyxjQUFZLEVBQUVULGlEQUFTLENBQUNRLE1BbEtGOztBQW9LdEI7QUFDSjtBQUNBO0FBQ0lFLFlBQVUsRUFBRVYsaURBQVMsQ0FBQ1EsTUF2S0E7O0FBeUt0QjtBQUNKO0FBQ0E7QUFDSXBFLFFBQU0sRUFBRTRELGlEQUFTLENBQUNRO0FBNUtJLENBQTFCLEMiLCJmaWxlIjoiZDFlNTc1OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcywgeyBjaGVja1Byb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSFRNTFRhYmxlIGFzIEJQSFRNTFRhYmxlLCBFZGl0YWJsZVRleHQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIsIEludGVudCwgVGV4dCwgSW5wdXRHcm91cCB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuaW1wb3J0IFRyIGZyb20gJy4uL1RyLnJlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0LnJlYWN0JztcbmltcG9ydCBTcGFya2xpbmUgZnJvbSAnLi4vc3BhcmsvU3BhcmtsaW5lLnJlYWN0JztcbmltcG9ydCB7IElOVEVOVF9TVUNDRVNTIH0gZnJvbSAnQGJsdWVwcmludGpzL2NvcmUvbGliL2VzbS9jb21tb24vY2xhc3Nlcyc7XG4vLyBpbXBvcnQgeyBIVE1MVGFibGUgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBoYW5kbGVSb3dDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2hhbmRsZVJvd0NsaWNrJztcbmltcG9ydCB7IHJlbmRlck1vcmVMZXNzQnV0dG9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbmRlck1vcmVMZXNzQnV0dG9ucyc7XG5cbmltcG9ydCAnLi4vLi4vLi4vY3NzL2hpc3RvZ3JhbS5jc3MnO1xuXG4vLyBmdW5jdGlvbiByZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucykge1xuLy8gICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRoID57XCJoZWFkZXJcIn08L3RoPn0pO1xuLy8gICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRkID57Y29sdW1uLmtleX08L3RkPn0pO1xuLy8gICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbi8vICAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgfHwgdGhpcy5zZXRTdGF0ZTtcbiAgICBcbi8vICAgICBjb25zdCBoZWFkZXJDZWxscyA9IGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbi8vICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbi8vICAgICAgICAgICAgIGNvbnN0IHNvcnRBc2NlbmRpbmcgPSA8QnV0dG9uIGljb249e1wiY2hldnJvbi11cFwifSBzbWFsbD17dHJ1ZX0gc3R5bGU9e3tjdXJzb3I6IFwiZGVmYXVsdFwifX1cbi8vICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c29ydEJ5ID09PSBjb2x1bW4ua2V5ICYmIHNvcnREaXJlY3Rpb24gPT09ICdhc2MnfVxuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb3BzKHtcbi8vICAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiBjb2x1bW4ua2V5LFxuLy8gICAgICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAnYXNjJ1xuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgLz47XG4vLyAgICAgICAgICAgICA8L3RoPn0pO1xuLy8gICAgIGNvbnNvbGUubG9nKGhlYWRlckNlbGxzKTtcbi8vICAgICByZXR1cm4gaGVhZGVyQ2VsbHM7XG4vLyB9XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlckhlYWRlcihjb2x1bW5zLCByb3dzLCBzZXRQcm9wcywgZmlsdGVyKSB7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2ZpbHRlciBpcycpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgY29uc3QgZmlsdGVyQ2VsbHMgPSBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uLmZpbHRlcikge1xuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8dGg+PElucHV0R3JvdXAgXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlcltjb2x1bW4ua2V5XSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW4ua2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX0gLz48L3RoPjtcbiAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gWy4uLm5ldyBTZXQocm93cy5tYXAocm93ID0+IHJvd1tjb2x1bW4ua2V5XSkpXS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQpLm1hcChpdGVtID0+IHtyZXR1cm4ge2xhYmVsOiBpdGVtfX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiA8dGg+PFNlbGVjdCBpdGVtcz17c2VsZWN0T3B0aW9uc30gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgICAgICAgICAgIHNldFBhcmVudFByb3BzPXsodmFsKSA9PiBzZXRQcm9wcyh7ZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgW2NvbHVtbi5rZXldOiB2YWwudmFsdWUubGFiZWxcbiAgICAgICAgICAgICAgICB9fSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlcltjb2x1bW4ua2V5XSA6IG51bGx9XG4gICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8dGg+PC90aD5cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyQ2VsbHM7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyU3BhcmtsaW5lKGRhdGEsIGNvbHVtblByb3BzKSB7XG4gICAgcmV0dXJuIDxTcGFya2xpbmUgZGF0YT17ZGF0YX0gey4uLmNvbHVtblByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUm93KHJvdywgY29sdW1ucywgYWN0aW9ucywgc2V0UHJvcHMsIGFjdGlvbkJ1dHRvblByb3BzKSB7XG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi50eXBlID09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA8dGQgPjxCdXR0b24gaWNvbj17Y29sdW1uLmljb259IFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBTdG9wIHRoZSBldmVudCBjb250cmlidXRpbmcgdG8gc2VsZWN0aW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe1tjb2x1bW4uYWN0aW9uICsgXCJBY3Rpb25cIl06IHJvd30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe2FjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogY29sdW1uLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgICAgey4uLmFjdGlvbkJ1dHRvblByb3BzfSAvPjwvdGQ+XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgPT0gXCJzcGFya2xpbmVcIikge1xuICAgICAgICAgICAgcmV0dXJuIDx0ZCA+e3JlbmRlclNwYXJrbGluZShyb3dbY29sdW1uLmtleV0sIGNvbHVtbi5wcm9wcyl9PC90ZD47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDx0ZCA+e3Jvd1tjb2x1bW4ua2V5XX08L3RkPlxuICAgIH0pO1xuICAgIC8vIC8vIHJvdy5jb3VudCA+IHNjYWxpbmdDb25zdGFudCA/IEludGVudC5XQVJOSU5HIDogSW50ZW50LlNVQ0NFU1NcbiAgICAvLyByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1iYXIgYnAzLWludGVudC1zdWNjZXNzIGJwMy1uby1hbmltYXRpb24gYnAzLW5vLXN0cmlwZXMgYnAzLWhpc3RvZ3JhbVwifVxuICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjBweFwiLCBiYWNrZ3JvdW5kOiBcIm5vbmVcIn19XG4gICAgLy8gICAgICAgICA+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJicDMtcHJvZ3Jlc3MtbWV0ZXJcIn1cbiAgICAvLyAgICAgICAgICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogKHNjYWxlZFZhbHVlICogMTAwKS50b1ByZWNpc2lvbigyKSArIFwiJVwiLFxuICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCJcbiAgICAvLyAgICAgICAgICAgICB9fVxuICAgIC8vICAgICAgICAgPlxuXG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPC9kaXY+KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU29ydChjb2x1bW4sIHNldFByb3BzLCBzb3J0QnksIHNvcnREaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8QnV0dG9uIGljb249e1wiY2hldnJvbi11cFwifSBzbWFsbD17dHJ1ZX0gc3R5bGU9e3tjdXJzb3I6IFwiZGVmYXVsdFwifX1cbiAgICAgICAgICAgICAgICAgICAgbWluaW1hbFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c29ydEJ5ID09PSBjb2x1bW4ua2V5ICYmIHNvcnREaXJlY3Rpb24gPT09ICdhc2MnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBzb3J0IHByb3BzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiBjb2x1bW4ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17XCJjaGV2cm9uLWRvd25cIn0gc21hbGw9e3RydWV9IHN0eWxlPXt7Y3Vyc29yOiBcImRlZmF1bHRcIn19XG4gICAgICAgICAgICAgICAgICAgIG1pbmltYWxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NvcnRCeSA9PT0gY29sdW1uLmtleSAmJiBzb3J0RGlyZWN0aW9uID09PSAnZGVzYyd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHNvcnQgcHJvcHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6IGNvbHVtbi5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbjogJ2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgQmx1ZXByaW50IHN0eWxpbmcgdG8gbmF0aXZlIEhUTUwgdGFibGVzLlxuICogXG4gKiBJdCBhbHNvIGluY2x1ZGVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3Igc2VhcmNoaW5nLCBvcmRlcmluZyBhbmQgcGFnaW5hdGlvbiBvZlxuICogZGF0YSBpbiB0aGUgdGFibGUuXG4gKiBcbiAqIElNUE9SVEFOVDogV2hlbiBjcmVhdGluZyByb3dzLCB5b3UgTVVTVCB1c2UgdGhlIEJsdWVwcmludEpTIFRyIGNvbXBvbmVudCBpZiB5b3VcbiAqIHdhbnQgc2VsZWN0aW9uIHRvIHNob3cgcHJvcGVybHksIGFuZCB1c2UgY3NzIHRvIG1vZGlmeSByb3dzIHdpdGggY2xhc3NOYW1lICdzZWxlY3RlZCdcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVNlbGVjdGlvbiA9IHRoaXMudXBkYXRlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSBoYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlck1vcmVMZXNzQnV0dG9ucyA9IHJlbmRlck1vcmVMZXNzQnV0dG9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlclJvd3MgPSB0aGlzLmZpbHRlclJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zb3J0Um93cyA9IHRoaXMuc29ydFJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRydW5jYXRlUm93cyA9IHRoaXMudHJ1bmNhdGVSb3dzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSB0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlclBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5UcnMgPSB7fTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bl9jbGlja3M6IDB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5fY2xpY2tzOiAwLFxuICAgICAgICAgICAgcGFnZV9zaXplOiBwcm9wcy5wYWdlX3NpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucykge1xuICAgICAgICAvLyByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gezx0aCA+e1wiaGVhZGVyXCJ9PC90aD59KTtcbiAgICAgICAgLy8gcmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHs8dGQgPntjb2x1bW4ua2V5fTwvdGQ+fSk7XG4gICAgICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbiAgICAgICAgY29uc3Qgc2V0UHJvcHMgPSB0aGlzLnByb3BzLnNldFByb3BzIHx8IHRoaXMuc2V0U3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRCeSwgc29ydERpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGhlYWRlckNlbGxzID0gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XG4gICAgICAgICAgICAgICAge2NvbHVtbi5zb3J0ICE9PSBmYWxzZSAmJiBjb2x1bW4udHlwZSAhPT0gXCJzcGFya2xpbmVcIiAmJiBjb2x1bW4udHlwZSAhPT0gXCJhY3Rpb25cIiA/IFxuICAgICAgICAgICAgICAgIHJlbmRlclNvcnQoY29sdW1uLCBzZXRQcm9wcywgc29ydEJ5LCBzb3J0RGlyZWN0aW9uKSA6IG51bGx9XG4gICAgICAgICAgICA8L3RoPikpO1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkZXJDZWxscyk7XG4gICAgICAgIHJldHVybiBoZWFkZXJDZWxscztcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVTZWxlY3Rpb24oa2V5LCBldmVudCwgb3JkZXJlZEtleXMpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhvcmRlcmVkS2V5cyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNldFByb3BzIDogdGhpcy5zZXRTdGF0ZTtcbiAgICAvLyAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSB8fCB0cnVlKSB7XG4gICAgLy8gICAgICAgICBzZXRQcm9wcyh7XG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0aW9uOiBba2V5XSxcbiAgICAvLyAgICAgICAgICAgICByb3dfY2xpY2s6IGtleVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHNvcnRSb3dzKGZpbHRlcmVkUm93cykge1xuICAgICAgICBjb25zdCBbc29ydEJ5LCBzb3J0RGlyZWN0aW9uXSA9IHRoaXMucHJvcHMuc2V0UHJvcHMgPyBbdGhpcy5wcm9wcy5zb3J0QnksIHRoaXMucHJvcHMuc29ydERpcmVjdGlvbl0gOiBbdGhpcy5zdGF0ZS5zb3J0QnksIHRoaXMuc3RhdGUuc29ydERpcmVjdGlvbl07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBzb3J0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRCeSwgc29ydERpcmVjdGlvbik7XG4gICAgICAgIGlmIChzb3J0QnkpIHtcbiAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09ICdhc2MnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYVtzb3J0QnldID49IGJbc29ydEJ5XSkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGFbc29ydEJ5XSA8PSBiW3NvcnRCeV0pID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc29ydGluZyByb3dzJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0ZWRSb3dzKTtcbiAgICAgICAgICAgIHJldHVybiBzb3J0ZWRSb3dzO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICB9XG5cbiAgICB0cnVuY2F0ZVJvd3MoZmlsdGVyZWRSb3dzKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMucGFnZV9zaXplIDogdGhpcy5zdGF0ZS5wYWdlX3NpemU7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3Muc2xpY2UoMCwgcGFnZVNpemUpO1xuICAgIH1cbiAgICBcbiAgICBmaWx0ZXJSb3dzKCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRSb3dzID0gdGhpcy5wcm9wcy5yb3dzO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnByb3BzLmZpbHRlciB8fCB0aGlzLnN0YXRlLmZpbHRlcjtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVyZWRSb3dzLmZpbHRlcihyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGZpbHRlcikuZXZlcnkoKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W2tdICE9IHVuZGVmaW5lZCAmJiByb3dba10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yodi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2x1bW5zLCBhY3Rpb25zLCBtYXhDb3VudCwgc2V0UHJvcHMsIGFjdGlvbkJ1dHRvblByb3BzLCAuLi50YWJsZVByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzY2FsaW5nQ29uc3RhbnQgPSBtYXhDb3VudDtcbiAgICAgICAgaWYgKCFzY2FsaW5nQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25zdGFudCA9IE1hdGgubWF4KC4uLnJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gKDx0cj57dGhpcy5yZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucyl9PC90cj4pO1xuICAgICAgICBsZXQgZmlsdGVySGVhZGVyO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgICAgIGZpbHRlckhlYWRlciA9IDx0cj57cmVuZGVyRmlsdGVySGVhZGVyKGNvbHVtbnMsIHJvd3MsIHNldFByb3BzID8gc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlLCBzZXRQcm9wcyA/IHRoaXMucHJvcHMuZmlsdGVyIDogdGhpcy5zdGF0ZS5maWx0ZXIpfTwvdHI+O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCByb3dTZWxlY3Rpb24gPSAodGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2VsZWN0aW9uIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb24pIHx8IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmZpbHRlclJvd3Mocm93cyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZFJvd3MgPSB0aGlzLnNvcnRSb3dzKGZpbHRlcmVkUm93cyk7XG4gICAgICAgIGxldCBvcmRlcmVkS2V5cyA9IHNvcnRlZFJvd3MubWFwKHJvdyA9PiByb3cua2V5KTtcblxuICAgICAgICBjb25zdCB0cnVuY2F0ZVJvd3MgPSB0aGlzLnRydW5jYXRlUm93cyhzb3J0ZWRSb3dzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0cnVuY2F0ZVJvd3MubWFwKHJvdyA9PiAoPFRyIHNlbGVjdGVkPXtyb3dTZWxlY3Rpb24uaW5kZXhPZihyb3cua2V5KSA+IC0xfSBrZXk9e3Jvdy5rZXl9IG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVSb3dDbGljayhyb3cua2V5LCBldmVudCwgb3JkZXJlZEtleXMpfT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyUm93KHJvdywgY29sdW1ucywgYWN0aW9ucywgc2V0UHJvcHMgPyBzZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGUsIGFjdGlvbkJ1dHRvblByb3BzKX1cbiAgICAgICAgICAgIDwvVHI+KSk7XG4gICAgICAgIGxldCBwYWdpbmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93X21vcmVfbGVzcykge1xuICAgICAgICAgICAgcGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zKHNvcnRlZFJvd3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCUEhUTUxUYWJsZSBjbGFzc05hbWU9XCJoaXN0b2dyYW1cIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgdGFibGVMYXlvdXQ6IFwiZml4ZWRcIn19IGludGVyYWN0aXZlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+e1toZWFkZXIsIGZpbHRlckhlYWRlcl19PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+e2JvZHl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvQlBIVE1MVGFibGU+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuUHJvcGVydHlUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gc29ydF9kaXJlY3Rpb246ICdhc2MnLFxuICAgIC8vIGZpbHRlcl9ieToge30sXG4gICAgLy8gLy8gVE9ETyByZW1vdmUgdGhlc2UgZGVmYXVsdHNcbiAgICAvLyBmaWx0ZXJfY29sdW1uczogW10sXG4gICAgLy8gc29ydF9jb2x1bW5zOiBbXSxcbiAgICAvLyBmaWx0ZXJfc3RyaW5nczoge30sXG4gICAgcGFnZV9zaXplOiAxMCxcbiAgICAvLyBjdXJyZW50X3BhZ2U6IDEsXG4gICAgLy8gc2VsZWN0aW9uOiBbXSxcbiAgICBzaG93X21vcmVfc2l6ZTogMTAsXG4gICAgLy8gbl9jbGlja3M6IDAsXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBzaG93X21vcmVfbGVzczogdHJ1ZSxcbiAgICBhY3Rpb25CdXR0b25Qcm9wczoge1xuICAgICAgICBtaW5pbWFsOiB0cnVlLFxuICAgICAgICBzbWFsbDogdHJ1ZVxuICAgIH1cbn07XG5cblByb3BlcnR5VGFibGUucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGlzIGNvbXBvbmVudCwgdXNlZCB0byBpZGVudGlmeSBkYXNoIGNvbXBvbmVudHNcbiAgICAgKiBpbiBjYWxsYmFja3MuIFRoZSBJRCBuZWVkcyB0byBiZSB1bmlxdWUgYWNyb3NzIGFsbCBvZiB0aGVcbiAgICAgKiBjb21wb25lbnRzIGluIGFuIGFwcC5cbiAgICAgKi9cbiAgICAnaWQnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgJ2NoaWxkcmVuJzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdyb2xlJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgZGF0YSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnZGF0YS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICAnY2xhc3NOYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFJvdyBkYXRhIHVzZWQgdG8gY3JlYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgKi9cbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGNvdW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBoaXN0b2dyYW0uIFZhbHVlcyBhYm92ZSB0aGlzIG51bWJlclxuICAgICAqIHdpbGwgYmUgcmVuZGVyZWQgYSBkaWZmZXJlbnQgY29sb3VyXG4gICAgICovXG4gICAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGJvcmRlcnMgYmV0d2VlbiByb3dzIGFuZCBjZWxscy5cbiAgICAvLyAgKi9cbiAgICAvLyBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlLlxuICAgIC8vICAqL1xuICAgIC8vIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGhvdmVyIHN0eWxlcyBvbiByb3cuXG4gICAgLy8gICovXG4gICAgLy8gaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhbGwgY2hpbGQgZWxlbWVudHMuXG4gICAgLy8gICovXG4gICAgLy8gc21hbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIGFuIGFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIG9kZCByb3dzLlxuICAgIC8vICAqL1xuICAgIC8vIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogS2V5IGZvciB0aGUgY2xpY2tlZCByb3dcbiAgICAgKi9cbiAgICByb3dfY2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gdG8gc29ydCB2YWx1ZXMgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNvcnQgZGlyZWN0aW9uIChhc2Mgb3IgZGVzYylcbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEZpbHRlcmluZyBzdHJpbmdzXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIG51bWJlcnMgdGhhdCBtYXkgYmUgZmlsdGVyZWRcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1ucyB0aGF0IGNhbiBiZSBzb3J0ZWQgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFN0cmluZ3MgdG8gZmlsdGVyIGNvbHVtbnMgYnlcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfc3RyaW5nczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBhZ2Ugc2l6ZSAoaW4gcm93cylcbiAgICAgKi9cbiAgICBwYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDdXJyZW50IHBhZ2UgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIGN1cnJlbnRfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIHRvIGluY3JlYXNlL2RlY3JlYXNlIHBhZ2Ugc2l6ZSBieVxuICAgICAqIChmb3IgdXNlIGluIHNpbXBsZSBzaG93IG1vcmUgbW9kZSlcbiAgICAgKi9cbiAgICBzaG93X21vcmVfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFNob3cgc2ltcGxlIG1vcmUvbGVzcyBidXR0b25zIHRvIGFkanVzdCBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBzaG93X21vcmVfbGVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHJvdyBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHJvd3NcbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGVcbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBBIHNldCBvZiBhY3Rpb25zIHRvIGRpc3BsYXkgaW4gdGhlIGZpcnN0IGNvbHVtblxuICAgICAqL1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuXG4gICAgLy8gbl9jbGlja3M6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBwYXNzIHRocm91Z2ggdG8gdGhlIGFjdGlvbiBidXR0b25cbiAgICAgKi9cbiAgICBhY3Rpb25CdXR0b25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBzZWxlY3RlZCBmb3IgbG9jYXRlIGFjdGlvblxuICAgICAqL1xuICAgIGxvY2F0ZUFjdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBjbGlja2VkIGZvciBpbmZvIGFjdGlvblxuICAgICAqL1xuICAgIGluZm9BY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGFjdGlvbiBub3QgY292ZXJlZCBieSBwcmV2aW91cyBvcHRpb25zXG4gICAgICovXG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9