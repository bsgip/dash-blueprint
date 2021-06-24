% Auto-generated: do not edit by hand
\name{listGroup}

\alias{listGroup}

\title{ListGroup component}

\description{
A ListGroup presents a set of repeated options, with the option to add or remove rows from the set.
}

\usage{
listGroup(children=NULL, id=NULL, childData=NULL, header=NULL,
key=NULL, label=NULL, listData=NULL, maxRows=NULL,
minRows=NULL, nRows=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{childData}{Character. Child component data}

\item{header}{A list of or a singular dash component, string or number. }

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Label for the form group}

\item{listData}{Character. List of child data for currently visible rows}

\item{maxRows}{Numeric. Max number of rows to show}

\item{minRows}{Numeric. Min number of rows to show}

\item{nRows}{Numeric. Whether to show a limited number of children}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

