# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toaster(Component):
    """A Toaster component.
The Toaster React component is a stateful container for a single list of toasts. Internally, it uses Overlay to manage children and transitions. It can be vertically aligned along the top or bottom edge of its container (new toasts will slide in from that edge) and horizontally aligned along the left edge, center, or right edge of its container.

TODO: Document how to use a Toaster in Dash

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- autoFocus (boolean; default False):
    Whether a toast should acquire application focus when it first
    opens. This is disabled by default so that toasts do not interrupt
    the user's flow. Note that enforceFocus is always disabled for
    Toasters.

- canEscapeKeyClear (boolean; default False):
    Whether pressing the esc key should clear all active toasts.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- data-* (string; optional):
    A wildcard data attribute.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- position (string; default Position.TOP_RIGHT):
    Toast position.

- role (string; optional):
    The ARIA role attribute.

- toasterId (string; default 'toaster'):
    Unique identifier for a toaster. All Toasters with the same id
    will render to the same underlying toaster. There is no guarantee
    which will instantiate first, so they should all be passed the
    same Toaster props.

- toasts (boolean | number | string | dict | list; optional):
    Toasts to display."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, toasterId=Component.UNDEFINED, autoFocus=Component.UNDEFINED, position=Component.UNDEFINED, canEscapeKeyClear=Component.UNDEFINED, toasts=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'autoFocus', 'canEscapeKeyClear', 'className', 'data-*', 'key', 'position', 'role', 'toasterId', 'toasts']
        self._type = 'Toaster'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'autoFocus', 'canEscapeKeyClear', 'className', 'data-*', 'key', 'position', 'role', 'toasterId', 'toasts']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Toaster, self).__init__(children=children, **args)
