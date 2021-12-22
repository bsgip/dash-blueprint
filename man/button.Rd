% Auto-generated: do not edit by hand
\name{button}

\alias{button}

\title{Button component}

\description{
This is pretty much a straight copy/paste from the dash html component button, except we render a blueprint button. If you don't care about styling, you should probably use the dash version.  TODO - it would be useful to have a href prop here, where clicking a button routes to a different URL @param props @returns {*} @constructor
}

\usage{
button(children=NULL, id=NULL, accessKey=NULL, active=NULL,
alignText=NULL, autoFocus=NULL, className=NULL,
contentEditable=NULL, contextMenu=NULL, dir=NULL,
disabled=NULL, draggable=NULL, form=NULL, formAction=NULL,
hidden=NULL, href=NULL, icon=NULL, intent=NULL, key=NULL,
lang=NULL, large=NULL, minimal=NULL, n_clicks=NULL,
n_clicks_timestamp=NULL, name=NULL, rightIcon=NULL,
role=NULL, small=NULL, spellCheck=NULL, style=NULL,
tabIndex=NULL, title=NULL, type=NULL, value=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{accessKey}{Character. Defines a keyboard shortcut to activate or add focus to the element.}

\item{active}{Logical. If set to true, the button will display in an active state. This is equivalent to setting className={Classes.ACTIVE}.}

\item{alignText}{Character. Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.
Choice of (`left`, `right`, `center`)}

\item{autoFocus}{Character. The element should be automatically focused after the page loaded.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{contentEditable}{Character. Indicates whether the element's content is editable.}

\item{contextMenu}{Character. Defines the ID of a <menu> element which will serve as the element's context menu.}

\item{dir}{Character. Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)}

\item{disabled}{Logical. Indicates whether the user can interact with the element.}

\item{draggable}{Character. Defines whether the element can be dragged.}

\item{form}{Character. Indicates the form that is the owner of the element.}

\item{formAction}{Character. Indicates the action of the element, overriding the action defined in the <form>.}

\item{hidden}{Character. Prevents rendering of given element, while keeping child elements, e.g. script elements, active.}

\item{href}{Character. window location to set on click}

\item{icon}{Character. Button intent (primary/success/warning/danger/none)}

\item{intent}{Character. Button intent (primary/success/warning/danger/none)}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{lang}{Character. Defines the language used in the element.}

\item{large}{Logical. Whether this button should use large styles.}

\item{minimal}{Logical. Whether this button should use minimal styles.}

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}

\item{name}{Character. Name of the element. For example used by the server to identify the fields in form submits.}

\item{rightIcon}{Character. Name of a Blueprint UI icon (or an icon element) to render after the text.}

\item{role}{Character. The ARIA role attribute}

\item{small}{Logical. Whether this button should use small styles.}

\item{spellCheck}{Character. Indicates whether spell checking is allowed for the element.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Character. Overrides the browser's default tab order and follows the one specified instead.}

\item{title}{Character. Text to be displayed in a tooltip when hovering over the element.}

\item{type}{Character. Defines the type of the element.}

\item{value}{Character. Defines a default value which will be displayed in the element on page load.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

