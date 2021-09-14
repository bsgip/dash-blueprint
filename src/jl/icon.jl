# AUTO GENERATED FILE - DO NOT EDIT

export icon

"""
    icon(;kwargs...)

An Icon component.

Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `color` (String; optional): Color of icon. This is used as the fill attribute on the <svg> image so it will override any CSS color property, including that set by intent. If this prop is omitted, icon color is inherited from surrounding text.
- `data-*` (String; optional): A wildcard data attribute
- `htmlTitle` (String; optional): String for the title attribute on the rendered element, which will appear on hover as a native browser tooltip.
- `icon` (String; optional): Name of a Blueprint UI icon, or an icon element, to render. This prop is required because it determines the content of the component, but it can be explicitly set to falsy values to render nothing.

If null or undefined or false, this component will render nothing.

If given an IconName (a string literal union of all icon names), that icon will be rendered as an <svg> with <path> tags. Unknown strings will render a blank icon to occupy space.

If given a JSX.Element, that element will be rendered and all other props on this component are ignored. This type is supported to simplify icon support in other Blueprint components. As a consumer, you should avoid using <Icon icon={<Element />} directly; simply render <Element /> instead.
- `iconSize` (Real; optional): numberIcon.SIZE_STANDARD = 16

Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and chooses the appropriate resolution based on this prop.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `style` (String; optional): CSS style properties.
- `tagName` (String; optional): HTML tag to use for the rendered element.
- `title` (String; optional): Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name. Pass an explicit falsy value to disable.
"""
function icon(; kwargs...)
        available_props = Symbol[:id, :className, :color, :htmlTitle, :icon, :iconSize, :key, :role, :style, :tagName, :title]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("icon", "Icon", "dash_blueprint", available_props, wild_props; kwargs...)
end

