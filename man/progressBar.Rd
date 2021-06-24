% Auto-generated: do not edit by hand
\name{progressBar}

\alias{progressBar}

\title{ProgressBar component}

\description{
Progress bars indicate progress towards the completion of a task or an indeterminate loading state. @param {*} props
}

\usage{
progressBar(children=NULL, id=NULL, animate=NULL, className=NULL,
intent=NULL, stripes=NULL, value=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{animate}{Logical. Whether the background should animate.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{intent}{Character. Visual intent color to apply to element.
"none"
        | "primary"
        | "success"
        | "warning"
        | "danger"}

\item{stripes}{Logical. Whether the background should be striped.}

\item{value}{Numeric. A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

