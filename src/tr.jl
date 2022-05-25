# AUTO GENERATED FILE - DO NOT EDIT

export tr

"""
    tr(;kwargs...)
    tr(children::Any;kwargs...)
    tr(children_maker::Function;kwargs...)


A Tr component.
This is a reimplementation of html Tr with an extra state that supports modifying the className
when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `key` (String; optional): Key
- `rowKey` (String; required): A proxy for key that can be passed through to the Tr component
- `selected` (Bool; optional): Whether row is selected
"""
function tr(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :rowKey, :selected]
        wild_props = Symbol[]
        return Component("tr", "Tr", "dash_blueprint", available_props, wild_props; kwargs...)
end

tr(children::Any; kwargs...) = tr(;kwargs..., children = children)
tr(children_maker::Function; kwargs...) = tr(children_maker(); kwargs...)

