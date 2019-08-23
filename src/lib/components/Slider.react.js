import React from 'react';
import PropTypes from 'prop-types';
import { Slider as BPSlider } from "@blueprintjs/core";

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */

export default class Slider extends React.Component {
    constructor(props) {
        // console.log(props);
        // props.releaseValue = props.value;
        super(props);
        this.handleRelease = this.handleRelease.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // Fire callback with initial value
        if (this.props.setProps) {
            this.props.setProps({releaseValue: this.props.value});
        }
        if (this.props.setParentProps) {
            this.props.setParentProps({releaseValue: this.props.value})
        }
    }


    handleRelease(value) {
        if (this.props.setProps) {
            this.props.setProps({releaseValue: value});
        } else {
            this.setState({releaseValue: value});
        }
        if (this.props.setParentProps) {
            this.props.setParentProps({releaseValue: value})
        }
    }

    handleChange(value) {
        if (this.props.setProps) {
            this.props.setProps({value: value});
        } else {
            this.setState({value: value});
        }
        // if (this.props.setParentProps) {
        //     this.props.setParentProps({value: value})
        // }
    }


    render() {
        console.log(this);
        
        return <BPSlider onChange={this.handleChange} onRelease={this.handleRelease} {...this.props}/>
    }
}

Slider.defaultProps = {
    disabled: false,
    labelType: 'number',
    vertical: false,
    releaseValue: null,  // So we can set it to the passed in value
    value: 0,
};

Slider.propTypes = {
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
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    'setProps': PropTypes.func,

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
};
