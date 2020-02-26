import React from 'react';
import PropTypes from 'prop-types';

const BLOCKQUOTE = `bp3-blockquote`;
const CODE = `bp3-code`;
const CODE_BLOCK = `bp3-code-block`;
const HEADING = `bp3-heading`;
const LIST = `bp3-list`;
const LIST_UNSTYLED = `bp3-list-unstyled`;
const RTL = `bp3-rtl`;

const H1 = (props) => {
    const { className, elementRef, ...htmlProps } = props;
        return React.createElement("h1", {
            ...htmlProps,
            // className: classNames(HEADING, className),
            className: HEADING + (className ? " " + className : ""),
            ref: elementRef,
        });
};


H1.defaultProps = {
    className: "",
};

H1.propTypes = {
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

export default H1;