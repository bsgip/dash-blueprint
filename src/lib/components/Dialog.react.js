import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as BPDialog } from "@blueprintjs/core";

/**
 * Blueprint Dialog box for Dash
 * 
 * https://blueprintjs.com/docs/#core/components/dialog.dialog
 * 
 * @param props
 * @returns {*}
 * @constructor
 */

const Dialog = (props) => {
    const {setProps, children, isOpen, ...dialogProps} = props;
    let isDialogOpen;
    let setIsOpen;
    if (!setProps) {
        [isDialogOpen, setIsOpen] = React.useState(isOpen);
    }
    
    console.log("rendering as " + isDialogOpen);
    return <BPDialog 
        {...dialogProps} 
        isOpen={setProps ? isOpen : isDialogOpen}
        // onClose={React.useCallback(() => setIsOpen(false), [])}
        onClose={() => setProps ? setProps({isOpen: false}) : setIsOpen(false)}
    >
        {children}
    </BPDialog>

};

Dialog.defaultProps = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isCloseButtonShown: true,
    isOpen: true,
    lazy: true,
    shouldReturnFocusOnClose: true,
    transitionDuration: 300,
    usePortal: true
};

Dialog.propTypes = {
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
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * Whether the overlay should acquire application focus when it first opens.
     */
    autoFocus: PropTypes.bool,

    /**
     * CSS class names to apply to backdrop element.
     */
    backdropClassName: PropTypes.string,

    /**
     * HTML props for the backdrop element.
     */
    backdropProps: PropTypes.object,

    /**
     * Whether pressing the esc key should invoke onClose.
     */
    canEscapeKeyClose: PropTypes.bool,

    /**
     * Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke onClose.
     */
    canOutsideClickClose: PropTypes.bool,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones usePortal={false}.
     */
    enforceFocus: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon to render in the dialog's header. Note that the header will only be rendered if title is provided.
     */
    icon: PropTypes.string,

    /**
     * Whether to show the close button in the dialog's header. Note that the header will only be rendered if title is provided.
     */
    isCloseButtonShown: PropTypes.bool,

    /**
     * Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.
     */
    isOpen: PropTypes.bool.isRequired,

    /**
     * If true and usePortal={true}, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.
     */
    lazy: PropTypes.bool,

    /**
     * Space-delimited string of class names applied to the Portal element if usePortal={true}.
     */
    portalClassName: PropTypes.string,

    /**
     * Whether the application should return focus to the last active element in the document after this overlay closes.
     */
     shouldReturnFocusOnClose: PropTypes.bool,

    /**
     * CSS styles to apply to the dialog.
     */
    style: PropTypes.object,

    /**
     * Title of the dialog. If provided, an element with Classes.DIALOG_HEADER will be rendered inside the dialog before any children elements.
     */
    title: PropTypes.string,

    /**
     * Indicates how long (in milliseconds) the overlay's enter/leave transition takes. This is used by React CSSTransition to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
     */
     transitionDuration: PropTypes.number,

     /**
      * Name of the transition for internal CSSTransition. Providing your own name here will require defining new CSS transition properties.
      */
     transitionName: PropTypes.string,

     /**
      * Whether the overlay should be wrapped in a Portal, which renders its contents in a new element attached to portalContainer prop.
      * 
      * This prop essentially determines which element is covered by the backdrop: if false, then only its parent is covered; otherwise, the entire page is covered (because the parent of the Portal is the <body> itself).
      * 
      * Set this prop to false on nested overlays (such as Dialog or Popover) to ensure that they are rendered above their parents.
      */
     usePortal: PropTypes.bool,

};

export default Dialog;