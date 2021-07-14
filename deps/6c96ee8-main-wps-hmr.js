webpackHotUpdatedash_blueprint("main",{

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
   * Aria label
   */
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9zcGFyay9TcGFya2xpbmUucmVhY3QuanMiXSwibmFtZXMiOlsiU3BhcmtsaW5lIiwicHJvcHMiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImFyaWFMYWJlbCIsImRhdGEiLCJsaW5lU2VyaWVzIiwiYmFyU2VyaWVzIiwiY2hpbGRyZW4iLCJwdXNoIiwiZGF0dW0iLCJkZWZhdWx0UHJvcHMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwibnVtYmVyIiwic2hhcGUiLCJtYXgiLCJtaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJjdXJ2ZSIsIm9uZU9mIiwic2hvd0FyZWEiLCJib29sIiwic2hvd0xpbmUiLCJzdHJva2UiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQU00Qzs7QUFDNUM7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUMzQixNQUFPQyxNQUFQLEdBQXdFRCxLQUF4RSxDQUFPQyxNQUFQO0FBQUEsTUFBZUMsS0FBZixHQUF3RUYsS0FBeEUsQ0FBZUUsS0FBZjtBQUFBLE1BQXNCQyxNQUF0QixHQUF3RUgsS0FBeEUsQ0FBc0JHLE1BQXRCO0FBQUEsTUFBOEJDLFNBQTlCLEdBQXdFSixLQUF4RSxDQUE4QkksU0FBOUI7QUFBQSxNQUF5Q0MsSUFBekMsR0FBd0VMLEtBQXhFLENBQXlDSyxJQUF6QztBQUFBLE1BQStDQyxVQUEvQyxHQUF3RU4sS0FBeEUsQ0FBK0NNLFVBQS9DO0FBQUEs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VCxFQUFtQixPQUFuQixFQUE0QixTQUE1QixDQUFoQixDQVJXO0FBUzFCTyxlQUFXLEVBQUVqQixpREFBUyxDQUFDRztBQVRHLEdBQWhCLENBckRNOztBQWlFbEI7QUFDSjtBQUNBO0FBQ0liLFdBQVMsRUFBRVUsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQjtBQUN6QkcsUUFBSSxFQUFFUCxpREFBUyxDQUFDQyxNQURTO0FBRXpCTyxlQUFXLEVBQUVSLGlEQUFTLENBQUNHLE1BRkU7QUFHekJXLFVBQU0sRUFBRWQsaURBQVMsQ0FBQ0MsTUFITztBQUl6QmdCLGVBQVcsRUFBRWpCLGlEQUFTLENBQUNHO0FBSkUsR0FBaEI7QUFwRU8sQ0FBdEI7QUE4RWVyQix3RUFBZixFIiwiZmlsZSI6IjZjOTZlZTgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NwYXJrbGluZSBhcyBEVVNwYXJrbGluZSxcbiAgICBMaW5lU2VyaWVzLFxuICAgIEhvcml6b250YWxSZWZlcmVuY2VMaW5lLFxuICAgIEJhbmRMaW5lLFxuICAgIFBhdHRlcm5MaW5lcyxcbiAgICBQb2ludFNlcmllc30gZnJvbSAnQGRhdGEtdWkvc3BhcmtsaW5lJztcbmltcG9ydCB7IGFsbENvbG9ycyB9IGZyb20gJ0BkYXRhLXVpL3RoZW1lJzsgLy8gb3Blbi1jb2xvciBjb2xvcnNcbmltcG9ydCBCYXJTZXJpZXMgZnJvbSAnQGRhdGEtdWkvc3BhcmtsaW5lL2xpYi9zZXJpZXMvQmFyU2VyaWVzJztcblxuXG4vKipcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5jb25zdCBTcGFya2xpbmUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21hcmdpbiwgd2lkdGgsIGhlaWdodCwgYXJpYUxhYmVsLCBkYXRhLCBsaW5lU2VyaWVzLCBiYXJTZXJpZXN9ID0gcHJvcHM7XG4gICAgLy8gY29uc3QgZGF0YSA9IEFycmF5KDI1KS5maWxsKCkubWFwKE1hdGgucmFuZG9tKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmIChsaW5lU2VyaWVzKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKDxMaW5lU2VyaWVzIHsuLi5saW5lU2VyaWVzfSAvPilcbiAgICB9XG4gICAgaWYgKGJhclNlcmllcykge1xuICAgICAgY2hpbGRyZW4ucHVzaCg8QmFyU2VyaWVzIHsuLi5iYXJTZXJpZXN9IC8+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8RFVTcGFya2xpbmVcbiAgICAgIGFyaWFMYWJlbD17YXJpYUxhYmVsfVxuICAgICAgbWFyZ2luPXttYXJnaW59XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICB2YWx1ZUFjY2Vzc29yPXtkYXR1bSA9PiBkYXR1bX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EVVNwYXJrbGluZT5cbiAgICApXG59O1xuXG5TcGFya2xpbmUuZGVmYXVsdFByb3BzID0ge1xuICBtYXJnaW46IHsgdG9wOiAxNiwgcmlnaHQ6IDE2LCBib3R0b206IDE2LCBsZWZ0OiAxNiB9LFxuICB3aWR0aDogMTAwLFxuICBoZWlnaHQ6IDIwLFxuICBhcmlhTGFiZWw6IFwiXCJcbn07XG5cblNwYXJrbGluZS5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoaXMgY29tcG9uZW50LCB1c2VkIHRvIGlkZW50aWZ5IGRhc2ggY29tcG9uZW50c1xuICAgICAqIGluIGNhbGxiYWNrcy4gVGhlIElEIG5lZWRzIHRvIGJlIHVuaXF1ZSBhY3Jvc3MgYWxsIG9mIHRoZVxuICAgICAqIGNvbXBvbmVudHMgaW4gYW4gYXBwLlxuICAgICAqL1xuICAgICdpZCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50LCB1c2VkIHRvIGltcHJvdmVcbiAgICAgKiBwZXJmb3JtYW5jZSBieSBSZWFjdC5qcyB3aGlsZSByZW5kZXJpbmcgY29tcG9uZW50c1xuICAgICAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvbGlzdHMtYW5kLWtleXMuaHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgJ2tleSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBcmlhIGxhYmVsXG4gICAgICovXG4gICAgYXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSB0byBkaXNwbGF5IGluIHRoZSBzcGFya2xpbmVcbiAgICAgKi9cbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBzdmcgaW5jbHVkaW5nIGxlZnQvcmlnaHQgbWFyZ2luXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBjaGFydCBtYXJnaW4sIGxlYXZlIHJvb20gZm9yIGxhYmVscyEgbm90ZSAwIG1heSBjbGlwIExpbmVTZXJpZXMgYW5kIFBvaW50U2VyaWVzLiBhIHBhcnRpYWwgeyB0b3AvcmlnaHQvYm90dG9tLyBsZWZ0IH0gb2JqZWN0IGlzIGZpbGxlZCB3aXRoIHRoZSBvdGhlciBkZWZhdWx0IHZhbHVlc1xuICAgICAqL1xuICAgIG1hcmdpbjogUHJvcFR5cGVzLnNoYXBlKHsgdG9wOiBQcm9wVHlwZXMubnVtYmVyLCByaWdodDogUHJvcFR5cGVzLm51bWJlciwgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLCBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWxseSBzZXQgdGhlIG1heGltdW0geS12YWx1ZSBvZiB0aGUgY2hhcnQgKGUuZy4sIHRvIGNvb3JkaW5hdGUgYXhlcyBhY3Jvc3MgbXVsdGlwbGUgU3BhcmtsaW5lcylcbiAgICAgKi9cbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbGx5IHNldCB0aGUgbWluaW11bSB5LXZhbHVlIG9mIHRoZSBjaGFydCAoZS5nLiwgdG8gY29vcmRpbmF0ZSBheGVzIGFjcm9zcyBtdWx0aXBsZSBTcGFya2xpbmVzKVxuICAgICAqL1xuICAgIG1pbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIGZvciBhIExpbmVTZXJpZXMgb2JqZWN0XG4gICAgICovXG4gICAgbGluZVNlcmllczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsIFxuICAgICAgZmlsbE9wYWNpdHk6IFByb3BUeXBlcy5udW1iZXIsIFxuICAgICAgY3VydmU6IFByb3BUeXBlcy5vbmVPZihbJ2xpbmVhcicsICdjYXJkaW5hbCcsICdiYXNpcycsICdtb25vdG9uZVgnXSksXG4gICAgICBzaG93QXJlYTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzaG93TGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzdHJva2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzdHJva2VMaW5lY2FwOiBQcm9wVHlwZXMub25lT2YoWydidXR0JywgJ3NxdWFyZScsICdyb3VuZCcsICdpbmhlcml0J10pLFxuICAgICAgc3Ryb2tlV2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIGZvciBhIEJhclNlcmllcyBvYmplY3RcbiAgICAgKi9cbiAgICBiYXJTZXJpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLCBcbiAgICAgIGZpbGxPcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLCBcbiAgICAgIHN0cm9rZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHN0cm9rZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BhcmtsaW5lOyJdLCJzb3VyY2VSb290IjoiIn0=