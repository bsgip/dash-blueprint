# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Select(Component):
    """A Select component.
Use `Select` for choosing one item from a list.

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Class name.

- disabled (boolean; default False):
    Whether the menu is disabled.

- fill (boolean; optional):
    Whether the component should take up the full width of its
    container. This overrides popoverProps.fill. You also have to
    ensure that the child component has fill set to True or is styled
    appropriately.

- filterable (boolean; default True):
    Whether the list can be filtered.

- icon (string; optional):
    Button icon.

- items (list; optional):
    Items to choose from.

- label (string; optional):
    The selected item label.

- minimal (boolean; default True):
    Use minimal popover style.

- popoverProps (dict; optional):
    Additional props to define the popover behaviour.

- required (boolean; default True):
    Whether this input is required. Used in form validation.

- valid (boolean; optional):
    Determine whether the input is valid. Used in form validation.

- value (string; optional):
    The selected item."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.UNDEFINED, value=Component.UNDEFINED, label=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, fill=Component.UNDEFINED, filterable=Component.UNDEFINED, minimal=Component.UNDEFINED, icon=Component.UNDEFINED, popoverProps=Component.UNDEFINED, required=Component.UNDEFINED, valid=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'disabled', 'fill', 'filterable', 'icon', 'items', 'label', 'minimal', 'popoverProps', 'required', 'valid', 'value']
        self._type = 'Select'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'disabled', 'fill', 'filterable', 'icon', 'items', 'label', 'minimal', 'popoverProps', 'required', 'valid', 'value']
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
