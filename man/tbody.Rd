% Auto-generated: do not edit by hand
\name{tbody}

\alias{tbody}

\title{Tbody component}

\description{
This is a reimplementation of html Tr with an extra state that supports modifying the className when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
}

\usage{
tbody(children=NULL, id=NULL, className=NULL, key=NULL,
rowKey=NULL, selected=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{key}{Character. Key}

\item{rowKey}{Character. A proxy for key that can be passed through to the Tr component}

\item{selected}{Logical. Whether row is selected}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

