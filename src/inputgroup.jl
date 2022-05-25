# AUTO GENERATED FILE - DO NOT EDIT

export inputgroup

"""
    inputgroup(;kwargs...)
    inputgroup(children::Any;kwargs...)
    inputgroup(children_maker::Function;kwargs...)


An InputGroup component.
An input group allows you to add icons and buttons within a text input to expand its functionality. 
For example, you might use an input group to build a visibility toggle for a password field.

Note: this implementation only allows for icons to be used, and provides no interactive 
functionality
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accessKey` (String; optional): Defines a keyboard shortcut to activate or add focus to the element.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `contentEditable` (String; optional): Indicates whether the element's content is editable.
- `contextMenu` (String; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- `data-*` (String; optional): A wildcard data attribute
- `dir` (String; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- `disabled` (Bool; optional): Indicates whether the user can interact with the element.
- `draggable` (String; optional): Defines whether the element can be dragged.
- `fill` (Bool; optional): Whether the component should take up the full width of its container.
- `form` (String; optional): Indicates the form that is the owner of the element.
- `formAction` (String; optional): Indicates the action of the element, overriding the action defined in the <form>.
- `hidden` (String; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- `intent` (String; optional): Button intent (primary/success/warning/danger/none)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lang` (String; optional): Defines the language used in the element.
- `large` (Bool; optional): If set to true, the input will display with larger styling. This is equivalent to setting Classes.LARGE via className on the parent control group and on the child input group.
- `leftIcon` (String; optional): Name of a Blueprint UI icon (or an icon element) to render on the left side of input.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `placeholder` (String; optional): The placeholder text in the absence of any value.
- `role` (String; optional): The ARIA role attribute
- `round` (Bool; optional): Whether the input (and any buttons) should appear with rounded caps.
- `small` (Bool; optional): Whether this input should use small styles.
- `spellCheck` (String; optional): Indicates whether spell checking is allowed for the element.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String; optional): Overrides the browser's default tab order and follows the one specified instead.
- `title` (String; optional): Text to be displayed in a tooltip when hovering over the element.
- `type` (String; optional): Defines the type of the element.
- `value` (String; optional): Defines a default value which will be displayed in the element on page load.
"""
function inputgroup(; kwargs...)
        available_props = Symbol[:children, :id, :accessKey, :autoFocus, :className, :contentEditable, :contextMenu, :dir, :disabled, :draggable, :fill, :form, :formAction, :hidden, :intent, :key, :lang, :large, :leftIcon, :name, :placeholder, :role, :round, :small, :spellCheck, :style, :tabIndex, :title, :type, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("inputgroup", "InputGroup", "dash_blueprint", available_props, wild_props; kwargs...)
end

inputgroup(children::Any; kwargs...) = inputgroup(;kwargs..., children = children)
inputgroup(children_maker::Function; kwargs...) = inputgroup(children_maker(); kwargs...)

