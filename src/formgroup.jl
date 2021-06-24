# AUTO GENERATED FILE - DO NOT EDIT

export formgroup

"""
    formgroup(;kwargs...)
    formgroup(children::Any;kwargs...)
    formgroup(children_maker::Function;kwargs...)


A FormGroup component.
Form groups support more complex form controls than simple labels, 
such as control groups or NumericInput. 
They also support additional helper text to aid with user navigation.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `childData` (Bool | Real | String | Dict | Array; optional): Collected values of all children of this form group.
This will usually be an object, unless `collapseChildData` is `true`,
in which case a single value will be passed in.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `collapseChildData` (Bool; optional): If `true`, this component assumes there is only one child component that updates
data, and collapses `childData` from an object to a single value.
This can be useful when working with lots of form groups to avoid having 
to extract single values from objects
- `contentClassName` (String; optional): A space-delimited list of class names to pass along to the Classes.FORM_CONTENT element that contains children.
- `disabled` (Bool; optional): Whether form group should appear as non-interactive. Remember that input elements must be disabled separately.
- `helperText` (String; optional): Optional helper text. The given content will be wrapped in Classes.FORM_HELPER_TEXT and displayed beneath children. Helper text color is determined by the intent.
- `inline` (Bool; optional): Whether to render the label and children on a single line.
- `intent` (String; optional): Visual intent color to apply to element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label of this form group.
- `labelFor` (String; optional): id attribute of the labelable form element that this FormGroup controls, used as <label for> attribute.
- `labelInfo` (String; optional): Optional secondary text that appears after the label.
- `style` (Dict; optional): CSS properties to apply to the root element.
"""
function formgroup(; kwargs...)
        available_props = Symbol[:children, :id, :childData, :className, :collapseChildData, :contentClassName, :disabled, :helperText, :inline, :intent, :key, :label, :labelFor, :labelInfo, :style]
        wild_props = Symbol[]
        return Component("formgroup", "FormGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

formgroup(children::Any; kwargs...) = formgroup(;kwargs..., children = children)
formgroup(children_maker::Function; kwargs...) = formgroup(children_maker(); kwargs...)

