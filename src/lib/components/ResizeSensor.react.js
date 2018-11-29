import React from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor as BPResizeSensor} from "@blueprintjs/core";



/**
 * Wrapper around the blueprint ResizeSensor component.
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
        /**
         * This is basically lifted from the dcc.Link component, with the
         * added feature that using the meta key escapes the dash location
         * update. This can be handy to allow open in new tab.
         * TODO It would probably be useful to send the first resize
         * without a debounce, so we now how big the initial component is
         */
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
                if (that.props.fireEvent) {
                    that.props.fireEvent({event: 'resize'})
                }
            }, this.props.debounceTimer);
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
    debounceTimer: 3000,
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

    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    /**
     * All dashEvents that can be fired
     */
    'dashEvents': PropTypes.oneOf(['resize']),
};
