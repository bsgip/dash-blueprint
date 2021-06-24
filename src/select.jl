# AUTO GENERATED FILE - DO NOT EDIT

export select

"""
    select(;kwargs...)

A Select component.
Use Select<T> for choosing one item from a list. The component's children will be wrapped in a Popover that contains the list and an optional InputGroup to filter it. Provide a predicate to customize the filtering algorithm. The value of a Select<T> (the currently chosen item) is uncontrolled: listen to changes with onItemSelect.
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
- `value` (String; optional): The selected item
"""
function select(; kwargs...)
        available_props = Symbol[:id, :className, :disabled, :filterable, :icon, :items, :minimal, :popoverProps, :value]
        wild_props = Symbol[]
        return Component("select", "Select", "dash_blueprint", available_props, wild_props; kwargs...)
end

