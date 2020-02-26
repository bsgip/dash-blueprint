import React from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor as BPResizeSensor} from "@blueprintjs/core";



/**
 * ResizeSensor is a component that provides a "resize" event for its single DOM element child. It is a thin wrapper around ResizeObserver to provide React bindings.
 * 
 *  Resize events are fired each time the child div
 * resizes, with a custom debounce timeout to ensure we aren't overloaded with events.
 * 
 * Note: This was more useful when Dash components were not size-aware, and should be used sparingly
 * @param props
 * @returns {*}
 * @constructor
 */

export default class ResizeSensor extends React.Component {
    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.resizeTimer = null;
    }

    onResize(entries) {
        clearTimeout(this.resizeTimer);
        // Dodgy method for passing the current object into the setTimeout
        const that = this;
        this.resizeTimer = setTimeout(
            function() {
                if (that.props.setProps) {
                    /*
                      We should probably be smarter about this, but we
                      are only monitoring the direct child at the moment
                     */
                    that.props.setProps({
                        size: entries[0].contentRect
                    })
                }
                
                // only use the debouncer on subsequent calls after the initial
            }, this.resizeTimer ? this.props.debounceTimer : 0);
    }


    render() {
        // const {className, style, id, href} = this.props;
        /*
        * ideally, we would use cloneElement however
        * that doesn't work with dash's recursive
        * renderTree implementation for some reason
        */
        const { observeParents, children } = this.props;
        return (

            <BPResizeSensor onResize={entries => this.onResize(entries)}
                            observeParents={observeParents}
                        >
                { children }
            </BPResizeSensor>
        );
    }
}

ResizeSensor.defaultProps = {
    debounceTimer: 1000,
    observeParents: false
};

ResizeSensor.propTypes = {
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
     * Whether to observe parent sizes
     */
    observeParents: PropTypes.bool,

    /**
     * How long to debounce before firing an event. Useful for situations
     * where dynamic resizing would cause a lot of events to fire.
     */
    debounceTimer: PropTypes.number,

    /**
     * The current size of the observed e.g.
     * {'x': 0, 'y': 0, 'width': 884, 'height': 17.265625, 'top': 0,
     *  'right': 884, 'bottom': 17.265625, 'left': 0}
     * TODO use a proper PropType
     */
    size: PropTypes.any,
};
