# AUTO GENERATED FILE - DO NOT EDIT

export slider

"""
    slider(;kwargs...)
    slider(children::Any;kwargs...)
    slider(children_maker::Function;kwargs...)


A Slider component.
A slider is a numeric input for choosing numbers between lower and upper bounds. It also has a labeled axis that supports custom formatting.

To adjust a slider value, the user clicks and drags a handle or clicks the axis to move the nearest handle to that spot. Users can also use arrow keys on the keyboard to adjust individual handles.

Use Slider for choosing a single value, RangeSlider for choosing two values, and MultiSlider for more advanced use cases.

Use Slider to choose a single value on a number line. It is a controlled component, so the value prop determines its current appearance. Provide an onChange handler to receive updates and an onRelease handler to determine when the user has stopped interacting with the slider.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `disabled` (Bool; optional): Whether the slider is non-interactive.
- `initialValue` (Real; optional): Initial value of the slider. This determines the other end of the track fill: from initialValue to value.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `labelPrecision` (Real; optional): Number of decimal places to use when rendering label value. Default value is the number of decimals used in the stepSize prop. This prop has no effect if you supply a custom labelRenderer callback.
- `labelRenderer` (Bool; optional): Whether to render labels
- `labelStepSize` (Real; optional): Increment between successive labels. Must be greater than zero
- `labelType` (String; optional): Instructions for rendering the label. Options will be clock, date, datetime, number, percentage, etc.
- `max` (Real; optional): Maximum value of the slider
- `min` (Real; optional): Minimum value of the slider
- `releaseValue` (Real; optional): Value of slider on release of handle. This will only fire callbacks when the 
slider has been released, which is probably desirable in most instances for 
server-side callbacks
- `showTrackFill` (Bool; optional): Whether a solid bar should be rendered on the track between current and initial values, or between handles for RangeSlider
- `stepSize` (Real; optional): Increment between successive values; amount by which the handle moves. Must be greater than zero
- `updateKey` (String; optional): key to use when updating parent component
- `value` (Real; optional): Value of slider
- `vertical` (Bool; optional): Whether to show the slider in a vertical orientation
"""
function slider(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disabled, :initialValue, :key, :labelPrecision, :labelRenderer, :labelStepSize, :labelType, :max, :min, :releaseValue, :showTrackFill, :stepSize, :updateKey, :value, :vertical]
        wild_props = Symbol[]
        return Component("slider", "Slider", "dash_blueprint", available_props, wild_props; kwargs...)
end

slider(children::Any; kwargs...) = slider(;kwargs..., children = children)
slider(children_maker::Function; kwargs...) = slider(children_maker(); kwargs...)

