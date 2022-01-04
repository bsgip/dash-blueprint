% Auto-generated: do not edit by hand
\name{editableText}

\alias{editableText}

\title{EditableText component}

\description{
EditableText appears as normal UI text but transforms into a text input field when the user focuses it.  The text input inherits all font styling from its ancestors, making for a seamless transition  between reading and editing text.  You might use this component for inline renaming, or for an editable multiline description. You should not use EditableText when a static always-editable <input> or <textarea> tag would suffice.
}

\usage{
editableText(children=NULL, id=NULL, className=NULL,
confirmOnEnterKey=NULL, confirmedValue=NULL,
defaultValue=NULL, disabled=NULL, intent=NULL,
isEditing=NULL, maxLength=NULL, maxLines=NULL,
minLines=NULL, minWidth=NULL, multiline=NULL,
placeholder=NULL, selectAllOnFocus=NULL, type=NULL,
value=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{confirmOnEnterKey}{Logical. If true and in multiline mode, the enter key will trigger onConfirm and mod+enter will insert a newline. If false, the key bindings are inverted such that enter adds a newline.}

\item{confirmedValue}{Character. The text value when input has been confirmed.}

\item{defaultValue}{Logical. Default text value of uncontrolled input.}

\item{disabled}{Logical. Whether the text can be edited.}

\item{intent}{Character. Visual intent color to apply to element.
= "none" | "primary" | "success" | "warning" | "danger"}

\item{isEditing}{Logical. Whether the component is currently being edited.}

\item{maxLength}{Numeric. Maximum number of characters allowed. Unlimited by default.}

\item{maxLines}{Numeric. Maximum number of lines before scrolling begins, when multiline.}

\item{minLines}{Numeric. Minimum number of lines (essentially minimum height), when multiline.}

\item{minWidth}{Numeric. Minimum width in pixels of the input, when not multiline.}

\item{multiline}{Logical. Whether the component supports multiple lines of text. This prop should not be changed during the component's lifetime.}

\item{placeholder}{Character. Placeholder text when there is no value.}

\item{selectAllOnFocus}{Logical. hether the entire text field should be selected on focus. If false, the cursor is placed at the end of the text. This prop is ignored on inputs with type other then text, search, url, tel and password. See https://html.spec.whatwg.org/multipage/input.html#do-not-apply for details.}

\item{type}{Character. The type of input that should be shown, when not multiline.}

\item{value}{Character. Text value of controlled input.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

