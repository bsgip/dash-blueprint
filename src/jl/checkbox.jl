# AUTO GENERATED FILE - DO NOT EDIT

export checkbox

"""
    checkbox(;kwargs...)
    checkbox(children::Any;kwargs...)
    checkbox(children_maker::Function;kwargs...)


A Checkbox component.
A checkbox allows the user to toggle between checked, unchecked,
and (rarely) indeterminate states.
Keyword arguments:
- `children` (Bool | Real | String | Dict | Array; optional): JSX label for the control.
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `alignIndicator` (String; optional): Alignment of the indicator within container.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `checked` (Bool; optional): Whether the control is checked.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `disabled` (Bool; optional): Indicates whether the user can interact with the element.
- `inline` (Bool; optional): Whether the control should appear as an inline element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Text label for the control.

Use children or labelElement to supply JSX content. This prop actually supports JSX elements,
but TypeScript will throw an error because HTMLAttributes only allows strings.
- `large` (Bool; optional): Whether this control should use large styles.
- `role` (String; optional): The ARIA role attribute
- `tagName` (String; optional): Name of the HTML tag that wraps the checkbox.

By default a <label> is used, which effectively enlarges the click target to include all
of its children. Supply a different tag name if this behavior is undesirable or you're
listening to click events from a parent element (as the label can register duplicate clicks).
"""
function checkbox(; kwargs...)
        available_props = Symbol[:children, :id, :alignIndicator, :autoFocus, :checked, :className, :disabled, :inline, :key, :label, :large, :role, :tagName]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("checkbox", "Checkbox", "dash_blueprint", available_props, wild_props; kwargs...)
end

checkbox(children::Any; kwargs...) = checkbox(;kwargs..., children = children)
checkbox(children_maker::Function; kwargs...) = checkbox(children_maker(); kwargs...)

