% Auto-generated: do not edit by hand
\name{sparkline}

\alias{sparkline}

\title{Sparkline component}

\description{
@param props @returns {*} @constructor
}

\usage{
sparkline(id=NULL, ariaLabel=NULL, barSeries=NULL, data=NULL,
height=NULL, key=NULL, lineSeries=NULL, margin=NULL,
max=NULL, min=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{ariaLabel}{Character. Aria label}

\item{barSeries}{Lists containing elements 'fill', 'fillopacity', 'stroke', 'strokewidth'.
those elements have the following types:
  - fill (character; optional)
  - fillopacity (numeric; optional)
  - stroke (character; optional)
  - strokewidth (numeric; optional). Properties to pass through for a BarSeries object}

\item{data}{List of numerics. Data to display in the sparkline}

\item{height}{Numeric. }

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{lineSeries}{Lists containing elements 'fill', 'fillopacity', 'curve', 'showarea', 'showline', 'stroke', 'strokedasharray', 'strokelinecap', 'strokewidth'.
those elements have the following types:
  - fill (character; optional)
  - fillopacity (numeric; optional)
  - curve (a value equal to: 'linear', 'cardinal', 'basis', 'monotonex'; optional)
  - showarea (logical; optional)
  - showline (logical; optional)
  - stroke (character; optional)
  - strokedasharray (character; optional)
  - strokelinecap (a value equal to: 'butt', 'square', 'round', 'inherit'; optional)
  - strokewidth (numeric; optional). Properties to pass through for a LineSeries object}

\item{margin}{Lists containing elements 'top', 'right', 'bottom', 'left'.
those elements have the following types:
  - top (numeric; optional)
  - right (numeric; optional)
  - bottom (numeric; optional)
  - left (numeric; optional). chart margin, leave room for labels! note 0 may clip LineSeries and PointSeries. a partial { top/right/bottom/ left } object is filled with the other default values}

\item{max}{Numeric. Optionally set the maximum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)}

\item{min}{Numeric. Optionally set the minimum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)}

\item{width}{Numeric. Width of the svg including left/right margin}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

