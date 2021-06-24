# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tr(Component):
    """A Tr component.
This is a reimplementation of html Tr with an extra state that supports modifying the className
when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; default ""):
    Often used with CSS to style elements with common properties.

- key (string; optional):
    Key.

- rowKey (string; required):
    A proxy for key that can be passed through to the Tr component.

- selected (boolean; optional):
    Whether row is selected."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, key=Component.UNDEFINED, rowKey=Component.REQUIRED, selected=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'key', 'rowKey', 'selected']
        self._type = 'Tr'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'key', 'rowKey', 'selected']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['rowKey']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tr, self).__init__(children=children, **args)
