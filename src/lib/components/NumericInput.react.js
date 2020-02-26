import React from 'react';
import PropTypes from 'prop-types';
import { NumericInput as BPNumericInput } from "@blueprintjs/core";


/**
 * The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
 */

export default class NumericInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(value, stringValue) {
        this.props.setProps({stringValue: stringValue});
        if (!isNaN(value)) {
            this.props.setProps({value: value});
            if (this.props.setParentProps) {
                this.props.setParentProps(value);
            }
        }
    }

    render() {
        const {setProps, value, stringValue, ...props} = this.props
        return <BPNumericInput onValueChange={this.handleChange} value={stringValue || value} {...props}/>;
    }
}

NumericInput.defaultProps = {
};

NumericInput.propTypes = {
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
     * The element should be automatically focused after the page loaded.
     */
    'autoFocus': PropTypes.string,

    /**
     * Indicates the form that is the owner of the element.
     */
    'form': PropTypes.string,

    /**
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    'formAction': PropTypes.string,

    /**
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    'name': PropTypes.string,

    /**
     * Defines the type of the element.
     */
    'type': PropTypes.string,

    /**
     * Defines a default value which will be displayed in the element on page load.
     */
    'value': PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    'title': PropTypes.string,

    /**
     * Button intent (primary/success/warning/danger/none)
     */
    'intent': PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    'setProps': PropTypes.func,

    /**
     * Whether to allow only floating-point number characters in the field, mimicking the native input[type="number"].
     */
    allowNumericCharactersOnly: PropTypes.bool,

    /**
     * "left" | "right" | "none"Position.RIGHT
     * The position of the buttons with respect to the input field.
     */
    buttonPosition: PropTypes.string,

    /**
     * Whether the value should be clamped to [min, max] on blur. The value will be clamped to each bound only if the bound is defined. Note that native input[type="number"] controls do NOT clamp on blur.
     */
    clampValueOnBlur: PropTypes.bool,

    /**
     * Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it.
     */
    disabled: PropTypes.bool,

    /**
     * Whether the numeric input should take up the full width of its container.
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
     * The increment between successive values when shift is held. Pass explicit null value to disable this interaction.
     */
    shiftSize: PropTypes.number,

    /**
     * The maximum value of the input.
     */
    max: PropTypes.number,

    /**
     * The minimum value of the input.
     */
    min: PropTypes.number,

    /**
     * The increment between successive values when alt is held. Pass explicit null value to disable this interaction.
     */
    minorStepSize: PropTypes.number,

    /**
     * The placeholder text in the absence of any value.
     */
    placeholder: PropTypes.string,

    // /**
    //  * Element to render on right side of input. For best results, use a minimal button, tag, or small spinner.
    //  */
    // rightElement: PropTypes.string,

    /**
     * Whether the entire text field should be selected on focus.
     */
    selectAllOnFocus: PropTypes.bool,

    /**
     * Whether the entire text field should be selected on increment.
     */
    selectAllOnIncrement: PropTypes.bool,

    /**
     * The increment between successive values when no modifier keys are held.
     */
    stepSize: PropTypes.number,

    /**
     * The value to display in the input field.
     */
    value: PropTypes.number,

    /**
     * The value as a number.
     */
    stringValue: PropTypes.string,



};
