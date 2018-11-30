import { Button, Position, Toast, Toaster } from "@blueprintjs/core";
import PropTypes from 'prop-types';
import * as React from "react";

export default class MyToaster extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addToast = this.addToast.bind(this);

    }
    state = { toasts: [ /* IToastProps[] */ ] }

    // toaster: Toaster;
    refHandlers = {
        toaster: (ref) => this.toaster = ref,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('toaster updated!');
        console.log(prevProps);
        console.log(this.props)
    }


    render() {
        console.log(this);
        console.log(this.state);
        return (
            <div>
                <Button onClick={this.addToast} text="Procure toast" />
                <Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster}>
                    {this.state.toasts.map(toast => <Toast {...toast} />)}
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
