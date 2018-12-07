import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as BPDatePicker} from "@blueprintjs/datetime";



/**
 * Wrapper around the blueprint ResizeSensor component. Resize events are fired each time the child div
 * resizes, with a custom debounce timeout to ensure we aren't overloaded with events.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(date) {
        console.log(date);
        console.log(this);
        // this.props.setProps({ date: date });
        const {setProps, fireEvent} = this.props;
        if (setProps && date !== null) {
            setProps({date: date.toISOString()});
        } else {
            this.setState({date});
        }
        if (fireEvent) {
            fireEvent('change');
        }
    }

    render() {
        const { date, ...thisProps } = this.props;
        console.log(thisProps);
        return (

            <BPDatePicker
                {...thisProps}
                defaultValue={new Date(this.props.defaultValue)}
                onChange={(newDate) => this.handleChange(newDate)}
                        >

            </BPDatePicker>
        );
    }
}

DatePicker.defaultProps = {
    defaultValue: Date.now(),
    todayButtonText: "Today",
    timePrecision: null,
    // maxDate: undefined,
    // minDate: undefined,
    canClearSelection: true
};

DatePicker.propTypes = {
    // TODO
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
     * The selected date
     */
    date: PropTypes.string,

    /**
     * Initial day the calendar will display as selected. This should not be set if value is set.
     */
    defaultValue: PropTypes.string,

    /**
     * The earliest date the user can select.
     */
    minDate: PropTypes.string,

    /**
     * The latest date the user can select.
     */
    maxDate: PropTypes.string,

    /**
     * The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision
     */
    timePrecision: PropTypes.string,

    /**
     * Text for the today button in the action bar.
     */
    todayButtonText: PropTypes.string,

    /**
     * Text for the reset button in the action bar.
     */
    clearButtonText: PropTypes.string,

    /**
     * Allows the user to clear the selection by clicking the currently selected day.
     */
    canClearSelection: PropTypes.string,


    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    /**
     * A callback for firing events to dash.
     */
    'setProps': PropTypes.func,

    /**
     * All dashEvents that can be fired
     */
    'dashEvents': PropTypes.oneOf(['change']),
};
