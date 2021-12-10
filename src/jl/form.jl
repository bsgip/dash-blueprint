# AUTO GENERATED FILE - DO NOT EDIT

export form

"""
    form(;kwargs...)
    form(children::Any;kwargs...)
    form(children_maker::Function;kwargs...)


A Form component.
Custom component that is a collection of FormGroups with submit button
that may have custom validation to enable

https://blueprintjs.com/docs/#core/components/dialog.dialog

@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
"""
function form(; kwargs...)
        available_props = Symbol[:children, :id, :key]
        wild_props = Symbol[Symbol("aria-")]
        return Component("form", "Form", "dash_blueprint", available_props, wild_props; kwargs...)
end

form(children::Any; kwargs...) = form(;kwargs..., children = children)
form(children_maker::Function; kwargs...) = form(children_maker(); kwargs...)

