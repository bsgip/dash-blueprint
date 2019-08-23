# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Slider(Component):
    """A Slider component.
This is pretty much a straight copy/paste from the dash html component button,
except we render a blueprint button
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
- className (string; optional): Often used with CSS to style elements with common properties.
- disabled (boolean; default False): Whether the slider is non-interactive.
- initialValue (number; optional): Initial value of the slider. This determines the other end of the track fill: from initialValue to value.
- labelPrecision (number; optional): Number of decimal places to use when rendering label value. Default value is the number of decimals used in the stepSize prop. This prop has no effect if you supply a custom labelRenderer callback.
- labelType (string; default 'number'): Instructions for rendering the label. Options will be clock, date, datetime, number, percentage, etc.
- labelStepSize (number; optional): Increment between successive labels. Must be greater than zero
- max (number; optional): Maximum value of the slider
- min (number; optional): Minimum value of the slider
- stepSize (number; optional): Increment between successive values; amount by which the handle moves. Must be greater than zero
- showTrackFill (boolean; optional): Whether a solid bar should be rendered on the track between current and initial values, or between handles for RangeSlider
- value (number; default 0): Value of slider
- releaseValue (number; optional): Value of slider on release of handle. This will only fire callbacks when the 
slider has been released, which is probably desirable in most instances for 
server-side callbacks
- vertical (boolean; default False): Whether to show the slider in a vertical orientation"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, initialValue=Component.UNDEFINED, labelPrecision=Component.UNDEFINED, labelType=Component.UNDEFINED, labelStepSize=Component.UNDEFINED, max=Component.UNDEFINED, min=Component.UNDEFINED, stepSize=Component.UNDEFINED, showTrackFill=Component.UNDEFINED, value=Component.UNDEFINED, releaseValue=Component.UNDEFINED, vertical=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'className', 'disabled', 'initialValue', 'labelPrecision', 'labelType', 'labelStepSize', 'max', 'min', 'stepSize', 'showTrackFill', 'value', 'releaseValue', 'vertical']
        self._type = 'Slider'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'className', 'disabled', 'initialValue', 'labelPrecision', 'labelType', 'labelStepSize', 'max', 'min', 'stepSize', 'showTrackFill', 'value', 'releaseValue', 'vertical']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Slider, self).__init__(children=children, **args)