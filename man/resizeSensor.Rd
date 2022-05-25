% Auto-generated: do not edit by hand
\name{resizeSensor}

\alias{resizeSensor}

\title{ResizeSensor component}

\description{
ResizeSensor is a component that provides a "resize" event for its single DOM element child. It is a thin wrapper around ResizeObserver to provide React bindings.   Resize events are fired each time the child div resizes, with a custom debounce timeout to ensure we aren't overloaded with events.  Note: This was more useful when Dash components were not size-aware, and should be used sparingly @param props @returns {*} @constructor
}

\usage{
resizeSensor(children=NULL, id=NULL, debounceTimer=NULL, key=NULL,
observeParents=NULL, size=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{debounceTimer}{Numeric. How long to debounce before firing an event. Useful for situations
where dynamic resizing would cause a lot of events to fire.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{observeParents}{Logical. Whether to observe parent sizes}

\item{size}{Logical | numeric | character | named list | unnamed list. The current size of the observed e.g.
{'x': 0, 'y': 0, 'width': 884, 'height': 17.265625, 'top': 0,
 'right': 884, 'bottom': 17.265625, 'left': 0}
TODO use a proper PropType}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

