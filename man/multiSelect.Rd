% Auto-generated: do not edit by hand
\name{multiSelect}

\alias{multiSelect}

\title{MultiSelect component}

\description{
Use MultiSelect<T> for choosing multiple items in a list.  The component renders a TagInput wrapped in a Popover. Similarly to Select, you can pass  in a predicate to customize the filtering algorithm. Selection of a MultiSelect<T>  is controlled: listen to changes with onItemSelect.
}

\usage{
multiSelect(id=NULL, className=NULL, disabled=NULL, filterable=NULL,
icon=NULL, items=NULL, minimal=NULL, placeholder=NULL,
popoverProps=NULL, selectedItems=NULL, value=NULL)
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

\item{placeholder}{Character. Input placeholder text. Shorthand for tagInputProps.placeholder.}

\item{popoverProps}{Named list. Additional props to define the popover behaviour}

\item{selectedItems}{Unnamed list. Returns selected items}

\item{value}{Unnamed list. The selected item}
}

\value{named list of JSON elements corresponding to React.js properties and their values}
