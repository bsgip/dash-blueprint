# AUTO GENERATED FILE - DO NOT EDIT

export text

"""
    text(;kwargs...)
    text(children::Any;kwargs...)
    text(children_maker::Function;kwargs...)


A Text component.
The Text component adds accessible overflow behavior to a line of text by conditionally adding the title attribute and truncating with an ellipsis when content overflows its container.
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `ellipsize` (Bool; optional): Indicates that this component should be truncated with an ellipsis if it overflows 
its container. The title attribute will also be added when content overflows to show 
the full text of the children on hover.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `tagName` (String; optional): HTML tag name to use for rendered element.
"""
function text(; kwargs...)
        available_props = Symbol[:children, :id, :className, :ellipsize, :key, :role, :tagName]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("text", "Text", "dash_blueprint", available_props, wild_props; kwargs...)
end

text(children::Any; kwargs...) = text(;kwargs..., children = children)
text(children_maker::Function; kwargs...) = text(children_maker(); kwargs...)

