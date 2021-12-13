% Auto-generated: do not edit by hand
\name{switch}

\alias{switch}

\title{Switch component}

\description{
A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
}

\usage{
switch(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL,
checked=NULL, className=NULL, contentEditable=NULL,
contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL,
form=NULL, formAction=NULL, hidden=NULL, intent=NULL,
key=NULL, lang=NULL, name=NULL, required=NULL, role=NULL,
spellCheck=NULL, style=NULL, tabIndex=NULL, title=NULL,
type=NULL, updateKey=NULL, valid=NULL, value=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{accessKey}{Character. Defines a keyboard shortcut to activate or add focus to the element.}

\item{autoFocus}{Character. The element should be automatically focused after the page loaded.}

\item{checked}{Logical. An integer that represents the number of times
that this element has been clicked on.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{contentEditable}{Character. Indicates whether the element's content is editable.}

\item{contextMenu}{Character. Defines the ID of a <menu> element which will serve as the element's context menu.}

\item{dir}{Character. Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)}

\item{disabled}{Character. Indicates whether the user can interact with the element.}

\item{draggable}{Character. Defines whether the element can be dragged.}

\item{form}{Character. Indicates the form that is the owner of the element.}

\item{formAction}{Character. Indicates the action of the element, overriding the action defined in the <form>.}

\item{hidden}{Character. Prevents rendering of given element, while keeping child elements, e.g. script elements, active.}

\item{intent}{Character. Button intent (primary/success/warning/danger/none)}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{lang}{Character. Defines the language used in the element.}

\item{name}{Character. Name of the element. For example used by the server to identify the fields in form submits.}

\item{required}{Logical. Whether this input is required. Used in form validation}

\item{role}{Character. The ARIA role attribute}

\item{spellCheck}{Character. Indicates whether spell checking is allowed for the element.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Character. Overrides the browser's default tab order and follows the one specified instead.}

\item{title}{Character. Text to be displayed in a tooltip when hovering over the element.}

\item{type}{Character. Defines the type of the element.}

\item{updateKey}{Character. key to use when updating parent component}

\item{valid}{Logical. Determine whether the input is valid. Used in form validation}

\item{value}{Character. Defines a default value which will be displayed in the element on page load.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

