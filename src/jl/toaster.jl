# AUTO GENERATED FILE - DO NOT EDIT

export toaster

"""
    toaster(;kwargs...)
    toaster(children::Any;kwargs...)
    toaster(children_maker::Function;kwargs...)


A Toaster component.
The Toaster React component is a stateful container for a single list of toasts. Internally, it uses Overlay to manage children and transitions. It can be vertically aligned along the top or bottom edge of its container (new toasts will slide in from that edge) and horizontally aligned along the left edge, center, or right edge of its container.

TODO: Document how to use a Toaster in Dash
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (Bool; optional): Whether a toast should acquire application focus when it first opens.
This is disabled by default so that toasts do not interrupt the user's
flow. Note that enforceFocus is always disabled for Toasters.
- `canEscapeKeyClear` (Bool; optional): Whether pressing the esc key should clear all active toasts.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `position` (String; optional): Toast position
- `role` (String; optional): The ARIA role attribute
- `toasterId` (String; optional): Unique identifier for a toaster. All Toasters with the same id
will render to the same underlying toaster. There is no guarantee
which will instantiate first, so they should all be passed the
same Toaster props
- `toasts` (Bool | Real | String | Dict | Array; optional): Toasts to display
"""
function toaster(; kwargs...)
        available_props = Symbol[:children, :id, :autoFocus, :canEscapeKeyClear, :className, :key, :position, :role, :toasterId, :toasts]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("toaster", "Toaster", "dash_blueprint", available_props, wild_props; kwargs...)
end

toaster(children::Any; kwargs...) = toaster(;kwargs..., children = children)
toaster(children_maker::Function; kwargs...) = toaster(children_maker(); kwargs...)

