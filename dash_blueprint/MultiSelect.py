# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MultiSelect(Component):
    """A MultiSelect component.
@param props
@returns {*}
@constructor

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- items (list; optional): Items to choose from
- value (list; optional): The selected item
- className (string; optional): Class name
- disabled (boolean; default False): Whether the menu is disabled
- filterable (boolean; default True): Whether the list can be filtered
- minimal (boolean; default True): Use minimal popover style
- icon (string; optional): Button icon
- popoverProps (dict; optional): Additional props to define the popover behaviour
- selectedItems (list; optional)
- placeholder (string; default "Search..."): Input placeholder text. Shorthand for tagInputProps.placeholder."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, filterable=Component.UNDEFINED, minimal=Component.UNDEFINED, icon=Component.UNDEFINED, popoverProps=Component.UNDEFINED, selectedItems=Component.UNDEFINED, placeholder=Component.UNDEFINED, checked=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'items', 'value', 'className', 'disabled', 'filterable', 'minimal', 'icon', 'popoverProps', 'selectedItems', 'placeholder']
        self._type = 'MultiSelect'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'items', 'value', 'className', 'disabled', 'filterable', 'minimal', 'icon', 'popoverProps', 'selectedItems', 'placeholder']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MultiSelect, self).__init__(**args)
