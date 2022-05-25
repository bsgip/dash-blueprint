% Auto-generated: do not edit by hand
\name{datePicker}

\alias{datePicker}

\title{DatePicker component}

\description{
A DatePicker shows a monthly calendar and allows the user to choose a single date.  DatePicker is built on top of the react-day-picker library.
}

\usage{
datePicker(children=NULL, id=NULL, canClearSelection=NULL,
clearButtonText=NULL, date=NULL, defaultValue=NULL,
key=NULL, maxDate=NULL, minDate=NULL, required=NULL,
timePrecision=NULL, todayButtonText=NULL, valid=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{canClearSelection}{Logical. Allows the user to clear the selection by clicking the currently selected day.}

\item{clearButtonText}{Character. Text for the reset button in the action bar.}

\item{date}{Character. The selected date}

\item{defaultValue}{Character. Initial day the calendar will display as selected. This should not be set if value is set.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{maxDate}{Character. The latest date the user can select.}

\item{minDate}{Character. The earliest date the user can select.}

\item{required}{Logical. Whether this input is required. Used in form validation}

\item{timePrecision}{Character. The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.

     This is shorthand for timePickerProps.precision and is a quick way to enable time selection.

     Inherited from IDatePickerBaseProps.timePrecision}

\item{todayButtonText}{Character. Text for the today button in the action bar.}

\item{valid}{Logical. Determine whether the input is valid. Used in form validation}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

