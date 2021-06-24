# AUTO GENERATED FILE - DO NOT EDIT

export panelstack

"""
    panelstack(;kwargs...)

A PanelStack component.
PanelStack manages a stack of panels and displays only the topmost panel.

Each panel appears with a header containing a "back" button to return to the previous panel. 
The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.

Note: currently not functional
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Class name
- `disabled` (Bool; optional): Whether the menu is disabled
- `filterable` (Bool; optional): Whether the list can be filtered
- `icon` (String; optional): Button icon
- `items` (Array; optional): Items to choose from
- `minimal` (Bool; optional): Use minimal popover style
- `popoverProps` (Dict; optional): Additional props to define the popover behaviour
"""
function panelstack(; kwargs...)
        available_props = Symbol[:id, :className, :disabled, :filterable, :icon, :items, :minimal, :popoverProps]
        wild_props = Symbol[]
        return Component("panelstack", "PanelStack", "dash_blueprint", available_props, wild_props; kwargs...)
end

