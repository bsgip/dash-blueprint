% Auto-generated: do not edit by hand
\name{dateRangePicker}

\alias{dateRangePicker}

\title{DateRangePicker component}

\description{
A DateRangePicker shows two sequential month calendars and lets the user select a single range of days.
}

\usage{
dateRangePicker(children=NULL, id=NULL, canClearSelection=NULL,
clearButtonText=NULL, date=NULL, defaultValue=NULL,
end_date=NULL, key=NULL, maxDate=NULL, minDate=NULL,
shortcuts=NULL, singleMonthOnly=NULL, start_date=NULL,
timePrecision=NULL, todayButtonText=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{canClearSelection}{Character. Allows the user to clear the selection by clicking the currently selected day.}

\item{clearButtonText}{Character. Text for the reset button in the action bar.}

\item{date}{Character. The selected date}

\item{defaultValue}{Character. Initial day the calendar will display as selected. This should not be set if value is set.}

\item{end_date}{Character. Default start date value}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{maxDate}{Character. The latest date the user can select.}

\item{minDate}{Character. The earliest date the user can select.}

\item{shortcuts}{Logical. Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array is provided, the custom shortcuts will be displayed.}

\item{singleMonthOnly}{Logical. Whether to show only a single month calendar.}

\item{start_date}{Character. Default start date value}

\item{timePrecision}{Character. The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision}

\item{todayButtonText}{Character. Text for the today button in the action bar.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

