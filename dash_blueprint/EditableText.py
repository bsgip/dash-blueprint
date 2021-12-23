# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class EditableText(Component):
    """An EditableText component.
EditableText appears as normal UI text but transforms into a text input field when the user focuses it.

The text input inherits all font styling from its ancestors, making for a seamless transition
 between reading and editing text.

You might use this component for inline renaming, or for an editable multiline description.
You should not use EditableText when a static always-editable <input> or <textarea> tag would suffice.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- confirmOnEnterKey (boolean; default False):
    If True and in multiline mode, the enter key will trigger
    onConfirm and mod+enter will insert a newline. If False, the key
    bindings are inverted such that enter adds a newline.

- confirmedValue (string; optional):
    The text value when input has been confirmed.

- defaultValue (boolean; optional):
    Default text value of uncontrolled input.

- disabled (boolean; default False):
    Whether the text can be edited.

- intent (string; optional):
    Visual intent color to apply to element. = \"none\" | \"primary\"
    | \"success\" | \"warning\" | \"danger\".

- isEditing (boolean; optional):
    Whether the component is currently being edited.

- maxLength (number; optional):
    Maximum number of characters allowed. Unlimited by default.

- maxLines (number; optional):
    Maximum number of lines before scrolling begins, when multiline.

- minLines (number; default 1):
    Minimum number of lines (essentially minimum height), when
    multiline.

- minWidth (number; optional):
    Minimum width in pixels of the input, when not multiline.

- multiline (boolean; default False):
    Whether the component supports multiple lines of text. This prop
    should not be changed during the component's lifetime.

- placeholder (string; default 'Click to Edit'):
    Placeholder text when there is no value.

- selectAllOnFocus (boolean; default False):
    hether the entire text field should be selected on focus. If
    False, the cursor is placed at the end of the text. This prop is
    ignored on inputs with type other then text, search, url, tel and
    password. See
    https://html.spec.whatwg.org/multipage/input.html#do-not-apply for
    details.

- type (string; optional):
    The type of input that should be shown, when not multiline.

- value (string; optional):
    Text value of controlled input."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, confirmOnEnterKey=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabled=Component.UNDEFINED, intent=Component.UNDEFINED, isEditing=Component.UNDEFINED, maxLength=Component.UNDEFINED, maxLines=Component.UNDEFINED, minLines=Component.UNDEFINED, minWidth=Component.UNDEFINED, multiline=Component.UNDEFINED, placeholder=Component.UNDEFINED, selectAllOnFocus=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, confirmedValue=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'confirmOnEnterKey', 'confirmedValue', 'defaultValue', 'disabled', 'intent', 'isEditing', 'maxLength', 'maxLines', 'minLines', 'minWidth', 'multiline', 'placeholder', 'selectAllOnFocus', 'type', 'value']
        self._type = 'EditableText'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'confirmOnEnterKey', 'confirmedValue', 'defaultValue', 'disabled', 'intent', 'isEditing', 'maxLength', 'maxLines', 'minLines', 'minWidth', 'multiline', 'placeholder', 'selectAllOnFocus', 'type', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(EditableText, self).__init__(children=children, **args)
