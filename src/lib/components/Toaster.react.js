import { Position, Toaster as BPToaster } from "@blueprintjs/core";
import PropTypes from 'prop-types';
import * as React from "react";


export default class Toaster extends React.PureComponent {
    constructor(props) {
        super(props);
        if (!Toaster.AppToaster) {
            Toaster.AppToaster = {}
        }
        Toaster.AppToaster[props.toasterId] = Toaster.AppToaster[props.toasterId] || BPToaster.create({
            className: props.className,
            position: props.position,
            canEscapeKeyClear: props.canEscapeKeyClear,
            autoFocus: props.autoFocus
        });
    }


    updateLocation(e, href) {
        /**
         * This is basically lifted from the dcc.Link component, with the
         * added feature that using the meta key escapes the dash location
         * update. This can be handy to allow open in new tab.
         */
        if (!e.metaKey) {
            // prevent anchor from updating location
            e.preventDefault();

            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('onpushstate'));

            // scroll back to top
            window.scrollTo(0, 0);
        } else {
            // TODO better method of opening in new window
            window.open(href, "_blank");
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.toasts.map(toast => {
            if (toast.action) {
                if (toast.action.href) {
                    toast.action.onClick = (e) => {this.updateLocation(e, toast.action.href)}
                }
                else {
                    console.warn('Toast action defined without a href - ignoring.');
                    toast.action = null;
                }

            }
            Toaster.AppToaster[this.props.toasterId].show(toast)
        });
    }

    render() {
        return null
    }
}


Toaster.defaultProps = {
    // TODO
    toasts: [],
    autoFocus: false,
    canEscapeKeyClear: false,  // TODO This appears to be broken
    position: Position.TOP_RIGHT,
    toasterId: 'toaster'
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
     * Unique identifier for a toaster. All Toasters with the same id
     * will render to the same underlying toaster. There is no guarantee
     * which will instantiate first, so they should all be passed the
     * same Toaster props
     */
    toasterId: PropTypes.string,

    /**
     * Whether a toast should acquire application focus when it first opens.
     * This is disabled by default so that toasts do not interrupt the user's
     * flow. Note that enforceFocus is always disabled for Toasters.
     */
    autoFocus: PropTypes.bool,

    /**
     * Toast position
     */
    position: PropTypes.string,

    /**
     * Whether pressing the esc key should clear all active toasts.
     */
    canEscapeKeyClear: PropTypes.bool,

    /**
     * Toasts to display
     */
    'toasts': PropTypes.any

};
