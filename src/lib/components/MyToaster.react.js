import { Button, Position, Toast, Toaster } from "@blueprintjs/core";
import PropTypes from 'prop-types';
import * as React from "react";

// TODO Remove cruft from here for testing and get a minimal example working


export default class MyToaster extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addToast = this.addToast.bind(this);

    }

    AppToaster = Toaster.create({
        className: "recipe-toaster",
        position: Position.TOP,

    });

    state = { toasts: [ /* IToastProps[] */ ] }

    // toaster: Toaster;
    refHandlers = {
        toaster: (ref) => this.toaster = ref,
    };

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
        console.log('toaster updated!');
        console.log(prevProps);
        console.log(this.props);
        this.props.toasts.map(toast => {
            if (toast.action) {
                toast.action.onClick = (e) => {this.updateLocation(e, '/toasted')}
            }
            this.AppToaster.show(toast)
        });
    }


    render() {
        console.log(this);
        console.log(this.state);
        return (
            <div>
                <Button onClick={this.addToast} text="Procure toast" />
                <Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster}>
                    {this.toasts? this.props.toasts.map(toast => <Toast {...toast} />): null}
                </Toaster>
            </div>
        )
    }

    addToast() {
            this.toaster.show({ message: "Toasted!" });
        }
    }


MyToaster.defaultProps = {
    // TODO
    toasts: [],
};

MyToaster.propTypes = {
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
     * Toasts to display
     */
    'toasts': PropTypes.any

};
