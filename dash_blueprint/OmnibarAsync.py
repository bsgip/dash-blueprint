# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OmnibarAsync(Component):
    """An OmnibarAsync component.
Wrapper around the blueprint Omnibar component. The searching is done server-side here and relies on
the dash response to return results that can be rendered.
@param props
@returns {*}
@constructor

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- combo (string; default 'shift + s'):
    Keyboard shortcut to show omnibar.

- items (boolean | number | string | dict | list; optional):
    Set of items to search.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; optional):
    Label to show on open button (also triggers display of button).

- query (string; optional):
    Query string.

- value (string; optional):
    Selected value from dropdown."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, value=Component.UNDEFINED, items=Component.UNDEFINED, query=Component.UNDEFINED, combo=Component.UNDEFINED, label=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'combo', 'items', 'key', 'label', 'query', 'value']
        self._type = 'OmnibarAsync'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'combo', 'items', 'key', 'label', 'query', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OmnibarAsync, self).__init__(children=children, **args)
