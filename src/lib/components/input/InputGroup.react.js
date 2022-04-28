import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {InputGroup as BPInputGroup} from '@blueprintjs/core';

/**
 * An input group allows you to add icons and buttons within a text input to expand its functionality.
 * For example, you might use an input group to build a visibility toggle for a password field.
 *
 * Note: this implementation only allows for icons to be used, and provides no interactive
 * functionality
 */
const InputGroup = (props) => {
    const {
        setProps,
        setParentProps,
        value,
        required,
        valid,
        ...inputGroupProps
    } = props;
    const [valueState, setValueState] = useState(value);

    const handleChange = (event) => {
        console.log(event);
        console.log(event.target.value);
        const isValid =
            !required ||
            !!(event.target.value && event.target.value.length > 0);
        setProps
            ? setProps({value: event.target.value, valid: isValid})
            : setValueState(event.target.value);
        setParentProps && setParentProps(event.target.value, isValid);
    };

    useEffect(() => {
        const isValid = !required || !!(value && value.length > 0);
        setProps && setProps({valid: isValid});
        setParentProps && setParentProps(value, isValid);
    }, []);

    return (
        <BPInputGroup
            onChange={handleChange}
            value={setProps ? value : valueState}
            {...inputGroupProps}
        />
    );
};

InputGroup.defaultProps = {
    value: '', // Must take an initial value to be a controlled input
};

InputGroup.propTypes = {
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
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,

    /**
     * Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it.
     */
    disabled: PropTypes.bool,

    /**
     * Whether the component should take up the full width of its container.
     */
    fill: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * If set to true, the input will display with larger styling. This is equivalent to setting Classes.LARGE via className on the parent control group and on the child input group.
     */
    large: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon (or an icon element) to render on the left side of input.
     */
    leftIcon: PropTypes.string,

    /**
     * The placeholder text in the absence of any value.
     */
    placeholder: PropTypes.string,

    // /**
    //  * Element to render on right side of input. For best results, use a minimal button, tag, or small spinner.
    //  */
    // rightElement: PropTypes.string,

    /**
     * Whether the input (and any buttons) should appear with rounded caps.
     */
    round: PropTypes.bool,

    /**
     * Whether this input should use small styles.
     */
    small: PropTypes.bool,

    /**
     * HTML input type attribute.
     */
    type: PropTypes.string,

    /**
     * The value to display in the input field.
     */
    value: PropTypes.string,

    /**
     * Whether this input is required. Used in form validation
     */
    required: PropTypes.bool,

    /**
     * Determine whether the input is valid. Used in form validation
     */
    valid: PropTypes.bool,
};

export default InputGroup;