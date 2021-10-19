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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function _filterRows(rows, columns, filter) {
  var filterFunction = Object.entries(filter).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        idx = _ref2[0],
        value = _ref2[1];

    var column = columns.find(function (c) {
      return c.key == idx;
    });

    if (column.type == "number") {
      if (value.indexOf("<=") === 0) {
        var a = Number(value.slice(2));
        return function (entry) {
          return entry[column.key] <= a;
        };
      } else if (value.indexOf("<") === 0) {
        var _a = Number(value.slice(1));

        return function (entry) {
          return entry[column.key] < _a;
        };
      } else if (value.indexOf(">=") === 0) {
        var _a2 = Number(value.slice(2));

        return function (entry) {
          return entry[column.key] >= _a2;
        };
      } else if (value.indexOf(">") === 0) {
        var _a3 = Number(value.slice(1));

        return function (entry) {
          return entry[column.key] > _a3;
        };
      } else {
        var stringArray = value.split(",");
        return function (entry) {
          return stringArray.some(function (element) {
            return entry[column.key].toString().toLowerCase().indexOf(element) >= 0;
          });
        };
      }
    } else if (column.type == "string") {
      var _stringArray = value.split(",");

      return function (entry) {
        return _stringArray.some(function (element) {
          console.log(element);
          console.log(entry);
          return entry[column.key].toString().toLowerCase().indexOf(element) >= 0;
        });
      };
    }
  });
  console.log(filterFunction);
  return rows.filter(function (row) {
    return Object.entries(filterFunction).every(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          idx = _ref4[0],
          value = _ref4[1];

      return value(row);
    });
  });
}

