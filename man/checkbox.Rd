% Auto-generated: do not edit by hand
\name{checkbox}

\alias{checkbox}

\title{Checkbox component}

\description{
A checkbox allows the user to toggle between checked, unchecked, and (rarely) indeterminate states.
}

\usage{
checkbox(children=NULL, id=NULL, alignIndicator=NULL, autoFocus=NULL,
checked=NULL, className=NULL, disabled=NULL, inline=NULL,
key=NULL, label=NULL, large=NULL, role=NULL, tagName=NULL,
...)
}

\arguments{
\item{children}{Logical | numeric | character | named list | unnamed list. JSX label for the control.}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{alignIndicator}{Character. Alignment of the indicator within container.}

\item{autoFocus}{Character. The element should be automatically focused after the page loaded.}

\item{checked}{Logical. Whether the control is checked.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{disabled}{Logical. Indicates whether the user can interact with the element.}

\item{inline}{Logical. Whether the control should appear as an inline element.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Text label for the control.

Use children or labelElement to supply JSX content. This prop actually supports JSX elements,
but TypeScript will throw an error because HTMLAttributes only allows strings.}

\item{large}{Logical. Whether this control should use large styles.}

\item{role}{Character. The ARIA role attribute}

\item{tagName}{Character. Name of the HTML tag that wraps the checkbox.

By default a <label> is used, which effectively enlarges the click target to include all
of its children. Supply a different tag name if this behavior is undesirable or you're
listening to click events from a parent element (as the label can register duplicate clicks).}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

