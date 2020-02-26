import React from 'react';
import PropTypes from 'prop-types';
import { DateInput as BPDateInput} from "@blueprintjs/datetime";

const dateUtils = require('../utils/date');

/**
 * The DateInput component is an input group that shows a DatePicker in a Popover on focus. 
 * Use it in forms where the user must enter a date.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(date, hasUserManuallySelectedDate) {
        if (hasUserManuallySelectedDate) {
            const {setProps} = this.props;
            if (setProps && date !== null) {
                setProps({date: dateUtils.formatDate(date)});
            } else {
                this.setState({date});
            }
        }
    }


    render() {
        const { date, ...thisProps } = this.props;
        const defaultDate = new Date(this.props.defaultValue);
            if (!date) {
                this.handleChange(defaultDate);
            }
        return (

            <BPDateInput
                {...thisProps}
                defaultValue={defaultDate}
                onChange={(newDate, hasUserManuallySelectedDate) => this.handleChange(newDate, hasUserManuallySelectedDate)}
                formatDate={(date) => this.props.timePrecision ? dateUtils.formatDate(date) : dateUtils.formatDate(date).substring(0, 10)}
                parseDate={(dateString) => new Date(dateString)}

                        >

            </BPDateInput>
        );
    }
}

DateInput.defaultProps = {
    defaultValue: Date.now(),
    todayButtonText: "Today",
    timePrecision: null,
    canClearSelection: true
};

DateInput.propTypes = {
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
    'setProps': PropTypes.func,
};
