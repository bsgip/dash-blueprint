webpackHotUpdatedash_blueprint("main",{

/***/ "./src/lib/components/RangeSelector.react.js":
/*!***************************************************!*\
  !*** ./src/lib/components/RangeSelector.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Hooks_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Hooks.jsx */ "./src/lib/utils/Hooks.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../css/RangeSelector.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function groupData(data, xAttr, yAttr) {
  data.sort(function (a, b) {
    return a[xAttr] - b[xAttr];
  });
  var grouped = {};
  var increment;

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var val = _step.value;
      console.log(val);
      increment = yAttr ? val[yAttr] : 1;
      grouped[val[xAttr]] = grouped[val[xAttr]] ? grouped[val[xAttr]] + increment : increment;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  console.log(grouped);
  var groupedData = Object.entries(grouped).map(function (_ref) {
    var _ref3;

    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    console.log(k);
    return _ref3 = {}, _defineProperty(_ref3, xAttr, k), _defineProperty(_ref3, "max", v), _defineProperty(_ref3, "min", 0), _ref3;
  });
  return groupedData;
}
/**
 * RangeSelector component using d3 and hooks
 */


var RangeSelector = function RangeSelector(_ref4) {
  var id = _ref4.id,
      setProps = _ref4.setProps,
      data = _ref4.data,
      selected = _ref4.selected,
      margin = _ref4.margin,
      isDate = _ref4.isDate,
      yLines = _ref4.yLines,
      selectSingle = _ref4.selectSingle,
      group = _ref4.group;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var dimensions = Object(_utils_Hooks_jsx__WEBPACK_IMPORTED_MODULE_2__["useResizeObserver"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!data || !svgRef.current || !dimensions) return;
    var xAttr = 'x';
    var xScale = null;
    var axisExtra = data[1][xAttr] - data[0][xAttr];

    if (isDate) {
      data.map(function (d) {
        return d.date = Date.parse(d.x);
      });
      console.log(data);
      xAttr = 'date';
      axisExtra = data[1][xAttr] - data[0][xAttr];
      xScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleTime"]().domain([d3__WEBPACK_IMPORTED_MODULE_4__["min"](data, function (d) {
        return d[xAttr];
      }), d3__WEBPACK_IMPORTED_MODULE_4__["max"](data, function (d) {
        return d[xAttr];
      }) + axisExtra]).nice().range([margin.left, dimensions.width - margin.right]);
    } else {
      xScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([d3__WEBPACK_IMPORTED_MODULE_4__["min"](data, function (d) {
        return d[xAttr];
      }), d3__WEBPACK_IMPORTED_MODULE_4__["max"](data, function (d) {
        return d[xAttr];
      }) + axisExtra]).nice().range([margin.left, dimensions.width - margin.right]);
    }

    var groupedData = data;

    if (group) {
      groupedData = groupData(data, xAttr);
      axisExtra = groupedData[1][xAttr] - groupedData[0][xAttr];
    }

    var svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"](svgRef.current);
    var pointsG = svg.select("g.pointsLayer"); // Chart properties

    var transitionDuration = 1000;
    var minRadius = 1,
        maxRadius = 50; // Scales

    var yDomainMin = d3__WEBPACK_IMPORTED_MODULE_4__["min"](groupedData, function (d) {
      return d.min;
    });
    var yDomainMax = d3__WEBPACK_IMPORTED_MODULE_4__["max"](groupedData, function (d) {
      return d.max;
    });

    if (yLines.length) {
      yDomainMin = Math.min(yDomainMin, d3__WEBPACK_IMPORTED_MODULE_4__["min"](yLines));
      yDomainMax = Math.max(yDomainMin, d3__WEBPACK_IMPORTED_MODULE_4__["max"](yLines));
    }

    var barWidth = xScale(groupedData[1][xAttr]) - xScale(groupedData[0][xAttr]);
    var yScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([yDomainMin, yDomainMax]).range([dimensions.height - margin.bottom, margin.top]);
    svg.selectAll("g.x-axis").remove();
    svg.selectAll("g.y-axis").remove();
    svg.append("g") // .enter()
    .attr("class", "x-axis").attr("transform", "translate(0," + (dimensions.height - margin.bottom) + ")").call(d3__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](xScale));
    svg.append("g").attr("class", "y-axis").attr("transform", "translate(" + margin.left + ",0)").call(d3__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale).tickValues(yLines));
    var bars = pointsG.selectAll("rect").data(groupedData, function (d) {
      return d.id;
    });
    bars.exit().remove();
    bars.transition().duration(transitionDuration).attr("x", function (d) {
      return xScale(d[xAttr]);
    }).attr("y", function (d) {
      return yScale(d.max);
    }).attr("width", barWidth).attr("height", function (d) {
      return yScale(d.min) - yScale(d.max);
    });
    bars.enter().append("rect").attr("class", "bar").attr("width", barWidth).attr("x", function (d) {
      return xScale(d[xAttr]);
    }).attr("y", function (d) {
      return yScale(d.max);
    }).attr("height", function (d) {
      return yScale(d.min) - yScale(d.max);
    }).attr("fill", "#424853").attr("opacity", 0.9);
    var brush = d3__WEBPACK_IMPORTED_MODULE_4__["brushX"]().extent([[margin.left, margin.top], [dimensions.width - margin.right, dimensions.height - margin.bottom]]).on("start brush end", brushed);
    svg.selectAll("g.selector").remove();
    svg.append("g").attr("class", "selector").call(brush).call(brush.move, [groupedData[0][xAttr], groupedData[1][xAttr]].map(xScale));

    if (selectSingle) {
      svg.select("g.selector").call(function (g) {
        return g.select(".overlay").datum({
          type: "selection"
        }).on("mousedown touchstart", beforebrushstarted);
      }); // Hide the resize handles

      svg.select("g.selector").selectAll(".handle").remove();
    }

    function beforebrushstarted(event) {
      var dx = xScale(groupedData[1][xAttr]) - xScale(groupedData[0][xAttr]); // Use a fixed width when recentering.

      var _d3$pointers = d3__WEBPACK_IMPORTED_MODULE_4__["pointers"](event),
          _d3$pointers2 = _slicedToArray(_d3$pointers, 1),
          _d3$pointers2$ = _slicedToArray(_d3$pointers2[0], 1),
          cx = _d3$pointers2$[0];

      var x0 = cx - dx / 2,
          x1 = cx + dx / 2;

      var _xScale$range = xScale.range(),
          _xScale$range2 = _slicedToArray(_xScale$range, 2),
          X0 = _xScale$range2[0],
          X1 = _xScale$range2[1];

      d3__WEBPACK_IMPORTED_MODULE_4__["select"](this.parentNode).call(brush.move, x1 > X1 ? [X1 - dx, X1] : x0 < X0 ? [X0, X0 + dx] : [x0, x1]);
    }

    function brushed(event) {
      var selection = event.selection;

      if (selection === null) {
        points.attr("stroke", null);
      } else {
        var _selection$map = selection.map(function (d) {
          return xScale.invert(d - barWidth / 2);
        }),
            _selection$map2 = _slicedToArray(_selection$map, 2),
            x0 = _selection$map2[0],
            x1 = _selection$map2[1];

        var x2 = x1;

        if (selectSingle && isDate) {
          x2 = new Date(x0.getTime() + axisExtra);
        } else if (selectSingle) {
          x2 = x0 + axisExtra;
        }

        var _selected = pointsG.selectAll("rect").filter(function (d) {
          return x0 <= d[xAttr] && d[xAttr] < x2;
        });

        var selectedX = _selected.data().map(function (d) {
          return d.x;
        });

        setProps({
          selected: selectedX
        });
        pointsG.selectAll("rect").classed("selected", false);

        _selected.classed("selected", true);
      }
    }
  }, [data, dimensions]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    ref: wrapperRef,
    style: {
      width: "100%",
      height: "100%",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    ref: svgRef,
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "pointsLayer"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RangeSelector);
RangeSelector.defaultProps = {
  margin: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 40
  },
  isDate: true,
  yLines: [],
  selectSingle: true,
  group: false
};
RangeSelector.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** Chart width */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Chart height */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Data */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /** Selected datum (use in point click callbacks) */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Margin to use around chart
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Whether to cast the data x values as a date
   */
  isDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * markings to add on y-axis
   */
  yLines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Flag whether to allow only selection of a single bar in the chart
   */
  selectSingle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Flag whether data should be aggregated and presented as a count.
   * Currently not implemented
   */
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9SYW5nZVNlbGVjdG9yLnJlYWN0LmpzIl0sIm5hbWVzIjpbImdyb3VwRGF0YSIsImRhdGEiLCJ4QXR0ciIsInlBdHRyIiwic29ydCIsImEiLCJiIiwiZ3JvdXBlZCIsImluY3JlbWVudCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJncm91cGVkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrIiwidiIsIlJhbmdlU2VsZWN0b3IiLCJpZCIsInNldFByb3BzIiwic2VsZWN0ZWQiLCJtYXJnaW4iLCJpc0RhdGUiLCJ5TGluZXMiLCJzZWxlY3RTaW5nbGUiLCJncm91cCIsInN2Z1JlZiIsInVzZVJlZiIsIndyYXBwZXJSZWYiLCJkaW1lbnNpb25zIiwidXNlUmVzaXplT2JzZXJ2ZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwieFNjYWxlIiwiYXhpc0V4dHJhIiwiZCIsImRhdGUiLCJEYXRlIiwicGFyc2UiLCJ4IiwiZDMiLCJkb21haW4iLCJuaWNlIiwicmFuZ2UiLCJsZWZ0Iiwid2lkdGgiLCJyaWdodCIsInN2ZyIsInBvaW50c0ciLCJzZWxlY3QiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJ5RG9tYWluTWluIiwibWluIiwieURvbWFpbk1heCIsIm1heCIsImxlbmd0aCIsIk1hdGgiLCJiYXJXaWR0aCIsInlTY2FsZSIsImhlaWdodCIsImJvdHRvbSIsInRvcCIsInNlbGVjdEFsbCIsInJlbW92ZSIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwidGlja1ZhbHVlcyIsImJhcnMiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZW50ZXIiLCJicnVzaCIsImV4dGVudCIsIm9uIiwiYnJ1c2hlZCIsIm1vdmUiLCJnIiwiZGF0dW0iLCJ0eXBlIiwiYmVmb3JlYnJ1c2hzdGFydGVkIiwiZXZlbnQiLCJkeCIsImN4IiwieDAiLCJ4MSIsIlgwIiwiWDEiLCJwYXJlbnROb2RlIiwic2VsZWN0aW9uIiwicG9pbnRzIiwiaW52ZXJ0IiwieDIiLCJnZXRUaW1lIiwiZmlsdGVyIiwic2VsZWN0ZWRYIiwiY2xhc3NlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUNuQ0YsTUFBSSxDQUFDRyxJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDSCxLQUFELENBQUQsR0FBV0ksQ0FBQyxDQUFDSixLQUFELENBQXRCO0FBQUEsR0FBVjtBQUNBLE1BQU1LLE9BQU8sR0FBRyxFQUFoQjtBQUVBLE1BQUlDLFNBQUo7O0FBSm1DLDZDQUtqQlAsSUFMaUI7QUFBQTs7QUFBQTtBQUtuQyx3REFBd0I7QUFBQSxVQUFiUSxHQUFhO0FBQ3RCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRCxlQUFTLEdBQUdMLEtBQUssR0FBR00sR0FBRyxDQUFDTixLQUFELENBQU4sR0FBZ0IsQ0FBakM7QUFDQUksYUFBTyxDQUFDRSxHQUFHLENBQUNQLEtBQUQsQ0FBSixDQUFQLEdBQXNCSyxPQUFPLENBQUNFLEdBQUcsQ0FBQ1AsS0FBRCxDQUFKLENBQVAsR0FBc0JLLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDUCxLQUFELENBQUosQ0FBUCxHQUFzQk0sU0FBNUMsR0FBd0RBLFNBQTlFO0FBQ0Q7QUFUa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVbkNFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0EsTUFBTUssV0FBVyxHQUFHQyxNQUFN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O0FBQ0F6RyxNQUFJLEVBQUVzRyxpREFBUyxDQUFDSSxLQW5CTTs7QUFxQnRCO0FBQ0F0RixVQUFRLEVBQUVrRixpREFBUyxDQUFDSSxLQXRCRTs7QUF3QnRCO0FBQ0o7QUFDQTtBQUNJckYsUUFBTSxFQUFFaUYsaURBQVMsQ0FBQ0ssTUEzQkk7O0FBNkJ0QjtBQUNKO0FBQ0E7QUFDSXJGLFFBQU0sRUFBRWdGLGlEQUFTLENBQUNNLElBaENJOztBQWtDdEI7QUFDSjtBQUNBO0FBQ0lyRixRQUFNLEVBQUUrRSxpREFBUyxDQUFDSSxLQXJDSTs7QUF1Q3RCO0FBQ0o7QUFDQTtBQUNJbEYsY0FBWSxFQUFFOEUsaURBQVMsQ0FBQ00sSUExQ0Y7O0FBNEN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNJbkYsT0FBSyxFQUFFNkUsaURBQVMsQ0FBQ007QUFoREssQ0FBMUIsQyIsImZpbGUiOiI2MDYwOTYyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHVzZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi4vdXRpbHMvSG9va3MuanN4J1xuXG5pbXBvcnQgJy4uLy4uLy4uL2Nzcy9SYW5nZVNlbGVjdG9yLmNzcyc7XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuZnVuY3Rpb24gZ3JvdXBEYXRhKGRhdGEsIHhBdHRyLCB5QXR0cikge1xuICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYVt4QXR0cl0gLSBiW3hBdHRyXSk7XG4gICAgY29uc3QgZ3JvdXBlZCA9IHt9O1xuICBcbiAgICBsZXQgaW5jcmVtZW50O1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICBpbmNyZW1lbnQgPSB5QXR0ciA/IHZhbFt5QXR0cl0gOiAxO1xuICAgICAgZ3JvdXBlZFt2YWxbeEF0dHJdXSA9IGdyb3VwZWRbdmFsW3hBdHRyXV0gPyBncm91cGVkW3ZhbFt4QXR0cl1dICsgaW5jcmVtZW50IDogaW5jcmVtZW50O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhncm91cGVkKTtcbiAgICBjb25zdCBncm91cGVkRGF0YSA9IE9iamVjdC5lbnRyaWVzKGdyb3VwZWQpLm1hcCgoW2ssIHZdKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFt4QXR0cl06IGssXG4gICAgICAgIG1heDogdixcbiAgICAgICAgbWluOiAwXG4gICAgICB9XG4gIFxuICAgIH0pXG4gICAgcmV0dXJuIGdyb3VwZWREYXRhO1xuICB9XG5cblxuLyoqXG4gKiBSYW5nZVNlbGVjdG9yIGNvbXBvbmVudCB1c2luZyBkMyBhbmQgaG9va3NcbiAqL1xuIGNvbnN0IFJhbmdlU2VsZWN0b3IgPSAoe2lkLCBzZXRQcm9wcywgZGF0YSwgc2VsZWN0ZWQsIG1hcmdpbiwgaXNEYXRlLCB5TGluZXMsIHNlbGVjdFNpbmdsZSwgZ3JvdXB9KSA9PiB7XG4gICAgXG4gICAgY29uc3Qgc3ZnUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHVzZVJlc2l6ZU9ic2VydmVyKHdyYXBwZXJSZWYpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgaWYgKCFkYXRhIHx8ICFzdmdSZWYuY3VycmVudCB8fCAhZGltZW5zaW9ucykgcmV0dXJuO1xuICAgICAgbGV0IHhBdHRyID0gJ3gnO1xuICAgICAgbGV0IHhTY2FsZSA9IG51bGw7XG4gICAgICBsZXQgYXhpc0V4dHJhID0gZGF0YVsxXVt4QXR0cl0gLSBkYXRhWzBdW3hBdHRyXTtcbiAgICAgIGlmIChpc0RhdGUpIHtcbiAgICAgICAgZGF0YS5tYXAoZCA9PiBkLmRhdGUgPSBEYXRlLnBhcnNlKGQueCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgeEF0dHIgPSAnZGF0ZSc7XG4gICAgICAgIGF4aXNFeHRyYSA9IGRhdGFbMV1beEF0dHJdIC0gZGF0YVswXVt4QXR0cl1cbiAgICAgICAgeFNjYWxlID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICAuZG9tYWluKFtkMy5taW4oZGF0YSwgZD0+IGRbeEF0dHJdKSwgZDMubWF4KGRhdGEsIGQ9PiBkW3hBdHRyXSkgKyBheGlzRXh0cmFdKVxuICAgICAgICAgIC5uaWNlKClcbiAgICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCBkaW1lbnNpb25zLndpZHRoIC0gbWFyZ2luLnJpZ2h0XSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihbZDMubWluKGRhdGEsIGQ9PiBkW3hBdHRyXSksIGQzLm1heChkYXRhLCBkPT4gZFt4QXR0cl0pICsgYXhpc0V4dHJhXSlcbiAgICAgICAgICAubmljZSgpXG4gICAgICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgZGltZW5zaW9ucy53aWR0aCAtIG1hcmdpbi5yaWdodF0pXG4gICAgICB9XG5cbiAgICAgIGxldCBncm91cGVkRGF0YSA9IGRhdGE7XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgZ3JvdXBlZERhdGEgPSBncm91cERhdGEoZGF0YSwgeEF0dHIpO1xuICAgICAgICBheGlzRXh0cmEgPSBncm91cGVkRGF0YVsxXVt4QXR0cl0gLSBncm91cGVkRGF0YVswXVt4QXR0cl07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcblxuICAgICAgY29uc3QgcG9pbnRzRyA9IHN2Zy5zZWxlY3QoXCJnLnBvaW50c0xheWVyXCIpXG5cbiAgICAgIC8vIENoYXJ0IHByb3BlcnRpZXNcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IDEwMDBcbiAgICAgIGNvbnN0IFttaW5SYWRpdXMsIG1heFJhZGl1c10gPSBbMSwgNTBdXG5cbiAgICAgIC8vIFNjYWxlc1xuICAgICAgbGV0IHlEb21haW5NaW4gPSBkMy5taW4oZ3JvdXBlZERhdGEsIGQgPT4gZC5taW4pO1xuICAgICAgbGV0IHlEb21haW5NYXggPSBkMy5tYXgoZ3JvdXBlZERhdGEsIGQgPT4gZC5tYXgpO1xuICAgICAgaWYgKHlMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgeURvbWFpbk1pbiA9IE1hdGgubWluKHlEb21haW5NaW4sIGQzLm1pbih5TGluZXMpKTtcbiAgICAgICAgeURvbWFpbk1heCA9IE1hdGgubWF4KHlEb21haW5NaW4sIGQzLm1heCh5TGluZXMpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFyV2lkdGggPSB4U2NhbGUoZ3JvdXBlZERhdGFbMV1beEF0dHJdKSAtIHhTY2FsZShncm91cGVkRGF0YVswXVt4QXR0cl0pO1xuICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFt5RG9tYWluTWluLCB5RG9tYWluTWF4XSlcbiAgICAgICAgLnJhbmdlKFtkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi5ib3R0b20sIG1hcmdpbi50b3BdKVxuXG4gICAgICBzdmcuc2VsZWN0QWxsKFwiZy54LWF4aXNcIikucmVtb3ZlKCk7XG4gICAgICBzdmcuc2VsZWN0QWxsKFwiZy55LWF4aXNcIikucmVtb3ZlKCk7XG5cbiAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC8vIC5lbnRlcigpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChkaW1lbnNpb25zLmhlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSk7XG5cbiAgICAgIFxuICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInktYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsMClcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKHlMaW5lcykpO1xuXG4gICAgICBjb25zdCBiYXJzID0gcG9pbnRzRy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEoZ3JvdXBlZERhdGEsIGQgPT4gZC5pZCk7XG4gICAgICBcbiAgICAgIFxuICAgICAgYmFycy5leGl0KClcbiAgICAgICAgLnJlbW92ZSgpXG5cbiAgICAgIGJhcnMgIFxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW3hBdHRyXSkpXG4gICAgICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkLm1heCkpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgYmFyV2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4geVNjYWxlKGQubWluKSAtIHlTY2FsZShkLm1heCkpXG5cbiAgICAgIGJhcnMuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgYmFyV2lkdGgpXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW3hBdHRyXSkpXG4gICAgICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkLm1heCkpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4geVNjYWxlKGQubWluKSAtIHlTY2FsZShkLm1heCkpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiM0MjQ4NTNcIilcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDAuOSk7XG5cbiAgICAgIGNvbnN0IGJydXNoID0gZDMuYnJ1c2hYKClcbiAgICAgICAgLmV4dGVudChbW21hcmdpbi5sZWZ0LCBtYXJnaW4udG9wXSwgW2RpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ucmlnaHQsIGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbV1dKVxuICAgICAgICAub24oXCJzdGFydCBicnVzaCBlbmRcIiwgYnJ1c2hlZCk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKFwiZy5zZWxlY3RvclwiKS5yZW1vdmUoKTtcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VsZWN0b3JcIilcbiAgICAgICAgLmNhbGwoYnJ1c2gpXG4gICAgICAgIC5jYWxsKGJydXNoLm1vdmUsIFtncm91cGVkRGF0YVswXVt4QXR0cl0sIGdyb3VwZWREYXRhWzFdW3hBdHRyXV0ubWFwKHhTY2FsZSkpXG5cbiAgICAgIGlmIChzZWxlY3RTaW5nbGUpIHtcbiAgICAgICAgc3ZnLnNlbGVjdChcImcuc2VsZWN0b3JcIikuY2FsbChnID0+IGcuc2VsZWN0KFwiLm92ZXJsYXlcIilcbiAgICAgICAgICAuZGF0dW0oe3R5cGU6IFwic2VsZWN0aW9uXCJ9KVxuICAgICAgICAgIC5vbihcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsIGJlZm9yZWJydXNoc3RhcnRlZCkpO1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIHJlc2l6ZSBoYW5kbGVzXG4gICAgICAgIHN2Zy5zZWxlY3QoXCJnLnNlbGVjdG9yXCIpLnNlbGVjdEFsbChcIi5oYW5kbGVcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBiZWZvcmVicnVzaHN0YXJ0ZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHggPSB4U2NhbGUoZ3JvdXBlZERhdGFbMV1beEF0dHJdKSAtIHhTY2FsZShncm91cGVkRGF0YVswXVt4QXR0cl0pOyAvLyBVc2UgYSBmaXhlZCB3aWR0aCB3aGVuIHJlY2VudGVyaW5nLlxuICAgICAgICBjb25zdCBbW2N4XV0gPSBkMy5wb2ludGVycyhldmVudCk7XG4gICAgICAgIGNvbnN0IFt4MCwgeDFdID0gW2N4IC0gZHggLyAyLCBjeCArIGR4IC8gMl07XG4gICAgICAgIGNvbnN0IFtYMCwgWDFdID0geFNjYWxlLnJhbmdlKCk7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAuY2FsbChicnVzaC5tb3ZlLCB4MSA+IFgxID8gW1gxIC0gZHgsIFgxXSBcbiAgICAgICAgICAgICAgICA6IHgwIDwgWDAgPyBbWDAsIFgwICsgZHhdIFxuICAgICAgICAgICAgICAgIDogW3gwLCB4MV0pO1xuICAgICAgfVxuICAgIFxuICAgICAgZnVuY3Rpb24gYnJ1c2hlZChldmVudCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZXZlbnQuc2VsZWN0aW9uO1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgcG9pbnRzLmF0dHIoXCJzdHJva2VcIiwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7ICAgIFxuICAgICAgICAgIGNvbnN0IFt4MCwgeDFdID0gc2VsZWN0aW9uLm1hcChkID0+IHhTY2FsZS5pbnZlcnQoZCAtIGJhcldpZHRoIC8gMikpO1xuXG4gICAgICAgICAgbGV0IHgyID0geDE7XG4gICAgICAgICAgaWYgKHNlbGVjdFNpbmdsZSAmJiBpc0RhdGUpIHtcbiAgICAgICAgICAgIHgyID0gbmV3IERhdGUoeDAuZ2V0VGltZSgpICsgYXhpc0V4dHJhKTtcbiAgICAgICAgICB9IFxuICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdFNpbmdsZSkge1xuICAgICAgICAgICAgeDIgPSB4MCArIGF4aXNFeHRyYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwb2ludHNHLnNlbGVjdEFsbChcInJlY3RcIikuZmlsdGVyKGQgPT4geDAgPD0gKGRbeEF0dHJdKSAmJiAoZFt4QXR0cl0pIDwgeDIpO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkWCA9IHNlbGVjdGVkLmRhdGEoKS5tYXAoZCA9PiBkLngpO1xuICAgICAgICAgIHNldFByb3BzKHtzZWxlY3RlZDogc2VsZWN0ZWRYfSk7XG4gICAgICAgICAgcG9pbnRzRy5zZWxlY3RBbGwoXCJyZWN0XCIpLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgc2VsZWN0ZWQuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCBbZGF0YSwgZGltZW5zaW9uc10pXG4gICAgXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD17aWR9IHJlZj17d3JhcHBlclJlZn0gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIn19PlxuICAgICAgICA8c3ZnIHJlZj17c3ZnUmVmfSBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxuICAgICAgICAgIDxnIGNsYXNzTmFtZT17XCJwb2ludHNMYXllclwifSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VTZWxlY3RvcjtcblxuUmFuZ2VTZWxlY3Rvci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1hcmdpbjoge1xuICAgIGxlZnQ6IDIwLFxuICAgIHJpZ2h0OiAyMCxcbiAgICB0b3A6IDIwLFxuICAgIGJvdHRvbTogNDBcbiAgfSxcbiAgaXNEYXRlOiB0cnVlLFxuICB5TGluZXM6IFtdLFxuICBzZWxlY3RTaW5nbGU6IHRydWUsXG4gIGdyb3VwOiBmYWxzZVxufVxuXG5SYW5nZVNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKiBDaGFydCB3aWR0aCAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqIENoYXJ0IGhlaWdodCAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKiBEYXRhICovXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqIFNlbGVjdGVkIGRhdHVtICh1c2UgaW4gcG9pbnQgY2xpY2sgY2FsbGJhY2tzKSAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBNYXJnaW4gdG8gdXNlIGFyb3VuZCBjaGFydFxuICAgICAqL1xuICAgIG1hcmdpbjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gY2FzdCB0aGUgZGF0YSB4IHZhbHVlcyBhcyBhIGRhdGVcbiAgICAgKi9cbiAgICBpc0RhdGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogbWFya2luZ3MgdG8gYWRkIG9uIHktYXhpc1xuICAgICAqL1xuICAgIHlMaW5lczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogRmxhZyB3aGV0aGVyIHRvIGFsbG93IG9ubHkgc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGJhciBpbiB0aGUgY2hhcnRcbiAgICAgKi9cbiAgICBzZWxlY3RTaW5nbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRmxhZyB3aGV0aGVyIGRhdGEgc2hvdWxkIGJlIGFnZ3JlZ2F0ZWQgYW5kIHByZXNlbnRlZCBhcyBhIGNvdW50LlxuICAgICAqIEN1cnJlbnRseSBub3QgaW1wbGVtZW50ZWRcbiAgICAgKi9cbiAgICBncm91cDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==