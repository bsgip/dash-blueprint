# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ProgressBar(Component):
    """A ProgressBar component.
Progress bars indicate progress towards the completion of a task or an indeterminate loading state.
@param {*} props

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- animate (boolean; default True):
    Whether the background should animate.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- intent (string; optional):
    Visual intent color to apply to element. \"none\"         |
    \"primary\"         | \"success\"         | \"warning\"         |
    \"danger\".

- stripes (boolean; default True):
    Whether the background should be striped.

- value (number; optional):
    A value between 0 and 1 (inclusive) representing how far along the
    operation is. Values below 0 or above 1 will be interpreted as 0
    or 1, respectively. Omitting this prop will result in an
    \"indeterminate\" progress meter that fills the entire bar."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, animate=Component.UNDEFINED, intent=Component.UNDEFINED, stripes=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'animate', 'className', 'intent', 'stripes', 'value']
        self._type = 'ProgressBar'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'animate', 'className', 'intent', 'stripes', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ProgressBar, self).__init__(children=children, **args)
