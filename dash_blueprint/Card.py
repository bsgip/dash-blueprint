# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
A card is a bounded unit of UI content with a solid background color.

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

- disabled (string; optional):
    Indicates whether the user can interact with the element.

- draggable (string; optional):
    Defines whether the element can be dragged.

- elevation (number; optional):
    Controls the intensity of the drop shadow beneath the card: the
    higher the elevation, the higher the drop shadow. At elevation 0,
    no drop shadow is applied.

- form (string; optional):
    Indicates the form that is the owner of the element.

- formAction (string; optional):
    Indicates the action of the element, overriding the action defined
    in the <form>.

- hidden (string; optional):
    Prevents rendering of given element, while keeping child elements,
    e.g. script elements, active.

- href (string; optional):
    window location to set on click.

- interactive (boolean; optional):
    Whether the card should respond to user interactions. If set to
    True, hovering over the card will increase the card's elevation
    and change the mouse cursor to a pointer.  Recommended when
    onClick is also defined.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- lang (string; optional):
    Defines the language used in the element.

- n_clicks (number; default 0):
    An integer that represents the number of times that this element
    has been clicked on.

- n_clicks_timestamp (number; default -1):
    An integer that represents the time (in ms since 1970) at which
    n_clicks changed. This can be used to tell which button was
    changed most recently.

- name (string; optional):
    Name of the element. For example used by the server to identify
    the fields in form submits.

- role (string; optional):
    The ARIA role attribute.

- spellCheck (string; optional):
    Indicates whether spell checking is allowed for the element.

- style (dict; optional):
    Defines CSS styles which will override styles previously set.

- tabIndex (string; optional):
    Overrides the browser's default tab order and follows the one
    specified instead.

- type (string; optional):
    Defines the type of the element.

- value (string; optional):
    Defines a default value which will be displayed in the element on
    page load."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, autoFocus=Component.UNDEFINED, disabled=Component.UNDEFINED, form=Component.UNDEFINED, formAction=Component.UNDEFINED, name=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, accessKey=Component.UNDEFINED, className=Component.UNDEFINED, contentEditable=Component.UNDEFINED, contextMenu=Component.UNDEFINED, dir=Component.UNDEFINED, draggable=Component.UNDEFINED, hidden=Component.UNDEFINED, lang=Component.UNDEFINED, spellCheck=Component.UNDEFINED, style=Component.UNDEFINED, tabIndex=Component.UNDEFINED, elevation=Component.UNDEFINED, interactive=Component.UNDEFINED, href=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'accessKey', 'aria-*', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'elevation', 'form', 'formAction', 'hidden', 'href', 'interactive', 'key', 'lang', 'n_clicks', 'n_clicks_timestamp', 'name', 'role', 'spellCheck', 'style', 'tabIndex', 'type', 'value']
        self._type = 'Card'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'accessKey', 'aria-*', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'data-*', 'dir', 'disabled', 'draggable', 'elevation', 'form', 'formAction', 'hidden', 'href', 'interactive', 'key', 'lang', 'n_clicks', 'n_clicks_timestamp', 'name', 'role', 'spellCheck', 'style', 'tabIndex', 'type', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Card, self).__init__(children=children, **args)
