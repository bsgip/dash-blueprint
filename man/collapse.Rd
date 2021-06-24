% Auto-generated: do not edit by hand
\name{collapse}

\alias{collapse}

\title{Collapse component}

\description{
The Collapse element shows and hides content with a built-in slide in/out animation.  You might use this to create a panel of settings for your application,  with sub-sections that can be expanded and collapsed.  NOTE: This Dash component creates a Button element to handle the open/close function, and wraps the button and Collapse as a fragment
}

\usage{
collapse(children=NULL, id=NULL, buttonProps=NULL, className=NULL,
hideIcon=NULL, hideRightIcon=NULL, hideText=NULL,
isOpen=NULL, keepChildrenMounted=NULL, key=NULL,
minimal=NULL, role=NULL, showIcon=NULL, showRightIcon=NULL,
showText=NULL, transitionDuration=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{buttonProps}{Named list. The button component to render use as the component that determines the
Collapse state.}

\item{className}{Character. The className to use for the Collapse component}

\item{hideIcon}{Character. Icon to display for hide button}

\item{hideRightIcon}{Character. Icon to display for hide button}

\item{hideText}{Character. Text to display for hide button}

\item{isOpen}{Logical. Whether content is shown initially}

\item{keepChildrenMounted}{Logical. Whether the child components will remain mounted when the Collapse is closed. 
Setting to true may improve performance by avoiding re-mounting children.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{minimal}{Logical. Show a minimal button}

\item{role}{Character. The ARIA role attribute}

\item{showIcon}{Character. Icon to display for show button}

\item{showRightIcon}{Character. Icon to display for show button}

\item{showText}{Character. Text to display for show button}

\item{transitionDuration}{Numeric. The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. 
Only set this prop if you override Blueprint's default transitions with new transitions of a different length.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

