% Auto-generated: do not edit by hand
\name{tabs}

\alias{tabs}

\title{Tabs component}

\description{
Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in controlled mode by providing selectedTabId and onChange props, or in uncontrolled mode by optionally providing defaultSelectedTabId and onChange.  Children of the Tabs are rendered in order in the tab list, which is a flex container. Tab children are managed by the component; clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility.  Insert a <Tabs.Expander /> between any two children to right-align all subsequent children (or bottom-align when vertical).
}

\usage{
tabs(children=NULL, id=NULL, animate=NULL,
defaultSelectedTabId=NULL, key=NULL, large=NULL,
renderActiveTabPanelOnly=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{animate}{Logical. }

\item{defaultSelectedTabId}{Character. }

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{large}{Logical. }

\item{renderActiveTabPanelOnly}{Logical. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

