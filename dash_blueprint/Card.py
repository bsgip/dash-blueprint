# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
A card is a bounded unit of UI content with a solid background color.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- data-* (string; optional):
    A wildcard data attribute.

- elevation (number; optional):
    Controls the intensity of the drop shadow beneath the card: the
    higher the elevation, the higher the drop shadow. At elevation 0,
    no drop shadow is applied.

- href (string; optional):
    window location to set on click.

- interactive (boolean; optional):
    Whether the card should respond to user interactions. If set to
    True, hovering over the card will increase the card's elevation
    and change the mouse cursor to a pointer.  Recommended when
    onClick is also defined.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- n_clicks (number; default 0):
    An integer that represents the number of times that this element
    has been clicked on.

- n_clicks_timestamp (number; default -1):
    An integer that represents the time (in ms since 1970) at which
    n_clicks changed. This can be used to tell which button was
    changed most recently.

- role (string; optional):
    The ARIA role attribute."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, elevation=Component.UNDEFINED, interactive=Component.UNDEFINED, href=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'data-*', 'elevation', 'href', 'interactive', 'key', 'n_clicks', 'n_clicks_timestamp', 'role']
        self._type = 'Card'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'data-*', 'elevation', 'href', 'interactive', 'key', 'n_clicks', 'n_clicks_timestamp', 'role']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Card, self).__init__(children=children, **args)
