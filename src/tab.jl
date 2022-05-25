# AUTO GENERATED FILE - DO NOT EDIT

export tab

"""
    tab(;kwargs...)
    tab(children::Any;kwargs...)
    tab(children_maker::Function;kwargs...)


A Tab component.
Tab is a minimal wrapper with no functionality of its own—it is managed entirely by its parent Tabs wrapper. Tab title text can be set either via title prop or via React children (for more complex content).

The associated tab panel will be visible when the Tab is active. Omitting panel is supported and can be useful when you want the associated panel to appear elsewhere in the DOM (by rendering it yourself as needed).
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `disabled` (Bool; optional)
- `panelClassName` (String; optional)
- `title` (String; optional)
"""
function tab(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disabled, :panelClassName, :title]
        wild_props = Symbol[]
        return Component("tab", "Tab", "dash_blueprint", available_props, wild_props; kwargs...)
end

tab(children::Any; kwargs...) = tab(;kwargs..., children = children)
tab(children_maker::Function; kwargs...) = tab(children_maker(); kwargs...)

