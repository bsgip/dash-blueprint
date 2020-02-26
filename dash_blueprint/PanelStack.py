# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PanelStack(Component):
    """A PanelStack component.
PanelStack manages a stack of panels and displays only the topmost panel.

Each panel appears with a header containing a "back" button to return to the previous panel. 
The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.

Note: currently not functional

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- items (list; optional): Items to choose from
- className (string; optional): Class name
- disabled (boolean; default False): Whether the menu is disabled
- filterable (boolean; default True): Whether the list can be filtered
- minimal (boolean; default True): Use minimal popover style
- icon (string; optional): Button icon
- popoverProps (dict; optional): Additional props to define the popover behaviour"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, filterable=Component.UNDEFINED, minimal=Component.UNDEFINED, icon=Component.UNDEFINED, popoverProps=Component.UNDEFINED, checked=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'items', 'className', 'disabled', 'filterable', 'minimal', 'icon', 'popoverProps']
        self._type = 'PanelStack'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'items', 'className', 'disabled', 'filterable', 'minimal', 'icon', 'popoverProps']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PanelStack, self).__init__(**args)
