import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as BPButtonGroup} from "@blueprintjs/core";
// import {Alignment} from '@blueprintjs/core/src/common/alignment';

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */

const ButtonGroup = (props) => {
    const { children, ...htmlProps } = props;
    return (

        <BPButtonGroup {...htmlProps} >
            {children}
        </BPButtonGroup>
    );
};

ButtonGroup.defaultProps = {

};

ButtonGroup.propTypes = {
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
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    alignText: PropTypes.string,

    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill: PropTypes.bool,

    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal: PropTypes.bool,

    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large: PropTypes.bool,

    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical: PropTypes.bool

};

export default ButtonGroup;