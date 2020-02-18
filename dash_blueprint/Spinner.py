# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Spinner(Component):
    """A Spinner component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): A space-delimited list of class names to pass along to a child element.
- intent (string; optional): Visual intent color to apply to element.
- size (number; optional): numberSpinner.SIZE_STANDARD = 50

Width and height of the spinner in pixels. The size cannot be less than 10px.

Constants are available for common sizes:
Spinner.SIZE_SMALL = 20px
Spinner.SIZE_STANDARD = 50px
Spinner.SIZE_LARGE = 100px
- tagName (string; optional): HTML tag for the two wrapper elements. If rendering a <Spinner> inside an <svg>, change this to an SVG element like "g".
- value (number; optional): A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, intent=Component.UNDEFINED, size=Component.UNDEFINED, tagName=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'role', 'data-*', 'aria-*', 'className', 'intent', 'size', 'tagName', 'value']
        self._type = 'Spinner'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'role', 'data-*', 'aria-*', 'className', 'intent', 'size', 'tagName', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Spinner, self).__init__(**args)
