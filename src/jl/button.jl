# AUTO GENERATED FILE - DO NOT EDIT

export button

"""
    button(;kwargs...)
    button(children::Any;kwargs...)
    button(children_maker::Function;kwargs...)


A Button component.
This is pretty much a straight copy/paste from the dash html component button,
except we render a blueprint button. If you don't care about styling, you should probably
use the dash version.

TODO - it would be useful to have a href prop here, where clicking a button routes to
a different URL
@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accessKey` (String; optional): Defines a keyboard shortcut to activate or add focus to the element.
- `active` (Bool; optional): If set to true, the button will display in an active state. This is equivalent to setting className={Classes.ACTIVE}.
- `alignText` (String; optional): Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.
Choice of (`left`, `right`, `center`)
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `contentEditable` (String; optional): Indicates whether the element's content is editable.
- `contextMenu` (String; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- `data-*` (String; optional): A wildcard data attribute
- `dir` (String; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- `disabled` (Bool; optional): Indicates whether the user can interact with the element.
- `draggable` (String; optional): Defines whether the element can be dragged.
- `form` (String; optional): Indicates the form that is the owner of the element.
- `formAction` (String; optional): Indicates the action of the element, overriding the action defined in the <form>.
- `hidden` (String; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- `href` (String; optional): window location to set on click
- `icon` (String; optional): Button intent (primary/success/warning/danger/none)
- `intent` (String; optional): Button intent (primary/success/warning/danger/none)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lang` (String; optional): Defines the language used in the element.
- `large` (Bool; optional): Whether this button should use large styles.
- `minimal` (Bool; optional): Whether this button should use minimal styles.
- `n_clicks` (Real; optional): An integer that represents the number of times
that this element has been clicked on.
- `n_clicks_timestamp` (Real; optional): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `rightIcon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render after the text.
- `role` (String; optional): The ARIA role attribute
- `showLoadingOnClick` (Bool; optional): If selected, the button will revert to 'loading' when clicked.
An action must be taken to remove it from this state (for example, the contents replaced)
- `small` (Bool; optional): Whether this button should use small styles.
- `spellCheck` (String; optional): Indicates whether spell checking is allowed for the element.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String; optional): Overrides the browser's default tab order and follows the one specified instead.
- `title` (String; optional): Text to be displayed in a tooltip when hovering over the element.
- `type` (String; optional): Defines the type of the element.
- `value` (String; optional): Defines a default value which will be displayed in the element on page load.
"""
function button(; kwargs...)
        available_props = Symbol[:children, :id, :accessKey, :active, :alignText, :autoFocus, :className, :contentEditable, :contextMenu, :dir, :disabled, :draggable, :form, :formAction, :hidden, :href, :icon, :intent, :key, :lang, :large, :minimal, :n_clicks, :n_clicks_timestamp, :name, :rightIcon, :role, :showLoadingOnClick, :small, :spellCheck, :style, :tabIndex, :title, :type, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("button", "Button", "dash_blueprint", available_props, wild_props; kwargs...)
end

button(children::Any; kwargs...) = button(;kwargs..., children = children)
button(children_maker::Function; kwargs...) = button(children_maker(); kwargs...)

