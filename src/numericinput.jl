# AUTO GENERATED FILE - DO NOT EDIT

export numericinput

"""
    numericinput(;kwargs...)
    numericinput(children::Any;kwargs...)
    numericinput(children_maker::Function;kwargs...)


A NumericInput component.
The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `accessKey` (String; optional): Defines a keyboard shortcut to activate or add focus to the element.
- `allowNumericCharactersOnly` (Bool; optional): Whether to allow only floating-point number characters in the field, mimicking the native input[type="number"].
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (String; optional): The element should be automatically focused after the page loaded.
- `buttonPosition` (String; optional): "left" | "right" | "none"Position.RIGHT
The position of the buttons with respect to the input field.
- `clampValueOnBlur` (Bool; optional): Whether the value should be clamped to [min, max] on blur. The value will be clamped to each bound only if the bound is defined. Note that native input[type="number"] controls do NOT clamp on blur.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `contentEditable` (String; optional): Indicates whether the element's content is editable.
- `contextMenu` (String; optional): Defines the ID of a <menu> element which will serve as the element's context menu.
- `data-*` (String; optional): A wildcard data attribute
- `dir` (String; optional): Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
- `disabled` (Bool; optional): Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it.
- `draggable` (String; optional): Defines whether the element can be dragged.
- `fill` (Bool; optional): Whether the numeric input should take up the full width of its container.
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
- `max` (Real; optional): The maximum value of the input.
- `min` (Real; optional): The minimum value of the input.
- `minorStepSize` (Real; optional): The increment between successive values when alt is held. Pass explicit null value to disable this interaction.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `placeholder` (String; optional): The placeholder text in the absence of any value.
- `role` (String; optional): The ARIA role attribute
- `selectAllOnFocus` (Bool; optional): Whether the entire text field should be selected on focus.
- `selectAllOnIncrement` (Bool; optional): Whether the entire text field should be selected on increment.
- `shiftSize` (Real; optional): The increment between successive values when shift is held. Pass explicit null value to disable this interaction.
- `spellCheck` (String; optional): Indicates whether spell checking is allowed for the element.
- `stepSize` (Real; optional): The increment between successive values when no modifier keys are held.
- `stringValue` (String; optional): The value as a number.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String; optional): Overrides the browser's default tab order and follows the one specified instead.
- `title` (String; optional): Text to be displayed in a tooltip when hovering over the element.
- `type` (String; optional): Defines the type of the element.
- `value` (Real; optional): Defines a default value which will be displayed in the element on page load.
"""
function numericinput(; kwargs...)
        available_props = Symbol[:children, :id, :accessKey, :allowNumericCharactersOnly, :autoFocus, :buttonPosition, :clampValueOnBlur, :className, :contentEditable, :contextMenu, :dir, :disabled, :draggable, :fill, :form, :formAction, :hidden, :intent, :key, :lang, :large, :leftIcon, :max, :min, :minorStepSize, :name, :placeholder, :role, :selectAllOnFocus, :selectAllOnIncrement, :shiftSize, :spellCheck, :stepSize, :stringValue, :style, :tabIndex, :title, :type, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("numericinput", "NumericInput", "dash_blueprint", available_props, wild_props; kwargs...)
end

numericinput(children::Any; kwargs...) = numericinput(;kwargs..., children = children)
numericinput(children_maker::Function; kwargs...) = numericinput(children_maker(); kwargs...)

