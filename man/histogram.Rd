% Auto-generated: do not edit by hand
\name{histogram}

\alias{histogram}

\title{Histogram component}

\description{
This component provides Blueprint styling to native HTML tables.  It also includes additional functionality for searching, ordering and pagination of data in the table.  IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you want selection to show properly, and use css to modify rows with className 'selected' @param props @returns {*} @constructor
}

\usage{
histogram(children=NULL, id=NULL, className=NULL, key=NULL,
maxCount=NULL, role=NULL, row_click=NULL, rows=NULL,
selectable=NULL, selection=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{maxCount}{Numeric. Maximum count to be included in the histogram. Values above this number
will be rendered a different colour}

\item{role}{Character. The ARIA role attribute}

\item{row_click}{Character. Key for the clicked row}

\item{rows}{Unnamed list. Row data used to create the histogram}

\item{selectable}{Logical. Whether row selection is enabled}

\item{selection}{Unnamed list. Currently selected rows}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

