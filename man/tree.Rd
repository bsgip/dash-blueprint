% Auto-generated: do not edit by hand
\name{tree}

\alias{tree}

\title{Tree component}

\description{
Trees display hierarchical data. In this implementation, selecting a Node in the tree redirects to the given href
}

\usage{
tree(children=NULL, id=NULL, key=NULL, nodes=NULL,
selectedNode=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{nodes}{Unnamed list. Set of nodes to be rendered}

\item{selectedNode}{Named list. Currently selected node}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

