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
        this.handleShowHide = this.handleShowHide.bind(this);

    }


    handleShowHide() {
        this.props.setProps({isOpen: !this.props.isOpen});
    }


    render() {
        // TODO Handle props more consistently 
        const { children, ...htmlProps } = this.props;
        return (
            <React.Fragment>
                <Button id={this.props.id + "-button"} key={this.props.key + "-key"}
                    text={this.props.isOpen ? this.props.hideText : this.props.showText} 
                    icon={this.props.isOpen ? this.props.hideIcon : this.props.showIcon}
                    minimal={this.props.minimal} 
                    onClick={this.handleShowHide}
                />
                <BPCollapse id={this.props.id} key={this.props.key}
                    isOpen={this.props.isOpen} 
                    transitionDuration={this.props.transitionDuration} 
                    keepChildrenMounted={this.props.keepChildrenMounted}
                >
                    { children }
                </BPCollapse>    
            </React.Fragment>);
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
