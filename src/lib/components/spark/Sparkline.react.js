import React from 'react';
import PropTypes from 'prop-types';
import {Sparkline as DUSparkline,
    LineSeries,
    HorizontalReferenceLine,
    BandLine,
    PatternLines,
    PointSeries} from '@data-ui/sparkline';
import { allColors } from '@data-ui/theme'; // open-color colors


/**
 * @param props
 * @returns {*}
 * @constructor
 */

const Sparkline = (props) => {
    const data = Array(25).fill().map(Math.random);
    return (
        <DUSparkline
      ariaLabel="A line graph of randomly-generated data"
      margin={{ top: 24, right: 64, bottom: 24, left: 64,}}
      width={500}
      height={100}
      data={data}
      valueAccessor={datum => datum}
    >
      {/* this creates a <defs> referenced for fill */}
      <PatternLines
        id="unique_pattern_id"
        height={6}
        width={6}
        stroke={allColors.grape[6]}
        strokeWidth={1}
        orientation={['diagonal']}
      />
      {/* display innerquartiles of the data */}
      <BandLine
        band="innerquartiles"
        fill="url(#unique_pattern_id)"
      />
      {/* display the median */}
      <HorizontalReferenceLine
        stroke={allColors.grape[8]}
        strokeWidth={1}
        strokeDasharray="4 4"
        reference="median"
      />
      {/* Series children are passed the data from the parent Sparkline */}
      <LineSeries
        showArea={false}
        stroke={allColors.grape[7]}
      />
      <PointSeries
        points={['min', 'max']}
        fill={allColors.grape[3]}
        size={5}
        stroke="#fff"
        renderLabel={val => val.toFixed(2)}
      />
    </DUSparkline>
    )
};

Sparkline.defaultProps = {
};

Sparkline.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,


};

export default Sparkline;