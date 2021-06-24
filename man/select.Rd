% Auto-generated: do not edit by hand
\name{select}

\alias{select}

\title{Select component}

\description{
Use Select<T> for choosing one item from a list. The component's children will be wrapped in a Popover that contains the list and an optional InputGroup to filter it. Provide a predicate to customize the filtering algorithm. The value of a Select<T> (the currently chosen item) is uncontrolled: listen to changes with onItemSelect.
}

\usage{
select(id=NULL, className=NULL, disabled=NULL, filterable=NULL,
icon=NULL, items=NULL, minimal=NULL, popoverProps=NULL,
value=NULL)
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

\item{value}{Character. The selected item}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

