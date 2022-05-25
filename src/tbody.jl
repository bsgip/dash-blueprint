# AUTO GENERATED FILE - DO NOT EDIT

export tbody

"""
    tbody(;kwargs...)
    tbody(children::Any;kwargs...)
    tbody(children_maker::Function;kwargs...)


A Tbody component.
This is a reimplementation of html Tr with an extra state that supports modifying the className
when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `key` (String; optional): Key
- `rowKey` (String; optional): A proxy for key that can be passed through to the Tr component
- `selected` (Bool; optional): Whether row is selected
"""
function tbody(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :rowKey, :selected]
        wild_props = Symbol[]
        return Component("tbody", "Tbody", "dash_blueprint", available_props, wild_props; kwargs...)
end

tbody(children::Any; kwargs...) = tbody(;kwargs..., children = children)
tbody(children_maker::Function; kwargs...) = tbody(children_maker(); kwargs...)

