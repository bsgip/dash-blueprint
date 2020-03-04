import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as BPMenuItem, Icon} from "@blueprintjs/core";


/*
 * event polyfill for IE
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
export function CustomEvent(event, params) {
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
 * A MenuItem is a single interactive item in a Menu.
 * 
 * This component renders an <li> containing an <a>. Make the MenuItem interactive by providing the href, target, and onClick props as necessary.
 * 
 * Create submenus by nesting MenuItems inside each other as children. Use the required text prop for MenuItem content.
 * 
 * We also override the onClick
 * method to make it behave like a dash Link rather than a regular URL.
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
        /**
         * This is basically lifted from the dcc.Link component, with the
         * added feature that using the meta key escapes the dash location
         * update. This can be handy to allow open in new tab.
         */
        if (!e.metaKey) {
          // prevent anchor from updating location
          e.preventDefault();
          var {href, refresh} = this.props;
          if (this.props.preserveSearchString) {
              href = href + window.location.search;
          }
          if (refresh) {
            window.location.pathname = href;
            // this.props.active = true;
          } else {
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
          }
          // scroll back to top
          window.scrollTo(0, 0);
        }

    }

    render() {
        // const {className, style, id, href} = this.props;
        /*
        * ideally, we would use cloneElement however
        * that doesn't work with dash's recursive
        * renderTree implementation for some reason
        */
        const { children, icon, iconSize, ...htmlProps } = this.props;
        if (icon) {

        }
        return (
            <BPMenuItem onClick={e => this.updateLocation(e)}
                        popoverProps={{modifiers: {computeStyle: {gpuAcceleration: false}}}}
                        {...htmlProps} 
                        icon={icon ? <Icon icon={icon} iconSize={iconSize}></Icon> : null}
                        
                        >
                {children}
            </BPMenuItem>
        );
    }
}

MenuItem.defaultProps = {
    preserveSearchString: false
};

MenuItem.propTypes = {
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
    content: PropTypes.node,

    /**
     * Icon to display
     */
    icon: PropTypes.string,

    /**
     * Size of the icon
     */
    iconSize: PropTypes.number,

    /**
     * Whether this menu item should appear with an active state.
     */
    active: PropTypes.bool,

    /**
     * Whether this menu item is non-interactive. Enabling this prop will ignore href, tabIndex, and mouse event handlers (in particular click, down, enter, leave).
     */
    disabled: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * A space-delimited list of class names to pass along to the right-aligned label wrapper element.
     */
    labelClassName: PropTypes.string,

    /**
     * Whether the text should be allowed to wrap to multiple lines. If false, text will be truncated with an ellipsis when it reaches max-width.
     */
    multiline: PropTypes.bool,

    /**
     * Props to spread to Popover. Note that content and minimal cannot be changed and usePortal defaults to false so all submenus will live in the same container.
     */
    popoverProps: PropTypes.object,

    /**
     * Whether an enabled item without a submenu should automatically close its parent popover when clicked.
     */
    shouldDismissPopover: PropTypes.bool,

    /**
     * Name of the HTML tag that wraps the MenuItem.
     */
    tagName: PropTypes.string,

    /**
     * A space-delimited list of class names to pass along to the text wrapper element.
     */
    textClassName: PropTypes.string,

    /**
     * Whether to preserve search string on href update. When true, a link from
     * /foo?bar= will redirect to /new-url?bar=
     */
    preserveSearchString: PropTypes.bool

};
