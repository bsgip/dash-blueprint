# AUTO GENERATED FILE - DO NOT EDIT

export tabs

"""
    tabs(;kwargs...)
    tabs(children::Any;kwargs...)
    tabs(children_maker::Function;kwargs...)


A Tabs component.
Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in controlled mode by providing selectedTabId and onChange props, or in uncontrolled mode by optionally providing defaultSelectedTabId and onChange.

Children of the Tabs are rendered in order in the tab list, which is a flex container. Tab children are managed by the component; clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility.

Insert a <Tabs.Expander /> between any two children to right-align all subsequent children (or bottom-align when vertical).
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `animate` (Bool; optional)
- `defaultSelectedTabId` (String; optional)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `large` (Bool; optional)
- `renderActiveTabPanelOnly` (Bool; optional)
"""
function tabs(; kwargs...)
        available_props = Symbol[:children, :id, :animate, :defaultSelectedTabId, :key, :large, :renderActiveTabPanelOnly]
        wild_props = Symbol[]
        return Component("tabs", "Tabs", "dash_blueprint", available_props, wild_props; kwargs...)
end

tabs(children::Any; kwargs...) = tabs(;kwargs..., children = children)
tabs(children_maker::Function; kwargs...) = tabs(children_maker(); kwargs...)

