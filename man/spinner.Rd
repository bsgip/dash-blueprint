% Auto-generated: do not edit by hand
\name{spinner}

\alias{spinner}

\title{Spinner component}

\description{
Spinners indicate progress in a circular fashion. They're great for ongoing operations and can also represent known progress. @param {*} props
}

\usage{
spinner(id=NULL, className=NULL, intent=NULL, key=NULL, role=NULL,
size=NULL, tagName=NULL, value=NULL, ...)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{intent}{Character. Visual intent color to apply to element.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{Character. The ARIA role attribute}

\item{size}{Numeric. numberSpinner.SIZE_STANDARD = 50

Width and height of the spinner in pixels. The size cannot be less than 10px.

Constants are available for common sizes:
Spinner.SIZE_SMALL = 20px
Spinner.SIZE_STANDARD = 50px
Spinner.SIZE_LARGE = 100px}

\item{tagName}{Character. HTML tag for the two wrapper elements. If rendering a <Spinner> inside an <svg>, change this to an SVG element like "g".}

\item{value}{Numeric. A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

