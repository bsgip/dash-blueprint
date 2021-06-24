% Auto-generated: do not edit by hand
\name{panelStack}

\alias{panelStack}

\title{PanelStack component}

\description{
PanelStack manages a stack of panels and displays only the topmost panel.  Each panel appears with a header containing a "back" button to return to the previous panel.  The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.  Note: currently not functional
}

\usage{
panelStack(id=NULL, className=NULL, disabled=NULL, filterable=NULL,
icon=NULL, items=NULL, minimal=NULL, popoverProps=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Class name}

\item{disabled}{Logical. Whether the menu is disabled}

\item{filterable}{Logical. Whether the list can be filtered}

\item{icon}{Character. Button icon}

\item{items}{Unnamed list. Items to choose from}

\item{minimal}{Logical. Use minimal popover style}

\item{popoverProps}{Named list. Additional props to define the popover behaviour}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

