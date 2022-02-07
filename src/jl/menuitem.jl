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
- `data-*` (String; optional): A wildcard data attribute
- `disabled` (Bool; optional): Whether this menu item is non-interactive. Enabling this prop will
ignore href, tabIndex, and mouse event handlers (in particular click, down, enter, leave).
- `href` (String; optional): Link URL.
- `htmlTitle` (String; optional): HTML title to be passed to the component
- `icon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render before the text.
- `intent` (String; optional): Visual intent color to apply to element.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Right-aligned label text content, useful for displaying hotkeys.
- `labelClassName` (String; optional): A space-delimited list of class names to pass along to the right-aligned label wrapper element.
- `multiline` (Bool; optional): Whether the text should be allowed to wrap to multiple lines.
If false, text will be truncated with an ellipsis when it reaches max-width.
@default false
- `popoverProps` (Dict; optional): Props to spread to Popover. Note that content and minimal cannot be changed and usePortal
defaults to false so all submenus will live in the same container.
- `preserveSearchString` (Bool; optional): Whether to preserve search string on href update. When true, a link from
/foo?bar= will redirect to /new-url?bar=
- `role` (String; optional): The ARIA role attribute
- `shouldDismissPopover` (Bool; optional): Whether an enabled item without a submenu should automatically close its parent popover when clicked.
@default true
- `tagName` (String; optional): Name of the HTML tag that wraps the MenuItem.
@default "a"
- `target` (String; optional): Link target attribute. Use "_blank" to open in a new window.
- `text` (String; required): Item text, required for usability.
- `textClassName` (String; optional): A space-delimited list of class names to pass along to the text wrapper element.
"""
function menuitem(; kwargs...)
        available_props = Symbol[:children, :id, :active, :className, :disabled, :href, :htmlTitle, :icon, :intent, :key, :label, :labelClassName, :multiline, :popoverProps, :preserveSearchString, :role, :shouldDismissPopover, :tagName, :target, :text, :textClassName]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("menuitem", "MenuItem", "dash_blueprint", available_props, wild_props; kwargs...)
end

menuitem(children::Any; kwargs...) = menuitem(;kwargs..., children = children)
menuitem(children_maker::Function; kwargs...) = menuitem(children_maker(); kwargs...)

