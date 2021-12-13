# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RadioGroup(Component):
    """A RadioGroup component.
A radio button typically represents a single option in a mutually exclusive list
(where only one item can be selected at a time).
Blueprint provides Radio and RadioGroup components for these two layers.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- inline (boolean; optional):
    Whether the radio buttons are to be displayed inline horizontally.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; optional):
    Label for the form group.

- name (string; optional):
    Name of the group, used to link radio buttons together in HTML. If
    omitted, a unique name will be generated internally.

- options (list; optional):
    Array of options to render in the group. This prop is mutually
    exclusive with children: either provide an array of IOptionProps
    objects or provide <Radio> children elements.

- required (boolean; default False):
    Whether this input is required. Used in form validation.

- valid (boolean; optional):
    Determine whether the input is valid. Used in form validation.

- value (boolean | number | string | dict | list; optional):
    Label for the form group."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, label=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, inline=Component.UNDEFINED, name=Component.UNDEFINED, options=Component.UNDEFINED, required=Component.UNDEFINED, valid=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'inline', 'key', 'label', 'name', 'options', 'required', 'valid', 'value']
        self._type = 'RadioGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'inline', 'key', 'label', 'name', 'options', 'required', 'valid', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RadioGroup, self).__init__(children=children, **args)
