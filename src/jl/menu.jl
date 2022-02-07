# AUTO GENERATED FILE - DO NOT EDIT

export menu

"""
    menu(;kwargs...)
    menu(children::Any;kwargs...)
    menu(children_maker::Function;kwargs...)


A Menu component.
Menus display lists of interactive items.
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `large` (Bool; optional): Whether the menu items in this menu should use a large appearance.
@default false
- `role` (String; optional): The ARIA role attribute
"""
function menu(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :large, :role]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("menu", "Menu", "dash_blueprint", available_props, wild_props; kwargs...)
end

menu(children::Any; kwargs...) = menu(;kwargs..., children = children)
menu(children_maker::Function; kwargs...) = menu(children_maker(); kwargs...)

