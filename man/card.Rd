% Auto-generated: do not edit by hand
\name{card}

\alias{card}

\title{Card component}

\description{
A card is a bounded unit of UI content with a solid background color.
}

\usage{
card(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL,
className=NULL, contentEditable=NULL, contextMenu=NULL,
dir=NULL, disabled=NULL, draggable=NULL, elevation=NULL,
form=NULL, formAction=NULL, hidden=NULL, href=NULL,
interactive=NULL, key=NULL, lang=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL, name=NULL, role=NULL,
spellCheck=NULL, style=NULL, tabIndex=NULL, type=NULL,
value=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{accessKey}{Character. Defines a keyboard shortcut to activate or add focus to the element.}

\item{autoFocus}{Character. The element should be automatically focused after the page loaded.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{contentEditable}{Character. Indicates whether the element's content is editable.}

\item{contextMenu}{Character. Defines the ID of a <menu> element which will serve as the element's context menu.}

\item{dir}{Character. Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)}

\item{disabled}{Character. Indicates whether the user can interact with the element.}

\item{draggable}{Character. Defines whether the element can be dragged.}

\item{elevation}{Numeric. Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.}

\item{form}{Character. Indicates the form that is the owner of the element.}

\item{formAction}{Character. Indicates the action of the element, overriding the action defined in the <form>.}

\item{hidden}{Character. Prevents rendering of given element, while keeping child elements, e.g. script elements, active.}

\item{href}{Character. window location to set on click}

\item{interactive}{Logical. Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.

Recommended when onClick is also defined.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{lang}{Character. Defines the language used in the element.}

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}

\item{name}{Character. Name of the element. For example used by the server to identify the fields in form submits.}

\item{role}{Character. The ARIA role attribute}

\item{spellCheck}{Character. Indicates whether spell checking is allowed for the element.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Character. Overrides the browser's default tab order and follows the one specified instead.}

\item{type}{Character. Defines the type of the element.}

\item{value}{Character. Defines a default value which will be displayed in the element on page load.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

