# AUTO GENERATED FILE - DO NOT EDIT

export divider

"""
    divider(;kwargs...)

A Divider component.
Divider visually separate contents with a thin line and margin on all sides.

Dividers work best in flex layouts where they will adapt to orientation without additional 
styles. Otherwise, a divider will appear as a full-width 1px-high block element.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `tagName` (String; optional): HTML tag to use for element.
"""
function divider(; kwargs...)
        available_props = Symbol[:id, :className, :tagName]
        wild_props = Symbol[]
        return Component("divider", "Divider", "dash_blueprint", available_props, wild_props; kwargs...)
end

