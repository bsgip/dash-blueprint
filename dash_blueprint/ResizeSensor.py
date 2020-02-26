# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ResizeSensor(Component):
    """A ResizeSensor component.
ResizeSensor is a component that provides a "resize" event for its single DOM element child. It is a thin wrapper around ResizeObserver to provide React bindings.

 Resize events are fired each time the child div
resizes, with a custom debounce timeout to ensure we aren't overloaded with events.

Note: This was more useful when Dash components were not size-aware, and should be used sparingly
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
- observeParents (boolean; default False): Whether to observe parent sizes
- debounceTimer (number; default 1000): How long to debounce before firing an event. Useful for situations
where dynamic resizing would cause a lot of events to fire.
- size (boolean | number | string | dict | list; optional): The current size of the observed e.g.
{'x': 0, 'y': 0, 'width': 884, 'height': 17.265625, 'top': 0,
 'right': 884, 'bottom': 17.265625, 'left': 0}
TODO use a proper PropType"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, observeParents=Component.UNDEFINED, debounceTimer=Component.UNDEFINED, size=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'observeParents', 'debounceTimer', 'size']
        self._type = 'ResizeSensor'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'observeParents', 'debounceTimer', 'size']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ResizeSensor, self).__init__(children=children, **args)
