# AUTO GENERATED FILE - DO NOT EDIT

export checkboxgroup

"""
    checkboxgroup(;kwargs...)
    checkboxgroup(children::Any;kwargs...)
    checkboxgroup(children_maker::Function;kwargs...)


A CheckboxGroup component.
This is a wrapper around a set of BlueprintJS checkbox and FormGroup components
to give functionality similar to the standard Dash checkbox component.

The BlueprintJS checkbox treats every checkbox individually, whereas this groups
them into selection items
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label for the form group
- `value` (Array; optional): Label for the form group
"""
function checkboxgroup(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :label, :value]
        wild_props = Symbol[]
        return Component("checkboxgroup", "CheckboxGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

checkboxgroup(children::Any; kwargs...) = checkboxgroup(;kwargs..., children = children)
checkboxgroup(children_maker::Function; kwargs...) = checkboxgroup(children_maker(); kwargs...)

