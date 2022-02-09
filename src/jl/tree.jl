# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)
    tree(children::Any;kwargs...)
    tree(children_maker::Function;kwargs...)


A Tree component.
Trees display hierarchical data. In this implementation, selecting a Node in the tree
redirects to the given href
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `nodes` (Array; optional): Set of nodes to be rendered
- `selectedNode` (String; optional): Currently selected node
"""
function tree(; kwargs...)
        available_props = Symbol[:children, :id, :key, :nodes, :selectedNode]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_blueprint", available_props, wild_props; kwargs...)
end

tree(children::Any; kwargs...) = tree(;kwargs..., children = children)
tree(children_maker::Function; kwargs...) = tree(children_maker(); kwargs...)

