# AUTO GENERATED FILE - DO NOT EDIT

export daterangepicker

"""
    daterangepicker(;kwargs...)
    daterangepicker(children::Any;kwargs...)
    daterangepicker(children_maker::Function;kwargs...)


A DateRangePicker component.
A DateRangePicker shows two sequential month calendars and lets the user select a single range of days.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `canClearSelection` (String; optional): Allows the user to clear the selection by clicking the currently selected day.
- `clearButtonText` (String; optional): Text for the reset button in the action bar.
- `date` (String; optional): The selected date
- `defaultValue` (String; optional): Initial day the calendar will display as selected. This should not be set if value is set.
- `end_date` (String; optional): Default start date value
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `maxDate` (String; optional): The latest date the user can select.
- `minDate` (String; optional): The earliest date the user can select.
- `shortcuts` (Bool; optional): Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array is provided, the custom shortcuts will be displayed.
- `singleMonthOnly` (Bool; optional): Whether to show only a single month calendar.
- `start_date` (String; optional): Default start date value
- `timePrecision` (String; optional): The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision
- `todayButtonText` (String; optional): Text for the today button in the action bar.
"""
function daterangepicker(; kwargs...)
        available_props = Symbol[:children, :id, :canClearSelection, :clearButtonText, :date, :defaultValue, :end_date, :key, :maxDate, :minDate, :shortcuts, :singleMonthOnly, :start_date, :timePrecision, :todayButtonText]
        wild_props = Symbol[]
        return Component("daterangepicker", "DateRangePicker", "dash_blueprint", available_props, wild_props; kwargs...)
end

daterangepicker(children::Any; kwargs...) = daterangepicker(;kwargs..., children = children)
daterangepicker(children_maker::Function; kwargs...) = daterangepicker(children_maker(); kwargs...)

