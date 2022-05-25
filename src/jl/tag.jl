# AUTO GENERATED FILE - DO NOT EDIT

export tag

"""
    tag(;kwargs...)
    tag(children::Any;kwargs...)
    tag(children_maker::Function;kwargs...)


A Tag component.
Tags are great for lists of strings.
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `active` (Bool; optional): Whether the tag should appear in an active state.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `fill` (Bool; optional): Whether the tag should take up the full width of its container.
- `icon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render before the children.
- `intent` (String; optional): Visual intent color to apply to element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `large` (Bool; optional): Whether this tag should use large styles.
- `minimal` (Bool; optional): Whether this tag should use minimal styles.
- `multiline` (Bool; optional): Whether tag content should be allowed to occupy multiple lines. If false, a single line of 
text will be truncated with an ellipsis if it overflows. Note that icons will 
be vertically centered relative to multiline text.
- `rightIcon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render after the children.
- `role` (String; optional): The ARIA role attribute
- `round` (Bool; optional): Whether this tag should have rounded ends.
"""
function tag(; kwargs...)
        available_props = Symbol[:children, :id, :active, :className, :fill, :icon, :intent, :key, :large, :minimal, :multiline, :rightIcon, :role, :round]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("tag", "Tag", "dash_blueprint", available_props, wild_props; kwargs...)
end

tag(children::Any; kwargs...) = tag(;kwargs..., children = children)
tag(children_maker::Function; kwargs...) = tag(children_maker(); kwargs...)

