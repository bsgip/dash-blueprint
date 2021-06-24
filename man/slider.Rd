% Auto-generated: do not edit by hand
\name{slider}

\alias{slider}

\title{Slider component}

\description{
A slider is a numeric input for choosing numbers between lower and upper bounds. It also has a labeled axis that supports custom formatting.  To adjust a slider value, the user clicks and drags a handle or clicks the axis to move the nearest handle to that spot. Users can also use arrow keys on the keyboard to adjust individual handles.  Use Slider for choosing a single value, RangeSlider for choosing two values, and MultiSlider for more advanced use cases.  Use Slider to choose a single value on a number line. It is a controlled component, so the value prop determines its current appearance. Provide an onChange handler to receive updates and an onRelease handler to determine when the user has stopped interacting with the slider.
}

\usage{
slider(children=NULL, id=NULL, className=NULL, disabled=NULL,
initialValue=NULL, key=NULL, labelPrecision=NULL,
labelRenderer=NULL, labelStepSize=NULL, labelType=NULL,
max=NULL, min=NULL, releaseValue=NULL, showTrackFill=NULL,
stepSize=NULL, updateKey=NULL, value=NULL, vertical=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{disabled}{Logical. Whether the slider is non-interactive.}

\item{initialValue}{Numeric. Initial value of the slider. This determines the other end of the track fill: from initialValue to value.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{labelPrecision}{Numeric. Number of decimal places to use when rendering label value. Default value is the number of decimals used in the stepSize prop. This prop has no effect if you supply a custom labelRenderer callback.}

\item{labelRenderer}{Logical. Whether to render labels}

\item{labelStepSize}{Numeric. Increment between successive labels. Must be greater than zero}

\item{labelType}{Character. Instructions for rendering the label. Options will be clock, date, datetime, number, percentage, etc.}

\item{max}{Numeric. Maximum value of the slider}

\item{min}{Numeric. Minimum value of the slider}

\item{releaseValue}{Numeric. Value of slider on release of handle. This will only fire callbacks when the 
slider has been released, which is probably desirable in most instances for 
server-side callbacks}

\item{showTrackFill}{Logical. Whether a solid bar should be rendered on the track between current and initial values, or between handles for RangeSlider}

\item{stepSize}{Numeric. Increment between successive values; amount by which the handle moves. Must be greater than zero}

\item{updateKey}{Character. key to use when updating parent component}

\item{value}{Numeric. Value of slider}

\item{vertical}{Logical. Whether to show the slider in a vertical orientation}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

