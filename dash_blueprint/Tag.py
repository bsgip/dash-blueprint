# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tag(Component):
    """A Tag component.
Tags are great for lists of strings.
@param {*} props

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
- className (string; optional): A space-delimited list of class names to pass along to a child element.
- active (boolean; optional): Whether the tag should appear in an active state.
- fill (boolean; optional): Whether the tag should take up the full width of its container.
- icon (string; optional): Name of a Blueprint UI icon (or an icon element) to render before the children.
- intent (string; optional): Visual intent color to apply to element.
- large (boolean; optional): Whether this tag should use large styles.
- minimal (boolean; optional): Whether this tag should use minimal styles.
- multiline (boolean; optional): Whether tag content should be allowed to occupy multiple lines. If false, a single line of 
text will be truncated with an ellipsis if it overflows. Note that icons will 
be vertically centered relative to multiline text.
- rightIcon (string; optional): Name of a Blueprint UI icon (or an icon element) to render after the children.
- round (boolean; optional): Whether this tag should have rounded ends."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, active=Component.UNDEFINED, fill=Component.UNDEFINED, icon=Component.UNDEFINED, intent=Component.UNDEFINED, large=Component.UNDEFINED, minimal=Component.UNDEFINED, multiline=Component.UNDEFINED, rightIcon=Component.UNDEFINED, round=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'active', 'fill', 'icon', 'intent', 'large', 'minimal', 'multiline', 'rightIcon', 'round']
        self._type = 'Tag'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'active', 'fill', 'icon', 'intent', 'large', 'minimal', 'multiline', 'rightIcon', 'round']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tag, self).__init__(children=children, **args)
