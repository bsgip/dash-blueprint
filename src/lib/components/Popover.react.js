import React from 'react';
import PropTypes from 'prop-types';
import { Popover as BPPopover, PopoverInteractionKind} from "@blueprintjs/core";
// import {Alignment} from '@blueprintjs/core/src/common/alignment';

/*
Hopefully fix blurry popover rendering on Chrome
See https://github.com/palantir/blueprint/issues/394 for details
 */
BPPopover.defaultProps.modifiers = { computeStyle: { gpuAcceleration: false } };


/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */

const Popover = (props) => {
    return (

        <BPPopover {...props} >
            {props.children}
        </BPPopover>
    );
};

Popover.defaultProps = {
    boundary: "scrollParent",
    captureDismiss: false,
    defaultIsOpen: false,
    disabled: false,
    hasBackdrop: false,
    hoverCloseDelay: 300,
    hoverOpenDelay: 150,
    inheritDarkTheme: true,
    interactionKind: PopoverInteractionKind.CLICK,
    minimal: false,
    modifiers: {},
    openOnTargetFocus: true,
    position: "auto",
    targetTagName: "span",
    transitionDuration: 300,
    usePortal: true,
    wrapperTagName: "span",
};

Popover.propTypes = {
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
    vertical: PropTypes.bool,

    /**
     * Popover content
     */
    content: PropTypes.node,

    /**
     * boundary
     */
    boundary: PropTypes.string,

    /**
     *
     */
    captureDismiss: PropTypes.bool,
    defaultIsOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    hasBackdrop: PropTypes.bool,
    hoverCloseDelay: PropTypes.number,
    hoverOpenDelay: PropTypes.number,
    inheritDarkTheme: PropTypes.bool,
    interactionKind: PropTypes.string,
    modifiers: PropTypes.any,
    openOnTargetFocus: PropTypes.bool,
    position: PropTypes.string,
    targetTagName: PropTypes.string,
    transitionDuration: PropTypes.number,
    usePortal: PropTypes.bool,
    wrapperTagName: PropTypes.string,
};

export default Popover;