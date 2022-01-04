# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Hotkey(Component):
    """A Hotkey component.
Hotkeys enable you to create interactions based on user keyboard events.

When a Hotkey is enabled, a hotkey interaction will trigger an n_presses and n_presses_timestamp
update

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- combo (string; optional):
    Hotkey combination string, such as \"space\" or \"cmd+n\".

- data-* (string; optional):
    A wildcard data attribute.

- globalTrigger (boolean; default True):
    If False, the hotkey is active only when the target is focused. If
    True, the hotkey can be triggered regardless of what component is
    focused.

- hotkey (string; optional):
    Signifies the last hotkey that was pressed.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; default 'hotkey'):
    Label for component.

- n_presses (default 0):
    An integer that represents the number of times that this shortcut
    has been fired.

- n_presses_timestamp (default -1):
    An integer that represents the time (in ms since 1970) at which
    n_presses changed. This can be used to tell which event was fired
    most recently.

- role (string; optional):
    The ARIA role attribute."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, n_presses=Component.UNDEFINED, n_presses_timestamp=Component.UNDEFINED, hotkey=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, combo=Component.UNDEFINED, globalTrigger=Component.UNDEFINED, label=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'combo', 'data-*', 'globalTrigger', 'hotkey', 'key', 'label', 'n_presses', 'n_presses_timestamp', 'role']
        self._type = 'Hotkey'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'combo', 'data-*', 'globalTrigger', 'hotkey', 'key', 'label', 'n_presses', 'n_presses_timestamp', 'role']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Hotkey, self).__init__(children=children, **args)
