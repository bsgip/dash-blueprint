# AUTO GENERATED FILE - DO NOT EDIT

export htmltable

"""
    htmltable(;kwargs...)
    htmltable(children::Any;kwargs...)
    htmltable(children_maker::Function;kwargs...)


A HTMLTable component.
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
- `aria-*` (String; optional): A wildcard aria attribute
- `bordered` (Bool; optional): Enables borders between rows and cells.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `condensed` (Bool; optional): Use small, condensed appearance.
- `current_page` (Real; optional): Current page to show
- `data-*` (String; optional): A wildcard data attribute
- `filter_by` (Dict; optional): Filtering strings
- `filter_columns` (Array; optional): Column numbers that may be filtered
- `filter_strings` (Dict; optional): Strings to filter columns by
- `interactive` (Bool; optional): Enables hover styles on row.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `n_clicks` (Real; optional)
- `page_size` (Real; optional): Page size (in rows)
- `role` (String; optional): The ARIA role attribute
- `row_click` (String; optional): Key for the clicked row
- `selectable` (Bool; optional): Whether row selection is enabled
- `selection` (Array; optional): Currently selected rows
- `show_more_less` (Bool; optional): Show simple more/less buttons to adjust page size
- `show_more_size` (Real; optional): Number of rows to increase/decrease page size by
(for use in simple show more mode)
- `small` (Bool; optional): Use small, condensed appearance for this element and all child elements.
- `sort_column` (Real; optional): Column to sort values on
- `sort_columns` (Array; optional): Columns that can be sorted on
- `sort_direction` (String; optional): Sort direction (asc or desc)
- `striped` (Bool; optional): Use an alternate background color on odd rows.
"""
function htmltable(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :className, :condensed, :current_page, :filter_by, :filter_columns, :filter_strings, :interactive, :key, :n_clicks, :page_size, :role, :row_click, :selectable, :selection, :show_more_less, :show_more_size, :small, :sort_column, :sort_columns, :sort_direction, :striped]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("htmltable", "HTMLTable", "dash_blueprint", available_props, wild_props; kwargs...)
end

htmltable(children::Any; kwargs...) = htmltable(;kwargs..., children = children)
htmltable(children_maker::Function; kwargs...) = htmltable(children_maker(); kwargs...)

