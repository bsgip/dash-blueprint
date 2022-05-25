# AUTO GENERATED FILE - DO NOT EDIT

export listgroup

"""
    listgroup(;kwargs...)
    listgroup(children::Any;kwargs...)
    listgroup(children_maker::Function;kwargs...)


A ListGroup component.
A ListGroup presents a set of repeated options, with the option to add
or remove rows from the set.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `childData` (String; optional): Child component data
- `header` (a list of or a singular dash component, string or number; optional)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label for the form group
- `listData` (String; optional): List of child data for currently visible rows
- `maxRows` (Real; optional): Max number of rows to show
- `minRows` (Real; optional): Min number of rows to show
- `nRows` (Real; optional): Whether to show a limited number of children
"""
function listgroup(; kwargs...)
        available_props = Symbol[:children, :id, :childData, :header, :key, :label, :listData, :maxRows, :minRows, :nRows]
        wild_props = Symbol[]
        return Component("listgroup", "ListGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

listgroup(children::Any; kwargs...) = listgroup(;kwargs..., children = children)
listgroup(children_maker::Function; kwargs...) = listgroup(children_maker(); kwargs...)

