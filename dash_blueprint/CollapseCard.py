# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CollapseCard(Component):
    """A CollapseCard component.
A combination of Collapse and Card, this shows additional details when the card is clicked on.

Note: because of the janky way we recreate the children, it currently does not show the
transition on Collapse open/close.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- controlled (boolean; optional):
    Used internally to manage whether the component is controlled
    externally.

- data-* (string; optional):
    A wildcard data attribute.

- elevation (number; optional):
    Controls the intensity of the drop shadow beneath the card: the
    higher the elevation, the higher the drop shadow. At elevation 0,
    no drop shadow is applied.

- interactive (boolean; default True):
    Whether the card should respond to user interactions. If set to
    True, hovering over the card will increase the card's elevation
    and change the mouse cursor to a pointer.

- isOpen (boolean; optional):
    Whether collapsed content is shown.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- n_clicks (number; optional):
    An integer that represents the number of times that this element
    has been clicked on.

- n_clicks_timestamp (number; optional):
    An integer that represents the time (in ms since 1970) at which
    n_clicks changed. This can be used to tell which button was
    changed most recently.

- role (string; optional):
    The ARIA role attribute."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, elevation=Component.UNDEFINED, interactive=Component.UNDEFINED, isOpen=Component.UNDEFINED, controlled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'controlled', 'data-*', 'elevation', 'interactive', 'isOpen', 'key', 'n_clicks', 'n_clicks_timestamp', 'role']
        self._type = 'CollapseCard'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'controlled', 'data-*', 'elevation', 'interactive', 'isOpen', 'key', 'n_clicks', 'n_clicks_timestamp', 'role']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CollapseCard, self).__init__(children=children, **args)
