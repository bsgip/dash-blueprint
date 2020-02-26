import React from 'react';
import PropTypes from 'prop-types';
import { Tag as BPTag } from "@blueprintjs/core";

/**
 * Tags are great for lists of strings.
 * @param {*} props 
 */

const Tag = (props) => {
    const {children, ...htmlProps} = props;
    return (
        <BPTag {...htmlProps}>
            {children}
        </BPTag>
    );
};

Tag.defaultProps = {
};

Tag.propTypes = {
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
     * Whether the tag should appear in an active state.
     */
    active: PropTypes.bool,

    /**
     * Whether the tag should take up the full width of its container.
     */
    fill: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon (or an icon element) to render before the children.
     */
    icon: PropTypes.string,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * Whether this tag should use large styles.
     */
    large: PropTypes.bool,

    /**
     * Whether this tag should use minimal styles.
     */
    minimal: PropTypes.bool,

    /**
     * Whether tag content should be allowed to occupy multiple lines. If false, a single line of 
     * text will be truncated with an ellipsis if it overflows. Note that icons will 
     * be vertically centered relative to multiline text.
     */
    multiline: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon (or an icon element) to render after the children.
     */
    rightIcon: PropTypes.string,

    /**
     * Whether this tag should have rounded ends.
     */
    round: PropTypes.bool,

};

export default Tag;