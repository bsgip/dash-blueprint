# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toaster(Component):
    """A Toaster component.
Wrapper around the blueprint MenuItem component. We also override the onClick
method to make it behave like a dash Link rather than a regular URL.
@param props
@returns {*}
@constructor

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
- text (string; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- href (string; optional): Text alignment within button. By default, icons and text will be centered
within the button. Passing `"left"` or `"right"` will align the button
text to that side and push `icon` and `rightIcon` to either edge. Passing
`"center"` will center the text and icons together.
- fill (boolean; optional): Whether the button group should take up the full width of its container.
@default false
- minimal (boolean; optional): Whether the child buttons should appear with minimal styling.
@default false
- large (boolean; optional): Whether the child buttons should appear with large styling.
@default false
- vertical (boolean; optional): Whether the button group should appear with vertical styling.
@default false
- content (a list of or a singular dash component, string or number; optional): Popover content
- icon (string; optional): Icon to display
- multiline (boolean; optional): Display text as multiline item

Available events: """
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, text=Component.UNDEFINED, href=Component.UNDEFINED, fill=Component.UNDEFINED, minimal=Component.UNDEFINED, large=Component.UNDEFINED, vertical=Component.UNDEFINED, content=Component.UNDEFINED, icon=Component.UNDEFINED, multiline=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'text', 'href', 'fill', 'minimal', 'large', 'vertical', 'content', 'icon', 'multiline']
        self._type = 'Toaster'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_events = []
        self.available_properties = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'text', 'href', 'fill', 'minimal', 'large', 'vertical', 'content', 'icon', 'multiline']
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
