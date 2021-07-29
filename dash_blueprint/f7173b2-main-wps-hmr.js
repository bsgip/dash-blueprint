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
/* harmony import */ var _css_RangeSelector_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/RangeSelector.css */ "./src/css/RangeSelector.css");
/* harmony import */ var _css_RangeSelector_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_RangeSelector_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function groupData(data, xAttr, yAttr, groupSize) {
  data.sort(function (a, b) {
    return a[xAttr] - b[xAttr];
  });
  var grouped = {};
  var groupDivisor = groupSize || 1;
  var increment, groupValue;

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var val = _step.value;
      console.log(val);
      increment = yAttr ? val[yAttr] : 1;
      groupValue = Math.trunc(val[xAttr] / groupDivisor);
      grouped[groupValue] = grouped[groupValue] ? grouped[groupValue] + increment : increment;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var groupedData = Object.entries(grouped).map(function (_ref) {
    var _ref3;

    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return _ref3 = {}, _defineProperty(_ref3, xAttr, k * groupSize), _defineProperty(_ref3, "max", v), _defineProperty(_ref3, "min", 0), _ref3;
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
      group = _ref4.group,
      groupSize = _ref4.groupSize;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var dimensions = Object(_utils_Hooks_jsx__WEBPACK_IMPORTED_MODULE_2__["useResizeObserver"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(dimensions);
    console.log(margin);

    if (!data || !svgRef.current || !dimensions) {
      console.log('not rendering!');
      return;
    }

    var xAttr = 'x';
    var xScale = null;
    var axisExtra = data[1][xAttr] - data[0][xAttr];
    var groupedData = data;

    if (group) {
      axisExtra = groupSize || 1;
      groupedData = groupData(data, xAttr, null, axisExtra);
      console.log(groupedData);
    }

    if (isDate) {
      groupedData.map(function (d) {
        return d.date = Date.parse(d.x);
      });
      console.log(data);
      xAttr = 'date';
      axisExtra = groupedData[1][xAttr] - groupedData[0][xAttr];
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

    var svg = d3__WEBPACK_IMPORTED_MODULE_4__["select"](svgRef.current);
    var pointsG = svg.select("g.bp3-range-selector"); // Chart properties

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

    var barWidth = xScale(groupedData[0][xAttr] + axisExtra) - xScale(groupedData[0][xAttr]);
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
    bars.enter().append("rect").attr("class", "bp3-bar").attr("width", barWidth).attr("x", function (d) {
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
      var dx = barWidth; // Use a fixed width when recentering.

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
    className: "bp3-range-selector"
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
  group: false,
  groupSize: 1
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
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * For grouped data, the size of the grouping
   */
  groupSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9SYW5nZVNlbGVjdG9yLnJlYWN0LmpzIl0sIm5hbWVzIjpbImdyb3VwRGF0YSIsImRhdGEiLCJ4QXR0ciIsInlBdHRyIiwiZ3JvdXBTaXplIiwic29ydCIsImEiLCJiIiwiZ3JvdXBlZCIsImdyb3VwRGl2aXNvciIsImluY3JlbWVudCIsImdyb3VwVmFsdWUiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsInRydW5jIiwiZ3JvdXBlZERhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiayIsInYiLCJSYW5nZVNlbGVjdG9yIiwiaWQiLCJzZXRQcm9wcyIsInNlbGVjdGVkIiwibWFyZ2luIiwiaXNEYXRlIiwieUxpbmVzIiwic2VsZWN0U2luZ2xlIiwiZ3JvdXAiLCJzdmdSZWYiLCJ1c2VSZWYiLCJ3cmFwcGVyUmVmIiwiZGltZW5zaW9ucyIsInVzZVJlc2l6ZU9ic2VydmVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInhTY2FsZSIsImF4aXNFeHRyYSIsImQiLCJkYXRlIiwiRGF0ZSIsInBhcnNlIiwieCIsImQzIiwiZG9tYWluIiwibmljZSIsInJhbmdlIiwibGVmdCIsIndpZHRoIiwicmlnaHQiLCJzdmciLCJwb2ludHNHIiwic2VsZWN0IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwieURvbWFpbk1pbiIsIm1pbiIsInlEb21haW5NYXgiLCJtYXgiLCJsZW5ndGgiLCJiYXJXaWR0aCIsInlTY2FsZSIsImhlaWdodCIsImJvdHRvbSIsInRvcCIsInNlbGVjdEFsbCIsInJlbW92ZSIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwidGlja1ZhbHVlcyIsImJhcnMiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZW50ZXIiLCJicnVzaCIsImV4dGVudCIsIm9uIiwiYnJ1c2hlZCIsIm1vdmUiLCJnIiwiZGF0dW0iLCJ0eXBlIiwiYmVmb3JlYnJ1c2hzdGFydGVkIiwiZXZlbnQiLCJkeCIsImN4IiwieDAiLCJ4MSIsIlgwIiwiWDEiLCJwYXJlbnROb2RlIiwic2VsZWN0aW9uIiwicG9pbnRzIiwiaW52ZXJ0IiwieDIiLCJnZXRUaW1lIiwiZmlsdGVyIiwic2VsZWN0ZWRYIiwiY2xhc3NlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCQyxLQUF6QixFQUFnQ0MsS0FBaEMsRUFBdUNDLFNBQXZDLEVBQWtEO0FBQzlDSCxNQUFJLENBQUNJLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLENBQUNKLEtBQUQsQ0FBRCxHQUFXSyxDQUFDLENBQUNMLEtBQUQsQ0FBdEI7QUFBQSxHQUFWO0FBQ0EsTUFBTU0sT0FBTyxHQUFHLEVBQWhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHTCxTQUFTLElBQUksQ0FBaEM7QUFFQSxNQUFJTSxTQUFKLEVBQWVDLFVBQWY7O0FBTDhDLDZDQU01QlYsSUFONEI7QUFBQTs7QUFBQTtBQU05Qyx3REFBd0I7QUFBQSxVQUFiVyxHQUFhO0FBQ3RCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRixlQUFTLEdBQUdQLEtBQUssR0FBR1MsR0FBRyxDQUFDVCxLQUFELENBQU4sR0FBZ0IsQ0FBakM7QUFDQVEsZ0JBQVUsR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ1YsS0FBRCxDQUFILEdBQWFPLFlBQXhCLENBQWI7QUFDQUQsYUFBTyxDQUFDRyxVQUFELENBQVAsR0FBc0JILE9BQU8sQ0FBQ0csVUFBRCxDQUFQLEdBQXNC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QyxNQUpROztBQU10QjtBQUNKO0FBQ0E7QUFDQTtBQUNJbkYsVUFBUSxFQUFFa0YsaURBQVMsQ0FBQ0UsSUFWRTs7QUFZdEI7QUFDQTFELE9BQUssRUFBRXdELGlEQUFTLENBQUNHLE1BYks7O0FBZXRCO0FBQ0E1QyxRQUFNLEVBQUV5QyxpREFBUyxDQUFDRyxNQWhCSTs7QUFrQnRCO0FBQ0E3RyxNQUFJLEVBQUUwRyxpREFBUyxDQUFDSSxLQW5CTTs7QUFxQnRCO0FBQ0FyRixVQUFRLEVBQUVpRixpREFBUyxDQUFDSSxLQXRCRTs7QUF3QnRCO0FBQ0o7QUFDQTtBQUNJcEYsUUFBTSxFQUFFZ0YsaURBQVMsQ0FBQ0ssTUEzQkk7O0FBNkJ0QjtBQUNKO0FBQ0E7QUFDSXBGLFFBQU0sRUFBRStFLGlEQUFTLENBQUNNLElBaENJOztBQWtDdEI7QUFDSjtBQUNBO0FBQ0lwRixRQUFNLEVBQUU4RSxpREFBUyxDQUFDSSxLQXJDSTs7QUF1Q3RCO0FBQ0o7QUFDQTtBQUNJakYsY0FBWSxFQUFFNkUsaURBQVMsQ0FBQ00sSUExQ0Y7O0FBNEN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNJbEYsT0FBSyxFQUFFNEUsaURBQVMsQ0FBQ00sSUFoREs7O0FBa0R0QjtBQUNKO0FBQ0E7QUFDSTdHLFdBQVMsRUFBRXVHLGlEQUFTLENBQUNHO0FBckRDLENBQTFCLEMiLCJmaWxlIjoiZjcxNzNiMi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VSZXNpemVPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL0hvb2tzLmpzeCdcblxuaW1wb3J0ICcuLi8uLi9jc3MvUmFuZ2VTZWxlY3Rvci5jc3MnO1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmZ1bmN0aW9uIGdyb3VwRGF0YShkYXRhLCB4QXR0ciwgeUF0dHIsIGdyb3VwU2l6ZSkge1xuICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYVt4QXR0cl0gLSBiW3hBdHRyXSk7XG4gICAgY29uc3QgZ3JvdXBlZCA9IHt9O1xuICAgIGxldCBncm91cERpdmlzb3IgPSBncm91cFNpemUgfHwgMTtcbiAgICBcbiAgICBsZXQgaW5jcmVtZW50LCBncm91cFZhbHVlO1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICBpbmNyZW1lbnQgPSB5QXR0ciA/IHZhbFt5QXR0cl0gOiAxO1xuICAgICAgZ3JvdXBWYWx1ZSA9IE1hdGgudHJ1bmModmFsW3hBdHRyXSAvIGdyb3VwRGl2aXNvcik7XG4gICAgICBncm91cGVkW2dyb3VwVmFsdWVdID0gZ3JvdXBlZFtncm91cFZhbHVlXSA/IGdyb3VwZWRbZ3JvdXBWYWx1ZV0gKyBpbmNyZW1lbnQgOiBpbmNyZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwZWREYXRhID0gT2JqZWN0LmVudHJpZXMoZ3JvdXBlZCkubWFwKChbaywgdl0pID0+IHtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW3hBdHRyXTogayAqIGdyb3VwU2l6ZSxcbiAgICAgICAgbWF4OiB2LFxuICAgICAgICBtaW46IDBcbiAgICAgIH1cbiAgXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBlZERhdGE7XG4gIH1cblxuXG4vKipcbiAqIFJhbmdlU2VsZWN0b3IgY29tcG9uZW50IHVzaW5nIGQzIGFuZCBob29rc1xuICovXG4gY29uc3QgUmFuZ2VTZWxlY3RvciA9ICh7aWQsIHNldFByb3BzLCBkYXRhLCBzZWxlY3RlZCwgbWFyZ2luLCBpc0RhdGUsIHlMaW5lcywgc2VsZWN0U2luZ2xlLCBncm91cCwgZ3JvdXBTaXplfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB1c2VSZXNpemVPYnNlcnZlcih3cmFwcGVyUmVmKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpbWVuc2lvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXJnaW4pO1xuICAgICAgaWYgKCFkYXRhIHx8ICFzdmdSZWYuY3VycmVudCB8fCAhZGltZW5zaW9ucykge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IHJlbmRlcmluZyEnKTsgIFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgeEF0dHIgPSAneCc7XG4gICAgICBsZXQgeFNjYWxlID0gbnVsbDtcbiAgICAgIGxldCBheGlzRXh0cmEgPSBkYXRhWzFdW3hBdHRyXSAtIGRhdGFbMF1beEF0dHJdO1xuXG4gICAgICBsZXQgZ3JvdXBlZERhdGEgPSBkYXRhO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGF4aXNFeHRyYSA9IGdyb3VwU2l6ZSB8fCAxO1xuICAgICAgICBncm91cGVkRGF0YSA9IGdyb3VwRGF0YShkYXRhLCB4QXR0ciwgbnVsbCwgYXhpc0V4dHJhKTtcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXBlZERhdGEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEYXRlKSB7XG4gICAgICAgIGdyb3VwZWREYXRhLm1hcChkID0+IGQuZGF0ZSA9IERhdGUucGFyc2UoZC54KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB4QXR0ciA9ICdkYXRlJztcbiAgICAgICAgYXhpc0V4dHJhID0gZ3JvdXBlZERhdGFbMV1beEF0dHJdIC0gZ3JvdXBlZERhdGFbMF1beEF0dHJdXG4gICAgICAgIHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgLmRvbWFpbihbZDMubWluKGRhdGEsIGQ9PiBkW3hBdHRyXSksIGQzLm1heChkYXRhLCBkPT4gZFt4QXR0cl0pICsgYXhpc0V4dHJhXSlcbiAgICAgICAgICAubmljZSgpXG4gICAgICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgZGltZW5zaW9ucy53aWR0aCAtIG1hcmdpbi5yaWdodF0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oW2QzLm1pbihkYXRhLCBkPT4gZFt4QXR0cl0pLCBkMy5tYXgoZGF0YSwgZD0+IGRbeEF0dHJdKSArIGF4aXNFeHRyYV0pXG4gICAgICAgICAgLm5pY2UoKVxuICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIGRpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ucmlnaHRdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3Qoc3ZnUmVmLmN1cnJlbnQpXG5cbiAgICAgIGNvbnN0IHBvaW50c0cgPSBzdmcuc2VsZWN0KFwiZy5icDMtcmFuZ2Utc2VsZWN0b3JcIilcblxuICAgICAgLy8gQ2hhcnQgcHJvcGVydGllc1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gMTAwMFxuICAgICAgY29uc3QgW21pblJhZGl1cywgbWF4UmFkaXVzXSA9IFsxLCA1MF1cblxuICAgICAgLy8gU2NhbGVzXG4gICAgICBsZXQgeURvbWFpbk1pbiA9IGQzLm1pbihncm91cGVkRGF0YSwgZCA9PiBkLm1pbik7XG4gICAgICBsZXQgeURvbWFpbk1heCA9IGQzLm1heChncm91cGVkRGF0YSwgZCA9PiBkLm1heCk7XG4gICAgICBpZiAoeUxpbmVzLmxlbmd0aCkge1xuICAgICAgICB5RG9tYWluTWluID0gTWF0aC5taW4oeURvbWFpbk1pbiwgZDMubWluKHlMaW5lcykpO1xuICAgICAgICB5RG9tYWluTWF4ID0gTWF0aC5tYXgoeURvbWFpbk1pbiwgZDMubWF4KHlMaW5lcykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXJXaWR0aCA9IHhTY2FsZShncm91cGVkRGF0YVswXVt4QXR0cl0gKyBheGlzRXh0cmEpIC0geFNjYWxlKGdyb3VwZWREYXRhWzBdW3hBdHRyXSk7XG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW3lEb21haW5NaW4sIHlEb21haW5NYXhdKVxuICAgICAgICAucmFuZ2UoW2RpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXG5cbiAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLngtYXhpc1wiKS5yZW1vdmUoKTtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLnktYXhpc1wiKS5yZW1vdmUoKTtcblxuICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLy8gLmVudGVyKClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKTtcblxuICAgICAgXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieS1heGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIiwwKVwiKVxuICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoeUxpbmVzKSk7XG5cbiAgICAgIGNvbnN0IGJhcnMgPSBwb2ludHNHLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShncm91cGVkRGF0YSwgZCA9PiBkLmlkKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBiYXJzLmV4aXQoKVxuICAgICAgICAucmVtb3ZlKClcblxuICAgICAgYmFycyAgXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geFNjYWxlKGRbeEF0dHJdKSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGQubWF4KSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBiYXJXaWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiB5U2NhbGUoZC5taW4pIC0geVNjYWxlKGQubWF4KSlcblxuICAgICAgYmFycy5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJicDMtYmFyXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgYmFyV2lkdGgpXG4gICAgICAgIC5hdHRyKFwieFwiLCBkID0+IHhTY2FsZShkW3hBdHRyXSkpXG4gICAgICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkLm1heCkpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4geVNjYWxlKGQubWluKSAtIHlTY2FsZShkLm1heCkpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiM0MjQ4NTNcIilcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDAuOSk7XG5cbiAgICAgIGNvbnN0IGJydXNoID0gZDMuYnJ1c2hYKClcbiAgICAgICAgLmV4dGVudChbW21hcmdpbi5sZWZ0LCBtYXJnaW4udG9wXSwgW2RpbWVuc2lvbnMud2lkdGggLSBtYXJnaW4ucmlnaHQsIGRpbWVuc2lvbnMuaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbV1dKVxuICAgICAgICAub24oXCJzdGFydCBicnVzaCBlbmRcIiwgYnJ1c2hlZCk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKFwiZy5zZWxlY3RvclwiKS5yZW1vdmUoKTtcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VsZWN0b3JcIilcbiAgICAgICAgLmNhbGwoYnJ1c2gpXG4gICAgICAgIC5jYWxsKGJydXNoLm1vdmUsIFtncm91cGVkRGF0YVswXVt4QXR0cl0sIGdyb3VwZWREYXRhWzFdW3hBdHRyXV0ubWFwKHhTY2FsZSkpXG5cbiAgICAgIGlmIChzZWxlY3RTaW5nbGUpIHtcbiAgICAgICAgc3ZnLnNlbGVjdChcImcuc2VsZWN0b3JcIikuY2FsbChnID0+IGcuc2VsZWN0KFwiLm92ZXJsYXlcIilcbiAgICAgICAgICAuZGF0dW0oe3R5cGU6IFwic2VsZWN0aW9uXCJ9KVxuICAgICAgICAgIC5vbihcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsIGJlZm9yZWJydXNoc3RhcnRlZCkpO1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIHJlc2l6ZSBoYW5kbGVzXG4gICAgICAgIHN2Zy5zZWxlY3QoXCJnLnNlbGVjdG9yXCIpLnNlbGVjdEFsbChcIi5oYW5kbGVcIikucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBiZWZvcmVicnVzaHN0YXJ0ZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHggPSBiYXJXaWR0aDsgLy8gVXNlIGEgZml4ZWQgd2lkdGggd2hlbiByZWNlbnRlcmluZy5cbiAgICAgICAgY29uc3QgW1tjeF1dID0gZDMucG9pbnRlcnMoZXZlbnQpO1xuICAgICAgICBjb25zdCBbeDAsIHgxXSA9IFtjeCAtIGR4IC8gMiwgY3ggKyBkeCAvIDJdO1xuICAgICAgICBjb25zdCBbWDAsIFgxXSA9IHhTY2FsZS5yYW5nZSgpO1xuICAgICAgICBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlKVxuICAgICAgICAgICAgLmNhbGwoYnJ1c2gubW92ZSwgeDEgPiBYMSA/IFtYMSAtIGR4LCBYMV0gXG4gICAgICAgICAgICAgICAgOiB4MCA8IFgwID8gW1gwLCBYMCArIGR4XSBcbiAgICAgICAgICAgICAgICA6IFt4MCwgeDFdKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGZ1bmN0aW9uIGJydXNoZWQoZXZlbnQpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGV2ZW50LnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgIHBvaW50cy5hdHRyKFwic3Ryb2tlXCIsIG51bGwpO1xuICAgICAgICB9IGVsc2UgeyAgICBcbiAgICAgICAgICBjb25zdCBbeDAsIHgxXSA9IHNlbGVjdGlvbi5tYXAoZCA9PiB4U2NhbGUuaW52ZXJ0KGQgLSBiYXJXaWR0aCAvIDIpKTtcblxuICAgICAgICAgIGxldCB4MiA9IHgxO1xuICAgICAgICAgIGlmIChzZWxlY3RTaW5nbGUgJiYgaXNEYXRlKSB7XG4gICAgICAgICAgICB4MiA9IG5ldyBEYXRlKHgwLmdldFRpbWUoKSArIGF4aXNFeHRyYSk7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmIChzZWxlY3RTaW5nbGUpIHtcbiAgICAgICAgICAgIHgyID0geDAgKyBheGlzRXh0cmE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gcG9pbnRzRy5zZWxlY3RBbGwoXCJyZWN0XCIpLmZpbHRlcihkID0+IHgwIDw9IChkW3hBdHRyXSkgJiYgKGRbeEF0dHJdKSA8IHgyKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFggPSBzZWxlY3RlZC5kYXRhKCkubWFwKGQgPT4gZC54KTtcbiAgICAgICAgICBzZXRQcm9wcyh7c2VsZWN0ZWQ6IHNlbGVjdGVkWH0pO1xuICAgICAgICAgIHBvaW50c0cuc2VsZWN0QWxsKFwicmVjdFwiKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgIHNlbGVjdGVkLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgW2RhdGEsIGRpbWVuc2lvbnNdKVxuICAgIFxuICAgIFxuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9e2lkfSByZWY9e3dyYXBwZXJSZWZ9IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCJ9fT5cbiAgICAgICAgPHN2ZyByZWY9e3N2Z1JlZn0gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICA8ZyBjbGFzc05hbWU9e1wiYnAzLXJhbmdlLXNlbGVjdG9yXCJ9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZVNlbGVjdG9yO1xuXG5SYW5nZVNlbGVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWFyZ2luOiB7XG4gICAgbGVmdDogMjAsXG4gICAgcmlnaHQ6IDIwLFxuICAgIHRvcDogMjAsXG4gICAgYm90dG9tOiA0MFxuICB9LFxuICBpc0RhdGU6IHRydWUsXG4gIHlMaW5lczogW10sXG4gIHNlbGVjdFNpbmdsZTogdHJ1ZSxcbiAgZ3JvdXA6IGZhbHNlLFxuICBncm91cFNpemU6IDFcbn1cblxuUmFuZ2VTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKiogQ2hhcnQgd2lkdGggKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKiBDaGFydCBoZWlnaHQgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKiogRGF0YSAqL1xuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKiBTZWxlY3RlZCBkYXR1bSAodXNlIGluIHBvaW50IGNsaWNrIGNhbGxiYWNrcykgKi9cbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogTWFyZ2luIHRvIHVzZSBhcm91bmQgY2hhcnRcbiAgICAgKi9cbiAgICBtYXJnaW46IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGNhc3QgdGhlIGRhdGEgeCB2YWx1ZXMgYXMgYSBkYXRlXG4gICAgICovXG4gICAgaXNEYXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIG1hcmtpbmdzIHRvIGFkZCBvbiB5LWF4aXNcbiAgICAgKi9cbiAgICB5TGluZXM6IFByb3BUeXBlcy5hcnJheSxcblxuICAgIC8qKlxuICAgICAqIEZsYWcgd2hldGhlciB0byBhbGxvdyBvbmx5IHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBiYXIgaW4gdGhlIGNoYXJ0XG4gICAgICovXG4gICAgc2VsZWN0U2luZ2xlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZsYWcgd2hldGhlciBkYXRhIHNob3VsZCBiZSBhZ2dyZWdhdGVkIGFuZCBwcmVzZW50ZWQgYXMgYSBjb3VudC5cbiAgICAgKiBDdXJyZW50bHkgbm90IGltcGxlbWVudGVkXG4gICAgICovXG4gICAgZ3JvdXA6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRm9yIGdyb3VwZWQgZGF0YSwgdGhlIHNpemUgb2YgdGhlIGdyb3VwaW5nXG4gICAgICovXG4gICAgZ3JvdXBTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==