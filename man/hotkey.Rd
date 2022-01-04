% Auto-generated: do not edit by hand
\name{hotkey}

\alias{hotkey}

\title{Hotkey component}

\description{
Hotkeys enable you to create interactions based on user keyboard events.  When a Hotkey is enabled, a hotkey interaction will trigger an n_presses and n_presses_timestamp update
}

\usage{
hotkey(children=NULL, id=NULL, className=NULL, combo=NULL,
globalTrigger=NULL, hotkey=NULL, key=NULL, label=NULL,
n_presses=NULL, n_presses_timestamp=NULL, role=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{combo}{Character. Hotkey combination string, such as "space" or "cmd+n".}

\item{globalTrigger}{Logical. If false, the hotkey is active only when the target is focused.
If true, the hotkey can be triggered regardless of what component is focused.}

\item{hotkey}{Character. Signifies the last hotkey that was pressed}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Label for component}

\item{n_presses}{An integer that represents the number of times
that this shortcut has been fired.}

\item{n_presses_timestamp}{An integer that represents the time (in ms since 1970)
at which n_presses changed. This can be used to tell
which event was fired most recently.}

\item{role}{Character. The ARIA role attribute}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

