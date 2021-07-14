webpackHotUpdatedash_blueprint("main",{

/***/ "./node_modules/@data-ui/sparkline/lib/annotation/Label.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/lib/annotation/Label.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _theme = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  anchor: _propTypes.default.oneOf(['start', 'middle', 'end']),
  dominantBaseline: _propTypes.default.string,
  dx: _propTypes.default.number,
  dy: _propTypes.default.number,
  fill: _propTypes.default.string,
  label: _propTypes.default.node,
  paintOrder: _propTypes.default.string,
  stroke: _propTypes.default.string,
  strokeWidth: _propTypes.default.number,
  x: _propTypes.default.number,
  y: _propTypes.default.number
};
exports.propTypes = propTypes;
var defaultProps = {
  anchor: 'middle',
  dominantBaseline: 'middle',
  dx: 0,
  dy: 0,
  fill: _theme.color.text,
  label: null,
  paintOrder: 'stroke',
  stroke: '#fff',
  strokeWidth: 2,
  x: 0,
  y: 0
};
exports.defaultProps = defaultProps;

function Label(_ref) {
  var anchor = _ref.anchor,
      dominantBaseline = _ref.dominantBaseline,
      dx = _ref.dx,
      dy = _ref.dy,
      fill = _ref.fill,
      label = _ref.label,
      paintOrder = _ref.paintOrder,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      x = _ref.x,
      y = _ref.y,
      rest = _objectWithoutPropertiesLoose(_ref, ["anchor", "dominantBaseline", "dx", "dy", "fill", "label", "paintOrder", "stroke", "strokeWidth", "x", "y"]);

  return _react.default.createElement("text", _extends({
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    fill: fill,
    dominantBaseline: dominantBaseline,
    paintOrder: paintOrder,
    stroke: stroke,
    strokeWidth: strokeWidth,
    textAnchor: anchor
  }, rest), label);
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.displayName = 'Label';
var _default = Label;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/lib/series/BarSeries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/lib/series/BarSeries.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@vx/group/build/Group.js"));

var _Bar = _interopRequireDefault(__webpack_require__(/*! @vx/shape/build/shapes/Bar */ "./node_modules/@vx/shape/build/shapes/Bar.js"));

var _theme = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/build/index.js");

var _Label = _interopRequireDefault(__webpack_require__(/*! ../annotation/Label */ "./node_modules/@data-ui/sparkline/lib/annotation/Label.js"));

var _callOrValue = _interopRequireDefault(__webpack_require__(/*! ../utils/callOrValue */ "./node_modules/@data-ui/sparkline/lib/utils/callOrValue.js"));

var _positionLabel = _interopRequireDefault(__webpack_require__(/*! ../utils/positionLabel */ "./node_modules/@data-ui/sparkline/lib/utils/positionLabel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  fill: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  fillOpacity: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.number]),
  LabelComponent: _propTypes.default.element,
  labelOffset: _propTypes.default.number,
  labelPosition: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.oneOf(['top', 'right', 'bottom', 'left'])]),
  onMouseMove: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  renderLabel: _propTypes.default.func,
  // (val, i) => node
  stroke: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  strokeWidth: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.number]),
  // all likely passed by the parent chart
  data: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object])),
  getX: _propTypes.default.func,
  getY: _propTypes.default.func,
  xScale: _propTypes.default.func,
  yScale: _propTypes.default.func
};
exports.propTypes = propTypes;
var defaultProps = {
  data: [],
  fill: _theme.color.default,
  fillOpacity: 0.7,
  getX: null,
  getY: null,
  labelOffset: 8,
  LabelComponent: _react.default.createElement(_Label.default, _extends({}, _theme.svgLabel.baseTickLabel, {
    stroke: "#fff"
  })),
  labelPosition: 'top',
  onMouseMove: null,
  onMouseLeave: null,
  renderLabel: null,
  stroke: '#fff',
  strokeWidth: 1,
  xScale: null,
  yScale: null
};
exports.defaultProps = defaultProps;

var BarSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(BarSeries, _React$PureComponent);

  function BarSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = BarSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        labelOffset = _this$props.labelOffset,
        LabelComponent = _this$props.LabelComponent,
        labelPosition = _this$props.labelPosition,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var barWidth = Math.max(1, Math.max.apply(Math, xScale.range()) / data.length - 1);
    var maxBarHeight = Math.max.apply(Math, yScale.range());
    var labels = []; // render labels as top-most layer

    return _react.default.createElement(_Group.default, null, data.map(function (d, i) {
      var yVal = getY(d);
      var x = xScale(getX(d));
      var y = yScale(yVal);
      var key = "bar-" + x + "-" + y + "-" + i;
      var label = renderLabel && renderLabel(yVal, i);
      var fillValue = (0, _callOrValue.default)(d.fill || fill, yVal, i);

      if (label) {
        labels.push(_extends({
          key: key,
          label: label,
          x: x,
          y: y
        }, (0, _positionLabel.default)((0, _callOrValue.default)(labelPosition, yVal, i), labelOffset)));
      }

      return _react.default.createElement(_Bar.default, {
        key: key,
        x: x - barWidth / 2,
        y: y,
        width: barWidth,
        height: maxBarHeight - y,
        fill: fillValue,
        fillOpacity: (0, _callOrValue.default)(typeof d.fillOpacity === 'undefined' ? fillOpacity : d.fillOpacity, yVal, i),
        stroke: (0, _callOrValue.default)(d.stroke || stroke, yVal, i),
        strokeWidth: (0, _callOrValue.default)(d.strokeWidth || strokeWidth, yVal, i),
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              index: i,
              color: fillValue
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        }
      });
    }), labels.map(function (labelProps) {
      return _react.default.cloneElement(LabelComponent, labelProps);
    }));
  };

  return BarSeries;
}(_react.default.PureComponent);

BarSeries.propTypes = propTypes;
BarSeries.defaultProps = defaultProps;
BarSeries.displayName = 'BarSeries';
var _default = BarSeries;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/lib/utils/callOrValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/lib/utils/callOrValue.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = callOrValue;

function callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/lib/utils/positionLabel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/lib/utils/positionLabel.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = positionLabel;
var DEFAULT_LABEL_OFFSET = 8;

function positionLabel(orientation, labelOffset) {
  if (labelOffset === void 0) {
    labelOffset = DEFAULT_LABEL_OFFSET;
  }

  if (orientation === 'top') {
    return {
      textAnchor: 'middle',
      dy: -Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'right') {
    return {
      textAnchor: 'start',
      dy: 0,
      dx: Math.abs(labelOffset)
    };
  } else if (orientation === 'bottom') {
    return {
      textAnchor: 'middle',
      dy: Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'left') {
    return {
      textAnchor: 'end',
      dy: 0,
      dx: -Math.abs(labelOffset)
    };
  }

  return orientation;
}

/***/ }),

/***/ "./src/lib/components/spark/Sparkline.react.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/spark/Sparkline.react.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/sparkline/lib/series/BarSeries */ "./node_modules/@data-ui/sparkline/lib/series/BarSeries.js");
/* harmony import */ var _data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4__);



 // open-color colors


/**
 * @param props
 * @returns {*}
 * @constructor
 */

var Sparkline = function Sparkline(props) {
  var margin = props.margin,
      width = props.width,
      height = props.height,
      ariaLabel = props.ariaLabel,
      data = props.data,
      lineSeries = props.lineSeries,
      barSeries = props.barSeries; // const data = Array(25).fill().map(Math.random);

  var children = [];

  if (lineSeries) {
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__["LineSeries"], lineSeries));
  }

  if (barSeries) {
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4___default.a, barSeries));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__["Sparkline"], {
    ariaLabel: ariaLabel,
    margin: margin,
    width: width,
    height: height,
    data: data,
    valueAccessor: function valueAccessor(datum) {
      return datum;
    }
  }, children);
};

