# AUTO GENERATED FILE - DO NOT EDIT

export h4

"""
    h4(;kwargs...)
    h4(children::Any;kwargs...)
    h4(children_maker::Function;kwargs...)


A H4 component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
"""
function h4(; kwargs...)
        available_props = Symbol[:children, :id, :className]
        wild_props = Symbol[]
        return Component("h4", "H4", "dash_blueprint", available_props, wild_props; kwargs...)
end

h4(children::Any; kwargs...) = h4(;kwargs..., children = children)
h4(children_maker::Function; kwargs...) = h4(children_maker(); kwargs...)

