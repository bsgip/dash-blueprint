% Auto-generated: do not edit by hand
\name{icon}

\alias{icon}

\title{Icon component}

\description{

}

\usage{
icon(id=NULL, className=NULL, color=NULL, htmlTitle=NULL,
icon=NULL, iconSize=NULL, key=NULL, role=NULL, style=NULL,
tagName=NULL, title=NULL, ...)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{className}{Character. A space-delimited list of class names to pass along to a child element.}

\item{color}{Character. Color of icon. This is used as the fill attribute on the <svg> image so it will override any CSS color property, including that set by intent. If this prop is omitted, icon color is inherited from surrounding text.}

\item{htmlTitle}{Character. String for the title attribute on the rendered element, which will appear on hover as a native browser tooltip.}

\item{icon}{Character. Name of a Blueprint UI icon, or an icon element, to render. This prop is required because it determines the content of the component, but it can be explicitly set to falsy values to render nothing.

If null or undefined or false, this component will render nothing.

If given an IconName (a string literal union of all icon names), that icon will be rendered as an <svg> with <path> tags. Unknown strings will render a blank icon to occupy space.

If given a JSX.Element, that element will be rendered and all other props on this component are ignored. This type is supported to simplify icon support in other Blueprint components. As a consumer, you should avoid using <Icon icon={<Element />} directly; simply render <Element /> instead.}

\item{iconSize}{Numeric. numberIcon.SIZE_STANDARD = 16

Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and chooses the appropriate resolution based on this prop.}

\item{key}{Character. A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info}

\item{role}{Character. The ARIA role attribute}

\item{style}{Character. CSS style properties.}

\item{tagName}{Character. HTML tag to use for the rendered element.}

\item{title}{Character. Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name. Pass an explicit falsy value to disable.}


\item{...}{wildcards allowed have the form: `'aria-*', 'data-*'`}

}

\value{named list of JSON elements corresponding to React.js properties and their values}

