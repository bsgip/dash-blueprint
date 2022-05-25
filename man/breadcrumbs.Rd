% Auto-generated: do not edit by hand
\name{breadcrumbs}

\alias{breadcrumbs}

\title{Breadcrumbs component}

\description{
Breadcrumbs identify the path to the current resource in an application.  On click, a Dash Breadcrumb will update the URL to the href of the given crumb. Items are expected to be an array with `href` and `text` entries, e.g.  ``` [{     text: "Foo",     href: "/foo",     icon: "folder" }] ``` as well as other `Breadcrumb` options: - icon - iconTitle - intent
}

\usage{
breadcrumbs(children=NULL, id=NULL, className=NULL, collapseFrom=NULL,
items=NULL, key=NULL, minVisibleItems=NULL,
overflowListProps=NULL, popoverProps=NULL, role=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{collapseFrom}{Character. Which direction the breadcrumbs should collapse from: start or end.}

\item{items}{Unnamed list. All breadcrumbs to display. Breadcrumbs that do not fit in the container
will be rendered in an overflow menu instead.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{minVisibleItems}{Numeric. The minimum number of visible breadcrumbs that should never collapse into the
overflow menu, regardless of DOM dimensions.}

\item{overflowListProps}{Named list. Props to spread to OverflowList. Note that items, overflowRenderer,
and visibleItemRenderer cannot be changed.}

\item{popoverProps}{Named list. Props to spread to the Popover showing the overflow menu.}

\item{role}{Character. The ARIA role attribute}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

