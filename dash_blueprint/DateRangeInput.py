# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateRangeInput(Component):
    """A DateRangeInput component.
The DateRangeInput component is a control group composed of two input groups. It shows a 
DateRangePicker in a Popover on focus.

Use this component in forms where the user must enter a date range.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- shortcuts (boolean; default True): Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array is provided, the custom shortcuts will be displayed.
- singleMonthOnly (boolean; default False): Whether to show only a single month calendar.
- start_date (string; optional): Default start date value
- end_date (string; optional): Default start date value
- date (string; optional): The selected date
- defaultValue (string; optional): Initial day the calendar will display as selected. This should not be set if value is set.
- minDate (string; optional): The earliest date the user can select.
- maxDate (string; optional): The latest date the user can select.
- timePrecision (string; optional): The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision
- todayButtonText (string; default "Today"): Text for the today button in the action bar.
- clearButtonText (string; optional): Text for the reset button in the action bar.
- canClearSelection (string; default True): Allows the user to clear the selection by clicking the currently selected day."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, shortcuts=Component.UNDEFINED, singleMonthOnly=Component.UNDEFINED, start_date=Component.UNDEFINED, end_date=Component.UNDEFINED, date=Component.UNDEFINED, defaultValue=Component.UNDEFINED, minDate=Component.UNDEFINED, maxDate=Component.UNDEFINED, timePrecision=Component.UNDEFINED, todayButtonText=Component.UNDEFINED, clearButtonText=Component.UNDEFINED, canClearSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'shortcuts', 'singleMonthOnly', 'start_date', 'end_date', 'date', 'defaultValue', 'minDate', 'maxDate', 'timePrecision', 'todayButtonText', 'clearButtonText', 'canClearSelection']
        self._type = 'DateRangeInput'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'shortcuts', 'singleMonthOnly', 'start_date', 'end_date', 'date', 'defaultValue', 'minDate', 'maxDate', 'timePrecision', 'todayButtonText', 'clearButtonText', 'canClearSelection']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DateRangeInput, self).__init__(children=children, **args)
