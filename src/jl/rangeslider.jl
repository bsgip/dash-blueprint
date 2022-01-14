# AUTO GENERATED FILE - DO NOT EDIT

export rangeslider

"""
    rangeslider(;kwargs...)

A RangeSlider component.
RangeSelector component using d3 and hooks
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (Array; optional): Data
- `group` (Bool; optional): Flag whether data should be aggregated and presented as a count.
Currently not implemented
- `groupSize` (Real; optional): For grouped data, the size of the grouping
- `height` (Real; optional): Chart height
- `isDate` (Bool; optional): Whether to cast the data x values as a date
- `margin` (Dict; optional): Margin to use around chart
- `selectSingle` (Bool; optional): Flag whether to allow only selection of a single bar in the chart
- `selected` (Array; optional): Selected datum (use in point click callbacks)
- `width` (Real; optional): Chart width
- `yLines` (Array; optional): markings to add on y-axis
"""
function rangeslider(; kwargs...)
        available_props = Symbol[:id, :data, :group, :groupSize, :height, :isDate, :margin, :selectSingle, :selected, :width, :yLines]
        wild_props = Symbol[]
        return Component("rangeslider", "RangeSlider", "dash_blueprint", available_props, wild_props; kwargs...)
end

