# AUTO GENERATED FILE - DO NOT EDIT

export select

"""
    select(;kwargs...)

A Select component.
Use `Select` for choosing one item from a list.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Class name
- `disabled` (Bool; optional): Whether the menu is disabled
- `fill` (Bool; optional): Whether the component should take up the full width of its container. 
This overrides popoverProps.fill. You also have to ensure that the 
child component has fill set to true or is styled appropriately.
- `filterable` (Bool; optional): Whether the list can be filtered
- `icon` (String; optional): Button icon
- `items` (Array; optional): Items to choose from
- `label` (String; optional): The selected item label
- `minimal` (Bool; optional): Use minimal popover style
- `popoverProps` (Dict; optional): Additional props to define the popover behaviour
- `required` (Bool; optional): Whether this input is required. Used in form validation
- `valid` (Bool; optional): Determine whether the input is valid. Used in form validation
- `value` (String; optional): The selected item
"""
function select(; kwargs...)
        available_props = Symbol[:id, :className, :disabled, :fill, :filterable, :icon, :items, :label, :minimal, :popoverProps, :required, :valid, :value]
        wild_props = Symbol[]
        return Component("select", "Select", "dash_blueprint", available_props, wild_props; kwargs...)
end

