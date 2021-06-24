# AUTO GENERATED FILE - DO NOT EDIT

export resizesensor

"""
    resizesensor(;kwargs...)
    resizesensor(children::Any;kwargs...)
    resizesensor(children_maker::Function;kwargs...)


A ResizeSensor component.
ResizeSensor is a component that provides a "resize" event for its single DOM element child. It is a thin wrapper around ResizeObserver to provide React bindings.

 Resize events are fired each time the child div
resizes, with a custom debounce timeout to ensure we aren't overloaded with events.

Note: This was more useful when Dash components were not size-aware, and should be used sparingly
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `debounceTimer` (Real; optional): How long to debounce before firing an event. Useful for situations
where dynamic resizing would cause a lot of events to fire.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `observeParents` (Bool; optional): Whether to observe parent sizes
- `size` (Bool | Real | String | Dict | Array; optional): The current size of the observed e.g.
{'x': 0, 'y': 0, 'width': 884, 'height': 17.265625, 'top': 0,
 'right': 884, 'bottom': 17.265625, 'left': 0}
TODO use a proper PropType
"""
function resizesensor(; kwargs...)
        available_props = Symbol[:children, :id, :debounceTimer, :key, :observeParents, :size]
        wild_props = Symbol[]
        return Component("resizesensor", "ResizeSensor", "dash_blueprint", available_props, wild_props; kwargs...)
end

resizesensor(children::Any; kwargs...) = resizesensor(;kwargs..., children = children)
resizesensor(children_maker::Function; kwargs...) = resizesensor(children_maker(); kwargs...)