;

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
      var _ref5 = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref6 = _slicedToArray(_ref5, 2),
          sortBy = _ref6[0],
          sortDirection = _ref6[1];

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
      var _ref7 = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref8 = _slicedToArray(_ref7, 2),
          sortBy = _ref8[0],
          sortDirection = _ref8[1];

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
        filteredRows = _filterRows(filteredRows, this.props.columns, filter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9ob2NzL1Byb3BlcnR5VGFibGUucmVhY3QuanMiXSwibmFtZXMiOlsiZmlsdGVyUm93cyIsInJvd3MiLCJjb2x1bW5zIiwiZmlsdGVyIiwiZmlsdGVyRnVuY3Rpb24iLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaWR4IiwidmFsdWUiLCJjb2x1bW4iLCJmaW5kIiwiYyIsImtleSIsInR5cGUiLCJpbmRleE9mIiwiYSIsIk51bWJlciIsInNsaWNlIiwiZW50cnkiLCJzdHJpbmdBcnJheSIsInNwbGl0Iiwic29tZSIsImVsZW1lbnQiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsInJvdyIsImV2ZXJ5IiwicmVuZGVyRmlsdGVySGVhZGVyIiwic2V0UHJvcHMiLCJmaWx0ZXJDZWxscyIsImV2ZW50IiwidGFyZ2V0Iiwic2VsZWN0T3B0aW9ucyIsIlNldCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJsYWJlbCIsInZhbCIsInJlbmRlclNwYXJrbGluZSIsImRhdGEiLCJjb2x1bW5Qcm9wcyIsInJlbmRlclJvdyIsImFjdGlvbnMiLCJhY3Rpb25CdXR0b25Qcm9wcyIsImljb24iLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb24iLCJwcm9wcyIsInJlbmRlclNvcnQiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiY3Vyc29yIiwiUHJvcGVydHlUYWJsZSIsImhhbmRsZVJvd0NsaWNrIiwiYmluZCIsInNldFN0YXRlIiwicmVuZGVyTW9yZUxlc3NCdXR0b25zIiwic29ydFJvd3MiLCJyZW5kZXJIZWFkZXIiLCJ0cnVuY2F0ZVJvd3MiLCJzdGF0ZSIsIm5fY2xpY2tzIiwicGFnZV9zaXplIiwiaGVhZGVyQ2VsbHMiLCJzb3J0IiwiZmlsdGVyZWRSb3dzIiwiYiIsInNvcnRlZFJvd3MiLCJwYWdlU2l6ZSIsIm1heENvdW50IiwidGFibGVQcm9wcyIsInNjYWxpbmdDb25zdGFudCIsIk1hdGgiLCJtYXgiLCJjb3VudCIsImhlYWRlciIsImZpbHRlckhlYWRlciIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGlvbiIsIm9yZGVyZWRLZXlzIiwiYm9keSIsInBhZ2luYXRpb24iLCJzaG93X21vcmVfbGVzcyIsImxlbmd0aCIsIndpZHRoIiwidGFibGVMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNob3dfbW9yZV9zaXplIiwic2VsZWN0YWJsZSIsIm1pbmltYWwiLCJzbWFsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsIm51bWJlciIsInJvd19jbGljayIsImJvb2wiLCJhcnJheU9mIiwib2JqZWN0IiwibG9jYXRlQWN0aW9uIiwiaW5mb0FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsV0FBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUV2QyxNQUFNQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxNQUFmLEVBQXVCSSxHQUF2QixDQUEyQixnQkFBa0I7QUFBQTtBQUFBLFFBQWhCQyxHQUFnQjtBQUFBLFFBQVhDLEtBQVc7O0FBQ2hFLFFBQU1DLE1BQU0sR0FBR1IsT0FBTyxDQUFDUyxJQUFSLENBQWEsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsR0FBRixJQUFTTCxHQUFoQjtBQUFBLEtBQWIsQ0FBZjs7QUFDQSxRQUFJRSxNQUFNLENBQUNJLElBQVAsSUFBZSxRQUFuQixFQUE2QjtBQUN6QixVQUFJTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxJQUFkLE1BQXdCLENBQTVCLEVBQStCO0FBQzNCLFlBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLEtBQU4sQ0FBWSxDQUFaLENBQUQsQ0FBaEI7QUFDQSxlQUFPLFVBQUNDLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDVCxNQUFNLENBQUNHLEdBQVIsQ0FBTCxJQUFxQkcsQ0FBaEM7QUFBQSxTQUFQO0FBQ0gsT0FIRCxNQUlLLElBQUlQLEtBQUssQ0FBQ00sT0FBTixDQUFjLEdBQWQsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDL0IsWUFBTUMsRUFBQyxHQUFHQyxNQUFNLENBQUNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLENBQVosQ0FBRCxDQUFoQjs7QUFDQSxlQUFPLFVBQUNDLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDVCxNQUFNLENBQUNHLEdBQVIsQ0FBTCxHQUFvQkcsRUFBL0I7QUFBQSxTQUFQO0FBQ0gsT0FISSxNQUlBLElBQUlQLEtBQUssQ0FBQ00sT0FBTixDQUFjLElBQWQsTUFBd0IsQ0FBNUIsRUFBK0I7QUFDaEMsWUFBTUMsR0FBQyxHQUFHQyxNQUFNLENBQUNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLENBQVosQ0FBRCxDQUFoQjs7QUFDQSxlQUFPLFVBQUNDLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDVCxNQUFNLENBQUNHLEdBQVIsQ0FBTCxJQUFxQkcsR0FBaEM7QUFBQSxTQUFQO0FBQ0gsT0FISSxNQUlBLElBQUlQLEtBQUssQ0FBQ00sT0FBTixDQUFjLEdBQWQsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDL0IsWUFBTUMsR0FBQyxHQUFHQyxNQUFNLENBQUNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLENBQVosQ0FBRCxDQUFoQjs7QUFDQSxlQUFPLFVBQUNDLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDVCxNQUFNLENBQUNHLEdBQVIsQ0FBTCxHQUFvQkcsR0FBL0I7QUFBQSxTQUFQO0FBQ0gsT0FISSxNQUdFO0FBQ0gsWUFBTUksV0FBVyxHQUFHWCxLQUFLLENBQUNZLEtBQU4sQ0FBWSxHQUFaLENBQXBCO0FBQ0EsZUFBTyxVQUFDRixLQUFEO0FBQUEsaUJBQVdDLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQixVQUFDQyxPQUFEO0FBQUEsbUJBQWFKLEtBQUssQ0FBQ1QsTUFBTSxDQUFDRyxHQUFSLENBQUwsQ0FBa0JXLFFBQWxCLEdBQTZCQyxXQUE3QixHQUEyQ1YsT0FBM0MsQ0FBbURRLE9BQW5ELEtBQStELENBQTVFO0FBQUEsV0FBakIsQ0FBWDtBQUFBLFNBQVA7QUFDSDtBQUNKLEtBcEJELE1Bb0JPLElBQUliLE1BQU0sQ0FBQ0ksSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFVBQU1NLFlBQVcsR0FBR1gsS0FBSyxDQUFDWSxLQUFOLENBQVksR0FBWixDQUFwQjs7QUFDQSxhQUFPLFVBQUNGLEtBQUQ7QUFBQSxlQUFXQyxZQUFXLENBQUNFLElBQVosQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVDRyxpQkFBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDQUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0EsaUJBQU9BLEtBQUssQ0FBQ1QsTUFBTSxDQUFDRyxHQUFSLENBQUwsQ0FBa0JXLFFBQWxCLEdBQTZCQyxXQUE3QixHQUEyQ1YsT0FBM0MsQ0FBbURRLE9BQW5ELEtBQStELENBQXRFO0FBQ0gsU0FKaUIsQ0FBWDtBQUFBLE9BQVA7QUFLSDtBQUNKLEdBOUJzQixDQUF2QjtBQStCQUcsU0FBTyxDQUFDQyxHQUFSLENBQVl2QixjQUFaO0FBQ0EsU0FBT0gsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBQ3lCLEdBQUQ7QUFBQSxXQUFTdkIsTUFBTSxDQUFDQyxPQUFQLENBQWVGLGNBQWYsRUFBK0J5QixLQUEvQixDQUFxQztBQUFBO0FBQUEsVUFBRXJCLEdBQUY7QUFBQSxVQUFPQyxLQUFQOztBQUFBLGFBQWtCQSxLQUFLLENBQUNtQixHQUFELENBQXZCO0FBQUEsS0FBckMsQ0FBVDtBQUFBLEdBQVosQ0FBUDtBQUNIOztBQUFBOztBQUVELFNBQVNFLGtCQUFULENBQTRCNUIsT0FBNUIsRUFBcUNELElBQXJDLEVBQTJDOEIsUUFBM0MsRUFBcUQ1QixNQUFyRCxFQUE2RDtBQUV6RHVCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVl4QixNQUFaO0FBQ0EsTUFBTTZCLFdBQVcsR0FBRzlCLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUNHLE1BQUQsRUFBWTtBQUN4QyxZQUFRQSxNQUFNLENBQUNQLE1BQWY7QUFDSSxXQUFLLFFBQUw7QUFDSSw0QkFBTyxvRkFBSSwyREFBQyw0REFBRDtBQUNYLGVBQUssRUFBRUEsTUFBTSxHQUFHQSxNQUFNLENBQUNPLE1BQU0sQ0FBQ0csR0FBUixDQUFULEdBQXdCLEVBRDFCO0FBRVgsa0JBQVEsRUFBRSxrQkFBQ29CLEtBQUQ7QUFBQSxtQkFBV0YsUUFBUSxDQUFDO0FBQzFCNUIsb0JBQU0sa0NBQ0NBLE1BREQsMkJBRURPLE1BQU0sQ0FBQ0csR0FGTixFQUVZb0IsS0FBSyxDQUFDQyxNQUFOLENBQWF6QixLQUZ6QjtBQURvQixhQUFELENBQW5CO0FBQUE7QUFGQyxVQUFKLENBQVA7O0FBUUosV0FBSyxRQUFMO0FBQ0ksWUFBTTBCLGFBQWEsR0FBRyxtQkFBSSxJQUFJQyxHQUFKLENBQVFuQyxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFBcUIsR0FBRztBQUFBLGlCQUFJQSxHQUFHLENBQUNsQixNQUFNLENBQUNHLEdBQVIsQ0FBUDtBQUFBLFNBQVosQ0FBUixDQUFKLEVBQStDVixNQUEvQyxDQUFzRCxVQUFBa0MsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLEtBQUtDLFNBQWI7QUFBQSxTQUExRCxFQUFrRi9CLEdBQWxGLENBQXNGLFVBQUE4QixJQUFJLEVBQUk7QUFBQyxpQkFBTztBQUFDRSxpQkFBSyxFQUFFRjtBQUFSLFdBQVA7QUFBcUIsU0FBcEgsQ0FBdEI7O0FBQ0FYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUSxhQUFaO0FBQ0EsNEJBQU8sb0ZBQUksMkRBQUMscURBQUQ7QUFBUSxlQUFLLEVBQUVBLGFBQWY7QUFDWCxrQkFBUSxFQUFFLGtCQUFDRixLQUFEO0FBQUEsbUJBQVdQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFaLENBQVg7QUFBQSxXQURDO0FBRVgsd0JBQWMsRUFBRSx3QkFBQ08sR0FBRDtBQUFBLG1CQUFTVCxRQUFRLENBQUM7QUFBQzVCLG9CQUFNLGtDQUNsQ0EsTUFEa0MsMkJBRXBDTyxNQUFNLENBQUNHLEdBRjZCLEVBRXZCMkIsR0FBRyxDQUFDL0IsS0FBSixDQUFVOEIsS0FGYTtBQUFQLGFBQUQsQ0FBakI7QUFBQSxXQUZMO0FBTVgsZUFBSyxFQUFFcEMsTUFBTSxHQUFHQSxNQUFNLENBQUNPLE1BQU0sQ0FBQ0csR0FBUixDQUFULEdBQXdCO0FBTjFCLFVBQUosQ0FBUDtBQWJSOztBQXNCQSx3QkFBTyxzRUFBUDtBQUNILEdBeEJtQixDQUFwQjtBQXlCQSxTQUFPbUIsV0FBUDtBQUVIOztBQUVELFNBQVNTLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxXQUEvQixFQUE0QztBQUN4QyxzQkFBTywyREFBQyw4REFBRDtBQUFXLFFBQUksRUFBRUQ7QUFBakIsS0FBMkJDLFdBQTNCLEVBQVA7QUFDSDs7QUFFRCxTQUFTQyxTQUFULENBQW1CaEIsR0FBbkIsRUFBd0IxQixPQUF4QixFQUFpQzJDLE9BQWpDLEVBQTBDZCxRQUExQyxFQUFvRGUsaUJBQXBELEVBQXVFO0FBQ25FLFNBQU81QyxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDRyxNQUFELEVBQVk7QUFDM0IsUUFBSUEsTUFBTSxDQUFDSSxJQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDekIsMEJBQU8sb0ZBQUssMkRBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUVKLE1BQU0sQ0FBQ3FDLElBQXJCO0FBQ0osZUFBTyxFQUFFLGlCQUFDZCxLQUFELEVBQVc7QUFDaEJBLGVBQUssQ0FBQ2UsZUFBTixHQURnQixDQUNTOztBQUN6QmpCLGtCQUFRLHFCQUFHckIsTUFBTSxDQUFDdUMsTUFBUCxHQUFnQixRQUFuQixFQUE4QnJCLEdBQTlCLEVBQVI7QUFDQUcsa0JBQVEsQ0FBQztBQUFDa0Isa0JBQU0sRUFBRTtBQUNkckIsaUJBQUcsRUFBRUEsR0FEUztBQUVkcUIsb0JBQU0sRUFBRXZDLE1BQU0sQ0FBQ3VDO0FBRkQ7QUFBVCxXQUFELENBQVI7QUFJSDtBQVJHLFNBU0FILGlCQVRBLEVBQUwsQ0FBUDtBQVVILEtBWEQsTUFXTyxJQUFJcEMsTUFBTSxDQUFDSSxJQUFQLElBQWUsV0FBbkIsRUFBZ0M7QUFDbkMsMEJBQU8sdUVBQU0yQixlQUFlLENBQUNiLEdBQUcsQ0FBQ2xCLE1BQU0sQ0FBQ0csR0FBUixDQUFKLEVBQWtCSCxNQUFNLENBQUN3QyxLQUF6QixDQUFyQixDQUFQO0FBQ0g7O0FBQ0Qsd0JBQU8sdUVBQU10QixHQUFHLENBQUNsQixNQUFNLENBQUNHLEdBQVIsQ0FBVCxDQUFQO0FBQ0gsR0FoQk0sQ0FBUCxDQURtRSxDQWtCbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0g7O0FBRUQsU0FBU3NDLFVBQVQsQ0FBb0J6QyxNQUFwQixFQUE0QnFCLFFBQTVCLEVBQXNDcUIsTUFBdEMsRUFBOENDLGFBQTlDLEVBQTZEO0FBQ3pELHNCQUFPLDJEQUFDLDRDQUFELENBQU8sUUFBUCxxQkFDSCwyREFBQyx3REFBRDtBQUFRLFFBQUksRUFBRSxZQUFkO0FBQTRCLFNBQUssRUFBRSxJQUFuQztBQUF5QyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBaEQ7QUFDWSxXQUFPLE1BRG5CO0FBRVksWUFBUSxFQUFFRixNQUFNLEtBQUsxQyxNQUFNLENBQUNHLEdBQWxCLElBQXlCd0MsYUFBYSxLQUFLLEtBRmpFO0FBR1ksV0FBTyxFQUFFLG1CQUFNO0FBQ1gzQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBSSxjQUFRLENBQUM7QUFDTHFCLGNBQU0sRUFBRTFDLE1BQU0sQ0FBQ0csR0FEVjtBQUVMd0MscUJBQWEsRUFBRTtBQUZWLE9BQUQsQ0FBUjtBQUlIO0FBVGIsSUFERyxlQWFLLDJEQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFFLGNBQWQ7QUFBOEIsU0FBSyxFQUFFLElBQXJDO0FBQTJDLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFsRDtBQUNJLFdBQU8sTUFEWDtBQUVJLFlBQVEsRUFBRUYsTUFBTSxLQUFLMUMsTUFBTSxDQUFDRyxHQUFsQixJQUF5QndDLGFBQWEsS0FBSyxNQUZ6RDtBQUdJLFdBQU8sRUFBRSxtQkFBTTtBQUNYM0IsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUksY0FBUSxDQUFDO0FBQ0xxQixjQUFNLEVBQUUxQyxNQUFNLENBQUNHLEdBRFY7QUFFTHdDLHFCQUFhLEVBQUU7QUFGVixPQUFELENBQVI7QUFJSDtBQVRMLElBYkwsQ0FBUDtBQTBCSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBQ3FCRSxhOzs7OztBQUNqQix5QkFBWUwsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOLEVBRGUsQ0FFZjs7QUFDQSxVQUFLTSxjQUFMLEdBQXNCQSxvRUFBYyxDQUFDQyxJQUFmLCtCQUF0QjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLCtCQUFoQjtBQUNBLFVBQUtFLHFCQUFMLEdBQTZCQSxrRkFBcUIsQ0FBQ0YsSUFBdEIsK0JBQTdCO0FBQ0EsVUFBS3pELFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQnlELElBQWhCLCtCQUFsQjtBQUNBLFVBQUtHLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjSCxJQUFkLCtCQUFoQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCTCxJQUFsQiwrQkFBcEIsQ0FUZSxDQVVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBS00sS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRSxDQUREO0FBRVRDLGVBQVMsRUFBRWYsS0FBSyxDQUFDZTtBQUZSLEtBQWI7QUFmZTtBQW1CbEI7Ozs7V0FFRCxzQkFBYS9ELE9BQWIsRUFBc0IyQyxPQUF0QixFQUErQjtBQUMzQjtBQUNBO0FBQ0Esa0JBQWdDLEtBQUtLLEtBQUwsQ0FBV25CLFFBQVgsR0FBc0IsQ0FBQyxLQUFLbUIsS0FBTCxDQUFXRSxNQUFaLEVBQW9CLEtBQUtGLEtBQUwsQ0FBV0csYUFBL0IsQ0FBdEIsR0FBc0UsQ0FBQyxLQUFLVSxLQUFMLENBQVdYLE1BQVosRUFBb0IsS0FBS1csS0FBTCxDQUFXVixhQUEvQixDQUF0RztBQUFBO0FBQUEsVUFBT0QsTUFBUDtBQUFBLFVBQWVDLGFBQWY7O0FBQ0EsVUFBTXRCLFFBQVEsR0FBRyxLQUFLbUIsS0FBTCxDQUFXbkIsUUFBWCxJQUF1QixLQUFLMkIsUUFBN0M7QUFDQWhDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZeUIsTUFBWixFQUFvQkMsYUFBcEI7QUFDQSxVQUFNYSxXQUFXLEdBQUdoRSxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDRyxNQUFEO0FBQUEsNEJBQzVCLHVFQUNLQSxNQUFNLENBQUM2QixLQURaLEVBRUs3QixNQUFNLENBQUN5RCxJQUFQLEtBQWdCLEtBQWhCLElBQXlCekQsTUFBTSxDQUFDSSxJQUFQLEtBQWdCLFdBQXpDLElBQXdESixNQUFNLENBQUNJLElBQVAsS0FBZ0IsUUFBeEUsR0FDRHFDLFVBQVUsQ0FBQ3pDLE1BQUQsRUFBU3FCLFFBQVQsRUFBbUJxQixNQUFuQixFQUEyQkMsYUFBM0IsQ0FEVCxHQUNxRCxJQUgxRCxDQUQ0QjtBQUFBLE9BQVosQ0FBcEI7QUFNQTNCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsV0FBWjtBQUNBLGFBQU9BLFdBQVA7QUFDSCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUVBLGtCQUFTRSxZQUFULEVBQXVCO0FBQ25CLGtCQUFnQyxLQUFLbEIsS0FBTCxDQUFXbkIsUUFBWCxHQUFzQixDQUFDLEtBQUttQixLQUFMLENBQVdFLE1BQVosRUFBb0IsS0FBS0YsS0FBTCxDQUFXRyxhQUEvQixDQUF0QixHQUFzRSxDQUFDLEtBQUtVLEtBQUwsQ0FBV1gsTUFBWixFQUFvQixLQUFLVyxLQUFMLENBQVdWLGFBQS9CLENBQXRHO0FBQUE7QUFBQSxVQUFPRCxNQUFQO0FBQUEsVUFBZUMsYUFBZjs7QUFDQTNCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVl5QixNQUFaLEVBQW9CQyxhQUFwQjs7QUFDQSxVQUFJRCxNQUFKLEVBQVk7QUFDUixZQUFJQyxhQUFhLElBQUksS0FBckIsRUFBNEI7QUFDeEIsaUJBQU9lLFlBQVksQ0FBQ0QsSUFBYixDQUFrQixVQUFDbkQsQ0FBRCxFQUFJcUQsQ0FBSixFQUFVO0FBQy9CLG1CQUFRckQsQ0FBQyxDQUFDb0MsTUFBRCxDQUFELElBQWFpQixDQUFDLENBQUNqQixNQUFELENBQWYsR0FBMkIsQ0FBM0IsR0FBK0IsQ0FBQyxDQUF2QztBQUNILFdBRk0sQ0FBUDtBQUdILFNBSkQsTUFJTztBQUNILGlCQUFPZ0IsWUFBWSxDQUFDRCxJQUFiLENBQWtCLFVBQUNuRCxDQUFELEVBQUlxRCxDQUFKLEVBQVU7QUFDL0IsbUJBQVFyRCxDQUFDLENBQUNvQyxNQUFELENBQUQsSUFBYWlCLENBQUMsQ0FBQ2pCLE1BQUQsQ0FBZixHQUEyQixDQUEzQixHQUErQixDQUFDLENBQXZDO0FBQ0gsV0FGTSxDQUFQO0FBR0g7O0FBRUQxQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZMkMsVUFBWjtBQUNBLGVBQU9BLFVBQVA7QUFFSDs7QUFDRCxhQUFPRixZQUFQO0FBQ0g7OztXQUVELHNCQUFhQSxZQUFiLEVBQTJCO0FBQ3ZCLFVBQU1HLFFBQVEsR0FBRyxLQUFLckIsS0FBTCxDQUFXbkIsUUFBWCxHQUFzQixLQUFLbUIsS0FBTCxDQUFXZSxTQUFqQyxHQUE2QyxLQUFLRixLQUFMLENBQVdFLFNBQXpFO0FBQ0EsYUFBT0csWUFBWSxDQUFDbEQsS0FBYixDQUFtQixDQUFuQixFQUFzQnFELFFBQXRCLENBQVA7QUFDSDs7O1dBRUQsc0JBQWE7QUFDVCxVQUFJSCxZQUFZLEdBQUcsS0FBS2xCLEtBQUwsQ0FBV2pELElBQTlCO0FBQ0EsVUFBTUUsTUFBTSxHQUFHLEtBQUsrQyxLQUFMLENBQVcvQyxNQUFYLElBQXFCLEtBQUs0RCxLQUFMLENBQVc1RCxNQUEvQzs7QUFDQSxVQUFJQSxNQUFKLEVBQVk7QUFDUmlFLG9CQUFZLEdBQUdwRSxXQUFVLENBQUNvRSxZQUFELEVBQWUsS0FBS2xCLEtBQUwsQ0FBV2hELE9BQTFCLEVBQW1DQyxNQUFuQyxDQUF6QjtBQUNIOztBQUNELGFBQU9pRSxZQUFQO0FBQ0g7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0wsVUFBTWxCLEtBQUssR0FBRyxLQUFLQSxLQUFuQjs7QUFDQSx3QkFBdUYsS0FBS0EsS0FBNUY7QUFBQSxVQUFPakQsSUFBUCxlQUFPQSxJQUFQO0FBQUEsVUFBYUMsT0FBYixlQUFhQSxPQUFiO0FBQUEsVUFBc0IyQyxPQUF0QixlQUFzQkEsT0FBdEI7QUFBQSxVQUErQjJCLFFBQS9CLGVBQStCQSxRQUEvQjtBQUFBLFVBQXlDekMsUUFBekMsZUFBeUNBLFFBQXpDO0FBQUEsVUFBbURlLGlCQUFuRCxlQUFtREEsaUJBQW5EO0FBQUEsVUFBeUUyQixVQUF6RTs7QUFDQSxVQUFJQyxlQUFlLEdBQUdGLFFBQXRCOztBQUNBLFVBQUksQ0FBQ0UsZUFBTCxFQUFzQjtBQUNsQkEsdUJBQWUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUkscUJBQVExRSxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDcUIsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNpRCxLQUFiO0FBQUEsU0FBVCxDQUFSLEVBQXRCO0FBQ0g7O0FBQUE7QUFDRG5ELGFBQU8sQ0FBQ0MsR0FBUixDQUFZMUIsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ3FCLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNpRCxLQUFiO0FBQUEsT0FBVCxDQUFaO0FBQ0EsVUFBTUMsTUFBTSxnQkFBSSx1RUFBSyxLQUFLakIsWUFBTCxDQUFrQjNELE9BQWxCLEVBQTJCMkMsT0FBM0IsQ0FBTCxDQUFoQjtBQUNBLFVBQUlrQyxZQUFKOztBQUdBLFVBQUk3RSxPQUFPLENBQUNTLElBQVIsQ0FBYSxVQUFDRCxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDUCxNQUFuQjtBQUFBLE9BQWIsQ0FBSixFQUE2QztBQUN6QzRFLG9CQUFZLGdCQUFHLHVFQUFLakQsa0JBQWtCLENBQUM1QixPQUFELEVBQVVELElBQVYsRUFBZ0I4QixRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUFLMkIsUUFBM0MsRUFBcUQzQixRQUFRLEdBQUcsS0FBS21CLEtBQUwsQ0FBVy9DLE1BQWQsR0FBdUIsS0FBSzRELEtBQUwsQ0FBVzVELE1BQS9GLENBQXZCLENBQWY7QUFDSDs7QUFBQTtBQUNEdUIsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS2tDLFlBQUwsQ0FBa0IzRCxPQUFsQixFQUEyQjJDLE9BQTNCLENBQVo7QUFDQW5CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZekIsT0FBWjtBQUdBLFVBQU04RSxZQUFZLEdBQUcsQ0FBQyxLQUFLOUIsS0FBTCxDQUFXbkIsUUFBWCxHQUFzQixLQUFLbUIsS0FBTCxDQUFXK0IsU0FBakMsR0FBNkMsS0FBS2xCLEtBQUwsQ0FBV2tCLFNBQXpELEtBQXVFLEVBQTVGO0FBQ0EsVUFBTWIsWUFBWSxHQUFHLEtBQUtwRSxVQUFMLENBQWdCQyxJQUFoQixDQUFyQjtBQUNBLFVBQU1xRSxVQUFVLEdBQUcsS0FBS1YsUUFBTCxDQUFjUSxZQUFkLENBQW5CO0FBQ0EsVUFBSWMsV0FBVyxHQUFHWixVQUFVLENBQUMvRCxHQUFYLENBQWUsVUFBQXFCLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNmLEdBQVI7QUFBQSxPQUFsQixDQUFsQjtBQUVBLFVBQU1pRCxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQlEsVUFBbEIsQ0FBckI7QUFFQSxVQUFNYSxJQUFJLEdBQUdyQixZQUFZLENBQUN2RCxHQUFiLENBQWlCLFVBQUFxQixHQUFHO0FBQUEsNEJBQUssMkRBQUMsaURBQUQ7QUFBSSxrQkFBUSxFQUFFb0QsWUFBWSxDQUFDakUsT0FBYixDQUFxQmEsR0FBRyxDQUFDZixHQUF6QixJQUFnQyxDQUFDLENBQS9DO0FBQWtELGFBQUcsRUFBRWUsR0FBRyxDQUFDZixHQUEzRDtBQUFnRSxpQkFBTyxFQUFFLGlCQUFDb0IsS0FBRDtBQUFBLG1CQUFXLE1BQUksQ0FBQ3VCLGNBQUwsQ0FBb0I1QixHQUFHLENBQUNmLEdBQXhCLEVBQTZCb0IsS0FBN0IsRUFBb0NpRCxXQUFwQyxDQUFYO0FBQUE7QUFBekUsV0FDN0J0QyxTQUFTLENBQUNoQixHQUFELEVBQU0xQixPQUFOLEVBQWUyQyxPQUFmLEVBQXdCZCxRQUFRLEdBQUdBLFFBQUgsR0FBYyxNQUFJLENBQUMyQixRQUFuRCxFQUE2RFosaUJBQTdELENBRG9CLENBQUw7QUFBQSxPQUFwQixDQUFiO0FBR0EsVUFBSXNDLFVBQUo7O0FBQ0EsVUFBSSxLQUFLbEMsS0FBTCxDQUFXbUMsY0FBZixFQUErQjtBQUMzQkQsa0JBQVUsR0FBRyxLQUFLekIscUJBQUwsQ0FBMkJXLFVBQVUsQ0FBQ2dCLE1BQXRDLENBQWI7QUFDSDs7QUFDRCwwQkFBUSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAscUJBQ0osMkRBQUMsMkRBQUQ7QUFBYSxpQkFBUyxFQUFDLFdBQXZCO0FBQW1DLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUUsTUFBUjtBQUFnQkMscUJBQVcsRUFBRTtBQUE3QixTQUExQztBQUFpRixtQkFBVyxFQUFFO0FBQTlGLHNCQUNJLDBFQUFRLENBQUNWLE1BQUQsRUFBU0MsWUFBVCxDQUFSLENBREosZUFFSSwwRUFBUUksSUFBUixDQUZKLENBREksRUFLSEMsVUFMRyxDQUFSO0FBUUg7Ozs7RUFuSXNDSyw0Q0FBSyxDQUFDQyxTOzs7QUF1SWpEbkMsYUFBYSxDQUFDb0MsWUFBZCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTFCLFdBQVMsRUFBRSxFQVBjO0FBUXpCO0FBQ0E7QUFDQTJCLGdCQUFjLEVBQUUsRUFWUztBQVd6QjtBQUNBM0YsTUFBSSxFQUFFLEVBWm1CO0FBYXpCNEYsWUFBVSxFQUFFLElBYmE7QUFjekJSLGdCQUFjLEVBQUUsSUFkUztBQWV6QnZDLG1CQUFpQixFQUFFO0FBQ2ZnRCxXQUFPLEVBQUUsSUFETTtBQUVmQyxTQUFLLEVBQUU7QUFGUTtBQWZNLENBQTdCO0FBcUJBeEMsYUFBYSxDQUFDeUMsU0FBZCxHQUEwQjtBQUN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksUUFBTUMsaURBQVMsQ0FBQ0MsTUFOTTs7QUFRdEI7QUFDSjtBQUNBO0FBQ0ksY0FBWUQsaURBQVMsQ0FBQ0UsSUFYQTs7QUFhdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLFNBQU9GLGlEQUFTLENBQUNDLE1BbEJLOztBQW9CdEI7QUFDSjtBQUNBO0FBQ0ksVUFBUUQsaURBQVMsQ0FBQ0MsTUF2Qkk7O0FBeUJ0QjtBQUNKO0FBQ0E7QUFDSSxZQUFVRCxpREFBUyxDQUFDQyxNQTVCRTs7QUE4QnRCO0FBQ0o7QUFDQTtBQUNJLFlBQVVELGlEQUFTLENBQUNDLE1BakNFOztBQW1DdEI7QUFDSjtBQUNBO0FBQ0ksZUFBYUQsaURBQVMsQ0FBQ0MsTUF0Q0Q7O0FBd0N0QjtBQUNKO0FBQ0E7QUFDSWpHLE1BQUksRUFBRWdHLGlEQUFTLENBQUNHLEtBM0NNOztBQTZDdEI7QUFDSjtBQUNBO0FBQ0E7QUFDSTVCLFVBQVEsRUFBRXlCLGlEQUFTLENBQUNJLE1BakRFO0FBbUR0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0o7QUFDQTtBQUNJQyxXQUFTLEVBQUVMLGlEQUFTLENBQUNDLE1BL0VDO0FBaUZ0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0lqQyxXQUFTLEVBQUVnQyxpREFBUyxDQUFDSSxNQWxIQztBQW9IdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDSVQsZ0JBQWMsRUFBRUssaURBQVMsQ0FBQ0ksTUE3SEo7O0FBK0h0QjtBQUNKO0FBQ0E7QUFDSWhCLGdCQUFjLEVBQUVZLGlEQUFTLENBQUNNLElBbElKOztBQW9JdEI7QUFDSjtBQUNBO0FBQ0lWLFlBQVUsRUFBRUksaURBQVMsQ0FBQ00sSUF2SUE7O0FBeUl0QjtBQUNKO0FBQ0E7QUFDSXRCLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNHLEtBNUlDOztBQThJdEI7QUFDSjtBQUNBO0FBQ0lsRyxTQUFPLEVBQUUrRixpREFBUyxDQUFDRyxLQWpKRzs7QUFtSnRCO0FBQ0o7QUFDQTtBQUNJdkQsU0FBTyxFQUFFb0QsaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0MsTUFBNUIsQ0F0SmE7QUF3SnRCOztBQUVBO0FBQ0o7QUFDQTtBQUNJcEQsbUJBQWlCLEVBQUVtRCxpREFBUyxDQUFDUSxNQTdKUDs7QUErSnRCO0FBQ0o7QUFDQTtBQUNJQyxjQUFZLEVBQUVULGlEQUFTLENBQUNRLE1BbEtGOztBQW9LdEI7QUFDSjtBQUNBO0FBQ0lFLFlBQVUsRUFBRVYsaURBQVMsQ0FBQ1EsTUF2S0E7O0FBeUt0QjtBQUNKO0FBQ0E7QUFDSXhELFFBQU0sRUFBRWdELGlEQUFTLENBQUNRO0FBNUtJLENBQTFCLEMiLCJmaWxlIjoiNjMyNTk0OS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcywgeyBjaGVja1Byb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSFRNTFRhYmxlIGFzIEJQSFRNTFRhYmxlLCBFZGl0YWJsZVRleHQsIEJ1dHRvbiwgUHJvZ3Jlc3NCYXIsIEludGVudCwgVGV4dCwgSW5wdXRHcm91cCB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuaW1wb3J0IFRyIGZyb20gJy4uL1RyLnJlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0LnJlYWN0JztcbmltcG9ydCBTcGFya2xpbmUgZnJvbSAnLi4vc3BhcmsvU3BhcmtsaW5lLnJlYWN0JztcbmltcG9ydCB7IElOVEVOVF9TVUNDRVNTIH0gZnJvbSAnQGJsdWVwcmludGpzL2NvcmUvbGliL2VzbS9jb21tb24vY2xhc3Nlcyc7XG5cbmltcG9ydCB7IGhhbmRsZVJvd0NsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaGFuZGxlUm93Q2xpY2snO1xuaW1wb3J0IHsgcmVuZGVyTW9yZUxlc3NCdXR0b25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVuZGVyTW9yZUxlc3NCdXR0b25zJztcblxuaW1wb3J0ICcuLi8uLi8uLi9jc3MvaGlzdG9ncmFtLmNzcyc7XG5cblxuZnVuY3Rpb24gZmlsdGVyUm93cyhyb3dzLCBjb2x1bW5zLCBmaWx0ZXIpIHtcbiAgICBcbiAgICBjb25zdCBmaWx0ZXJGdW5jdGlvbiA9IE9iamVjdC5lbnRyaWVzKGZpbHRlcikubWFwKChbaWR4LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucy5maW5kKChjKSA9PiBjLmtleSA9PSBpZHgpO1xuICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoXCI8PVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBOdW1iZXIodmFsdWUuc2xpY2UoMikpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZW50cnkpID0+IGVudHJ5W2NvbHVtbi5rZXldIDw9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKFwiPFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBOdW1iZXIodmFsdWUuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZW50cnkpID0+IGVudHJ5W2NvbHVtbi5rZXldIDwgYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoXCI+PVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBOdW1iZXIodmFsdWUuc2xpY2UoMikpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZW50cnkpID0+IGVudHJ5W2NvbHVtbi5rZXldID49IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKFwiPlwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBOdW1iZXIodmFsdWUuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZW50cnkpID0+IGVudHJ5W2NvbHVtbi5rZXldID4gYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nQXJyYXkgPSB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlbnRyeSkgPT4gc3RyaW5nQXJyYXkuc29tZSgoZWxlbWVudCkgPT4gZW50cnlbY29sdW1uLmtleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZWxlbWVudCkgPj0gMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4udHlwZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdBcnJheSA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHJldHVybiAoZW50cnkpID0+IHN0cmluZ0FycmF5LnNvbWUoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5W2NvbHVtbi5rZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVsZW1lbnQpID49IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGZpbHRlckZ1bmN0aW9uKTtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoKHJvdykgPT4gT2JqZWN0LmVudHJpZXMoZmlsdGVyRnVuY3Rpb24pLmV2ZXJ5KChbaWR4LCB2YWx1ZV0pID0+IHZhbHVlKHJvdykpKVxufTtcblxuZnVuY3Rpb24gcmVuZGVyRmlsdGVySGVhZGVyKGNvbHVtbnMsIHJvd3MsIHNldFByb3BzLCBmaWx0ZXIpIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyIGlzJyk7XG4gICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICBjb25zdCBmaWx0ZXJDZWxscyA9IGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgc3dpdGNoIChjb2x1bW4uZmlsdGVyKSB7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0aD48SW5wdXRHcm91cCBcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyW2NvbHVtbi5rZXldIDogXCJcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbi5rZXldOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfSAvPjwvdGg+O1xuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBbLi4ubmV3IFNldChyb3dzLm1hcChyb3cgPT4gcm93W2NvbHVtbi5rZXldKSldLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCkubWFwKGl0ZW0gPT4ge3JldHVybiB7bGFiZWw6IGl0ZW19fSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0aD48U2VsZWN0IGl0ZW1zPXtzZWxlY3RPcHRpb25zfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICAgICAgICAgICAgc2V0UGFyZW50UHJvcHM9eyh2YWwpID0+IHNldFByb3BzKHtmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBbY29sdW1uLmtleV06IHZhbC52YWx1ZS5sYWJlbFxuICAgICAgICAgICAgICAgIH19KX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyW2NvbHVtbi5rZXldIDogbnVsbH1cbiAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDx0aD48L3RoPlxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJDZWxscztcblxufVxuXG5mdW5jdGlvbiByZW5kZXJTcGFya2xpbmUoZGF0YSwgY29sdW1uUHJvcHMpIHtcbiAgICByZXR1cm4gPFNwYXJrbGluZSBkYXRhPXtkYXRhfSB7Li4uY29sdW1uUHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiByZW5kZXJSb3cocm93LCBjb2x1bW5zLCBhY3Rpb25zLCBzZXRQcm9wcywgYWN0aW9uQnV0dG9uUHJvcHMpIHtcbiAgICByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIDx0ZCA+PEJ1dHRvbiBpY29uPXtjb2x1bW4uaWNvbn0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFN0b3AgdGhlIGV2ZW50IGNvbnRyaWJ1dGluZyB0byBzZWxlY3Rpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7W2NvbHVtbi5hY3Rpb24gKyBcIkFjdGlvblwiXTogcm93fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7YWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBjb2x1bW4uYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgICAgICB7Li4uYWN0aW9uQnV0dG9uUHJvcHN9IC8+PC90ZD5cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4udHlwZSA9PSBcInNwYXJrbGluZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gPHRkID57cmVuZGVyU3BhcmtsaW5lKHJvd1tjb2x1bW4ua2V5XSwgY29sdW1uLnByb3BzKX08L3RkPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPHRkID57cm93W2NvbHVtbi5rZXldfTwvdGQ+XG4gICAgfSk7XG4gICAgLy8gLy8gcm93LmNvdW50ID4gc2NhbGluZ0NvbnN0YW50ID8gSW50ZW50LldBUk5JTkcgOiBJbnRlbnQuU1VDQ0VTU1xuICAgIC8vIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1wiYnAzLXByb2dyZXNzLWJhciBicDMtaW50ZW50LXN1Y2Nlc3MgYnAzLW5vLWFuaW1hdGlvbiBicDMtbm8tc3RyaXBlcyBicDMtaGlzdG9ncmFtXCJ9XG4gICAgLy8gICAgICAgICAgICAgLy8gc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMHB4XCIsIGJhY2tncm91bmQ6IFwibm9uZVwifX1cbiAgICAvLyAgICAgICAgID5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJwMy1wcm9ncmVzcy1tZXRlclwifVxuICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAoc2NhbGVkVmFsdWUgKiAxMDApLnRvUHJlY2lzaW9uKDIpICsgXCIlXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIlxuICAgIC8vICAgICAgICAgICAgIH19XG4gICAgLy8gICAgICAgICA+XG5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Rpdj4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTb3J0KGNvbHVtbiwgc2V0UHJvcHMsIHNvcnRCeSwgc29ydERpcmVjdGlvbikge1xuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxCdXR0b24gaWNvbj17XCJjaGV2cm9uLXVwXCJ9IHNtYWxsPXt0cnVlfSBzdHlsZT17e2N1cnNvcjogXCJkZWZhdWx0XCJ9fVxuICAgICAgICAgICAgICAgICAgICBtaW5pbWFsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzb3J0QnkgPT09IGNvbHVtbi5rZXkgJiYgc29ydERpcmVjdGlvbiA9PT0gJ2FzYyd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHNvcnQgcHJvcHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6IGNvbHVtbi5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbjogJ2FzYydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXtcImNoZXZyb24tZG93blwifSBzbWFsbD17dHJ1ZX0gc3R5bGU9e3tjdXJzb3I6IFwiZGVmYXVsdFwifX1cbiAgICAgICAgICAgICAgICAgICAgbWluaW1hbFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c29ydEJ5ID09PSBjb2x1bW4ua2V5ICYmIHNvcnREaXJlY3Rpb24gPT09ICdkZXNjJ31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgc29ydCBwcm9wcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeTogY29sdW1uLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBwcm92aWRlcyBCbHVlcHJpbnQgc3R5bGluZyB0byBuYXRpdmUgSFRNTCB0YWJsZXMuXG4gKiBcbiAqIEl0IGFsc28gaW5jbHVkZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBzZWFyY2hpbmcsIG9yZGVyaW5nIGFuZCBwYWdpbmF0aW9uIG9mXG4gKiBkYXRhIGluIHRoZSB0YWJsZS5cbiAqIFxuICogSU1QT1JUQU5UOiBXaGVuIGNyZWF0aW5nIHJvd3MsIHlvdSBNVVNUIHVzZSB0aGUgQmx1ZXByaW50SlMgVHIgY29tcG9uZW50IGlmIHlvdVxuICogd2FudCBzZWxlY3Rpb24gdG8gc2hvdyBwcm9wZXJseSwgYW5kIHVzZSBjc3MgdG8gbW9kaWZ5IHJvd3Mgd2l0aCBjbGFzc05hbWUgJ3NlbGVjdGVkJ1xuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlU2VsZWN0aW9uID0gdGhpcy51cGRhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dDbGljayA9IGhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zID0gcmVuZGVyTW9yZUxlc3NCdXR0b25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyUm93cyA9IHRoaXMuZmlsdGVyUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNvcnRSb3dzID0gdGhpcy5zb3J0Um93cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckhlYWRlciA9IHRoaXMucmVuZGVySGVhZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJ1bmNhdGVSb3dzID0gdGhpcy50cnVuY2F0ZVJvd3MuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVSb3dDbGljayA9IHRoaXMuaGFuZGxlUm93Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5maWx0ZXJSb3dzID0gdGhpcy5maWx0ZXJSb3dzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyUGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyUGFnaW5hdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLlRycyA9IHt9O1xuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtuX2NsaWNrczogMH0pO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbl9jbGlja3M6IDAsXG4gICAgICAgICAgICBwYWdlX3NpemU6IHByb3BzLnBhZ2Vfc2l6ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKSB7XG4gICAgICAgIC8vIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7PHRoID57XCJoZWFkZXJcIn08L3RoPn0pO1xuICAgICAgICAvLyByZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gezx0ZCA+e2NvbHVtbi5rZXl9PC90ZD59KTtcbiAgICAgICAgY29uc3QgW3NvcnRCeSwgc29ydERpcmVjdGlvbl0gPSB0aGlzLnByb3BzLnNldFByb3BzID8gW3RoaXMucHJvcHMuc29ydEJ5LCB0aGlzLnByb3BzLnNvcnREaXJlY3Rpb25dIDogW3RoaXMuc3RhdGUuc29ydEJ5LCB0aGlzLnN0YXRlLnNvcnREaXJlY3Rpb25dO1xuICAgICAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgfHwgdGhpcy5zZXRTdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coc29ydEJ5LCBzb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3QgaGVhZGVyQ2VsbHMgPSBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICB7Y29sdW1uLnNvcnQgIT09IGZhbHNlICYmIGNvbHVtbi50eXBlICE9PSBcInNwYXJrbGluZVwiICYmIGNvbHVtbi50eXBlICE9PSBcImFjdGlvblwiID8gXG4gICAgICAgICAgICAgICAgcmVuZGVyU29ydChjb2x1bW4sIHNldFByb3BzLCBzb3J0QnksIHNvcnREaXJlY3Rpb24pIDogbnVsbH1cbiAgICAgICAgICAgIDwvdGg+KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlckNlbGxzKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckNlbGxzO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZVNlbGVjdGlvbihrZXksIGV2ZW50LCBvcmRlcmVkS2V5cykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG9yZGVyZWRLZXlzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IHNldFByb3BzID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlO1xuICAgIC8vICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RhYmxlIHx8IHRydWUpIHtcbiAgICAvLyAgICAgICAgIHNldFByb3BzKHtcbiAgICAvLyAgICAgICAgICAgICBzZWxlY3Rpb246IFtrZXldLFxuICAgIC8vICAgICAgICAgICAgIHJvd19jbGljazoga2V5XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgc29ydFJvd3MoZmlsdGVyZWRSb3dzKSB7XG4gICAgICAgIGNvbnN0IFtzb3J0QnksIHNvcnREaXJlY3Rpb25dID0gdGhpcy5wcm9wcy5zZXRQcm9wcyA/IFt0aGlzLnByb3BzLnNvcnRCeSwgdGhpcy5wcm9wcy5zb3J0RGlyZWN0aW9uXSA6IFt0aGlzLnN0YXRlLnNvcnRCeSwgdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9uXTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nIHNvcnQnKTtcbiAgICAgICAgY29uc29sZS5sb2coc29ydEJ5LCBzb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgaWYgKHNvcnRCeSkge1xuICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhW3NvcnRCeV0gPj0gYltzb3J0QnldKSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYVtzb3J0QnldIDw9IGJbc29ydEJ5XSkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzb3J0aW5nIHJvd3MnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvcnRlZFJvd3MpO1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJvd3M7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgIH1cblxuICAgIHRydW5jYXRlUm93cyhmaWx0ZXJlZFJvd3MpIHtcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5wYWdlX3NpemUgOiB0aGlzLnN0YXRlLnBhZ2Vfc2l6ZTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cy5zbGljZSgwLCBwYWdlU2l6ZSk7XG4gICAgfVxuICAgIFxuICAgIGZpbHRlclJvd3MoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFJvd3MgPSB0aGlzLnByb3BzLnJvd3M7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMucHJvcHMuZmlsdGVyIHx8IHRoaXMuc3RhdGUuZmlsdGVyO1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJSb3dzKGZpbHRlcmVkUm93cywgdGhpcy5wcm9wcy5jb2x1bW5zLCBmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2x1bW5zLCBhY3Rpb25zLCBtYXhDb3VudCwgc2V0UHJvcHMsIGFjdGlvbkJ1dHRvblByb3BzLCAuLi50YWJsZVByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzY2FsaW5nQ29uc3RhbnQgPSBtYXhDb3VudDtcbiAgICAgICAgaWYgKCFzY2FsaW5nQ29uc3RhbnQpIHtcbiAgICAgICAgICAgIHNjYWxpbmdDb25zdGFudCA9IE1hdGgubWF4KC4uLnJvd3MubWFwKChyb3cpID0+IHJvdy5jb3VudCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzLm1hcCgocm93KSA9PiByb3cuY291bnQpKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gKDx0cj57dGhpcy5yZW5kZXJIZWFkZXIoY29sdW1ucywgYWN0aW9ucyl9PC90cj4pO1xuICAgICAgICBsZXQgZmlsdGVySGVhZGVyO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgICAgIGZpbHRlckhlYWRlciA9IDx0cj57cmVuZGVyRmlsdGVySGVhZGVyKGNvbHVtbnMsIHJvd3MsIHNldFByb3BzID8gc2V0UHJvcHMgOiB0aGlzLnNldFN0YXRlLCBzZXRQcm9wcyA/IHRoaXMucHJvcHMuZmlsdGVyIDogdGhpcy5zdGF0ZS5maWx0ZXIpfTwvdHI+O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlbmRlckhlYWRlcihjb2x1bW5zLCBhY3Rpb25zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCByb3dTZWxlY3Rpb24gPSAodGhpcy5wcm9wcy5zZXRQcm9wcyA/IHRoaXMucHJvcHMuc2VsZWN0aW9uIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb24pIHx8IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmZpbHRlclJvd3Mocm93cyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZFJvd3MgPSB0aGlzLnNvcnRSb3dzKGZpbHRlcmVkUm93cyk7XG4gICAgICAgIGxldCBvcmRlcmVkS2V5cyA9IHNvcnRlZFJvd3MubWFwKHJvdyA9PiByb3cua2V5KTtcblxuICAgICAgICBjb25zdCB0cnVuY2F0ZVJvd3MgPSB0aGlzLnRydW5jYXRlUm93cyhzb3J0ZWRSb3dzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0cnVuY2F0ZVJvd3MubWFwKHJvdyA9PiAoPFRyIHNlbGVjdGVkPXtyb3dTZWxlY3Rpb24uaW5kZXhPZihyb3cua2V5KSA+IC0xfSBrZXk9e3Jvdy5rZXl9IG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVSb3dDbGljayhyb3cua2V5LCBldmVudCwgb3JkZXJlZEtleXMpfT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyUm93KHJvdywgY29sdW1ucywgYWN0aW9ucywgc2V0UHJvcHMgPyBzZXRQcm9wcyA6IHRoaXMuc2V0U3RhdGUsIGFjdGlvbkJ1dHRvblByb3BzKX1cbiAgICAgICAgICAgIDwvVHI+KSk7XG4gICAgICAgIGxldCBwYWdpbmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93X21vcmVfbGVzcykge1xuICAgICAgICAgICAgcGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyTW9yZUxlc3NCdXR0b25zKHNvcnRlZFJvd3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCUEhUTUxUYWJsZSBjbGFzc05hbWU9XCJoaXN0b2dyYW1cIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgdGFibGVMYXlvdXQ6IFwiZml4ZWRcIn19IGludGVyYWN0aXZlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+e1toZWFkZXIsIGZpbHRlckhlYWRlcl19PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+e2JvZHl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvQlBIVE1MVGFibGU+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuUHJvcGVydHlUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gc29ydF9kaXJlY3Rpb246ICdhc2MnLFxuICAgIC8vIGZpbHRlcl9ieToge30sXG4gICAgLy8gLy8gVE9ETyByZW1vdmUgdGhlc2UgZGVmYXVsdHNcbiAgICAvLyBmaWx0ZXJfY29sdW1uczogW10sXG4gICAgLy8gc29ydF9jb2x1bW5zOiBbXSxcbiAgICAvLyBmaWx0ZXJfc3RyaW5nczoge30sXG4gICAgcGFnZV9zaXplOiAxMCxcbiAgICAvLyBjdXJyZW50X3BhZ2U6IDEsXG4gICAgLy8gc2VsZWN0aW9uOiBbXSxcbiAgICBzaG93X21vcmVfc2l6ZTogMTAsXG4gICAgLy8gbl9jbGlja3M6IDAsXG4gICAgcm93czogW10sXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBzaG93X21vcmVfbGVzczogdHJ1ZSxcbiAgICBhY3Rpb25CdXR0b25Qcm9wczoge1xuICAgICAgICBtaW5pbWFsOiB0cnVlLFxuICAgICAgICBzbWFsbDogdHJ1ZVxuICAgIH1cbn07XG5cblByb3BlcnR5VGFibGUucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGlzIGNvbXBvbmVudCwgdXNlZCB0byBpZGVudGlmeSBkYXNoIGNvbXBvbmVudHNcbiAgICAgKiBpbiBjYWxsYmFja3MuIFRoZSBJRCBuZWVkcyB0byBiZSB1bmlxdWUgYWNyb3NzIGFsbCBvZiB0aGVcbiAgICAgKiBjb21wb25lbnRzIGluIGFuIGFwcC5cbiAgICAgKi9cbiAgICAnaWQnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgJ2NoaWxkcmVuJzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgICdyb2xlJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgZGF0YSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnZGF0YS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICAnY2xhc3NOYW1lJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFJvdyBkYXRhIHVzZWQgdG8gY3JlYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgKi9cbiAgICByb3dzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIGNvdW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBoaXN0b2dyYW0uIFZhbHVlcyBhYm92ZSB0aGlzIG51bWJlclxuICAgICAqIHdpbGwgYmUgcmVuZGVyZWQgYSBkaWZmZXJlbnQgY29sb3VyXG4gICAgICovXG4gICAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGJvcmRlcnMgYmV0d2VlbiByb3dzIGFuZCBjZWxscy5cbiAgICAvLyAgKi9cbiAgICAvLyBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBVc2Ugc21hbGwsIGNvbmRlbnNlZCBhcHBlYXJhbmNlLlxuICAgIC8vICAqL1xuICAgIC8vIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBFbmFibGVzIGhvdmVyIHN0eWxlcyBvbiByb3cuXG4gICAgLy8gICovXG4gICAgLy8gaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIHNtYWxsLCBjb25kZW5zZWQgYXBwZWFyYW5jZSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhbGwgY2hpbGQgZWxlbWVudHMuXG4gICAgLy8gICovXG4gICAgLy8gc21hbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVXNlIGFuIGFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIG9kZCByb3dzLlxuICAgIC8vICAqL1xuICAgIC8vIHN0cmlwZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogS2V5IGZvciB0aGUgY2xpY2tlZCByb3dcbiAgICAgKi9cbiAgICByb3dfY2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDb2x1bW4gdG8gc29ydCB2YWx1ZXMgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNvcnQgZGlyZWN0aW9uIChhc2Mgb3IgZGVzYylcbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2RpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEZpbHRlcmluZyBzdHJpbmdzXG4gICAgLy8gICovXG4gICAgLy8gZmlsdGVyX2J5OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1uIG51bWJlcnMgdGhhdCBtYXkgYmUgZmlsdGVyZWRcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ29sdW1ucyB0aGF0IGNhbiBiZSBzb3J0ZWQgb25cbiAgICAvLyAgKi9cbiAgICAvLyBzb3J0X2NvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFN0cmluZ3MgdG8gZmlsdGVyIGNvbHVtbnMgYnlcbiAgICAvLyAgKi9cbiAgICAvLyBmaWx0ZXJfc3RyaW5nczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBhZ2Ugc2l6ZSAoaW4gcm93cylcbiAgICAgKi9cbiAgICBwYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBDdXJyZW50IHBhZ2UgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIGN1cnJlbnRfcGFnZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIHRvIGluY3JlYXNlL2RlY3JlYXNlIHBhZ2Ugc2l6ZSBieVxuICAgICAqIChmb3IgdXNlIGluIHNpbXBsZSBzaG93IG1vcmUgbW9kZSlcbiAgICAgKi9cbiAgICBzaG93X21vcmVfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFNob3cgc2ltcGxlIG1vcmUvbGVzcyBidXR0b25zIHRvIGFkanVzdCBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBzaG93X21vcmVfbGVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHJvdyBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHJvd3NcbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHByb3BlcnRpZXMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGVcbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBBIHNldCBvZiBhY3Rpb25zIHRvIGRpc3BsYXkgaW4gdGhlIGZpcnN0IGNvbHVtblxuICAgICAqL1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuXG4gICAgLy8gbl9jbGlja3M6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBwYXNzIHRocm91Z2ggdG8gdGhlIGFjdGlvbiBidXR0b25cbiAgICAgKi9cbiAgICBhY3Rpb25CdXR0b25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBzZWxlY3RlZCBmb3IgbG9jYXRlIGFjdGlvblxuICAgICAqL1xuICAgIGxvY2F0ZUFjdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJvdyBjbGlja2VkIGZvciBpbmZvIGFjdGlvblxuICAgICAqL1xuICAgIGluZm9BY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGFjdGlvbiBub3QgY292ZXJlZCBieSBwcmV2aW91cyBvcHRpb25zXG4gICAgICovXG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9