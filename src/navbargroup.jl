# AUTO GENERATED FILE - DO NOT EDIT

export navbargroup

"""
    navbargroup(;kwargs...)
    navbargroup(children::Any;kwargs...)
    navbargroup(children_maker::Function;kwargs...)


A NavbarGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `align` (String; optional): The side of the navbar on which the group should appear. The Alignment enum provides constants for these values.
One of (`left`, `center`, `right`)
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
"""
function navbargroup(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className]
        wild_props = Symbol[]
        return Component("navbargroup", "NavbarGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

navbargroup(children::Any; kwargs...) = navbargroup(;kwargs..., children = children)
navbargroup(children_maker::Function; kwargs...) = navbargroup(children_maker(); kwargs...)

