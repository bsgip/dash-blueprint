# AUTO GENERATED FILE - DO NOT EDIT

export navbarheading

"""
    navbarheading(;kwargs...)
    navbarheading(children::Any;kwargs...)
    navbarheading(children_maker::Function;kwargs...)


A NavbarHeading component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
"""
function navbarheading(; kwargs...)
        available_props = Symbol[:children, :id, :className]
        wild_props = Symbol[]
        return Component("navbarheading", "NavbarHeading", "dash_blueprint", available_props, wild_props; kwargs...)
end

navbarheading(children::Any; kwargs...) = navbarheading(;kwargs..., children = children)
navbarheading(children_maker::Function; kwargs...) = navbarheading(children_maker(); kwargs...)

