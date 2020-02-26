import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as BPDrawer } from "@blueprintjs/core";
// import {Alignment} from '@blueprintjs/core/src/common/alignment';

/*
Hopefully fix blurry popover rendering on Chrome
See https://github.com/palantir/blueprint/issues/394 for details
 */
// BPPopover.defaultProps.modifiers = { computeStyle: { gpuAcceleration: false } };


export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // TODO I don't think this is necessary, but need to test before removing
        this.state = {};

    }

    handleOpen() {
        this.props.setProps({isOpen: true});
    }

    handleClose() {
        this.props.setProps({isOpen: false});
    }

    render() {
        return (
            <BPDrawer onClose={this.handleClose}
                    
                    hasBackdrop={true}
                    {...this.props} >
                {this.props.children}
            </BPDrawer>
        );
    };
}

Drawer.defaultProps = {
    autoFocus: true,
    isOpen: false,
};

Drawer.propTypes = {
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
     * Whether the overlay should acquire application focus when it first opens.
     */
    autoFocus: PropTypes.bool,

    /**
     * Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.
     */
    isOpen: PropTypes.bool,

    title: PropTypes.string,
};
