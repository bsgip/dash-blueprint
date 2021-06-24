% Auto-generated: do not edit by hand
\name{numericInput}

\alias{numericInput}

\title{NumericInput component}

\description{
The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
}

\usage{
numericInput(children=NULL, id=NULL, accessKey=NULL,
allowNumericCharactersOnly=NULL, autoFocus=NULL,
buttonPosition=NULL, clampValueOnBlur=NULL, className=NULL,
contentEditable=NULL, contextMenu=NULL, dir=NULL,
disabled=NULL, draggable=NULL, fill=NULL, form=NULL,
formAction=NULL, hidden=NULL, intent=NULL, key=NULL,
lang=NULL, large=NULL, leftIcon=NULL, max=NULL, min=NULL,
minorStepSize=NULL, name=NULL, placeholder=NULL, role=NULL,
selectAllOnFocus=NULL, selectAllOnIncrement=NULL,
shiftSize=NULL, spellCheck=NULL, stepSize=NULL,
stringValue=NULL, style=NULL, tabIndex=NULL, title=NULL,
type=NULL, value=NULL, ...)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{accessKey}{Character. Defines a keyboard shortcut to activate or add focus to the element.}

\item{allowNumericCharactersOnly}{Logical. Whether to allow only floating-point number characters in the field, mimicking the native input[type="number"].}

\item{autoFocus}{Character. The element should be automatically focused after the page loaded.}

\item{buttonPosition}{Character. "left" | "right" | "none"Position.RIGHT
The position of the buttons with respect to the input field.}

\item{clampValueOnBlur}{Logical. Whether the value should be clamped to [min, max] on blur. The value will be clamped to each bound only if the bound is defined. Note that native input[type="number"] controls do NOT clamp on blur.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{contentEditable}{Character. Indicates whether the element's content is editable.}

\item{contextMenu}{Character. Defines the ID of a <menu> element which will serve as the element's context menu.}

\item{dir}{Character. Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)}

\item{disabled}{Logical. Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it.}

\item{draggable}{Character. Defines whether the element can be dragged.}

\item{fill}{Logical. Whether the numeric input should take up the full width of its container.}

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

\item{max}{Numeric. The maximum value of the input.}

\item{min}{Numeric. The minimum value of the input.}

\item{minorStepSize}{Numeric. The increment between successive values when alt is held. Pass explicit null value to disable this interaction.}

\item{name}{Character. Name of the element. For example used by the server to identify the fields in form submits.}

\item{placeholder}{Character. The placeholder text in the absence of any value.}

\item{role}{Character. The ARIA role attribute}

\item{selectAllOnFocus}{Logical. Whether the entire text field should be selected on focus.}

\item{selectAllOnIncrement}{Logical. Whether the entire text field should be selected on increment.}

\item{shiftSize}{Numeric. The increment between successive values when shift is held. Pass explicit null value to disable this interaction.}

\item{spellCheck}{Character. Indicates whether spell checking is allowed for the element.}

\item{stepSize}{Numeric. The increment between successive values when no modifier keys are held.}

\item{stringValue}{Character. The value as a number.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{tabIndex}{Character. Overrides the browser's default tab order and follows the one specified instead.}

\item{title}{Character. Text to be displayed in a tooltip when hovering over the element.}

\item{type}{Character. Defines the type of the element.}

\item{value}{Numeric. Defines a default value which will be displayed in the element on page load.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

