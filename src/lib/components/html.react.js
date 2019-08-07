import React from 'react';
import PropTypes from 'prop-types';
// import { classNames } from "classnames";
// import { BLOCKQUOTE, CODE, CODE_BLOCK, HEADING, LABEL, LIST } from "@blueprintjs/core"

const BLOCKQUOTE = `bp3-blockquote`;
const CODE = `bp3-code`;
const CODE_BLOCK = `bp3-code-block`;
const HEADING = `bp3-heading`;
const LIST = `bp3-list`;
const LIST_UNSTYLED = `bp3-list-unstyled`;
const RTL = `bp3-rtl`;

function htmlElement(tagName, tagClassName) {
    return props => {
        console.log(props);
        console.log('rendering x');
        console.log(tagClassName);
        const { className, elementRef, ...htmlProps } = props;
            return React.createElement(tagName, {
                ...htmlProps,
                // className: classNames(HEADING, className),
                className: tagClassName + (className ? " " + className : ""),
                ref: elementRef,
            });
    }
};

function htmlDashElement(tagName, tagClassName) {
    const func = htmlElement(tagName, tagClassName);
    func.defaultProps = {
        className: "",
    };
    func.propTypes = {
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
}
