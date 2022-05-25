# AUTO GENERATED FILE - DO NOT EDIT

export drawer

"""
    drawer(;kwargs...)
    drawer(children::Any;kwargs...)
    drawer(children_maker::Function;kwargs...)


A Drawer component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (Bool; optional): Whether the overlay should acquire application focus when it first opens.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `isOpen` (Bool; optional): Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `title` (String; optional)
"""
function drawer(; kwargs...)
        available_props = Symbol[:children, :id, :autoFocus, :className, :isOpen, :key, :role, :title]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("drawer", "Drawer", "dash_blueprint", available_props, wild_props; kwargs...)
end

drawer(children::Any; kwargs...) = drawer(;kwargs..., children = children)
drawer(children_maker::Function; kwargs...) = drawer(children_maker(); kwargs...)

