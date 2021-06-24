# AUTO GENERATED FILE - DO NOT EDIT

export popover

"""
    popover(;kwargs...)
    popover(children::Any;kwargs...)
    popover(children_maker::Function;kwargs...)


A Popover component.
Popovers display floating content next to a target element.

Popover is built on top of the Popper.js library. Popper.js is a small (~6kb) 
library that offers a powerful, customizable positioning engine and operates at blazing speed (~60fps).
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `alignText` (String; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- `aria-*` (String; optional): A wildcard aria attribute
- `boundary` (String; optional): boundary
- `captureDismiss` (Bool; optional)
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `content` (a list of or a singular dash component, string or number; optional): Popover content
- `data-*` (String; optional): A wildcard data attribute
- `defaultIsOpen` (Bool; optional)
- `disabled` (Bool; optional)
- `fill` (Bool; optional): Whether the button group should take up the full width of its container.
@default false
- `hasBackdrop` (Bool; optional)
- `hoverCloseDelay` (Real; optional)
- `hoverOpenDelay` (Real; optional)
- `inheritDarkTheme` (Bool; optional)
- `interactionKind` (String; optional)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `large` (Bool; optional): Whether the child buttons should appear with large styling.
@default false
- `minimal` (Bool; optional): Whether the child buttons should appear with minimal styling.
@default false
- `modifiers` (Bool | Real | String | Dict | Array; optional)
- `openOnTargetFocus` (Bool; optional)
- `position` (String; optional)
- `role` (String; optional): The ARIA role attribute
- `targetTagName` (String; optional)
- `transitionDuration` (Real; optional)
- `usePortal` (Bool; optional)
- `vertical` (Bool; optional): Whether the button group should appear with vertical styling.
@default false
- `wrapperTagName` (String; optional)
"""
function popover(; kwargs...)
        available_props = Symbol[:children, :id, :alignText, :boundary, :captureDismiss, :className, :content, :defaultIsOpen, :disabled, :fill, :hasBackdrop, :hoverCloseDelay, :hoverOpenDelay, :inheritDarkTheme, :interactionKind, :key, :large, :minimal, :modifiers, :openOnTargetFocus, :position, :role, :targetTagName, :transitionDuration, :usePortal, :vertical, :wrapperTagName]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("popover", "Popover", "dash_blueprint", available_props, wild_props; kwargs...)
end

popover(children::Any; kwargs...) = popover(;kwargs..., children = children)
popover(children_maker::Function; kwargs...) = popover(children_maker(); kwargs...)

