# AUTO GENERATED FILE - DO NOT EDIT

export radiogroup

"""
    radiogroup(;kwargs...)
    radiogroup(children::Any;kwargs...)
    radiogroup(children_maker::Function;kwargs...)


A RadioGroup component.
A radio button typically represents a single option in a mutually exclusive list
(where only one item can be selected at a time).
Blueprint provides Radio and RadioGroup components for these two layers.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `inline` (Bool; optional): Whether the radio buttons are to be displayed inline horizontally.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label for the form group
- `name` (String; optional): Name of the group, used to link radio buttons together in HTML. If omitted, a unique name will be generated internally.
- `options` (Array; optional): Array of options to render in the group. This prop is mutually exclusive with children: either provide an array of IOptionProps objects or provide <Radio> children elements.
- `required` (Bool; optional): Whether this input is required. Used in form validation
- `valid` (Bool; optional): Determine whether the input is valid. Used in form validation
- `value` (Bool | Real | String | Dict | Array; optional): Label for the form group
"""
function radiogroup(; kwargs...)
        available_props = Symbol[:children, :id, :className, :inline, :key, :label, :name, :options, :required, :valid, :value]
        wild_props = Symbol[]
        return Component("radiogroup", "RadioGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

radiogroup(children::Any; kwargs...) = radiogroup(;kwargs..., children = children)
radiogroup(children_maker::Function; kwargs...) = radiogroup(children_maker(); kwargs...)

