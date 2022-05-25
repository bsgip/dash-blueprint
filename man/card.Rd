% Auto-generated: do not edit by hand
\name{card}

\alias{card}

\title{Card component}

\description{
A card is a bounded unit of UI content with a solid background color.
}

\usage{
card(children=NULL, id=NULL, elevation=NULL, href=NULL,
interactive=NULL, key=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL, role=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{elevation}{Numeric. Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.}

\item{href}{Character. window location to set on click}

\item{interactive}{Logical. Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.

Recommended when onClick is also defined.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}

\item{role}{Character. The ARIA role attribute}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

