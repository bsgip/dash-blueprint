# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ListGroup(Component):
    """A ListGroup component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- label (string; optional): Label for the form group
- header (a list of or a singular dash component, string or number; optional)
- childData (string; optional): Child component data
- listData (string; optional): List of child data for currently visible rows
- nRows (number; default 1): Whether to show a limited number of children
- minRows (number; default 0): Min number of rows to show
- maxRows (number; default 2): Max number of rows to show"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, label=Component.UNDEFINED, header=Component.UNDEFINED, childData=Component.UNDEFINED, listData=Component.UNDEFINED, nRows=Component.UNDEFINED, minRows=Component.UNDEFINED, maxRows=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'label', 'header', 'childData', 'listData', 'nRows', 'minRows', 'maxRows']
        self._type = 'ListGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'label', 'header', 'childData', 'listData', 'nRows', 'minRows', 'maxRows']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ListGroup, self).__init__(children=children, **args)
