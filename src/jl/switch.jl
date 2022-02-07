# AUTO GENERATED FILE - DO NOT EDIT

export switch

"""
    switch(;kwargs...)
    switch(children::Any;kwargs...)
    switch(children_maker::Function;kwargs...)


A Switch component.
A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `alignIndicator` (String; optional): Alignment of the indicator within container.
- `aria-*` (String; optional): A wildcard aria attribute
- `checked` (Bool; optional): Whether the control is checked.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `disabled` (Bool; optional): Whether the control is non-interactive.
- `inline` (Bool; optional): Whether the control should appear as an inline element.
- `innerLabel` (String; optional): Text to display inside the switch indicator when unchecked.
- `innerLabelChecked` (String; optional): Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Text label for the control.
- `large` (Bool; optional): Whether this control should use large styles.
- `role` (String; optional): The ARIA role attribute
- `tagName` (String; optional): Name of the HTML tag that wraps the checkbox.

By default a <label> is used, which effectively enlarges the click target to include all of its children. Supply a different tag name if this behavior is undesirable or you're listening to click events from a parent element (as the label can register duplicate clicks).
- `updateKey` (String; optional): key to use when updating parent component
"""
function switch(; kwargs...)
        available_props = Symbol[:children, :id, :alignIndicator, :checked, :className, :disabled, :inline, :innerLabel, :innerLabelChecked, :key, :label, :large, :role, :tagName, :updateKey]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("switch", "Switch", "dash_blueprint", available_props, wild_props; kwargs...)
end

switch(children::Any; kwargs...) = switch(;kwargs..., children = children)
switch(children_maker::Function; kwargs...) = switch(children_maker(); kwargs...)

