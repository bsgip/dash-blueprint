% Auto-generated: do not edit by hand
\name{sparkline}

\alias{sparkline}

\title{Sparkline component}

\description{
@param props @returns {*} @constructor
}

\usage{
sparkline(children=NULL, id=NULL, key=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

