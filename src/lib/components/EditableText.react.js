import React from 'react';
import PropTypes from 'prop-types';
import { EditableText as BPEditableText } from "@blueprintjs/core";

/**
 * EditableText appears as normal UI text but transforms into a text input field when the user focuses it.
 * 
 * The text input inherits all font styling from its ancestors, making for a seamless transition
 *  between reading and editing text.
 * 
 * You might use this component for inline renaming, or for an editable multiline description.
 * You should not use EditableText when a static always-editable <input> or <textarea> tag would suffice.
 */

export default class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }


    handleChange(value) {
        if (this.props.setProps) {
            this.props.setProps({value: value});
        } else {
            this.setState({value: value});
        }
        if (this.props.setParentProps) {
            this.props.setParentProps(value);
        }
    }

    handleConfirm(value) {
        if (this.props.setProps) {
            this.props.setProps({confirmedValue: value});
        } else {
            this.setState({confirmedValue: value});
        }
        // if (this.props.setParentProps) {
        //     this.props.setParentProps({confirmedValue: checked})
        // }
    }


    render() {
        return (<BPEditableText 
        onChange={this.handleChange} 
        onConfirm={this.handleConfirm}
        {...this.props}>
                </BPEditableText>);
    }
}

EditableText.defaultProps = {
    confirmOnEnterKey: false,
    disabled: false,
    minLines: 1,
    multiline: false,
    placeholder: "Click to Edit",
    selectAllOnFocus: false,
};

EditableText.propTypes = {
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
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    'setProps': PropTypes.func,

    /**
     * If true and in multiline mode, the enter key will trigger onConfirm and mod+enter will insert a newline. If false, the key bindings are inverted such that enter adds a newline.
     */
    confirmOnEnterKey: PropTypes.bool,

    /**
     * Default text value of uncontrolled input.
     */
    defaultValue: PropTypes.bool,

    /**
     * Whether the text can be edited.
     */
    disabled: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     * = "none"
| "primary"
| "success"
| "warning"
| "danger"
     */
    intent: PropTypes.string,

    /**
     * Whether the component is currently being edited.
     */
    isEditing: PropTypes.bool,

    /**
     * Maximum number of characters allowed. Unlimited by default.
     */
    maxLength: PropTypes.number,

    /**
     * Maximum number of lines before scrolling begins, when multiline.
     */
    maxLines: PropTypes.number,

    /**
     * Minimum number of lines (essentially minimum height), when multiline.
     */
    minLines: PropTypes.number,

    /**
     * Minimum width in pixels of the input, when not multiline.
     */
    minWidth: PropTypes.number,

    /**
     * Whether the component supports multiple lines of text. This prop should not be changed during the component's lifetime.
     */
    multiline: PropTypes.number,

    /**
     * Placeholder text when there is no value.
     */
    placeholder: PropTypes.string,

    /**
     * hether the entire text field should be selected on focus. If false, the cursor is placed at the end of the text. This prop is ignored on inputs with type other then text, search, url, tel and password. See https://html.spec.whatwg.org/multipage/input.html#do-not-apply for details.
     */
    selectAllOnFocus: PropTypes.bool,

    /**
     * The type of input that should be shown, when not multiline.
     */
    type: PropTypes.string,

    /**
     * Text value of controlled input.
     */
    value: PropTypes.string,

    /**
     * The text value when input has been confirmed.
     */
    confirmedValue: PropTypes.string,

};
