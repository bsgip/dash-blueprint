# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tabs(Component):
    """A Tabs component.
Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in controlled mode by providing selectedTabId and onChange props, or in uncontrolled mode by optionally providing defaultSelectedTabId and onChange.

Children of the Tabs are rendered in order in the tab list, which is a flex container. Tab children are managed by the component; clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility.

Insert a <Tabs.Expander /> between any two children to right-align all subsequent children (or bottom-align when vertical).

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- animate (boolean; default True)

- defaultSelectedTabId (string; optional)

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- large (boolean; default False)

- renderActiveTabPanelOnly (boolean; default True)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, defaultSelectedTabId=Component.UNDEFINED, renderActiveTabPanelOnly=Component.UNDEFINED, large=Component.UNDEFINED, animate=Component.UNDEFINED, vertical=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'animate', 'defaultSelectedTabId', 'key', 'large', 'renderActiveTabPanelOnly']
        self._type = 'Tabs'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'animate', 'defaultSelectedTabId', 'key', 'large', 'renderActiveTabPanelOnly']
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
