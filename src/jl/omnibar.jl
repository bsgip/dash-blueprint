# AUTO GENERATED FILE - DO NOT EDIT

export omnibar

"""
    omnibar(;kwargs...)
    omnibar(children::Any;kwargs...)
    omnibar(children_maker::Function;kwargs...)


An Omnibar component.
Omnibar<T> is a macOS Spotlight-style typeahead component composing Overlay and QueryList<T>. 
Usage is similar to Select<T>: provide your items and a predicate to customize the 
filtering algorithm. The component is fully controlled via the isOpen prop, 
which means you can decide exactly how to trigger the component.
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
function omnibar(; kwargs...)
        available_props = Symbol[:children, :id, :combo, :items, :key, :label, :query, :value]
        wild_props = Symbol[]
        return Component("omnibar", "Omnibar", "dash_blueprint", available_props, wild_props; kwargs...)
end

omnibar(children::Any; kwargs...) = omnibar(;kwargs..., children = children)
omnibar(children_maker::Function; kwargs...) = omnibar(children_maker(); kwargs...)

