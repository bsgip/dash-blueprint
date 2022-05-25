% Auto-generated: do not edit by hand
\name{hTMLTable}

\alias{hTMLTable}

\title{HTMLTable component}

\description{
This component provides Blueprint styling to native HTML tables.  It also includes additional functionality for searching, ordering and pagination of data in the table.  IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you want selection to show properly, and use css to modify rows with className 'selected' @param props @returns {*} @constructor
}

\usage{
hTMLTable(children=NULL, id=NULL, bordered=NULL, className=NULL,
condensed=NULL, current_page=NULL, filter_by=NULL,
filter_columns=NULL, filter_strings=NULL, interactive=NULL,
key=NULL, n_clicks=NULL, page_size=NULL, role=NULL,
row_click=NULL, selectable=NULL, selection=NULL,
show_more_less=NULL, show_more_size=NULL, small=NULL,
sort_column=NULL, sort_columns=NULL, sort_direction=NULL,
striped=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{bordered}{Logical. Enables borders between rows and cells.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{condensed}{Logical. Use small, condensed appearance.}

\item{current_page}{Numeric. Current page to show}

\item{filter_by}{Named list. Filtering strings}

\item{filter_columns}{Unnamed list. Column numbers that may be filtered}

\item{filter_strings}{Named list. Strings to filter columns by}

\item{interactive}{Logical. Enables hover styles on row.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{n_clicks}{Numeric. }

\item{page_size}{Numeric. Page size (in rows)}

\item{role}{Character. The ARIA role attribute}

\item{row_click}{Character. Key for the clicked row}

\item{selectable}{Logical. Whether row selection is enabled}

\item{selection}{Unnamed list. Currently selected rows}

\item{show_more_less}{Logical. Show simple more/less buttons to adjust page size}

\item{show_more_size}{Numeric. Number of rows to increase/decrease page size by
(for use in simple show more mode)}

\item{small}{Logical. Use small, condensed appearance for this element and all child elements.}

\item{sort_column}{Numeric. Column to sort values on}

\item{sort_columns}{Unnamed list. Columns that can be sorted on}

\item{sort_direction}{Character. Sort direction (asc or desc)}

\item{striped}{Logical. Use an alternate background color on odd rows.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

