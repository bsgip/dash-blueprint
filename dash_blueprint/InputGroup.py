# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class InputGroup(Component):
    """An InputGroup component.
An input group allows you to add icons and buttons within a text input to expand its functionality. 
For example, you might use an input group to build a visibility toggle for a password field.

Note: this implementation only allows for icons to be used, and provides no interactive 
functionality

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

- aria-* (string; optional):
    A wildcard aria attribute.

- autoFocus (string; optional):
    The element should be automatically focused after the page loaded.

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
    Indicates whether the user can interact with the element.

- draggable (string; optional):
    Defines whether the element can be dragged.

- fill (boolean; optional):
    Whether the component should take up the full width of its
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

- name (string; optional):
    Name of the element. For example used by the server to identify
    the fields in form submits.

- placeholder (string; optional):
    The placeholder text in the absence of any value.

- role (string; optional):
    The ARIA role attribute.

- round (boolean; optional):
    Whether the input (and any buttons) should appear with rounded
    caps.

- small (boolean; optional):
    Whether this input should use small styles.

- spellCheck (string; optional):
    Indicates whether spell checking is allowed for the element.

- style (dict; optional):
    Defines CSS styles which will override styles previously set.

- tabIndex (string; optional):
    Overrides the browser's default tab order and follows the one
    specified instead.

- title (string; optional):
    Text to be displayed in a tooltip when hovering over the element.

- type (string; optional):
    Defines the type of the element.

- value (string; default ""):
    Defines a default value which will be displayed in the element on
    page load."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, autoFocus=Component.UNDEFINED, disabled=Component.UNDEFINED, form=Component.UNDEFINED, formAction=Component.UNDEFINED, name=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, accessKey=Component.UNDEFINED, className=Component.UNDEFINED, contentEditable=Component.UNDEFINED, contextMenu=Component.UNDEFINED, dir=Component.UNDEFINED, draggable=Component.UNDEFINED, hidden=Component.UNDEFINED, lang=Component.UNDEFINED, spellCheck=Component.UNDEFINED, style=Component.UNDEFINED, tabIndex=Component.UNDEFINED, title=Component.UNDEFINED, intent=Component.UNDEFINED, fill=Component.UNDEFINED, large=Component.UNDEFINED, leftIcon=Component.UNDEFINED, placeholder=Component.UNDEFINED, round=Component.UNDEFINED, small=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'accessKey', 'aria-*', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'name', 'placeholder', 'role', 'round', 'small', 'spellCheck', 'style', 'tabIndex', 'title', 'type', 'value']
        self._type = 'InputGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'accessKey', 'aria-*', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'name', 'placeholder', 'role', 'round', 'small', 'spellCheck', 'style', 'tabIndex', 'title', 'type', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(InputGroup, self).__init__(children=children, **args)
