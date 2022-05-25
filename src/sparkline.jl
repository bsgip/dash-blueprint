# AUTO GENERATED FILE - DO NOT EDIT

export sparkline

"""
    sparkline(;kwargs...)

A Sparkline component.
@param props
@returns {*}
@constructor
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `ariaLabel` (String; optional): Aria label
- `barSeries` (optional): Properties to pass through for a BarSeries object. barSeries has the following type: lists containing elements 'fill', 'fillOpacity', 'stroke', 'strokeWidth'.
Those elements have the following types:
  - `fill` (String; optional)
  - `fillOpacity` (Real; optional)
  - `stroke` (String; optional)
  - `strokeWidth` (Real; optional)
- `data` (Array of Reals; optional): Data to display in the sparkline
- `height` (Real; optional)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lineSeries` (optional): Properties to pass through for a LineSeries object. lineSeries has the following type: lists containing elements 'fill', 'fillOpacity', 'curve', 'showArea', 'showLine', 'stroke', 'strokeDasharray', 'strokeLinecap', 'strokeWidth'.
Those elements have the following types:
  - `fill` (String; optional)
  - `fillOpacity` (Real; optional)
  - `curve` (a value equal to: 'linear', 'cardinal', 'basis', 'monotoneX'; optional)
  - `showArea` (Bool; optional)
  - `showLine` (Bool; optional)
  - `stroke` (String; optional)
  - `strokeDasharray` (String; optional)
  - `strokeLinecap` (a value equal to: 'butt', 'square', 'round', 'inherit'; optional)
  - `strokeWidth` (Real; optional)
- `margin` (optional): chart margin, leave room for labels! note 0 may clip LineSeries and PointSeries. a partial { top/right/bottom/ left } object is filled with the other default values. margin has the following type: lists containing elements 'top', 'right', 'bottom', 'left'.
Those elements have the following types:
  - `top` (Real; optional)
  - `right` (Real; optional)
  - `bottom` (Real; optional)
  - `left` (Real; optional)
- `max` (Real; optional): Optionally set the maximum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
- `min` (Real; optional): Optionally set the minimum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
- `width` (Real; optional): Width of the svg including left/right margin
"""
function sparkline(; kwargs...)
        available_props = Symbol[:id, :ariaLabel, :barSeries, :data, :height, :key, :lineSeries, :margin, :max, :min, :width]
        wild_props = Symbol[]
        return Component("sparkline", "Sparkline", "dash_blueprint", available_props, wild_props; kwargs...)
end

