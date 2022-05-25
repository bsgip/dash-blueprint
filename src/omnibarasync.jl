# AUTO GENERATED FILE - DO NOT EDIT

export omnibarasync

"""
    omnibarasync(;kwargs...)
    omnibarasync(children::Any;kwargs...)
    omnibarasync(children_maker::Function;kwargs...)


An OmnibarAsync component.
Wrapper around the blueprint Omnibar component. The searching is done server-side here and relies on
the dash response to return results that can be rendered.
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `combo` (String; optional): Keyboard shortcut to show omnibar
- `items` (Bool | Real | String | Dict | Array; optional): Set of items to search
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label to show on open button (also triggers display of button)
- `query` (String; optional): Query string
- `value` (String; optional): Selected value from dropdown
"""
function omnibarasync(; kwargs...)
        available_props = Symbol[:children, :id, :combo, :items, :key, :label, :query, :value]
        wild_props = Symbol[]
        return Component("omnibarasync", "OmnibarAsync", "dash_blueprint", available_props, wild_props; kwargs...)
end

omnibarasync(children::Any; kwargs...) = omnibarasync(;kwargs..., children = children)
omnibarasync(children_maker::Function; kwargs...) = omnibarasync(children_maker(); kwargs...)

