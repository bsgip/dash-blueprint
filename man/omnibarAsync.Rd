% Auto-generated: do not edit by hand
\name{omnibarAsync}

\alias{omnibarAsync}

\title{OmnibarAsync component}

\description{
Wrapper around the blueprint Omnibar component. The searching is done server-side here and relies on the dash response to return results that can be rendered. @param props @returns {*} @constructor
}

\usage{
omnibarAsync(children=NULL, id=NULL, combo=NULL, items=NULL, key=NULL,
label=NULL, query=NULL, value=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{combo}{Character. Keyboard shortcut to show omnibar}

\item{items}{Logical | numeric | character | named list | unnamed list. Set of items to search}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Label to show on open button (also triggers display of button)}

\item{query}{Character. Query string}

\item{value}{Character. Selected value from dropdown}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

