import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {DateRangePicker as BPDateRangePicker} from '@blueprintjs/datetime';

const dateUtils = require('../../utils/date');

/**
 * A DateRangePicker shows two sequential month calendars and lets the user select a single range of days.
 */

const DateRangePicker = (props) => {
    const {
        setProps,
        setParentProps,
        required,
        start_date,
        end_date,
        timePrecision,
        maxDate,
        minDate,
        ...htmlProps
    } = props;
    const valid = !required || (!!start_date && !!end_date);
    const [dateRange, updateDateRange] = useState([start_date, end_date]);
    setProps &&
        setProps({
            start_date: start_date,
            end_date: end_date,
            date_range: [start_date, end_date],
            valid: valid,
        });
    setParentProps && setParentProps([start_date, end_date], valid);

    const handleChange = (dateRange, hasUserManuallySelectedDate) => {
        const valid = !required || (!!dateRange[0] && !!dateRange[1]);
        const start_date = dateUtils.formatDate(dateRange[0], timePrecision);
        const end_date = dateUtils.formatDate(dateRange[1], timePrecision);
        if (setProps) {
            setProps({
                start_date: start_date,
                end_date: end_date,
                date_range: [start_date, end_date],
                valid: valid,
            });
        } else {
            updateDateRange([start_date, end_date]);
        }
        setParentProps && setParentProps([start_date, end_date], valid);
    };

    if (minDate) {
        htmlProps.minDate = new Date(minDate);
    }
    if (maxDate) {
        htmlProps.maxDate = new Date(maxDate);
    }

    const startDate = setProps ? start_date : dateRange[0];
    const endDate = setProps ? end_date : dateRange[1];
    var dateProps = {};
    // const defaultValue = [startDate || new Date(), endDate || new Date()];
    startDate &&
        endDate &&
        (dateProps.defaultValue = [new Date(startDate), new Date(endDate)]);
    return (
        <BPDateRangePicker
            {...htmlProps}
            {...dateProps}
            onChange={(newDateRange, isUserChange) =>
                handleChange(newDateRange, isUserChange)
            }
            formatDate={(date) =>
                dateUtils.formatDate(date, htmlProps.timePrecision)
            }
            parseDate={(dateString) => new Date(dateString)}
        />
    );
};

DateRangePicker.defaultProps = {
    todayButtonText: 'Today',
    timePrecision: null,
    canClearSelection: true,
    shortcuts: true,
    singleMonthOnly: false,
};

DateRangePicker.propTypes = {
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
     * Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array is provided, the custom shortcuts will be displayed.
     */
    shortcuts: PropTypes.bool,

    /**
     * Whether to show only a single month calendar.
     */
    singleMonthOnly: PropTypes.bool,

    /**
     * Default start date value
     */
    start_date: PropTypes.string,

    /**
     * Default start date value
     */
    end_date: PropTypes.string,

    /**
     * The selected date range
     */
    date_range: PropTypes.array,

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

export default DateRangePicker;
