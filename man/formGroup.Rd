% Auto-generated: do not edit by hand
\name{formGroup}

\alias{formGroup}

\title{FormGroup component}

\description{
Form groups support more complex form controls than simple labels, such as control groups or NumericInput. They also support additional helper text to aid with user navigation.
}

\usage{
formGroup(children=NULL, id=NULL, childValidation=NULL,
className=NULL, collapseChildData=NULL,
contentClassName=NULL, disabled=NULL, helperText=NULL,
inline=NULL, intent=NULL, key=NULL, label=NULL,
labelFor=NULL, labelInfo=NULL, required=NULL, style=NULL,
valid=NULL, value=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component}

\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{childValidation}{Logical | numeric | character | named list | unnamed list. Collected values of all children of this form group.
This will usually be an object, unless `collapseChildData` is `true`,
in which case a single value will be passed in.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{collapseChildData}{Logical. If `true`, this component assumes there is only one child component that updates
data, and collapses `childData` from an object to a single value.
This can be useful when working with lots of form groups to avoid having
to extract single values from objects}

\item{contentClassName}{Character. A space-delimited list of class names to pass along to the Classes.FORM_CONTENT element that contains children.}

\item{disabled}{Logical. Whether form group should appear as non-interactive. Remember that input elements must be disabled separately.}

\item{helperText}{Character. Optional helper text. The given content will be wrapped in Classes.FORM_HELPER_TEXT and displayed beneath children. Helper text color is determined by the intent.}

\item{inline}{Logical. Whether to render the label and children on a single line.}

\item{intent}{Character. Visual intent color to apply to element.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{label}{Character. Label of this form group.}

\item{labelFor}{Character. id attribute of the labelable form element that this FormGroup controls, used as <label for> attribute.}

\item{labelInfo}{Character. Optional secondary text that appears after the label.}

\item{required}{Logical. Whether this input is required. Used in form validation}

\item{style}{Named list. CSS properties to apply to the root element.}

\item{valid}{Logical. Determine whether the input is valid. Used in form validation}

\item{value}{Logical | numeric | character | named list | unnamed list. Collected values of all children of this form group.
This will usually be an object, unless `collapseChildData` is `true`,
in which case a single value will be passed in.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

