# AUTO GENERATED FILE - DO NOT EDIT

export multiselect

"""
    multiselect(;kwargs...)

A MultiSelect component.
Use MultiSelect<T> for choosing multiple items in a list. 
The component renders a TagInput wrapped in a Popover. Similarly to Select, you can pass
 in a predicate to customize the filtering algorithm. Selection of a MultiSelect<T> 
is controlled: listen to changes with onItemSelect.
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
- `placeholder` (String; optional): Input placeholder text. Shorthand for tagInputProps.placeholder.
- `popoverProps` (Dict; optional): Additional props to define the popover behaviour
- `selectedItems` (Array; optional): Returns selected items
- `value` (Array; optional): The selected item
"""
function multiselect(; kwargs...)
        available_props = Symbol[:id, :className, :disabled, :filterable, :icon, :items, :minimal, :placeholder, :popoverProps, :selectedItems, :value]
        wild_props = Symbol[]
        return Component("multiselect", "MultiSelect", "dash_blueprint", available_props, wild_props; kwargs...)
end

