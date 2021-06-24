% Auto-generated: do not edit by hand
\name{checkboxGroup}

\alias{checkboxGroup}

\title{CheckboxGroup component}

\description{
This is a wrapper around a set of BlueprintJS checkbox and FormGroup components to give functionality similar to the standard Dash checkbox component.  The BlueprintJS checkbox treats every checkbox individually, whereas this groups them into selection items
}

\usage{
checkboxGroup(children=NULL, id=NULL, className=NULL, key=NULL,
label=NULL, value=NULL)
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

\item{label}{Character. Label for the form group}

\item{value}{Unnamed list. Label for the form group}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

