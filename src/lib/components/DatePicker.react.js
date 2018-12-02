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

    // onResize(entries) {
    //     /**
    //      * This is basically lifted from the dcc.Link component, with the
    //      * added feature that using the meta key escapes the dash location
    //      * update. This can be handy to allow open in new tab.
    //      * TODO It would probably be useful to send the first resize
    //      * without a debounce, so we now how big the initial component is
    //      */
    //     clearTimeout(this.resizeTimer);
    //     // Dodgy method for passing the current object into the setTimeout
    //     const that = this;
    //     this.resizeTimer = setTimeout(
    //         function() {
    //             if (that.props.setProps) {
    //                 /*
    //                   We should probably be smarter about this, but we
    //                   are only monitoring the direct child at the moment
    //                  */
    //                 that.props.setProps({
    //                     size: entries[0].contentRect
    //                 })
    //             }
    //             if (that.props.fireEvent) {
    //                 that.props.fireEvent({event: 'resize'})
    //             }
    //             // only use the debouncer on subsequent calls after the initial
    //         }, this.resizeTimer ? this.props.debounceTimer : 0);
    // }

    handleChange(date) {
        console.log(date);
        console.log(this);
        // this.props.setProps({ date: date });
        const {setProps, fireEvent} = this.props;
        if (setProps && date !== null) {
            setProps({date: date.toLocaleString()});
        } else {
            this.setState({date});
        }
        if (fireEvent) {
            fireEvent('change');
        }
    }


    render() {
        return (

            <BPDatePicker
                onChange={(newDate) => this.handleChange(newDate)}
                        >

            </BPDatePicker>
        );
    }
}

DatePicker.defaultProps = {
    date: Date.now()
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
