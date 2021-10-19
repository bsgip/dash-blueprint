import React from 'react';
import PropTypes from 'prop-types';
import {Sparkline as DUSparkline,
    LineSeries,
    HorizontalReferenceLine,
    BandLine,
    PatternLines,
    PointSeries} from '@data-ui/sparkline';
import { allColors } from '@data-ui/theme'; // open-color colors
import BarSeries from '@data-ui/sparkline/lib/series/BarSeries';


/**
 * @param props
 * @returns {*}
 * @constructor
 */

const Sparkline = (props) => {
  const {margin, width, height, ariaLabel, data, lineSeries, barSeries} = props;
    // const data = Array(25).fill().map(Math.random);
    const children = [];
    if (lineSeries) {
      children.push(<LineSeries {...lineSeries} />)
    }
    if (barSeries) {
      children.push(<BarSeries {...barSeries} />)
    }
    return (
        <DUSparkline
      ariaLabel={ariaLabel}
      margin={margin}
      width={width}
      height={height}
      data={data}
      valueAccessor={datum => datum}
    //   style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
    >
      {children}
    </DUSparkline>
    )
};

Sparkline.defaultProps = {
  margin: { top: 16, right: 16, bottom: 16, left: 16 },
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
    'id': PropTypes.string,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * Aria label
     */
    ariaLabel: PropTypes.string,

    /**
     * Data to display in the sparkline
     */
    data: PropTypes.arrayOf(PropTypes.number),

    /**
     * Width of the svg including left/right margin
     */
    width: PropTypes.number,

    /**
     * 
     */
    height: PropTypes.number,

    /**
     * chart margin, leave room for labels! note 0 may clip LineSeries and PointSeries. a partial { top/right/bottom/ left } object is filled with the other default values
     */
    margin: PropTypes.shape({ top: PropTypes.number, right: PropTypes.number, bottom: PropTypes.number, left: PropTypes.number }),

    /**
     * Optionally set the maximum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
     */
    max: PropTypes.number,

    /**
     * Optionally set the minimum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
     */
    min: PropTypes.number,

    /**
     * Properties to pass through for a LineSeries object
     */
    lineSeries: PropTypes.shape({
      fill: PropTypes.string, 
      fillOpacity: PropTypes.number, 
      curve: PropTypes.oneOf(['linear', 'cardinal', 'basis', 'monotoneX']),
      showArea: PropTypes.bool,
      showLine: PropTypes.bool,
      stroke: PropTypes.string,
      strokeDasharray: PropTypes.string,
      strokeLinecap: PropTypes.oneOf(['butt', 'square', 'round', 'inherit']),
      strokeWidth: PropTypes.number
    }),

    /**
     * Properties to pass through for a BarSeries object
     */
    barSeries: PropTypes.shape({
      fill: PropTypes.string, 
      fillOpacity: PropTypes.number, 
      stroke: PropTypes.string,
      strokeWidth: PropTypes.number
    }),


};

export default Sparkline;