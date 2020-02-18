import React from 'react';
import PropTypes from 'prop-types';
// import { BLOCKQUOTE, CODE, CODE_BLOCK, HEADING, LABEL, LIST } from "@blueprintjs/core";

// These should be the only 2 lines that require modification.
// Dash seems to require everything explicitly declared within this file
// const HEADING = `bp3-heading`
const elementType = `bp3-heading`;
const elementClass = "h4";


const elem = (props) => {
    const { className, elementRef, ...htmlProps } = props;
        return React.createElement(elementClass, {
            ...htmlProps,
            className: elementType + (className ? " " + className : ""),
            ref: elementRef,
        });
};

elem.defaultProps = {
    className: "",
};

elem.propTypes = {
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
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

};

export default elem;