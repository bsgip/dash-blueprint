# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Divider(Component):
    """A Divider component.
Divider visually separate contents with a thin line and margin on all sides.

Dividers work best in flex layouts where they will adapt to orientation without additional 
styles. Otherwise, a divider will appear as a full-width 1px-high block element.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- className (string; optional): A space-delimited list of class names to pass along to a child element.
- tagName (string; default 'div'): HTML tag to use for element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, tagName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'tagName']
        self._type = 'Divider'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'tagName']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Divider, self).__init__(**args)
