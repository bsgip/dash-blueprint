# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Form(Component):
    """A Form component.
Custom component that is a collection of FormGroups with submit button
that may have custom validation to enable

https://blueprintjs.com/docs/#core/components/dialog.dialog

@param props
@returns {*}
@constructor

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'key']
        self._type = 'Form'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'key']
        self.available_wildcard_properties =            ['aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Form, self).__init__(children=children, **args)
