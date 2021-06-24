# AUTO GENERATED FILE - DO NOT EDIT

export spinner

"""
    spinner(;kwargs...)

A Spinner component.
Spinners indicate progress in a circular fashion. They're great for ongoing operations and can also represent known progress.
@param {*} props
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `data-*` (String; optional): A wildcard data attribute
- `intent` (String; optional): Visual intent color to apply to element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `size` (Real; optional): numberSpinner.SIZE_STANDARD = 50

Width and height of the spinner in pixels. The size cannot be less than 10px.

Constants are available for common sizes:
Spinner.SIZE_SMALL = 20px
Spinner.SIZE_STANDARD = 50px
Spinner.SIZE_LARGE = 100px
- `tagName` (String; optional): HTML tag for the two wrapper elements. If rendering a <Spinner> inside an <svg>, change this to an SVG element like "g".
- `value` (Real; optional): A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.
"""
function spinner(; kwargs...)
        available_props = Symbol[:id, :className, :intent, :key, :role, :size, :tagName, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("spinner", "Spinner", "dash_blueprint", available_props, wild_props; kwargs...)
end

