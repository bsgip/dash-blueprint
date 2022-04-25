import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {DateInput as BPDateInput} from '@blueprintjs/datetime';

const dateUtils = require('../../utils/date');

/**
 * The DateInput component is an input group that shows a DatePicker in a Popover on focus.
 * Use it in forms where the user must enter a date.
 * @param props
 * @returns {*}
 * @constructor
 */

const DateInput = (props) => {
    const {
        setProps,
        setParentProps,
        required,
        date,
        maxDate,
        minDate,
        timePrecision,
        ...htmlProps
    } = props;
    const valid = !required || !!date;
    setProps &&
        setProps({
            date: props.date,
            valid: valid,
        });
    setParentProps && setParentProps(date, valid);
    const [dateState, setDateState] = useState(date);

    const handleChange = (date, hasUserManuallySelectedDate) => {
        if (hasUserManuallySelectedDate) {
            const valid = !required || !!date;
            const formattedDate = date ? dateUtils.formatDate(date) : null;
            console.log(date, formattedDate, valid);
            if (setProps) {
                setProps({
                    date: formattedDate,
                    valid: valid,
                });
            } else {
                setDateState(date);
            }
            setParentProps && setParentProps(formattedDate, valid);
        }
    };

    if (minDate) {
        htmlProps.minDate = new Date(minDate);
    }
    if (maxDate) {
        htmlProps.maxDate = new Date(maxDate);
    }
    const defaultValue = date ? new Date(date) : null;

    return (
        <BPDateInput
            {...htmlProps}
            defaultValue={defaultValue}
            onChange={(newDate, hasUserManuallySelectedDate) =>
                this.handleChange(newDate, hasUserManuallySelectedDate)
            }
            formatDate={(date) =>
                timePrecision
                    ? dateUtils.formatDate(date)
                    : dateUtils.formatDate(date).substring(0, 10)
            }
            parseDate={(dateString) => new Date(dateString)}
        ></BPDateInput>
    );
};

DateInput.defaultProps = {
    defaultValue: null,
    todayButtonText: 'Today',
    timePrecision: null,
    canClearSelection: true,
    required: false,
};

DateInput.propTypes = {
    // TODO
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
    canClearSelection: PropTypes.bool,

    /**
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,

    /**
     * Whether this input is required. Used in form validation
     */
    required: PropTypes.bool,

    /**
     * Determine whether the input is valid. Used in form validation
     */
    valid: PropTypes.bool,
};

export default DateInput;
