# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Icon(Component):
    """An Icon component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): A space-delimited list of class names to pass along to a child element.
- color (string; optional): Color of icon. This is used as the fill attribute on the <svg> image so it will override any CSS color property, including that set by intent. If this prop is omitted, icon color is inherited from surrounding text.
- htmlTitle (string; optional): String for the title attribute on the rendered element, which will appear on hover as a native browser tooltip.
- icon (string; optional): Name of a Blueprint UI icon, or an icon element, to render. This prop is required because it determines the content of the component, but it can be explicitly set to falsy values to render nothing.

If null or undefined or false, this component will render nothing.

If given an IconName (a string literal union of all icon names), that icon will be rendered as an <svg> with <path> tags. Unknown strings will render a blank icon to occupy space.

If given a JSX.Element, that element will be rendered and all other props on this component are ignored. This type is supported to simplify icon support in other Blueprint components. As a consumer, you should avoid using <Icon icon={<Element />} directly; simply render <Element /> instead.
- iconSize (number; optional): numberIcon.SIZE_STANDARD = 16

Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and chooses the appropriate resolution based on this prop.
- style (string; optional): CSS style properties.
- tagName (string; optional): HTML tag to use for the rendered element.
- title (string; optional): Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name. Pass an explicit falsy value to disable."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, htmlTitle=Component.UNDEFINED, icon=Component.UNDEFINED, iconSize=Component.UNDEFINED, style=Component.UNDEFINED, tagName=Component.UNDEFINED, title=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'role', 'data-*', 'aria-*', 'className', 'color', 'htmlTitle', 'icon', 'iconSize', 'style', 'tagName', 'title']
        self._type = 'Icon'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'role', 'data-*', 'aria-*', 'className', 'color', 'htmlTitle', 'icon', 'iconSize', 'style', 'tagName', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Icon, self).__init__(**args)
