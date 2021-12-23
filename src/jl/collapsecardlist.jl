# AUTO GENERATED FILE - DO NOT EDIT

export collapsecardlist

"""
    collapsecardlist(;kwargs...)
    collapsecardlist(children::Any;kwargs...)
    collapsecardlist(children_maker::Function;kwargs...)


A CollapseCardList component.
A component rendering a list of CollapseCard components. The parent list maintains
the open/close state of all CollapseCards, and so allows for updating without
destroying the state of the list.

Note: to use this, the children object passed in must be a list of CollapseDetails components.
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
- `disabled` (String; optional): Indicates whether the user can interact with the element.
- `draggable` (String; optional): Defines whether the element can be dragged.
- `elevation` (Real; optional): Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
- `form` (String; optional): Indicates the form that is the owner of the element.
- `formAction` (String; optional): Indicates the action of the element, overriding the action defined in the <form>.
- `hidden` (String; optional): Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
- `href` (String; optional): window location to set on click
- `interactive` (Bool; optional): Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.

Recommended when onClick is also defined.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lang` (String; optional): Defines the language used in the element.
- `n_clicks` (Real; optional): An integer that represents the number of times
that this element has been clicked on.
- `n_clicks_timestamp` (Real; optional): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
- `name` (String; optional): Name of the element. For example used by the server to identify the fields in form submits.
- `opened` (String; optional): The last opened card key
- `role` (String; optional): The ARIA role attribute
- `selected` (Array; optional): The selected (and non-collapsed) card key
- `spellCheck` (String; optional): Indicates whether spell checking is allowed for the element.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tabIndex` (String; optional): Overrides the browser's default tab order and follows the one specified instead.
- `type` (String; optional): Defines the type of the element.
- `value` (String; optional): Defines a default value which will be displayed in the element on page load.
"""
function collapsecardlist(; kwargs...)
        available_props = Symbol[:children, :id, :accessKey, :autoFocus, :className, :contentEditable, :contextMenu, :dir, :disabled, :draggable, :elevation, :form, :formAction, :hidden, :href, :interactive, :key, :lang, :n_clicks, :n_clicks_timestamp, :name, :opened, :role, :selected, :spellCheck, :style, :tabIndex, :type, :value]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("collapsecardlist", "CollapseCardList", "dash_blueprint", available_props, wild_props; kwargs...)
end

collapsecardlist(children::Any; kwargs...) = collapsecardlist(;kwargs..., children = children)
collapsecardlist(children_maker::Function; kwargs...) = collapsecardlist(children_maker(); kwargs...)

