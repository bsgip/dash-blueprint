import React from 'react';
import PropTypes from 'prop-types';
import { Text as BPText } from "@blueprintjs/core";


const Text = (props) => {
    const {children, ...htmlProps} = props;
    return (
        <BPText {...htmlProps}>
            {children}
        </BPText>
    );
};

Text.defaultProps = {
    ellipsize: false,
    tagName: "div"
};

Text.propTypes = {
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
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Indicates that this component should be truncated with an ellipsis if it overflows 
     * its container. The title attribute will also be added when content overflows to show 
     * the full text of the children on hover.
     */
    ellipsize: PropTypes.bool,

    /**
     * HTML tag name to use for rendered element.
     */
    tagName: PropTypes.string,

};

export default Text;