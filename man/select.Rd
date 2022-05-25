% Auto-generated: do not edit by hand
\name{select}

\alias{select}

\title{Select component}

\description{
Use `Select` for choosing one item from a list.
}

\usage{
select(id=NULL, className=NULL, disabled=NULL, fill=NULL,
filterable=NULL, icon=NULL, items=NULL, label=NULL,
minimal=NULL, popoverProps=NULL, required=NULL, valid=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Class name}

\item{disabled}{Logical. Whether the menu is disabled}

\item{fill}{Logical. Whether the component should take up the full width of its container.
This overrides popoverProps.fill. You also have to ensure that the
child component has fill set to true or is styled appropriately.}

\item{filterable}{Logical. Whether the list can be filtered}

\item{icon}{Character. Button icon}

\item{items}{Unnamed list. Items to choose from}

\item{label}{Character. The selected item label}

\item{minimal}{Logical. Use minimal popover style}

\item{popoverProps}{Named list. Additional props to define the popover behaviour}

\item{required}{Logical. Whether this input is required. Used in form validation}

\item{valid}{Logical. Determine whether the input is valid. Used in form validation}

\item{value}{Character. The selected item}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

