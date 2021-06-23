# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateInput(Component):
    """A DateInput component.
The DateInput component is an input group that shows a DatePicker in a Popover on focus. 
Use it in forms where the user must enter a date.
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

- canClearSelection (string; default True):
    Allows the user to clear the selection by clicking the currently
    selected day.

- clearButtonText (string; optional):
    Text for the reset button in the action bar.

- date (string; optional):
    The selected date.

- defaultValue (string; default Date.now()):
    Initial day the calendar will display as selected. This should not
    be set if value is set.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- maxDate (string; optional):
    The latest date the user can select.

- minDate (string; optional):
    The earliest date the user can select.

- timePrecision (string; optional):
    The precision of time selection that accompanies the calendar.
    Passing a TimePrecision value (or providing timePickerProps) shows
    a TimePicker below the calendar. Time is preserved across date
    changes.       This is shorthand for timePickerProps.precision and
    is a quick way to enable time selection.       Inherited from
    IDatePickerBaseProps.timePrecision.

- todayButtonText (string; default "Today"):
    Text for the today button in the action bar."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, date=Component.UNDEFINED, defaultValue=Component.UNDEFINED, minDate=Component.UNDEFINED, maxDate=Component.UNDEFINED, timePrecision=Component.UNDEFINED, todayButtonText=Component.UNDEFINED, clearButtonText=Component.UNDEFINED, canClearSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'canClearSelection', 'clearButtonText', 'date', 'defaultValue', 'key', 'maxDate', 'minDate', 'timePrecision', 'todayButtonText']
        self._type = 'DateInput'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'canClearSelection', 'clearButtonText', 'date', 'defaultValue', 'key', 'maxDate', 'minDate', 'timePrecision', 'todayButtonText']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DateInput, self).__init__(children=children, **args)
