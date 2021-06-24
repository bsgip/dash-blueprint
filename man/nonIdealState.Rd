% Auto-generated: do not edit by hand
\name{nonIdealState}

\alias{nonIdealState}

\title{NonIdealState component}

\description{
Non-ideal UI states inform the user that some content is unavailable. There are several types of non-ideal states, including:  Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.  Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.  Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next. @param {*} props
}

\usage{
nonIdealState(children=NULL, id=NULL, className=NULL, description=NULL,
icon=NULL, key=NULL, role=NULL, title=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{description}{Character. A longer description of the non-ideal state. A string or 
number value will be wrapped in a <div> to preserve margins.}

\item{icon}{Character. The name of a Blueprint icon or a JSX Element (such as <Spinner/>) to render above the title.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{Character. The ARIA role attribute}

\item{title}{Character. The title of the non-ideal state.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

