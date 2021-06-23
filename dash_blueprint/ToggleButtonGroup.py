# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ToggleButtonGroup(Component):
    """A ToggleButtonGroup component.
An alternate implementation of a RadioGroup, this allows a set of Button components
to be selected, where only one is ever active.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- alignText (string; optional):
    Text alignment within button. By default, icons and text will be
    centered within the button. Passing `\"left\"` or `\"right\"` will
    align the button text to that side and push `icon` and `rightIcon`
    to either edge. Passing `\"center\"` will center the text and
    icons together.

- aria-* (string; optional):
    A wildcard aria attribute.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- data-* (string; optional):
    A wildcard data attribute.

- fill (boolean; optional):
    Whether the button group should take up the full width of its
    container. @default False.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- large (boolean; optional):
    Whether the child buttons should appear with large styling.
    @default False.

- minimal (boolean; optional):
    Whether the child buttons should appear with minimal styling.
    @default False.

- role (string; optional):
    The ARIA role attribute.

- value (string; optional):
    The key of the button last clicked.

- vertical (boolean; optional):
    Whether the button group should appear with vertical styling.
    @default False."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, alignText=Component.UNDEFINED, fill=Component.UNDEFINED, minimal=Component.UNDEFINED, large=Component.UNDEFINED, vertical=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'alignText', 'aria-*', 'className', 'data-*', 'fill', 'key', 'large', 'minimal', 'role', 'value', 'vertical']
        self._type = 'ToggleButtonGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'alignText', 'aria-*', 'className', 'data-*', 'fill', 'key', 'large', 'minimal', 'role', 'value', 'vertical']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ToggleButtonGroup, self).__init__(children=children, **args)
