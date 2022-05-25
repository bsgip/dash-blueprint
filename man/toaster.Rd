% Auto-generated: do not edit by hand
\name{toaster}

\alias{toaster}

\title{Toaster component}

\description{
The Toaster React component is a stateful container for a single list of toasts. Internally, it uses Overlay to manage children and transitions. It can be vertically aligned along the top or bottom edge of its container (new toasts will slide in from that edge) and horizontally aligned along the left edge, center, or right edge of its container.  TODO: Document how to use a Toaster in Dash
}

\usage{
toaster(children=NULL, id=NULL, autoFocus=NULL,
canEscapeKeyClear=NULL, className=NULL, key=NULL,
position=NULL, role=NULL, toasterId=NULL, toasts=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{autoFocus}{Logical. Whether a toast should acquire application focus when it first opens.
This is disabled by default so that toasts do not interrupt the user's
flow. Note that enforceFocus is always disabled for Toasters.}

\item{canEscapeKeyClear}{Logical. Whether pressing the esc key should clear all active toasts.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{position}{Character. Toast position}

\item{role}{Character. The ARIA role attribute}

\item{toasterId}{Character. Unique identifier for a toaster. All Toasters with the same id
will render to the same underlying toaster. There is no guarantee
which will instantiate first, so they should all be passed the
same Toaster props}

\item{toasts}{Logical | numeric | character | named list | unnamed list. Toasts to display}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

