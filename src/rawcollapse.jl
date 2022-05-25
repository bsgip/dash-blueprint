# AUTO GENERATED FILE - DO NOT EDIT

export rawcollapse

"""
    rawcollapse(;kwargs...)
    rawcollapse(children::Any;kwargs...)
    rawcollapse(children_maker::Function;kwargs...)


A RawCollapse component.
This component renders the collapsible portion of a CollapseCard. When not rendered
as a direct child of a CollapseCard, this component is useless as there is no way
to trigger it to open.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `hideIcon` (String; optional): Icon to display for hide button
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
- `showText` (String; optional): Text to display for show button
- `transitionDuration` (Real; optional): The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. 
Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
"""
function rawcollapse(; kwargs...)
        available_props = Symbol[:children, :id, :className, :hideIcon, :hideText, :isOpen, :keepChildrenMounted, :key, :minimal, :role, :showIcon, :showText, :transitionDuration]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("rawcollapse", "RawCollapse", "dash_blueprint", available_props, wild_props; kwargs...)
end

rawcollapse(children::Any; kwargs...) = rawcollapse(;kwargs..., children = children)
rawcollapse(children_maker::Function; kwargs...) = rawcollapse(children_maker(); kwargs...)

