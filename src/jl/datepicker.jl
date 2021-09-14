# AUTO GENERATED FILE - DO NOT EDIT

export datepicker

"""
    datepicker(;kwargs...)
    datepicker(children::Any;kwargs...)
    datepicker(children_maker::Function;kwargs...)


A DatePicker component.
A DatePicker shows a monthly calendar and allows the user to choose a single date.

DatePicker is built on top of the react-day-picker library.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `canClearSelection` (String; optional): Allows the user to clear the selection by clicking the currently selected day.
- `clearButtonText` (String; optional): Text for the reset button in the action bar.
- `date` (String; optional): The selected date
- `defaultValue` (String; optional): Initial day the calendar will display as selected. This should not be set if value is set.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `maxDate` (String; optional): The latest date the user can select.
- `minDate` (String; optional): The earliest date the user can select.
- `timePrecision` (String; optional): The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

    This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

    Inherited from IDatePickerBaseProps.timePrecision
- `todayButtonText` (String; optional): Text for the today button in the action bar.
"""
function datepicker(; kwargs...)
        available_props = Symbol[:children, :id, :canClearSelection, :clearButtonText, :date, :defaultValue, :key, :maxDate, :minDate, :timePrecision, :todayButtonText]
        wild_props = Symbol[]
        return Component("datepicker", "DatePicker", "dash_blueprint", available_props, wild_props; kwargs...)
end

datepicker(children::Any; kwargs...) = datepicker(;kwargs..., children = children)
datepicker(children_maker::Function; kwargs...) = datepicker(children_maker(); kwargs...)

