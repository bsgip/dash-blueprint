% Auto-generated: do not edit by hand
\name{switch}

\alias{switch}

\title{Switch component}

\description{
A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
}

\usage{
switch(children=NULL, id=NULL, alignIndicator=NULL, checked=NULL,
className=NULL, disabled=NULL, inline=NULL, innerLabel=NULL,
innerLabelChecked=NULL, key=NULL, label=NULL, large=NULL,
role=NULL, tagName=NULL, updateKey=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{alignIndicator}{Character. Alignment of the indicator within container.}

\item{checked}{Logical. Whether the control is checked.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{disabled}{Logical. Whether the control is non-interactive.}

\item{inline}{Logical. Whether the control should appear as an inline element.}

\item{innerLabel}{Character. Text to display inside the switch indicator when unchecked.}

\item{innerLabelChecked}{Character. Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Text label for the control.}

\item{large}{Logical. Whether this control should use large styles.}

\item{role}{Character. The ARIA role attribute}

\item{tagName}{Character. Name of the HTML tag that wraps the checkbox.

By default a <label> is used, which effectively enlarges the click target to include all of its children. Supply a different tag name if this behavior is undesirable or you're listening to click events from a parent element (as the label can register duplicate clicks).}

\item{updateKey}{Character. key to use when updating parent component}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

