# AUTO GENERATED FILE - DO NOT EDIT

export editabletext

"""
    editabletext(;kwargs...)
    editabletext(children::Any;kwargs...)
    editabletext(children_maker::Function;kwargs...)


An EditableText component.
EditableText appears as normal UI text but transforms into a text input field when the user focuses it.

The text input inherits all font styling from its ancestors, making for a seamless transition
 between reading and editing text.

You might use this component for inline renaming, or for an editable multiline description.
You should not use EditableText when a static always-editable <input> or <textarea> tag would suffice.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `confirmOnEnterKey` (Bool; optional): If true and in multiline mode, the enter key will trigger onConfirm and mod+enter will insert a newline. If false, the key bindings are inverted such that enter adds a newline.
- `confirmedValue` (String; optional): The text value when input has been confirmed.
- `defaultValue` (Bool; optional): Default text value of uncontrolled input.
- `disabled` (Bool; optional): Whether the text can be edited.
- `intent` (String; optional): Visual intent color to apply to element.
= "none" | "primary" | "success" | "warning" | "danger"
- `isEditing` (Bool; optional): Whether the component is currently being edited.
- `maxLength` (Real; optional): Maximum number of characters allowed. Unlimited by default.
- `maxLines` (Real; optional): Maximum number of lines before scrolling begins, when multiline.
- `minLines` (Real; optional): Minimum number of lines (essentially minimum height), when multiline.
- `minWidth` (Real; optional): Minimum width in pixels of the input, when not multiline.
- `multiline` (Bool; optional): Whether the component supports multiple lines of text. This prop should not be changed during the component's lifetime.
- `placeholder` (String; optional): Placeholder text when there is no value.
- `selectAllOnFocus` (Bool; optional): hether the entire text field should be selected on focus. If false, the cursor is placed at the end of the text. This prop is ignored on inputs with type other then text, search, url, tel and password. See https://html.spec.whatwg.org/multipage/input.html#do-not-apply for details.
- `type` (String; optional): The type of input that should be shown, when not multiline.
- `value` (String; optional): Text value of controlled input.
"""
function editabletext(; kwargs...)
        available_props = Symbol[:children, :id, :className, :confirmOnEnterKey, :confirmedValue, :defaultValue, :disabled, :intent, :isEditing, :maxLength, :maxLines, :minLines, :minWidth, :multiline, :placeholder, :selectAllOnFocus, :type, :value]
        wild_props = Symbol[]
        return Component("editabletext", "EditableText", "dash_blueprint", available_props, wild_props; kwargs...)
end

editabletext(children::Any; kwargs...) = editabletext(;kwargs..., children = children)
editabletext(children_maker::Function; kwargs...) = editabletext(children_maker(); kwargs...)

