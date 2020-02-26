# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.
This is pretty much a straight copy/paste from the dash html component button,
except we render a blueprint button. If you don't care about styling, you should probably
use the dash version.

TODO - it would be useful to have a href prop here, where clicking a button routes to 
a different URL
@param props
@returns {*}
@constructor

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- n_clicks (number; default 0): An integer that represents the number of times
that this element has been clicked on.
- n_clicks_timestamp (number; default -1): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- autoFocus (string; optional): The element should be automatically focused after the page loaded.
- disabled (boolean; optional): Indicates whether the user can interact with the element.
- form (string; optional): Indicates the form that is the owner of the element.
- formAction (string; optional): Indicates the action of the element, overriding the action defined in the <form>.
- name (string; optional): Name of the element. For example used by the server to identify the fields in form submits.
- type (string; optional): Defines the type of the element.
- value (string; optional): Defines a default value which will be displayed in the element on page load.
- accessKey (string; optional): Defines a keyboard shortcut to activate or add focus to the element.
- className (string; optional): Often used with CSS to style elements with common properties.
- contentEditable (string; optional): Indicates whether the element's content is editable.
- contextMenu (string; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- dir (string; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- draggable (string; optional): Defines whether the element can be dragged.
- hidden (string; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- lang (string; optional): Defines the language used in the element.
- spellCheck (string; optional): Indicates whether spell checking is allowed for the element.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- tabIndex (string; optional): Overrides the browser's default tab order and follows the one specified instead.
- title (string; optional): Text to be displayed in a tooltip when hovering over the element.
- intent (string; optional): Button intent (primary/success/warning/danger/none)
- icon (string; optional): Button intent (primary/success/warning/danger/none)
- active (boolean; optional): If set to true, the button will display in an active state. This is equivalent to setting className={Classes.ACTIVE}.
- alignText (string; optional): Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.
Choice of (`left`, `right`, `center`)
- large (boolean; optional): Whether this button should use large styles.
- minimal (boolean; optional): Whether this button should use minimal styles.
- rightIcon (string; optional): Name of a Blueprint UI icon (or an icon element) to render after the text.
- small (boolean; optional): Whether this button should use small styles.
- href (string; optional): window location to set on click"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, autoFocus=Component.UNDEFINED, disabled=Component.UNDEFINED, form=Component.UNDEFINED, formAction=Component.UNDEFINED, name=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, accessKey=Component.UNDEFINED, className=Component.UNDEFINED, contentEditable=Component.UNDEFINED, contextMenu=Component.UNDEFINED, dir=Component.UNDEFINED, draggable=Component.UNDEFINED, hidden=Component.UNDEFINED, lang=Component.UNDEFINED, spellCheck=Component.UNDEFINED, style=Component.UNDEFINED, tabIndex=Component.UNDEFINED, title=Component.UNDEFINED, intent=Component.UNDEFINED, icon=Component.UNDEFINED, active=Component.UNDEFINED, alignText=Component.UNDEFINED, large=Component.UNDEFINED, minimal=Component.UNDEFINED, rightIcon=Component.UNDEFINED, small=Component.UNDEFINED, href=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'n_clicks', 'n_clicks_timestamp', 'key', 'role', 'data-*', 'aria-*', 'autoFocus', 'disabled', 'form', 'formAction', 'name', 'type', 'value', 'accessKey', 'className', 'contentEditable', 'contextMenu', 'dir', 'draggable', 'hidden', 'lang', 'spellCheck', 'style', 'tabIndex', 'title', 'intent', 'icon', 'active', 'alignText', 'large', 'minimal', 'rightIcon', 'small', 'href']
        self._type = 'Button'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'n_clicks', 'n_clicks_timestamp', 'key', 'role', 'data-*', 'aria-*', 'autoFocus', 'disabled', 'form', 'formAction', 'name', 'type', 'value', 'accessKey', 'className', 'contentEditable', 'contextMenu', 'dir', 'draggable', 'hidden', 'lang', 'spellCheck', 'style', 'tabIndex', 'title', 'intent', 'icon', 'active', 'alignText', 'large', 'minimal', 'rightIcon', 'small', 'href']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Button, self).__init__(children=children, **args)
