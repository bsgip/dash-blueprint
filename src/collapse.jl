# AUTO GENERATED FILE - DO NOT EDIT

export collapse

"""
    collapse(;kwargs...)
    collapse(children::Any;kwargs...)
    collapse(children_maker::Function;kwargs...)


A Collapse component.
The Collapse element shows and hides content with a built-in slide in/out animation. 
You might use this to create a panel of settings for your application, 
with sub-sections that can be expanded and collapsed.

NOTE: This Dash component creates a Button element to handle the open/close function,
and wraps the button and Collapse as a fragment
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `buttonProps` (Dict; optional): The button component to render use as the component that determines the
Collapse state.
- `className` (String; optional): The className to use for the Collapse component
- `data-*` (String; optional): A wildcard data attribute
- `hideIcon` (String; optional): Icon to display for hide button
- `hideRightIcon` (String; optional): Icon to display for hide button
- `hideText` (String; optional): Text to display for hide button
- `isOpen` (Bool; optional): Whether content is shown initially
- `keepChildrenMounted` (Bool; optional): Whether the child components will remain mounted when the Collapse is closed. 
Setting to true may improve performance by avoiding re-mounting children.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `minimal` (Bool; optional): Show a minimal button
- `role` (String; optional): The ARIA role attribute
- `showIcon` (String; optional): Icon to display for show button
- `showRightIcon` (String; optional): Icon to display for show button
- `showText` (String; optional): Text to display for show button
- `transitionDuration` (Real; optional): The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. 
Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
"""
function collapse(; kwargs...)
        available_props = Symbol[:children, :id, :buttonProps, :className, :hideIcon, :hideRightIcon, :hideText, :isOpen, :keepChildrenMounted, :key, :minimal, :role, :showIcon, :showRightIcon, :showText, :transitionDuration]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("collapse", "Collapse", "dash_blueprint", available_props, wild_props; kwargs...)
end

collapse(children::Any; kwargs...) = collapse(;kwargs..., children = children)
collapse(children_maker::Function; kwargs...) = collapse(children_maker(); kwargs...)

