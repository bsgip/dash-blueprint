# AUTO GENERATED FILE - DO NOT EDIT

export h2

"""
    h2(;kwargs...)
    h2(children::Any;kwargs...)
    h2(children_maker::Function;kwargs...)


A H2 component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
"""
function h2(; kwargs...)
        available_props = Symbol[:children, :id, :className]
        wild_props = Symbol[]
        return Component("h2", "H2", "dash_blueprint", available_props, wild_props; kwargs...)
end

h2(children::Any; kwargs...) = h2(;kwargs..., children = children)
h2(children_maker::Function; kwargs...) = h2(children_maker(); kwargs...)

