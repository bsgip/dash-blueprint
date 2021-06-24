% Auto-generated: do not edit by hand
\name{popover}

\alias{popover}

\title{Popover component}

\description{
Popovers display floating content next to a target element.  Popover is built on top of the Popper.js library. Popper.js is a small (~6kb)  library that offers a powerful, customizable positioning engine and operates at blazing speed (~60fps). @param {*} props
}

\usage{
popover(children=NULL, id=NULL, alignText=NULL, boundary=NULL,
captureDismiss=NULL, className=NULL, content=NULL,
defaultIsOpen=NULL, disabled=NULL, fill=NULL,
hasBackdrop=NULL, hoverCloseDelay=NULL, hoverOpenDelay=NULL,
inheritDarkTheme=NULL, interactionKind=NULL, key=NULL,
large=NULL, minimal=NULL, modifiers=NULL,
openOnTargetFocus=NULL, position=NULL, role=NULL,
targetTagName=NULL, transitionDuration=NULL, usePortal=NULL,
vertical=NULL, wrapperTagName=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{alignText}{Character. Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.}

\item{boundary}{Character. boundary}

\item{captureDismiss}{Logical. }

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{content}{A list of or a singular dash component, string or number. Popover content}

\item{defaultIsOpen}{Logical. }

\item{disabled}{Logical. }

\item{fill}{Logical. Whether the button group should take up the full width of its container.
@default false}

\item{hasBackdrop}{Logical. }

\item{hoverCloseDelay}{Numeric. }

\item{hoverOpenDelay}{Numeric. }

\item{inheritDarkTheme}{Logical. }

\item{interactionKind}{Character. }

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{large}{Logical. Whether the child buttons should appear with large styling.
@default false}

\item{minimal}{Logical. Whether the child buttons should appear with minimal styling.
@default false}

\item{modifiers}{Logical | numeric | character | named list | unnamed list. }

\item{openOnTargetFocus}{Logical. }

\item{position}{Character. }

\item{role}{Character. The ARIA role attribute}

\item{targetTagName}{Character. }

\item{transitionDuration}{Numeric. }

\item{usePortal}{Logical. }

\item{vertical}{Logical. Whether the button group should appear with vertical styling.
@default false}

\item{wrapperTagName}{Character. }


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

