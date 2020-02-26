# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MenuItem(Component):
    """A MenuItem component.
A MenuItem is a single interactive item in a Menu.

This component renders an <li> containing an <a>. Make the MenuItem interactive by providing the href, target, and onClick props as necessary.

Create submenus by nesting MenuItems inside each other as children. Use the required text prop for MenuItem content.

We also override the onClick
method to make it behave like a dash Link rather than a regular URL.
@param props
@returns {*}
@constructor

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): Often used with CSS to style elements with common properties.
- text (string; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- href (string; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- fill (boolean; optional): Whether the button group should take up the full width of its container.
@default false
- minimal (boolean; optional): Whether the child buttons should appear with minimal styling.
@default false
- large (boolean; optional): Whether the child buttons should appear with large styling.
@default false
- vertical (boolean; optional): Whether the button group should appear with vertical styling.
@default false
- content (a list of or a singular dash component, string or number; optional): Popover content
- icon (string; optional): Icon to display
- iconSize (number; optional): Size of the icon
- active (boolean; optional): Whether this menu item should appear with an active state.
- disabled (boolean; optional): Whether this menu item is non-interactive. Enabling this prop will ignore href, tabIndex, and mouse event handlers (in particular click, down, enter, leave).
- intent (string; optional): Visual intent color to apply to element.
- labelClassName (string; optional): A space-delimited list of class names to pass along to the right-aligned label wrapper element.
- multiline (boolean; optional): Whether the text should be allowed to wrap to multiple lines. If false, text will be truncated with an ellipsis when it reaches max-width.
- popoverProps (dict; optional): Props to spread to Popover. Note that content and minimal cannot be changed and usePortal defaults to false so all submenus will live in the same container.
- shouldDismissPopover (boolean; optional): Whether an enabled item without a submenu should automatically close its parent popover when clicked.
- tagName (string; optional): Name of the HTML tag that wraps the MenuItem.
- textClassName (string; optional): A space-delimited list of class names to pass along to the text wrapper element.
- preserveSearchString (boolean; default False): Whether to preserve search string on href update. When true, a link from
/foo?bar= will redirect to /new-url?bar="""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, text=Component.UNDEFINED, href=Component.UNDEFINED, fill=Component.UNDEFINED, minimal=Component.UNDEFINED, large=Component.UNDEFINED, vertical=Component.UNDEFINED, content=Component.UNDEFINED, icon=Component.UNDEFINED, iconSize=Component.UNDEFINED, active=Component.UNDEFINED, disabled=Component.UNDEFINED, intent=Component.UNDEFINED, labelClassName=Component.UNDEFINED, multiline=Component.UNDEFINED, popoverProps=Component.UNDEFINED, shouldDismissPopover=Component.UNDEFINED, tagName=Component.UNDEFINED, textClassName=Component.UNDEFINED, preserveSearchString=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'text', 'href', 'fill', 'minimal', 'large', 'vertical', 'content', 'icon', 'iconSize', 'active', 'disabled', 'intent', 'labelClassName', 'multiline', 'popoverProps', 'shouldDismissPopover', 'tagName', 'textClassName', 'preserveSearchString']
        self._type = 'MenuItem'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'text', 'href', 'fill', 'minimal', 'large', 'vertical', 'content', 'icon', 'iconSize', 'active', 'disabled', 'intent', 'labelClassName', 'multiline', 'popoverProps', 'shouldDismissPopover', 'tagName', 'textClassName', 'preserveSearchString']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MenuItem, self).__init__(children=children, **args)
