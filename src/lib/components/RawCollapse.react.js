import React from 'react';
import PropTypes from 'prop-types';
import { Collapse as BPCollapse, Button } from "@blueprintjs/core";

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */


export default class Collapse extends React.Component {
    constructor(props) {
        super(props);

    }

    static getDerivedStateFromProps(props, state) {
        console.log('in get derived state');
        console.log(props);
        console.log(state);
    }

    componentWillReceiveProps({ isOpen }) {
        console.log('received new state for isOpen');
        this.setState({ isOpen });
        
    }

    render() {
        // TODO Handle props more consistently 
        const { children, ...htmlProps } = this.props;
        console.log('rendering raw collapse component');
        return (
                <BPCollapse id={this.props.id} key={this.props.key}
                    isOpen={this.props.isOpen} 
                    transitionDuration={this.props.transitionDuration} 
                    keepChildrenMounted={this.props.keepChildrenMounted}
                >
                    { children }
                </BPCollapse>
                );
    }
}

Collapse.defaultProps = {
    minimal: true,
    transitionDuration: 200,
    keepChildrenMounted: false,
    showIcon: "small-plus",
    hideIcon: "small-minus",
    isOpen: false,
};

Collapse.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * Show a minimal button
     */
    'minimal': PropTypes.bool,

    /**
     * Text to display for show button
     */
    'showText': PropTypes.string,

    /**
     * Icon to display for show button
     */
    'showIcon': PropTypes.string,

    /**
     * Text to display for hide button
     */
    'hideText': PropTypes.string,

    /**
     * Icon to display for hide button
     */
    'hideIcon': PropTypes.string,

    /**
     * Whether content is shown initially
     */
    'isOpen': PropTypes.bool,

    /**
     * Whether the child components will remain mounted when the Collapse is closed. 
     * Setting to true may improve performance by avoiding re-mounting children.
     */
    keepChildrenMounted: PropTypes.bool,

    /**
     * The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. 
     * Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
     */
    transitionDuration: PropTypes.number,

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
};
