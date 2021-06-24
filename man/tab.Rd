% Auto-generated: do not edit by hand
\name{tab}

\alias{tab}

\title{Tab component}

\description{
Tab is a minimal wrapper with no functionality of its own—it is managed entirely by its parent Tabs wrapper. Tab title text can be set either via title prop or via React children (for more complex content).  The associated tab panel will be visible when the Tab is active. Omitting panel is supported and can be useful when you want the associated panel to appear elsewhere in the DOM (by rendering it yourself as needed). @param {*} props
}

\usage{
tab(children=NULL, id=NULL, className=NULL, disabled=NULL,
panelClassName=NULL, title=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{disabled}{Logical. }

\item{panelClassName}{Character. }

\item{title}{Character. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

