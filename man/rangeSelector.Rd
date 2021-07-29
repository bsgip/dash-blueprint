% Auto-generated: do not edit by hand
\name{rangeSelector}

\alias{rangeSelector}

\title{RangeSelector component}

\description{
RangeSelector component using d3 and hooks
}

\usage{
rangeSelector(id=NULL, data=NULL, group=NULL, groupSize=NULL, height=NULL,
isDate=NULL, margin=NULL, selectSingle=NULL, selected=NULL,
width=NULL, yLines=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{Unnamed list. Data}

\item{group}{Logical. Flag whether data should be aggregated and presented as a count.
Currently not implemented}

\item{groupSize}{Numeric. For grouped data, the size of the grouping}

\item{height}{Numeric. Chart height}

\item{isDate}{Logical. Whether to cast the data x values as a date}

\item{margin}{Named list. Margin to use around chart}

\item{selectSingle}{Logical. Flag whether to allow only selection of a single bar in the chart}

\item{selected}{Unnamed list. Selected datum (use in point click callbacks)}

\item{width}{Numeric. Chart width}

\item{yLines}{Unnamed list. markings to add on y-axis}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

