import React from 'react';
import PropTypes from 'prop-types';
import {
    DateRangeInput as BPDateRangeInput,
    TimePrecision,
} from '@blueprintjs/datetime';

const dateUtils = require('../utils/date');

/**
 * The DateRangeInput component is a control group composed of two input groups. It shows a
 * DateRangePicker in a Popover on focus.
 *
 * Use this component in forms where the user must enter a date range.
 */

export default class DateRangeInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        const valid =
            !props.required || (!!props.start_date && !!props.end_date);
        props.setProps &&
            props.setProps({
                start_date: props.start_date,
                end_date: props.end_date,
                date_range: [props.start_date, props.end_date],
                valid: valid,
            });
        props.setParentProps && props.setParentProps(props.date, valid);
    }

    handleChange(dateRange, hasUserManuallySelectedDate) {
        const {setProps, setParentProps, required, timePrecision} = this.props;
        const valid = !required || (!!dateRange[0] && !!dateRange[1]);
        const start_date = dateUtils.formatDate(dateRange[0], timePrecision);
        const end_date = dateUtils.formatDate(dateRange[1], timePrecision);
        console.log(start_date, end_date);
        if (setProps) {
            setProps({
                start_date: start_date,
                end_date: end_date,
                date_range: [start_date, end_date],
                valid: valid,
            });
        } else {
            this.setState({
                start_date: start_date,
                end_date: end_date,
                date_range: [start_date, end_date],
                valid: valid,
            });
        }
        setParentProps && setParentProps([start_date, end_date], valid);
    }

    render() {
        const {date, maxDate, minDate, ...htmlProps} = this.props;
        if (minDate) {
            htmlProps.minDate = new Date(minDate);
        }
        if (maxDate) {
            htmlProps.maxDate = new Date(maxDate);
        }
        return (
            <BPDateRangeInput
                {...htmlProps}
                defaultValue={[
                    this.props.start_date
                        ? new Date(this.props.start_date)
                        : new Date(undefined),
                    this.props.end_date
                        ? new Date(this.props.end_date)
                        : new Date(undefined),
                ]}
                onChange={(newDateRange, isUserChange) =>
                    this.handleChange(newDateRange, isUserChange)
                }
                formatDate={(date) =>
                    dateUtils.formatDate(date, htmlProps.timePrecision)
                }
                parseDate={(dateString) => new Date(dateString)}
            />
        );
    }
}

DateRangeInput.defaultProps = {
    todayButtonText: 'Today',
    timePrecision: null,
    canClearSelection: true,
    shortcuts: true,
    singleMonthOnly: false,
    required: false,
};

DateRangeInput.propTypes = {
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
     * Selected start date
     */
    start_date: PropTypes.string,

    /**
     * Selected end date
     */
    end_date: PropTypes.string,

    /**
     * The selected date range
     */
    date_range: PropTypes.array,

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

     Possible values are "minute"|"second"|"millisecond"
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
