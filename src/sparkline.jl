# AUTO GENERATED FILE - DO NOT EDIT

export sparkline

"""
    sparkline(;kwargs...)
    sparkline(children::Any;kwargs...)
    sparkline(children_maker::Function;kwargs...)


A Sparkline component.
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `n_clicks` (Real; optional): An integer that represents the number of times
that this element has been clicked on.
- `n_clicks_timestamp` (Real; optional): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
"""
function sparkline(; kwargs...)
        available_props = Symbol[:children, :id, :key, :n_clicks, :n_clicks_timestamp]
        wild_props = Symbol[]
        return Component("sparkline", "Sparkline", "dash_blueprint", available_props, wild_props; kwargs...)
end

sparkline(children::Any; kwargs...) = sparkline(;kwargs..., children = children)
sparkline(children_maker::Function; kwargs...) = sparkline(children_maker(); kwargs...)

