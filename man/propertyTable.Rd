% Auto-generated: do not edit by hand
\name{propertyTable}

\alias{propertyTable}

\title{PropertyTable component}

\description{
This component provides Blueprint styling to native HTML tables.  It also includes additional functionality for searching, ordering and pagination of data in the table.  IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you want selection to show properly, and use css to modify rows with className 'selected' @param props @returns {*} @constructor
}

\usage{
propertyTable(children=NULL, id=NULL, actionButtonProps=NULL,
actions=NULL, className=NULL, columns=NULL, infoAction=NULL,
key=NULL, locateAction=NULL, maxCount=NULL, page_size=NULL,
role=NULL, row_click=NULL, rows=NULL, selectable=NULL,
selection=NULL, show_more_less=NULL, show_more_size=NULL,
...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{actionButtonProps}{Named list. Props to pass through to the action button}

\item{actions}{List of characters. A set of actions to display in the first column}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{columns}{Unnamed list. An array of properties to display in the table}

\item{infoAction}{Named list. Row clicked for info action}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{locateAction}{Named list. Row selected for locate action}

\item{maxCount}{Numeric. Maximum count to be included in the histogram. Values above this number
will be rendered a different colour}

\item{page_size}{Numeric. Page size (in rows)}

\item{role}{Character. The ARIA role attribute}

\item{row_click}{Character. Key for the clicked row}

\item{rows}{Unnamed list. Row data used to create the histogram}

\item{selectable}{Logical. Whether row selection is enabled}

\item{selection}{Unnamed list. Currently selected rows}

\item{show_more_less}{Logical. Show simple more/less buttons to adjust page size}

\item{show_more_size}{Numeric. Number of rows to increase/decrease page size by
(for use in simple show more mode)}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

