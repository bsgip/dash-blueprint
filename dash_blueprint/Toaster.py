# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toaster(Component):
    """A Toaster component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): Often used with CSS to style elements with common properties.
- toasterId (string; optional): Unique identifier for a toaster. All Toasters with the same id
will render to the same underlying toaster. There is no guarantee
which will instantiate first, so they should all be passed the
same Toaster props
- autoFocus (boolean; optional): Whether a toast should acquire application focus when it first opens.
This is disabled by default so that toasts do not interrupt the user's
flow. Note that enforceFocus is always disabled for Toasters.
- position (string; optional): Toast position
- canEscapeKeyClear (boolean; optional): Whether pressing the esc key should clear all active toasts.
- toasts (boolean | number | string | dict | list; optional): Toasts to display

Available events: """
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, toasterId=Component.UNDEFINED, autoFocus=Component.UNDEFINED, position=Component.UNDEFINED, canEscapeKeyClear=Component.UNDEFINED, toasts=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'toasterId', 'autoFocus', 'position', 'canEscapeKeyClear', 'toasts']
        self._type = 'Toaster'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_events = []
        self.available_properties = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'toasterId', 'autoFocus', 'position', 'canEscapeKeyClear', 'toasts']
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

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('Toaster(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'Toaster(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
