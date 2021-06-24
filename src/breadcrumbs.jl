# AUTO GENERATED FILE - DO NOT EDIT

export breadcrumbs

"""
    breadcrumbs(;kwargs...)
    breadcrumbs(children::Any;kwargs...)
    breadcrumbs(children_maker::Function;kwargs...)


A Breadcrumbs component.
Breadcrumbs identify the path to the current resource in an application.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `collapseFrom` (String; optional): Which direction the breadcrumbs should collapse from: start or end.
- `data-*` (String; optional): A wildcard data attribute
- `items` (Array; optional): All breadcrumbs to display. Breadcrumbs that do not fit in the container 
will be rendered in an overflow menu instead.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `minVisibleItems` (Real; optional): The minimum number of visible breadcrumbs that should never collapse into the 
overflow menu, regardless of DOM dimensions.
- `overflowListProps` (Dict; optional): Props to spread to OverflowList. Note that items, overflowRenderer, 
and visibleItemRenderer cannot be changed.
- `popoverProps` (Dict; optional): Props to spread to the Popover showing the overflow menu.
- `role` (String; optional): The ARIA role attribute
"""
function breadcrumbs(; kwargs...)
        available_props = Symbol[:children, :id, :className, :collapseFrom, :items, :key, :minVisibleItems, :overflowListProps, :popoverProps, :role]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("breadcrumbs", "Breadcrumbs", "dash_blueprint", available_props, wild_props; kwargs...)
end

breadcrumbs(children::Any; kwargs...) = breadcrumbs(;kwargs..., children = children)
breadcrumbs(children_maker::Function; kwargs...) = breadcrumbs(children_maker(); kwargs...)

