import React from 'react';
import PropTypes from 'prop-types';
import { DateRangeInput as BPDateRangeInput} from "@blueprintjs/datetime";

const dateUtils = require('../utils/date');

/**
 * Wrapper around the blueprint DateRangeInput component. Events are fired with each change to the selection
 * @param props
 * @returns {*}
 * @constructor
 */

export default class DateRangeInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(dateRange, hasUserManuallySelectedDate) {
        console.log(dateRange);
        if (dateRange[1] !== null) {
            if (!this.props.timePrecision) {
                if (dateRange[0]) {
                    dateRange[0].setHours(0);
                    dateRange[0].setMinutes(0);
                    dateRange[0].setSeconds(0);
                    dateRange[0].setMilliseconds(0);
    
                }
                if (dateRange[1]) {
                    dateRange[1].setHours(0);
                    dateRange[1].setMinutes(0);
                    dateRange[1].setSeconds(0);
                    dateRange[1].setMilliseconds(0);
                }
    
            }
            const {setProps} = this.props;
            if (setProps) {
                setProps({
                    start_date: dateUtils.formatDate(dateRange[0]),
                    end_date: dateUtils.formatDate(dateRange[1])
                });
            }    
        }
        
    }

    render() {
        const { date, ...thisProps } = this.props;
        console.log(this.props);
        return (

            <BPDateRangeInput
                {...thisProps}
                defaultValue={[this.props.start_date? new Date(this.props.start_date) : new Date(),
                    this.props.end_date ? new Date(this.props.end_date) : new Date()]
                }
                onChange={(newDateRange, hasUserManuallySelectedDate) => this.handleChange(newDateRange, hasUserManuallySelectedDate)}
                formatDate={(date) => this.props.timePrecision ? dateUtils.formatDate(date) : dateUtils.formatDate(date).substring(0, 10)}
                parseDate={(dateString) => new Date(dateString)}
                        >

            </BPDateRangeInput>
        );
    }
}


DateRangeInput.defaultProps = {
    todayButtonText: "Today",
    timePrecision: null,
    // maxDate: null,
    // minDate: null,
    canClearSelection: true,
    shortcuts: true,
    singleMonthOnly: false
};

DateRangeInput.propTypes = {
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
