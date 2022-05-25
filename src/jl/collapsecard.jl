# AUTO GENERATED FILE - DO NOT EDIT

export collapsecard

"""
    collapsecard(;kwargs...)
    collapsecard(children::Any;kwargs...)
    collapsecard(children_maker::Function;kwargs...)


A CollapseCard component.
A combination of Collapse and Card, this shows additional details when the card is clicked on.

Note: because of the janky way we recreate the children, it currently does not show the
transition on Collapse open/close.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `controlled` (Bool; optional): Used internally to manage whether the component is controlled externally
- `data-*` (String; optional): A wildcard data attribute
- `elevation` (Real; optional): Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
- `interactive` (Bool; optional): Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.
- `isOpen` (Bool; optional): Whether collapsed content is shown
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `n_clicks` (Real; optional): An integer that represents the number of times
that this element has been clicked on.
- `n_clicks_timestamp` (Real; optional): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
- `role` (String; optional): The ARIA role attribute
"""
function collapsecard(; kwargs...)
        available_props = Symbol[:children, :id, :controlled, :elevation, :interactive, :isOpen, :key, :n_clicks, :n_clicks_timestamp, :role]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("collapsecard", "CollapseCard", "dash_blueprint", available_props, wild_props; kwargs...)
end

collapsecard(children::Any; kwargs...) = collapsecard(;kwargs..., children = children)
collapsecard(children_maker::Function; kwargs...) = collapsecard(children_maker(); kwargs...)

