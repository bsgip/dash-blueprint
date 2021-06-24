% Auto-generated: do not edit by hand
\name{toggleButtonGroup}

\alias{toggleButtonGroup}

\title{ToggleButtonGroup component}

\description{
An alternate implementation of a RadioGroup, this allows a set of Button components to be selected, where only one is ever active.
}

\usage{
toggleButtonGroup(children=NULL, id=NULL, alignText=NULL, className=NULL,
fill=NULL, key=NULL, large=NULL, minimal=NULL, role=NULL,
value=NULL, vertical=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{alignText}{Character. Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{fill}{Logical. Whether the button group should take up the full width of its container.
@default false}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{large}{Logical. Whether the child buttons should appear with large styling.
@default false}

\item{minimal}{Logical. Whether the child buttons should appear with minimal styling.
@default false}

\item{role}{Character. The ARIA role attribute}

\item{value}{Character. The key of the button last clicked}

\item{vertical}{Logical. Whether the button group should appear with vertical styling.
@default false}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

