# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OmnibarAsync(Component):
    """A OmnibarAsync component.
Wrapper around the blueprint ResizeSensor component. Resize events are fired each time the child div
resizes, with a custom debounce timeout to ensure we aren't overloaded with events.
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
- value (string; optional): Selected value from dropdown
- items (boolean | number | string | dict | list; optional): Set of items to search
- query (string; optional): Query string

Available events: 'query'"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, value=Component.UNDEFINED, items=Component.UNDEFINED, query=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'value', 'items', 'query']
        self._type = 'OmnibarAsync'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_events = ['query']
        self.available_properties = ['children', 'id', 'key', 'value', 'items', 'query']
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

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('OmnibarAsync(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'OmnibarAsync(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
