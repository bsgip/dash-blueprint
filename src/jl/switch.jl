# AUTO GENERATED FILE - DO NOT EDIT

export switch

"""
    switch(;kwargs...)
    switch(children::Any;kwargs...)
    switch(children_maker::Function;kwargs...)


A Switch component.
A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accessKey` (String; optional): Defines a keyboard shortcut to activate or add focus to the element.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `checked` (Bool; optional): An integer that represents the number of times
that this element has been clicked on.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `contentEditable` (String; optional): Indicates whether the element's content is editable.
- `contextMenu` (String; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- `data-*` (String; optional): A wildcard data attribute
- `dir` (String; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- `disabled` (String; optional): Indicates whether the user can interact with the element.
- `draggable` (String; optional): Defines whether the element can be dragged.
- `form` (String; optional): Indicates the form that is the owner of the element.
- `formAction` (String; optional): Indicates the action of the element, overriding the action defined in the <form>.
- `hidden` (String; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- `intent` (String; optional): Button intent (primary/success/warning/danger/none)
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lang` (String; optional): Defines the language used in the element.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `required` (Bool; optional): Whether this input is required. Used in form validation
- `role` (String; optional): The ARIA role attribute
- `spellCheck` (String; optional): Indicates whether spell checking is allowed for the element.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String; optional): Overrides the browser's default tab order and follows the one specified instead.
- `title` (String; optional): Text to be displayed in a tooltip when hovering over the element.
- `type` (String; optional): Defines the type of the element.
- `updateKey` (String; optional): key to use when updating parent component
- `valid` (Bool; optional): Determine whether the input is valid. Used in form validation
- `value` (String; optional): Defines a default value which will be displayed in the element on page load.
"""
function switch(; kwargs...)
        available_props = Symbol[:children, :id, :accessKey, :autoFocus, :checked, :className, :contentEditable, :contextMenu, :dir, :disabled, :draggable, :form, :formAction, :hidden, :intent, :key, :lang, :name, :required, :role, :spellCheck, :style, :tabIndex, :title, :type, :updateKey, :valid, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("switch", "Switch", "dash_blueprint", available_props, wild_props; kwargs...)
end

switch(children::Any; kwargs...) = switch(;kwargs..., children = children)
switch(children_maker::Function; kwargs...) = switch(children_maker(); kwargs...)

