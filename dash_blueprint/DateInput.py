# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DateInput(Component):
    """A DateInput component.
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
- date (string; optional): The selected date
- defaultValue (string; optional): Initial day the calendar will display as selected. This should not be set if value is set.
- minDate (string; optional): The earliest date the user can select.
- maxDate (string; optional): The latest date the user can select.
- timePrecision (string; optional): The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision
- todayButtonText (string; optional): Text for the today button in the action bar.
- clearButtonText (string; optional): Text for the reset button in the action bar.
- canClearSelection (string; optional): Allows the user to clear the selection by clicking the currently selected day.

Available events: 'change'"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, date=Component.UNDEFINED, defaultValue=Component.UNDEFINED, minDate=Component.UNDEFINED, maxDate=Component.UNDEFINED, timePrecision=Component.UNDEFINED, todayButtonText=Component.UNDEFINED, clearButtonText=Component.UNDEFINED, canClearSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'date', 'defaultValue', 'minDate', 'maxDate', 'timePrecision', 'todayButtonText', 'clearButtonText', 'canClearSelection']
        self._type = 'DateInput'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_events = ['change']
        self.available_properties = ['children', 'id', 'key', 'date', 'defaultValue', 'minDate', 'maxDate', 'timePrecision', 'todayButtonText', 'clearButtonText', 'canClearSelection']
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
            return ('DateInput(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DateInput(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
