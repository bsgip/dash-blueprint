# AUTO GENERATED FILE - DO NOT EDIT

export hotkey

"""
    hotkey(;kwargs...)
    hotkey(children::Any;kwargs...)
    hotkey(children_maker::Function;kwargs...)


A Hotkey component.
Hotkeys enable you to create interactions based on user keyboard events.

When a Hotkey is enabled, a hotkey interaction will trigger an n_presses and n_presses_timestamp
update
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `combo` (String; optional): Hotkey combination string, such as "space" or "cmd+n".
- `data-*` (String; optional): A wildcard data attribute
- `globalTrigger` (Bool; optional): If false, the hotkey is active only when the target is focused.
If true, the hotkey can be triggered regardless of what component is focused.
- `hotkey` (String; optional): Signifies the last hotkey that was pressed
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `label` (String; optional): Label for component
- `n_presses` (optional): An integer that represents the number of times
that this shortcut has been fired.
- `n_presses_timestamp` (optional): An integer that represents the time (in ms since 1970)
at which n_presses changed. This can be used to tell
which event was fired most recently.
- `role` (String; optional): The ARIA role attribute
"""
function hotkey(; kwargs...)
        available_props = Symbol[:children, :id, :className, :combo, :globalTrigger, :hotkey, :key, :label, :n_presses, :n_presses_timestamp, :role]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("hotkey", "Hotkey", "dash_blueprint", available_props, wild_props; kwargs...)
end

hotkey(children::Any; kwargs...) = hotkey(;kwargs..., children = children)
hotkey(children_maker::Function; kwargs...) = hotkey(children_maker(); kwargs...)

