% Auto-generated: do not edit by hand
\name{inputGroup}

\alias{inputGroup}

\title{InputGroup component}

\description{
An input group allows you to add icons and buttons within a text input to expand its functionality. For example, you might use an input group to build a visibility toggle for a password field.  Note: this implementation only allows for icons to be used, and provides no interactive functionality
}

\usage{
inputGroup(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL,
className=NULL, contentEditable=NULL, contextMenu=NULL,
dir=NULL, disabled=NULL, draggable=NULL, fill=NULL,
form=NULL, formAction=NULL, hidden=NULL, intent=NULL,
key=NULL, lang=NULL, large=NULL, leftIcon=NULL, name=NULL,
placeholder=NULL, required=NULL, role=NULL, round=NULL,
small=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL,
title=NULL, type=NULL, valid=NULL, value=NULL, ...)
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

\item{disabled}{Logical. Indicates whether the user can interact with the element.}

\item{draggable}{Character. Defines whether the element can be dragged.}

\item{fill}{Logical. Whether the component should take up the full width of its container.}

\item{form}{Character. Indicates the form that is the owner of the element.}

\item{formAction}{Character. Indicates the action of the element, overriding the action defined in the <form>.}

\item{hidden}{Character. Prevents rendering of given element, while keeping child elements, e.g. script elements, active.}

\item{intent}{Character. Button intent (primary/success/warning/danger/none)}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{lang}{Character. Defines the language used in the element.}

\item{large}{Logical. If set to true, the input will display with larger styling. This is equivalent to setting Classes.LARGE via className on the parent control group and on the child input group.}

\item{leftIcon}{Character. Name of a Blueprint UI icon (or an icon element) to render on the left side of input.}

\item{name}{Character. Name of the element. For example used by the server to identify the fields in form submits.}

\item{placeholder}{Character. The placeholder text in the absence of any value.}

\item{required}{Logical. Whether this input is required. Used in form validation}

\item{role}{Character. The ARIA role attribute}

\item{round}{Logical. Whether the input (and any buttons) should appear with rounded caps.}

\item{small}{Logical. Whether this input should use small styles.}

\item{spellCheck}{Character. Indicates whether spell checking is allowed for the element.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Character. Overrides the browser's default tab order and follows the one specified instead.}

\item{title}{Character. Text to be displayed in a tooltip when hovering over the element.}

\item{type}{Character. Defines the type of the element.}

\item{valid}{Logical. Determine whether the input is valid. Used in form validation}

\item{value}{Character. Defines a default value which will be displayed in the element on page load.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

