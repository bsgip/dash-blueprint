# AUTO GENERATED FILE - DO NOT EDIT

export navbardivider

"""
    navbardivider(;kwargs...)

A NavbarDivider component.

Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
"""
function navbardivider(; kwargs...)
        available_props = Symbol[:id, :className]
        wild_props = Symbol[]
        return Component("navbardivider", "NavbarDivider", "dash_blueprint", available_props, wild_props; kwargs...)
end

