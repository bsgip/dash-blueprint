# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NumericInput(Component):
    """A NumericInput component.
The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- accessKey (string; optional):
    Defines a keyboard shortcut to activate or add focus to the
    element.

- allowNumericCharactersOnly (boolean; optional):
    Whether to allow only floating-point number characters in the
    field, mimicking the native input[type=\"number\"].

- aria-* (string; optional):
    A wildcard aria attribute.

- autoFocus (string; optional):
    The element should be automatically focused after the page loaded.

- buttonPosition (string; optional):
    \"left\" | \"right\" | \"none\"Position.RIGHT The position of the
    buttons with respect to the input field.

- clampValueOnBlur (boolean; optional):
    Whether the value should be clamped to [min, max] on blur. The
    value will be clamped to each bound only if the bound is defined.
    Note that native input[type=\"number\"] controls do NOT clamp on
    blur.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- contentEditable (string; optional):
    Indicates whether the element's content is editable.

- contextMenu (string; optional):
    Defines the ID of a <menu> element which will serve as the
    element's context menu.

- data-* (string; optional):
    A wildcard data attribute.

- dir (string; optional):
    Defines the text direction. Allowed values are ltr (Left-To-Right)
    or rtl (Right-To-Left).

- disabled (boolean; optional):
    Whether the input is non-interactive. Note that rightElement must
    be disabled separately; this prop will not affect it.

- draggable (string; optional):
    Defines whether the element can be dragged.

- fill (boolean; optional):
    Whether the numeric input should take up the full width of its
    container.

- form (string; optional):
    Indicates the form that is the owner of the element.

- formAction (string; optional):
    Indicates the action of the element, overriding the action defined
    in the <form>.

- hidden (string; optional):
    Prevents rendering of given element, while keeping child elements,
    e.g. script elements, active.

- intent (string; optional):
    Button intent (primary/success/warning/danger/none).

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- lang (string; optional):
    Defines the language used in the element.

- large (boolean; optional):
    If set to True, the input will display with larger styling. This
    is equivalent to setting Classes.LARGE via className on the parent
    control group and on the child input group.

- leftIcon (string; optional):
    Name of a Blueprint UI icon (or an icon element) to render on the
    left side of input.

- max (number; optional):
    The maximum value of the input.

- min (number; optional):
    The minimum value of the input.

- minorStepSize (number; optional):
    The increment between successive values when alt is held. Pass
    explicit None value to disable this interaction.

- name (string; optional):
    Name of the element. For example used by the server to identify
    the fields in form submits.

- placeholder (string; optional):
    The placeholder text in the absence of any value.

- required (boolean; default False):
    Whether this input is required. Used in form validation.

- role (string; optional):
    The ARIA role attribute.

- selectAllOnFocus (boolean; optional):
    Whether the entire text field should be selected on focus.

- selectAllOnIncrement (boolean; optional):
    Whether the entire text field should be selected on increment.

- shiftSize (number; optional):
    The increment between successive values when shift is held. Pass
    explicit None value to disable this interaction.

- spellCheck (string; optional):
    Indicates whether spell checking is allowed for the element.

- stepSize (number; optional):
    The increment between successive values when no modifier keys are
    held.

- stringValue (string; optional):
    The value as a number.

- style (dict; optional):
    Defines CSS styles which will override styles previously set.

- tabIndex (string; optional):
    Overrides the browser's default tab order and follows the one
    specified instead.

- title (string; optional):
    Text to be displayed in a tooltip when hovering over the element.

- type (string; optional):
    Defines the type of the element.

- valid (boolean; optional):
    Determine whether the input is valid. Used in form validation.

- value (number; optional):
    Defines a default value which will be displayed in the element on
    page load."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, autoFocus=Component.UNDEFINED, form=Component.UNDEFINED, formAction=Component.UNDEFINED, name=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, accessKey=Component.UNDEFINED, className=Component.UNDEFINED, contentEditable=Component.UNDEFINED, contextMenu=Component.UNDEFINED, dir=Component.UNDEFINED, draggable=Component.UNDEFINED, hidden=Component.UNDEFINED, lang=Component.UNDEFINED, spellCheck=Component.UNDEFINED, style=Component.UNDEFINED, tabIndex=Component.UNDEFINED, title=Component.UNDEFINED, intent=Component.UNDEFINED, allowNumericCharactersOnly=Component.UNDEFINED, buttonPosition=Component.UNDEFINED, clampValueOnBlur=Component.UNDEFINED, disabled=Component.UNDEFINED, fill=Component.UNDEFINED, large=Component.UNDEFINED, leftIcon=Component.UNDEFINED, shiftSize=Component.UNDEFINED, max=Component.UNDEFINED, min=Component.UNDEFINED, minorStepSize=Component.UNDEFINED, placeholder=Component.UNDEFINED, selectAllOnFocus=Component.UNDEFINED, selectAllOnIncrement=Component.UNDEFINED, stepSize=Component.UNDEFINED, stringValue=Component.UNDEFINED, required=Component.UNDEFINED, valid=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'accessKey', 'allowNumericCharactersOnly', 'aria-*', 'autoFocus', 'buttonPosition', 'clampValueOnBlur', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'max', 'min', 'minorStepSize', 'name', 'placeholder', 'required', 'role', 'selectAllOnFocus', 'selectAllOnIncrement', 'shiftSize', 'spellCheck', 'stepSize', 'stringValue', 'style', 'tabIndex', 'title', 'type', 'valid', 'value']
        self._type = 'NumericInput'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'accessKey', 'allowNumericCharactersOnly', 'aria-*', 'autoFocus', 'buttonPosition', 'clampValueOnBlur', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'max', 'min', 'minorStepSize', 'name', 'placeholder', 'required', 'role', 'selectAllOnFocus', 'selectAllOnIncrement', 'shiftSize', 'spellCheck', 'stepSize', 'stringValue', 'style', 'tabIndex', 'title', 'type', 'valid', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NumericInput, self).__init__(children=children, **args)
