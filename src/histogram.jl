# AUTO GENERATED FILE - DO NOT EDIT

export histogram

"""
    histogram(;kwargs...)
    histogram(children::Any;kwargs...)
    histogram(children_maker::Function;kwargs...)


A Histogram component.
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
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `maxCount` (Real; optional): Maximum count to be included in the histogram. Values above this number
will be rendered a different colour
- `role` (String; optional): The ARIA role attribute
- `rows` (Array; optional): Row data used to create the histogram
"""
function histogram(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :maxCount, :role, :rows]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("histogram", "Histogram", "dash_blueprint", available_props, wild_props; kwargs...)
end

histogram(children::Any; kwargs...) = histogram(;kwargs..., children = children)
histogram(children_maker::Function; kwargs...) = histogram(children_maker(); kwargs...)

