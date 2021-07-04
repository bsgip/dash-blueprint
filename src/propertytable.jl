# AUTO GENERATED FILE - DO NOT EDIT

export propertytable

"""
    propertytable(;kwargs...)
    propertytable(children::Any;kwargs...)
    propertytable(children_maker::Function;kwargs...)


A PropertyTable component.
This component provides Blueprint styling to native HTML tables.

It also includes additional functionality for searching, ordering and pagination of
data in the table.

IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
want selection to show properly, and use css to modify rows with className 'selected'
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `action` (Dict; optional): Generic action not covered by previous options
- `actionButtonProps` (Dict; optional): Props to pass through to the action button
- `actions` (Array of Strings; optional): A set of actions to display in the first column
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `columns` (Array; optional): An array of properties to display in the table
- `data-*` (String; optional): A wildcard data attribute
- `infoAction` (Dict; optional): Row clicked for info action
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `locateAction` (Dict; optional): Row selected for locate action
- `maxCount` (Real; optional): Maximum count to be included in the histogram. Values above this number
will be rendered a different colour
- `page_size` (Real; optional): Page size (in rows)
- `role` (String; optional): The ARIA role attribute
- `row_click` (String; optional): Key for the clicked row
- `rows` (Array; optional): Row data used to create the histogram
- `selectable` (Bool; optional): Whether row selection is enabled
- `selection` (Array; optional): Currently selected rows
- `show_more_less` (Bool; optional): Show simple more/less buttons to adjust page size
- `show_more_size` (Real; optional): Number of rows to increase/decrease page size by
(for use in simple show more mode)
"""
function propertytable(; kwargs...)
        available_props = Symbol[:children, :id, :action, :actionButtonProps, :actions, :className, :columns, :infoAction, :key, :locateAction, :maxCount, :page_size, :role, :row_click, :rows, :selectable, :selection, :show_more_less, :show_more_size]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("propertytable", "PropertyTable", "dash_blueprint", available_props, wild_props; kwargs...)
end

propertytable(children::Any; kwargs...) = propertytable(;kwargs..., children = children)
propertytable(children_maker::Function; kwargs...) = propertytable(children_maker(); kwargs...)

