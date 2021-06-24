# AUTO GENERATED FILE - DO NOT EDIT

export menuitem

"""
    menuitem(;kwargs...)
    menuitem(children::Any;kwargs...)
    menuitem(children_maker::Function;kwargs...)


A MenuItem component.
A MenuItem is a single interactive item in a Menu.

This component renders an <li> containing an <a>. Make the MenuItem interactive by providing the href, target, and onClick props as necessary.

Create submenus by nesting MenuItems inside each other as children. Use the required text prop for MenuItem content.

We also override the onClick
method to make it behave like a dash Link rather than a regular URL.
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `active` (Bool; optional): Whether this menu item should appear with an active state.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `content` (a list of or a singular dash component, string or number; optional): Popover content
- `data-*` (String; optional): A wildcard data attribute
- `disabled` (Bool; optional): Whether this menu item is non-interactive. Enabling this prop will ignore href, tabIndex, and mouse event handlers (in particular click, down, enter, leave).
- `fill` (Bool; optional): Whether the button group should take up the full width of its container.
@default false
- `href` (String; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- `icon` (String; optional): Icon to display
- `iconSize` (Real; optional): Size of the icon
- `intent` (String; optional): Visual intent color to apply to element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `labelClassName` (String; optional): A space-delimited list of class names to pass along to the right-aligned label wrapper element.
- `large` (Bool; optional): Whether the child buttons should appear with large styling.
@default false
- `minimal` (Bool; optional): Whether the child buttons should appear with minimal styling.
@default false
- `multiline` (Bool; optional): Whether the text should be allowed to wrap to multiple lines. If false, text will be truncated with an ellipsis when it reaches max-width.
- `popoverProps` (Dict; optional): Props to spread to Popover. Note that content and minimal cannot be changed and usePortal defaults to false so all submenus will live in the same container.
- `preserveSearchString` (Bool; optional): Whether to preserve search string on href update. When true, a link from
/foo?bar= will redirect to /new-url?bar=
- `role` (String; optional): The ARIA role attribute
- `shouldDismissPopover` (Bool; optional): Whether an enabled item without a submenu should automatically close its parent popover when clicked.
- `tagName` (String; optional): Name of the HTML tag that wraps the MenuItem.
- `text` (String; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- `textClassName` (String; optional): A space-delimited list of class names to pass along to the text wrapper element.
- `vertical` (Bool; optional): Whether the button group should appear with vertical styling.
@default false
"""
function menuitem(; kwargs...)
        available_props = Symbol[:children, :id, :active, :className, :content, :disabled, :fill, :href, :icon, :iconSize, :intent, :key, :labelClassName, :large, :minimal, :multiline, :popoverProps, :preserveSearchString, :role, :shouldDismissPopover, :tagName, :text, :textClassName, :vertical]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("menuitem", "MenuItem", "dash_blueprint", available_props, wild_props; kwargs...)
end

menuitem(children::Any; kwargs...) = menuitem(;kwargs..., children = children)
menuitem(children_maker::Function; kwargs...) = menuitem(children_maker(); kwargs...)