Sparkline.defaultProps = {
  margin: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  width: 100,
  height: 20,
  ariaLabel: ""
};
Sparkline.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  'id': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  'key': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data to display in the sparkline
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Width of the svg including left/right margin
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * chart margin, leave room for labels! note 0 may clip LineSeries and PointSeries. a partial { top/right/bottom/ left } object is filled with the other default values
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),

  /**
   * Optionally set the maximum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Optionally set the minimum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Properties to pass through for a LineSeries object
   */
  lineSeries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    curve: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['linear', 'cardinal', 'basis', 'monotoneX']),
    showArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    showLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['butt', 'square', 'round', 'inherit']),
    strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),

  /**
   * Properties to pass through for a BarSeries object
   */
  barSeries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sparkline);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL25vZGVfbW9kdWxlcy9AZGF0YS11aS9zcGFya2xpbmUvbGliL2Fubm90YXRpb24vTGFiZWwuanMiLCJ3ZWJwYWNrOi8vZGFzaF9ibHVlcHJpbnQvLi9ub2RlX21vZHVsZXMvQGRhdGEtdWkvc3BhcmtsaW5lL2xpYi9zZXJpZXMvQmFyU2VyaWVzLmpzIiwid2VicGFjazovL2Rhc2hfYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL0BkYXRhLXVpL3NwYXJrbGluZS9saWIvdXRpbHMvY2FsbE9yVmFsdWUuanMiLCJ3ZWJwYWNrOi8vZGFzaF9ibHVlcHJpbnQvLi9ub2RlX21vZHVsZXMvQGRhdGEtdWkvc3BhcmtsaW5lL2xpYi91dGlscy9wb3NpdGlvbkxhYmVsLmpzIiwid2VicGFjazovL2Rhc2hfYmx1ZXByaW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL3NwYXJrL1NwYXJrbGluZS5yZWFjdC5qcyJdLCJuYW1lcyI6WyJTcGFya2xpbmUiLCJwcm9wcyIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiYXJpYUxhYmVsIiwiZGF0YSIsImxpbmVTZXJpZXMiLCJiYXJTZXJpZXMiLCJjaGlsZHJlbiIsInB1c2giLCJkYXR1bSIsImRlZmF1bHRQcm9wcyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJudW1iZXIiLCJzaGFwZSIsIm1heCIsIm1pbiIsImZpbGwiLCJmaWxsT3BhY2l0eSIsImN1cnZlIiwib25lT2YiLCJzaG93QXJlYSIsImJvb2wiLCJzaG93TGluZSIsInN0cm9rZSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7O0FBRUEsd0NBQXdDLG1CQUFPLENBQUMsc0RBQVk7O0FBRTVELG9DQUFvQyxtQkFBTyxDQUFD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dXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSBleHBvcnRzLnByb3BUeXBlcyA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF90aGVtZSA9IHJlcXVpcmUoXCJAZGF0YS11aS90aGVtZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBhbmNob3I6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbJ3N0YXJ0JywgJ21pZGRsZScsICdlbmQnXSksXG4gIGRvbWluYW50QmFzZWxpbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGR4OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBkeTogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgZmlsbDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuICBwYWludE9yZGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBzdHJva2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIHN0cm9rZVdpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICB4OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICB5OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG59O1xuZXhwb3J0cy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhbmNob3I6ICdtaWRkbGUnLFxuICBkb21pbmFudEJhc2VsaW5lOiAnbWlkZGxlJyxcbiAgZHg6IDAsXG4gIGR5OiAwLFxuICBmaWxsOiBfdGhlbWUuY29sb3IudGV4dCxcbiAgbGFiZWw6IG51bGwsXG4gIHBhaW50T3JkZXI6ICdzdHJva2UnLFxuICBzdHJva2U6ICcjZmZmJyxcbiAgc3Ryb2tlV2lkdGg6IDIsXG4gIHg6IDAsXG4gIHk6IDBcbn07XG5leHBvcnRzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZnVuY3Rpb24gTGFiZWwoX3JlZikge1xuICB2YXIgYW5jaG9yID0gX3JlZi5hbmNob3IsXG4gICAgICBkb21pbmFudEJhc2VsaW5lID0gX3JlZi5kb21pbmFudEJhc2VsaW5lLFxuICAgICAgZHggPSBfcmVmLmR4LFxuICAgICAgZHkgPSBfcmVmLmR5LFxuICAgICAgZmlsbCA9IF9yZWYuZmlsbCxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIHBhaW50T3JkZXIgPSBfcmVmLnBhaW50T3JkZXIsXG4gICAgICBzdHJva2UgPSBfcmVmLnN0cm9rZSxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFuY2hvclwiLCBcImRvbWluYW50QmFzZWxpbmVcIiwgXCJkeFwiLCBcImR5XCIsIFwiZmlsbFwiLCBcImxhYmVsXCIsIFwicGFpbnRPcmRlclwiLCBcInN0cm9rZVwiLCBcInN0cm9rZVdpZHRoXCIsIFwieFwiLCBcInlcIl0pO1xuXG4gIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGV4dFwiLCBfZXh0ZW5kcyh7XG4gICAgeDogeCxcbiAgICB5OiB5LFxuICAgIGR4OiBkeCxcbiAgICBkeTogZHksXG4gICAgZmlsbDogZmlsbCxcbiAgICBkb21pbmFudEJhc2VsaW5lOiBkb21pbmFudEJhc2VsaW5lLFxuICAgIHBhaW50T3JkZXI6IHBhaW50T3JkZXIsXG4gICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHRleHRBbmNob3I6IGFuY2hvclxuICB9LCByZXN0KSwgbGFiZWwpO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5MYWJlbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5MYWJlbC5kaXNwbGF5TmFtZSA9ICdMYWJlbCc7XG52YXIgX2RlZmF1bHQgPSBMYWJlbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSBleHBvcnRzLnByb3BUeXBlcyA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkB2eC9ncm91cC9idWlsZC9Hcm91cFwiKSk7XG5cbnZhciBfQmFyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9CYXJcIikpO1xuXG52YXIgX3RoZW1lID0gcmVxdWlyZShcIkBkYXRhLXVpL3RoZW1lXCIpO1xuXG52YXIgX0xhYmVsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vYW5ub3RhdGlvbi9MYWJlbFwiKSk7XG5cbnZhciBfY2FsbE9yVmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9jYWxsT3JWYWx1ZVwiKSk7XG5cbnZhciBfcG9zaXRpb25MYWJlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL3Bvc2l0aW9uTGFiZWxcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgZmlsbDogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmddKSxcbiAgZmlsbE9wYWNpdHk6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXSksXG4gIExhYmVsQ29tcG9uZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudCxcbiAgbGFiZWxPZmZzZXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSldKSxcbiAgb25Nb3VzZU1vdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICByZW5kZXJMYWJlbDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIC8vICh2YWwsIGkpID0+IG5vZGVcbiAgc3Ryb2tlOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ10pLFxuICBzdHJva2VXaWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJdKSxcbiAgLy8gYWxsIGxpa2VseSBwYXNzZWQgYnkgdGhlIHBhcmVudCBjaGFydFxuICBkYXRhOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XSkpLFxuICBnZXRYOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgZ2V0WTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIHhTY2FsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIHlTY2FsZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn07XG5leHBvcnRzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IFtdLFxuICBmaWxsOiBfdGhlbWUuY29sb3IuZGVmYXVsdCxcbiAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgZ2V0WDogbnVsbCxcbiAgZ2V0WTogbnVsbCxcbiAgbGFiZWxPZmZzZXQ6IDgsXG4gIExhYmVsQ29tcG9uZW50OiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9MYWJlbC5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgX3RoZW1lLnN2Z0xhYmVsLmJhc2VUaWNrTGFiZWwsIHtcbiAgICBzdHJva2U6IFwiI2ZmZlwiXG4gIH0pKSxcbiAgbGFiZWxQb3NpdGlvbjogJ3RvcCcsXG4gIG9uTW91c2VNb3ZlOiBudWxsLFxuICBvbk1vdXNlTGVhdmU6IG51bGwsXG4gIHJlbmRlckxhYmVsOiBudWxsLFxuICBzdHJva2U6ICcjZmZmJyxcbiAgc3Ryb2tlV2lkdGg6IDEsXG4gIHhTY2FsZTogbnVsbCxcbiAgeVNjYWxlOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBCYXJTZXJpZXMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJhclNlcmllcywgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJhclNlcmllcygpIHtcbiAgICByZXR1cm4gX1JlYWN0JFB1cmVDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJhclNlcmllcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkYXRhID0gX3RoaXMkcHJvcHMuZGF0YSxcbiAgICAgICAgZ2V0WCA9IF90aGlzJHByb3BzLmdldFgsXG4gICAgICAgIGdldFkgPSBfdGhpcyRwcm9wcy5nZXRZLFxuICAgICAgICBmaWxsID0gX3RoaXMkcHJvcHMuZmlsbCxcbiAgICAgICAgZmlsbE9wYWNpdHkgPSBfdGhpcyRwcm9wcy5maWxsT3BhY2l0eSxcbiAgICAgICAgbGFiZWxPZmZzZXQgPSBfdGhpcyRwcm9wcy5sYWJlbE9mZnNldCxcbiAgICAgICAgTGFiZWxDb21wb25lbnQgPSBfdGhpcyRwcm9wcy5MYWJlbENvbXBvbmVudCxcbiAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF90aGlzJHByb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgIG9uTW91c2VNb3ZlID0gX3RoaXMkcHJvcHMub25Nb3VzZU1vdmUsXG4gICAgICAgIG9uTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgcmVuZGVyTGFiZWwgPSBfdGhpcyRwcm9wcy5yZW5kZXJMYWJlbCxcbiAgICAgICAgc3Ryb2tlID0gX3RoaXMkcHJvcHMuc3Ryb2tlLFxuICAgICAgICBzdHJva2VXaWR0aCA9IF90aGlzJHByb3BzLnN0cm9rZVdpZHRoLFxuICAgICAgICB4U2NhbGUgPSBfdGhpcyRwcm9wcy54U2NhbGUsXG4gICAgICAgIHlTY2FsZSA9IF90aGlzJHByb3BzLnlTY2FsZTtcbiAgICBpZiAoIXhTY2FsZSB8fCAheVNjYWxlIHx8ICFnZXRYIHx8ICFnZXRZIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGJhcldpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5tYXguYXBwbHkoTWF0aCwgeFNjYWxlLnJhbmdlKCkpIC8gZGF0YS5sZW5ndGggLSAxKTtcbiAgICB2YXIgbWF4QmFySGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgeVNjYWxlLnJhbmdlKCkpO1xuICAgIHZhciBsYWJlbHMgPSBbXTsgLy8gcmVuZGVyIGxhYmVscyBhcyB0b3AtbW9zdCBsYXllclxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0dyb3VwLmRlZmF1bHQsIG51bGwsIGRhdGEubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICB2YXIgeVZhbCA9IGdldFkoZCk7XG4gICAgICB2YXIgeCA9IHhTY2FsZShnZXRYKGQpKTtcbiAgICAgIHZhciB5ID0geVNjYWxlKHlWYWwpO1xuICAgICAgdmFyIGtleSA9IFwiYmFyLVwiICsgeCArIFwiLVwiICsgeSArIFwiLVwiICsgaTtcbiAgICAgIHZhciBsYWJlbCA9IHJlbmRlckxhYmVsICYmIHJlbmRlckxhYmVsKHlWYWwsIGkpO1xuICAgICAgdmFyIGZpbGxWYWx1ZSA9ICgwLCBfY2FsbE9yVmFsdWUuZGVmYXVsdCkoZC5maWxsIHx8IGZpbGwsIHlWYWwsIGkpO1xuXG4gICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgbGFiZWxzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB4OiB4LFxuICAgICAgICAgIHk6IHlcbiAgICAgICAgfSwgKDAsIF9wb3NpdGlvbkxhYmVsLmRlZmF1bHQpKCgwLCBfY2FsbE9yVmFsdWUuZGVmYXVsdCkobGFiZWxQb3NpdGlvbiwgeVZhbCwgaSksIGxhYmVsT2Zmc2V0KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQmFyLmRlZmF1bHQsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHg6IHggLSBiYXJXaWR0aCAvIDIsXG4gICAgICAgIHk6IHksXG4gICAgICAgIHdpZHRoOiBiYXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBtYXhCYXJIZWlnaHQgLSB5LFxuICAgICAgICBmaWxsOiBmaWxsVmFsdWUsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAoMCwgX2NhbGxPclZhbHVlLmRlZmF1bHQpKHR5cGVvZiBkLmZpbGxPcGFjaXR5ID09PSAndW5kZWZpbmVkJyA/IGZpbGxPcGFjaXR5IDogZC5maWxsT3BhY2l0eSwgeVZhbCwgaSksXG4gICAgICAgIHN0cm9rZTogKDAsIF9jYWxsT3JWYWx1ZS5kZWZhdWx0KShkLnN0cm9rZSB8fCBzdHJva2UsIHlWYWwsIGkpLFxuICAgICAgICBzdHJva2VXaWR0aDogKDAsIF9jYWxsT3JWYWx1ZS5kZWZhdWx0KShkLnN0cm9rZVdpZHRoIHx8IHN0cm9rZVdpZHRoLCB5VmFsLCBpKSxcbiAgICAgICAgb25Nb3VzZU1vdmU6IG9uTW91c2VNb3ZlICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZSh7XG4gICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgZGF0dW06IGQsXG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBjb2xvcjogZmlsbFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uTW91c2VMZWF2ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSksIGxhYmVscy5tYXAoZnVuY3Rpb24gKGxhYmVsUHJvcHMpIHtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoTGFiZWxDb21wb25lbnQsIGxhYmVsUHJvcHMpO1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQmFyU2VyaWVzO1xufShfcmVhY3QuZGVmYXVsdC5QdXJlQ29tcG9uZW50KTtcblxuQmFyU2VyaWVzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkJhclNlcmllcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5CYXJTZXJpZXMuZGlzcGxheU5hbWUgPSAnQmFyU2VyaWVzJztcbnZhciBfZGVmYXVsdCA9IEJhclNlcmllcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsbE9yVmFsdWU7XG5cbmZ1bmN0aW9uIGNhbGxPclZhbHVlKG1heWJlRm4pIHtcbiAgaWYgKHR5cGVvZiBtYXliZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heWJlRm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiBtYXliZUZuO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb25MYWJlbDtcbnZhciBERUZBVUxUX0xBQkVMX09GRlNFVCA9IDg7XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTGFiZWwob3JpZW50YXRpb24sIGxhYmVsT2Zmc2V0KSB7XG4gIGlmIChsYWJlbE9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgbGFiZWxPZmZzZXQgPSBERUZBVUxUX0xBQkVMX09GRlNFVDtcbiAgfVxuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXG4gICAgICBkeTogLU1hdGguYWJzKGxhYmVsT2Zmc2V0KSxcbiAgICAgIGR4OiAwXG4gICAgfTtcbiAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0QW5jaG9yOiAnc3RhcnQnLFxuICAgICAgZHk6IDAsXG4gICAgICBkeDogTWF0aC5hYnMobGFiZWxPZmZzZXQpXG4gICAgfTtcbiAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXG4gICAgICBkeTogTWF0aC5hYnMobGFiZWxPZmZzZXQpLFxuICAgICAgZHg6IDBcbiAgICB9O1xuICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEFuY2hvcjogJ2VuZCcsXG4gICAgICBkeTogMCxcbiAgICAgIGR4OiAtTWF0aC5hYnMobGFiZWxPZmZzZXQpXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U3BhcmtsaW5lIGFzIERVU3BhcmtsaW5lLFxuICAgIExpbmVTZXJpZXMsXG4gICAgSG9yaXpvbnRhbFJlZmVyZW5jZUxpbmUsXG4gICAgQmFuZExpbmUsXG4gICAgUGF0dGVybkxpbmVzLFxuICAgIFBvaW50U2VyaWVzfSBmcm9tICdAZGF0YS11aS9zcGFya2xpbmUnO1xuaW1wb3J0IHsgYWxsQ29sb3JzIH0gZnJvbSAnQGRhdGEtdWkvdGhlbWUnOyAvLyBvcGVuLWNvbG9yIGNvbG9yc1xuaW1wb3J0IEJhclNlcmllcyBmcm9tICdAZGF0YS11aS9zcGFya2xpbmUvbGliL3Nlcmllcy9CYXJTZXJpZXMnO1xuXG5cbi8qKlxuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmNvbnN0IFNwYXJrbGluZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bWFyZ2luLCB3aWR0aCwgaGVpZ2h0LCBhcmlhTGFiZWwsIGRhdGEsIGxpbmVTZXJpZXMsIGJhclNlcmllc30gPSBwcm9wcztcbiAgICAvLyBjb25zdCBkYXRhID0gQXJyYXkoMjUpLmZpbGwoKS5tYXAoTWF0aC5yYW5kb20pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgaWYgKGxpbmVTZXJpZXMpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goPExpbmVTZXJpZXMgey4uLmxpbmVTZXJpZXN9IC8+KVxuICAgIH1cbiAgICBpZiAoYmFyU2VyaWVzKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKDxCYXJTZXJpZXMgey4uLmJhclNlcmllc30gLz4pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxEVVNwYXJrbGluZVxuICAgICAgYXJpYUxhYmVsPXthcmlhTGFiZWx9XG4gICAgICBtYXJnaW49e21hcmdpbn1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIHZhbHVlQWNjZXNzb3I9e2RhdHVtID0+IGRhdHVtfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RVU3BhcmtsaW5lPlxuICAgIClcbn07XG5cblNwYXJrbGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG1hcmdpbjogeyB0b3A6IDE2LCByaWdodDogMTYsIGJvdHRvbTogMTYsIGxlZnQ6IDE2IH0sXG4gIHdpZHRoOiAxMDAsXG4gIGhlaWdodDogMjAsXG4gIGFyaWFMYWJlbDogXCJcIlxufTtcblxuU3BhcmtsaW5lLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhpcyBjb21wb25lbnQsIHVzZWQgdG8gaWRlbnRpZnkgZGFzaCBjb21wb25lbnRzXG4gICAgICogaW4gY2FsbGJhY2tzLiBUaGUgSUQgbmVlZHMgdG8gYmUgdW5pcXVlIGFjcm9zcyBhbGwgb2YgdGhlXG4gICAgICogY29tcG9uZW50cyBpbiBhbiBhcHAuXG4gICAgICovXG4gICAgJ2lkJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb21wb25lbnQsIHVzZWQgdG8gaW1wcm92ZVxuICAgICAqIHBlcmZvcm1hbmNlIGJ5IFJlYWN0LmpzIHdoaWxlIHJlbmRlcmluZyBjb21wb25lbnRzXG4gICAgICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9saXN0cy1hbmQta2V5cy5odG1sIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICAna2V5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgdG8gZGlzcGxheSBpbiB0aGUgc3BhcmtsaW5lXG4gICAgICovXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgc3ZnIGluY2x1ZGluZyBsZWZ0L3JpZ2h0IG1hcmdpblxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogY2hhcnQgbWFyZ2luLCBsZWF2ZSByb29tIGZvciBsYWJlbHMhIG5vdGUgMCBtYXkgY2xpcCBMaW5lU2VyaWVzIGFuZCBQb2ludFNlcmllcy4gYSBwYXJ0aWFsIHsgdG9wL3JpZ2h0L2JvdHRvbS8gbGVmdCB9IG9iamVjdCBpcyBmaWxsZWQgd2l0aCB0aGUgb3RoZXIgZGVmYXVsdCB2YWx1ZXNcbiAgICAgKi9cbiAgICBtYXJnaW46IFByb3BUeXBlcy5zaGFwZSh7IHRvcDogUHJvcFR5cGVzLm51bWJlciwgcmlnaHQ6IFByb3BUeXBlcy5udW1iZXIsIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlciwgbGVmdDogUHJvcFR5cGVzLm51bWJlciB9KSxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsbHkgc2V0IHRoZSBtYXhpbXVtIHktdmFsdWUgb2YgdGhlIGNoYXJ0IChlLmcuLCB0byBjb29yZGluYXRlIGF4ZXMgYWNyb3NzIG11bHRpcGxlIFNwYXJrbGluZXMpXG4gICAgICovXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWxseSBzZXQgdGhlIG1pbmltdW0geS12YWx1ZSBvZiB0aGUgY2hhcnQgKGUuZy4sIHRvIGNvb3JkaW5hdGUgYXhlcyBhY3Jvc3MgbXVsdGlwbGUgU3BhcmtsaW5lcylcbiAgICAgKi9cbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHRvIHBhc3MgdGhyb3VnaCBmb3IgYSBMaW5lU2VyaWVzIG9iamVjdFxuICAgICAqL1xuICAgIGxpbmVTZXJpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLCBcbiAgICAgIGZpbGxPcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLCBcbiAgICAgIGN1cnZlOiBQcm9wVHlwZXMub25lT2YoWydsaW5lYXInLCAnY2FyZGluYWwnLCAnYmFzaXMnLCAnbW9ub3RvbmVYJ10pLFxuICAgICAgc2hvd0FyZWE6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2hvd0xpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc3Ryb2tlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc3Ryb2tlTGluZWNhcDogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dCcsICdzcXVhcmUnLCAncm91bmQnLCAnaW5oZXJpdCddKSxcbiAgICAgIHN0cm9rZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHRvIHBhc3MgdGhyb3VnaCBmb3IgYSBCYXJTZXJpZXMgb2JqZWN0XG4gICAgICovXG4gICAgYmFyU2VyaWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZmlsbDogUHJvcFR5cGVzLnN0cmluZywgXG4gICAgICBmaWxsT3BhY2l0eTogUHJvcFR5cGVzLm51bWJlciwgXG4gICAgICBzdHJva2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzdHJva2VXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwYXJrbGluZTsiXSwic291cmNlUm9vdCI6IiJ9