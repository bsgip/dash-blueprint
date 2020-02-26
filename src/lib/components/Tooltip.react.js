import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as BPTooltip, Classes } from "@blueprintjs/core";

Classes.TOOLTIP_INDICATOR

/**
 * A tooltip is a lightweight popover for showing additional information during hover interactions.
 */

const Tooltip = (props) => {
    const {children, ...tooltipProps} = props;
    return (
        <BPTooltip {...tooltipProps}>
            {props.children}
        </BPTooltip>
    );
};

Tooltip.defaultProps = {
};

Tooltip.propTypes = {
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
     * Indicates whether the user can interact with the element.
     */
    'disabled': PropTypes.string,

    /**
     * Whether pressing the esc key should invoke onClose.
     */
    canEscapeKeyClose: PropTypes.bool,

    /**
     * When enabled, preventDefault() is invoked on click events that close this popover, 
     * which will prevent those clicks from closing outer popovers. When disabled, 
     * clicking inside a Classes.POPOVER_DISMISS element will close the parent popover. 
     * 
     * See http://blueprintjs.com/docs/#core/components/popover.closing-on-click
     */
    captureDismiss: PropTypes.bool,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * The content that will be displayed inside of the tooltip.
     */
    content: PropTypes.string,

    /**
     * Initial opened state when uncontrolled.
     */
    defaultIsOpen: PropTypes.bool,

    /**
     * Prevents the popover from appearing when true.
     */
    disabled: PropTypes.bool,

    /**
     * Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones usePortal={false}.
     */
    enforceFocus: PropTypes.bool,

    /**
     * The amount of time in milliseconds the tooltip should remain open after the user hovers off the trigger. The timer is canceled if the user mouses over the target before it expires.
     */
    hoverCloseDelay: PropTypes.number,

    /**
     * The amount of time in milliseconds the tooltip should wait before opening after the user hovers over the trigger. The timer is canceled if the user mouses away from the target before it expires.
     */
    hoverOpenDelay: PropTypes.number,

    /**
     * Whether a popover that uses a Portal should automatically inherit the dark theme from its parent.
     */
    inheritDarkTheme: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * "hover" | "hover-target"PopoverInteractionKind.HOVER_TARGET_ONLY 
     * The kind of hover interaction that triggers the display of the tooltip. Tooltips do not support click interactions.
     */
    interactionKind: PropTypes.string,

    /**
     * Whether the popover is visible. Passing this prop puts the popover in controlled mode, where the only way to change visibility is by updating this property. If disabled={true}, this prop will be ignored, and the popover will remain closed.
     */
    isOpen: PropTypes.bool,

    /**
     * If true and usePortal={true}, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.
     */
    lazy: PropTypes.bool,

    /**
     * Whether the popover should open when its target is focused. If true, target will render with tabindex="0" to make it focusable via keyboard navigation.
     */
    openOnTargetFocus: PropTypes.bool,

    /**
     * A space-delimited string of class names applied to the popover element.
     */
    popoverClassName: PropTypes.string,

    /**
     * Space-delimited string of class names applied to the Portal element if usePortal={true}.
     */
    portalClassName: PropTypes.string,

    /**
     * The position (relative to the target) at which the popover should appear.
     * 
     * The default value of "auto" will choose the best position when opened and will allow the popover to reposition itself to remain onscreen as the user scrolls around.
     */
    position: PropTypes.string,

    /**
     * Space-delimited string of class names applied to the target element.
     */
    targetClassName: PropTypes.string,

    /**
     * HTML props to spread to target element. Use targetTagName to change the type of element rendered. Note that ref is not supported.
     */
    targetProps: PropTypes.object,

    /**
     * HTML tag name for the target element. This must be an HTML element to ensure that it supports the necessary DOM event handlers.
     * 
     * By default, a <span> tag is used so popovers appear as inline-block elements and can be nested in text. Use <div> tag for a block element.
     */
    targetTagName: PropTypes.string,

    /**
     * Indicates how long (in milliseconds) the tooltip's appear/disappear transition takes. This is used by React CSSTransition to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
     */
    transitionDuration: PropTypes.number,

    /**
     * Whether the popover should be rendered inside a Portal attached to portalContainer prop.
     * 
     * Rendering content inside a Portal allows the popover content to escape the physical bounds of its parent while still being positioned correctly relative to its target. Using a Portal is necessary if any ancestor of the target hides overflow or uses very complex positioning.
     * 
     * Not using a Portal can result in smoother performance when scrolling and allows the popover content to inherit CSS styles from surrounding elements, but it remains subject to the overflow bounds of its ancestors.
     */
    usePortal: PropTypes.bool,

    /**
     * HTML tag name for the wrapper element, which also receives the className prop.
     */
    wrapperTagName: PropTypes.string


    



};

export default Tooltip;