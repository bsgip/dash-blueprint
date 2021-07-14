# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Sparkline(Component):
    """A Sparkline component.
@param props
@returns {*}
@constructor

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- ariaLabel (string; default ""):
    Aria label.

- barSeries (dict; optional):
    Properties to pass through for a BarSeries object.

    `barSeries` is a dict with keys:

    - fill (string; optional)

    - fillOpacity (number; optional)

    - stroke (string; optional)

    - strokeWidth (number; optional)

- data (list of numbers; optional):
    Data to display in the sparkline.

- height (number; default 20)

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- lineSeries (dict; optional):
    Properties to pass through for a LineSeries object.

    `lineSeries` is a dict with keys:

    - curve (a value equal to: 'linear', 'cardinal', 'basis', 'monotoneX'; optional)

    - fill (string; optional)

    - fillOpacity (number; optional)

    - showArea (boolean; optional)

    - showLine (boolean; optional)

    - stroke (string; optional)

    - strokeDasharray (string; optional)

    - strokeLinecap (a value equal to: 'butt', 'square', 'round', 'inherit'; optional)

    - strokeWidth (number; optional)

- margin (dict; default { top: 16, right: 16, bottom: 16, left: 16 }):
    chart margin, leave room for labels! note 0 may clip LineSeries
    and PointSeries. a partial { top/right/bottom/ left } object is
    filled with the other default values.

    `margin` is a dict with keys:

    - bottom (number; optional)

    - left (number; optional)

    - right (number; optional)

    - top (number; optional)

- max (number; optional):
    Optionally set the maximum y-value of the chart (e.g., to
    coordinate axes across multiple Sparklines).

- min (number; optional):
    Optionally set the minimum y-value of the chart (e.g., to
    coordinate axes across multiple Sparklines).

- width (number; default 100):
    Width of the svg including left/right margin."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, ariaLabel=Component.UNDEFINED, data=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, margin=Component.UNDEFINED, max=Component.UNDEFINED, min=Component.UNDEFINED, lineSeries=Component.UNDEFINED, barSeries=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'ariaLabel', 'barSeries', 'data', 'height', 'key', 'lineSeries', 'margin', 'max', 'min', 'width']
        self._type = 'Sparkline'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'ariaLabel', 'barSeries', 'data', 'height', 'key', 'lineSeries', 'margin', 'max', 'min', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Sparkline, self).__init__(**args)
