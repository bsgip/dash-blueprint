import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Slider as BPSlider} from '@blueprintjs/core';

/**
 * A slider is a numeric input for choosing numbers between lower and upper bounds. It also has a labeled axis that supports custom formatting.
 *
 * To adjust a slider value, the user clicks and drags a handle or clicks the axis to move the nearest handle to that spot. Users can also use arrow keys on the keyboard to adjust individual handles.
 *
 * Use Slider for choosing a single value, RangeSlider for choosing two values, and MultiSlider for more advanced use cases.
 *
 * Use Slider to choose a single value on a number line. It is a controlled component, so the value prop determines its current appearance. Provide an onChange handler to receive updates and an onRelease handler to determine when the user has stopped interacting with the slider.
 */

const Slider = (props) => {
    const {value, setParentProps, setProps, ...sliderProps} = props;
    const [valueState, setValueState] = useState(value);

    useEffect(() => {
        setParentProps && setParentProps(value, true);
    }, []);

    const handleRelease = (value) => {
        setProps && setProps({releaseValue: value});
        setParentProps && setParentProps(value, true);
    };

    const handleChange = (value) => {
        setProps ? setProps({value: value}) : setValueState(value);
    };

    return (
        <BPSlider
            onChange={handleChange}
            onRelease={handleRelease}
            value={setProps ? value : valueState}
            {...sliderProps}
        />
    );
};

Slider.defaultProps = {
    disabled: false,
    labelType: 'number',
    vertical: false,
    releaseValue: null, // So we can set it to the passed in value
    value: 0,
    labelRenderer: true,
};

Slider.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,

    /**
     * key to use when updating parent component
     */
    updateKey: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,

    /**
     * Whether the slider is non-interactive.
     */
    disabled: PropTypes.bool,

    /**
     * Initial value of the slider. This determines the other end of the track fill: from initialValue to value.
     */
    initialValue: PropTypes.number,

    /**
     * Number of decimal places to use when rendering label value. Default value is the number of decimals used in the stepSize prop. This prop has no effect if you supply a custom labelRenderer callback.
     */
    labelPrecision: PropTypes.number,

    /**
     * Instructions for rendering the label. Options will be clock, date, datetime, number, percentage, etc.
     */
    labelType: PropTypes.string,

    /**
     * Increment between successive labels. Must be greater than zero
     */
    labelStepSize: PropTypes.number,

    /**
     * Maximum value of the slider
     */
    max: PropTypes.number,

    /**
     * Minimum value of the slider
     */
    min: PropTypes.number,

    /**
     * Increment between successive values; amount by which the handle moves. Must be greater than zero
     */
    stepSize: PropTypes.number,

    /**
     * Whether a solid bar should be rendered on the track between current and initial values, or between handles for RangeSlider
     */
    showTrackFill: PropTypes.bool,

    /**
     * Value of slider
     */
    value: PropTypes.number,

    /**
     * Value of slider on release of handle. This will only fire callbacks when the
     * slider has been released, which is probably desirable in most instances for
     * server-side callbacks
     */
    releaseValue: PropTypes.number,

    /**
     * Whether to show the slider in a vertical orientation
     */
    vertical: PropTypes.bool,

    /**
     * Whether to render labels
     */
    labelRenderer: PropTypes.bool,
};

export default Slider;
