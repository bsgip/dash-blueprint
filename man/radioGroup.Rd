% Auto-generated: do not edit by hand
\name{radioGroup}

\alias{radioGroup}

\title{RadioGroup component}

\description{
A radio button typically represents a single option in a mutually exclusive list  (where only one item can be selected at a time).  Blueprint provides Radio and RadioGroup components for these two layers.
}

\usage{
radioGroup(children=NULL, id=NULL, className=NULL, inline=NULL,
key=NULL, label=NULL, name=NULL, options=NULL, value=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{inline}{Logical. Whether the radio buttons are to be displayed inline horizontally.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Label for the form group}

\item{name}{Character. Name of the group, used to link radio buttons together in HTML. If omitted, a unique name will be generated internally.}

\item{options}{Unnamed list. Array of options to render in the group. This prop is mutually exclusive with children: either provide an array of IOptionProps objects or provide <Radio> children elements.}

\item{value}{Logical | numeric | character | named list | unnamed list. Label for the form group}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

