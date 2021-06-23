# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Select(Component):
    """A Select component.
Use Select<T> for choosing one item from a list. The component's children will be wrapped in a Popover that contains the list and an optional InputGroup to filter it. Provide a predicate to customize the filtering algorithm. The value of a Select<T> (the currently chosen item) is uncontrolled: listen to changes with onItemSelect.

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Class name.

- disabled (boolean; default False):
    Whether the menu is disabled.

- filterable (boolean; default True):
    Whether the list can be filtered.

- icon (string; optional):
    Button icon.

- items (list; optional):
    Items to choose from.

- minimal (boolean; default True):
    Use minimal popover style.

- popoverProps (dict; optional):
    Additional props to define the popover behaviour.

- value (string; optional):
    The selected item."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, filterable=Component.UNDEFINED, minimal=Component.UNDEFINED, icon=Component.UNDEFINED, popoverProps=Component.UNDEFINED, checked=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'disabled', 'filterable', 'icon', 'items', 'minimal', 'popoverProps', 'value']
        self._type = 'Select'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'disabled', 'filterable', 'icon', 'items', 'minimal', 'popoverProps', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Select, self).__init__(**args)
