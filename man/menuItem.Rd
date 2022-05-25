% Auto-generated: do not edit by hand
\name{menuItem}

\alias{menuItem}

\title{MenuItem component}

\description{
A MenuItem is a single interactive item in a Menu.  This component renders an <li> containing an <a>. Make the MenuItem interactive by providing the href, target, and onClick props as necessary.  Create submenus by nesting MenuItems inside each other as children. Use the required text prop for MenuItem content.  We also override the onClick method to make it behave like a dash Link rather than a regular URL. @param props @returns {*} @constructor
}

\usage{
menuItem(children=NULL, id=NULL, active=NULL, className=NULL,
disabled=NULL, href=NULL, htmlTitle=NULL, icon=NULL,
intent=NULL, key=NULL, label=NULL, labelClassName=NULL,
multiline=NULL, popoverProps=NULL,
preserveSearchString=NULL, role=NULL,
shouldDismissPopover=NULL, tagName=NULL, target=NULL,
text=NULL, textClassName=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{active}{Logical. Whether this menu item should appear with an active state.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{disabled}{Logical. Whether this menu item is non-interactive. Enabling this prop will
ignore href, tabIndex, and mouse event handlers (in particular click, down, enter, leave).}

\item{href}{Character. Link URL.}

\item{htmlTitle}{Character. HTML title to be passed to the component}

\item{icon}{Character. Name of a Blueprint UI icon (or an icon element) to render before the text.}

\item{intent}{Character. Visual intent color to apply to element.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Right-aligned label text content, useful for displaying hotkeys.}

\item{labelClassName}{Character. A space-delimited list of class names to pass along to the right-aligned label wrapper element.}

\item{multiline}{Logical. Whether the text should be allowed to wrap to multiple lines.
If false, text will be truncated with an ellipsis when it reaches max-width.
@default false}

\item{popoverProps}{Named list. Props to spread to Popover. Note that content and minimal cannot be changed and usePortal
defaults to false so all submenus will live in the same container.}

\item{preserveSearchString}{Logical. Whether to preserve search string on href update. When true, a link from
/foo?bar= will redirect to /new-url?bar=}

\item{role}{Character. The ARIA role attribute}

\item{shouldDismissPopover}{Logical. Whether an enabled item without a submenu should automatically close its parent popover when clicked.
@default true}

\item{tagName}{Character. Name of the HTML tag that wraps the MenuItem.
@default "a"}

\item{target}{Character. Link target attribute. Use "_blank" to open in a new window.}

\item{text}{Character. Item text, required for usability.}

\item{textClassName}{Character. A space-delimited list of class names to pass along to the text wrapper element.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

