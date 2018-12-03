import React from 'react';
import PropTypes from 'prop-types';
import { Toaster as BPToaster, Toast} from "@blueprintjs/core";




/**
 * Wrapper around the blueprint MenuItem component. We also override the onClick
 * method to make it behave like a dash Link rather than a regular URL.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class Toaster extends React.Component {
    constructor(props) {
        super(props);
        // this.updateLocation = this.updateLocation.bind(this);
    }

    // updateLocation(e) {
    //     /**
    //      * This is basically lifted from the dcc.Link component, with the
    //      * added feature that using the meta key escapes the dash location
    //      * update. This can be handy to allow open in new tab.
    //      */
    //     if (!e.metaKey) {
    //       // prevent anchor from updating location
    //       e.preventDefault();
    //       const {href, refresh} = this.props;
    //       if (refresh) {
    //         window.location.pathname = href;
    //       } else {
    //         window.history.pushState({}, '', href);
    //         window.dispatchEvent(new CustomEvent('onpushstate'));
    //       }
    //       // scroll back to top
    //       window.scrollTo(0, 0);
    //     }
    //
    // }

    render() {
        return (
            <BPToaster>
                <Toast message="toast"/>
            </BPToaster>
        );
    }
}

Toaster.defaultProps = {
    // TODO

};

Toaster.propTypes = {
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
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    text: PropTypes.string,

    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    href: PropTypes.string,

    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill: PropTypes.bool,

    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal: PropTypes.bool,

    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large: PropTypes.bool,

    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical: PropTypes.bool,

    /**
     * Popover content
     */
    content: PropTypes.node,

    /**
     * Icon to display
     */
    icon: PropTypes.string,

    /**
     * Display text as multiline item
     */
    multiline: PropTypes.bool,

};