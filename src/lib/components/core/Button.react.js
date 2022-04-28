import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button as BPButton} from '@blueprintjs/core';

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button. If you don't care about styling, you should probably
 * use the dash version.
 *
 * TODO - it would be useful to have a href prop here, where clicking a button routes to
 * a different URL
 * @param props
 * @returns {*}
 * @constructor
 */

const Button = (props) => {
    const {
        setProps,
        showLoadingOnClick,
        children,
        loading,
        ...buttonProps
    } = props;
    const [isLoading, setLoadingState] = useState(loading);
    return (
        <BPButton
            onClick={(e) => {
                e.stopPropagation();
                if (props.setProps) {
                    props.setProps({
                        n_clicks: props.n_clicks + 1,
                        n_clicks_timestamp: Date.now(),
                    });
                }
                if (props.href) {
                    // prevent anchor from updating location
                    e.preventDefault();
                    var {href, refresh} = props;
                    if (props.preserveSearchString) {
                        href = href + window.location.search;
                    }
                    console.log({...window.location});
                    if (refresh) {
                        console.log(window.location.pathname);
                        window.location.pathname = href;
                        // this.props.active = true;
                    } else {
                        window.history.pushState({}, '', href);
                        window.dispatchEvent(
                            new CustomEvent('_dashprivate_pushstate')
                        );
                    }
                    // scroll back to top
                    window.scrollTo(0, 0);
                }
                showLoadingOnClick && setLoadingState(true);
                // Remove after 5 seconds
                setTimeout(() => setLoadingState(false), 5000);
            }}
            {...buttonProps}
            loading={isLoading}
        >
            {children}
        </BPButton>
    );
};

Button.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
    showLoadingOnClick: false,
};

Button.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    n_clicks: PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    n_clicks_timestamp: PropTypes.number,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,

    /**
     * The ARIA role attribute
     */
    role: PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: PropTypes.string,

    /**
     * Indicates whether the user can interact with the element.
     */
    disabled: PropTypes.string,

    /**
     * Indicates the form that is the owner of the element.
     */
    form: PropTypes.string,

    /**
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    formAction: PropTypes.string,

    /**
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: PropTypes.string,

    /**
     * Defines the type of the element.
     */
    type: PropTypes.string,

    /**
     * Defines a default value which will be displayed in the element on page load.
     */
    value: PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    accessKey: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    contentEditable: PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    contextMenu: PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    dir: PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    draggable: PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    hidden: PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    lang: PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    spellCheck: PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    tabIndex: PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    title: PropTypes.string,

    /**
     * Button intent (primary/success/warning/danger/none)
     */
    intent: PropTypes.string,

    /**
     * Button intent (primary/success/warning/danger/none)
     */
    icon: PropTypes.string,

    /**
     * If set to true, the button will display in an active state. This is equivalent to setting className={Classes.ACTIVE}.
     */
    active: PropTypes.bool,

    /**
     * Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.
     * Choice of (`left`, `right`, `center`)
     */
    alignText: PropTypes.string,

    /**
     * Whether this action is non-interactive.
     */
    disabled: PropTypes.bool,

    /**
     * Whether this button should use large styles.
     */
    large: PropTypes.bool,

    /**
     * Whether this button should use minimal styles.
     */
    minimal: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon (or an icon element) to render after the text.
     */
    rightIcon: PropTypes.string,

    /**
     * Whether this button should use small styles.
     */
    small: PropTypes.bool,

    /**
     * HTML type attribute of button. Accepted values are "button", "submit", and "reset". Note that this prop has no effect on AnchorButton; it only affects Button.
     * "submit" | "reset" | "button"
     */
    type: PropTypes.string,

    /**
     * window location to set on click
     */
    href: PropTypes.string,

    /**
     * If selected, the button will revert to 'loading' when clicked.
     * An action must be taken to remove it from this state (for example, the contents replaced)
     */
    showLoadingOnClick: PropTypes.bool,
};

export default Button;