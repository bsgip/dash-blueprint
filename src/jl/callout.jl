# AUTO GENERATED FILE - DO NOT EDIT

export callout

"""
    callout(;kwargs...)
    callout(children::Any;kwargs...)
    callout(children_maker::Function;kwargs...)


A Callout component.
Callouts visually highlight important content for the user.
They can contain a title, an icon and content.
Each intent has a default icon associated with it.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `icon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render on the left side.

If this prop is omitted or undefined, the intent prop will determine a default icon.
If this prop is explicitly null, no icon will be displayed (regardless of intent).
- `intent` (String; optional): Visual intent color to apply to background, title, and icon.

Defining this prop also applies a default icon, if the icon prop is omitted.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `title` (String; optional): String content of optional title element.

Due to a conflict with the HTML prop types, to provide JSX content simply
pass <H4>JSX title content</H4> as first children element instead of using this
prop (note uppercase tag name to use the Blueprint Heading component).
"""
function callout(; kwargs...)
        available_props = Symbol[:children, :id, :className, :icon, :intent, :key, :role, :title]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("callout", "Callout", "dash_blueprint", available_props, wild_props; kwargs...)
end

callout(children::Any; kwargs...) = callout(;kwargs..., children = children)
callout(children_maker::Function; kwargs...) = callout(children_maker(); kwargs...)

