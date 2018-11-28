import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as BPMenuItem} from "@blueprintjs/core";
// import {Alignment} from '@blueprintjs/core/src/common/alignment';



/*
 * event polyfill for IE
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
function CustomEvent(event, params) {
    // eslint-disable-next-line no-param-reassign
    params = params || {
        bubbles: false,
        cancelable: false,
        // eslint-disable-next-line no-undefined
        detail: undefined,
    };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
    );
    return evt;
}
CustomEvent.prototype = window.Event.prototype;


/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(e) {
        console.log('updating location!');
        // prevent anchor from updating location
        e.preventDefault();
        const {href, refresh} = this.props;
        if (refresh) {
            window.location.pathname = href;
        } else {
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('onpushstate'));
        }
        // scroll back to top
        window.scrollTo(0, 0);
    }

    render() {
        // const {className, style, id, href} = this.props;
        /*
        * ideally, we would use cloneElement however
        * that doesn't work with dash's recursive
        * renderTree implementation for some reason
        */
        const { children, ...htmlProps } = this.props;
        console.log(this.props);
        console.log('rendering menu item');
        console.log(htmlProps);
        return (
            <BPMenuItem onClick={e => this.updateLocation(e)}
                        {...htmlProps} >
                {children}
            </BPMenuItem>
        );
    }
}

MenuItem.defaultProps = {
    // TODO
    // boundary: "scrollParent",
    // captureDismiss: false,
    // defaultIsOpen: false,
    // disabled: false,
    // hasBackdrop: false,
    // hoverCloseDelay: 300,
    // hoverOpenDelay: 150,
    // inheritDarkTheme: true,
    // interactionKind: PopoverInteractionKind.CLICK,
    // minimal: false,
    // modifiers: {},
    // openOnTargetFocus: true,
    // position: "auto",
    // targetTagName: "span",
    // transitionDuration: 300,
    // usePortal: true,
    // wrapperTagName: "span",
};

MenuItem.propTypes = {
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
    text: PropTypes.string,

    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    href: PropTypes.string,

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
    content: PropTypes.node

    // boundary: "scrollParent",
    // captureDismiss: false,
    // defaultIsOpen: false,
    // disabled: false,
    // hasBackdrop: false,
    // hoverCloseDelay: 300,
    // hoverOpenDelay: 150,
    // inheritDarkTheme: true,
    // interactionKind: PopoverInteractionKind.CLICK,
    // minimal: false,
    // modifiers: {},
    // openOnTargetFocus: true,
    // position: "auto",
    // targetTagName: "span",
    // transitionDuration: 300,
    // usePortal: true,
    // wrapperTagName: "span",
};

// export default MenuItem;