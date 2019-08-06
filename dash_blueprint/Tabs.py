# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tabs(Component):
    """A Tabs component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- defaultSelectedTabId (string; default 'tab1')
- renderActiveTabPanelOnly (boolean; default False)
- large (boolean; default False)
- animate (boolean; default True)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, defaultSelectedTabId=Component.UNDEFINED, renderActiveTabPanelOnly=Component.UNDEFINED, large=Component.UNDEFINED, animate=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'defaultSelectedTabId', 'renderActiveTabPanelOnly', 'large', 'animate']
        self._type = 'Tabs'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'defaultSelectedTabId', 'renderActiveTabPanelOnly', 'large', 'animate']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tabs, self).__init__(children=children, **args)
