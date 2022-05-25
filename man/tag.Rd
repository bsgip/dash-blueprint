% Auto-generated: do not edit by hand
\name{tag}

\alias{tag}

\title{Tag component}

\description{
Tags are great for lists of strings. @param {*} props
}

\usage{
tag(children=NULL, id=NULL, active=NULL, className=NULL,
fill=NULL, icon=NULL, intent=NULL, key=NULL, large=NULL,
minimal=NULL, multiline=NULL, rightIcon=NULL, role=NULL,
round=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{active}{Logical. Whether the tag should appear in an active state.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{fill}{Logical. Whether the tag should take up the full width of its container.}

\item{icon}{Character. Name of a Blueprint UI icon (or an icon element) to render before the children.}

\item{intent}{Character. Visual intent color to apply to element.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{large}{Logical. Whether this tag should use large styles.}

\item{minimal}{Logical. Whether this tag should use minimal styles.}

\item{multiline}{Logical. Whether tag content should be allowed to occupy multiple lines. If false, a single line of 
text will be truncated with an ellipsis if it overflows. Note that icons will 
be vertically centered relative to multiline text.}

\item{rightIcon}{Character. Name of a Blueprint UI icon (or an icon element) to render after the children.}

\item{role}{Character. The ARIA role attribute}

\item{round}{Logical. Whether this tag should have rounded ends.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

