% Auto-generated: do not edit by hand
\name{text}

\alias{text}

\title{Text component}

\description{
The Text component adds accessible overflow behavior to a line of text by conditionally adding the title attribute and truncating with an ellipsis when content overflows its container. @param {*} props
}

\usage{
text(children=NULL, id=NULL, className=NULL, ellipsize=NULL,
key=NULL, role=NULL, tagName=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{ellipsize}{Logical. Indicates that this component should be truncated with an ellipsis if it overflows 
its container. The title attribute will also be added when content overflows to show 
the full text of the children on hover.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{Character. The ARIA role attribute}

\item{tagName}{Character. HTML tag name to use for rendered element.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

