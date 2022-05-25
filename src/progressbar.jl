# AUTO GENERATED FILE - DO NOT EDIT

export progressbar

"""
    progressbar(;kwargs...)
    progressbar(children::Any;kwargs...)
    progressbar(children_maker::Function;kwargs...)


A ProgressBar component.
Progress bars indicate progress towards the completion of a task or an indeterminate loading state.
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `animate` (Bool; optional): Whether the background should animate.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `intent` (String; optional): Visual intent color to apply to element.
"none"
        | "primary"
        | "success"
        | "warning"
        | "danger"
- `stripes` (Bool; optional): Whether the background should be striped.
- `value` (Real; optional): A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.
"""
function progressbar(; kwargs...)
        available_props = Symbol[:children, :id, :animate, :className, :intent, :stripes, :value]
        wild_props = Symbol[]
        return Component("progressbar", "ProgressBar", "dash_blueprint", available_props, wild_props; kwargs...)
end

progressbar(children::Any; kwargs...) = progressbar(;kwargs..., children = children)
progressbar(children_maker::Function; kwargs...) = progressbar(children_maker(); kwargs...)

