# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Hotkey(Component):
    """A Hotkey component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- n_presses (optional): An integer that represents the number of times
that this shortcut has been fired.
- n_presses_timestamp (optional): An integer that represents the time (in ms since 1970)
at which n_presses changed. This can be used to tell
which event was fired most recently.
- hotkey (string; optional): Signifies the last hotkey that was pressed
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): Often used with CSS to style elements with common properties.
- combo (string; optional): The keyboard combination to fire the event
- glob (boolean; optional): Whether the key should be enabled globally or only on focus
- label (string; optional): Label for component"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, n_presses=Component.UNDEFINED, n_presses_timestamp=Component.UNDEFINED, hotkey=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, combo=Component.UNDEFINED, glob=Component.UNDEFINED, label=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'n_presses', 'n_presses_timestamp', 'hotkey', 'role', 'data-*', 'aria-*', 'className', 'combo', 'glob', 'label']
        self._type = 'Hotkey'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'key', 'n_presses', 'n_presses_timestamp', 'hotkey', 'role', 'data-*', 'aria-*', 'className', 'combo', 'glob', 'label']
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
