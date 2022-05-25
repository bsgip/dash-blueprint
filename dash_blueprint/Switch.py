# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Switch(Component):
    """A Switch component.
A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- alignIndicator (string; optional):
    Alignment of the indicator within container.

- aria-* (string; optional):
    A wildcard aria attribute.

- checked (boolean; default False):
    Whether the control is checked.

- className (string; optional):
    A space-delimited list of class names to pass along to a child
    element.

- data-* (string; optional):
    A wildcard data attribute.

- disabled (boolean; optional):
    Whether the control is non-interactive.

- inline (boolean; optional):
    Whether the control should appear as an inline element.

- innerLabel (string; optional):
    Text to display inside the switch indicator when unchecked.

- innerLabelChecked (string; optional):
    Text to display inside the switch indicator when checked. If
    innerLabel is provided and this prop is omitted, then innerLabel
    will be used for both states.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; optional):
    Text label for the control.

- large (boolean; optional):
    Whether this control should use large styles.

- role (string; optional):
    The ARIA role attribute.

- tagName (string; optional):
    Name of the HTML tag that wraps the checkbox.  By default a
    <label> is used, which effectively enlarges the click target to
    include all of its children. Supply a different tag name if this
    behavior is undesirable or you're listening to click events from a
    parent element (as the label can register duplicate clicks).

- updateKey (string; optional):
    key to use when updating parent component."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, updateKey=Component.UNDEFINED, role=Component.UNDEFINED, alignIndicator=Component.UNDEFINED, checked=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, inline=Component.UNDEFINED, innerLabel=Component.UNDEFINED, innerLabelChecked=Component.UNDEFINED, label=Component.UNDEFINED, large=Component.UNDEFINED, tagName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'alignIndicator', 'aria-*', 'checked', 'className', 'data-*', 'disabled', 'inline', 'innerLabel', 'innerLabelChecked', 'key', 'label', 'large', 'role', 'tagName', 'updateKey']
        self._type = 'Switch'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'alignIndicator', 'aria-*', 'checked', 'className', 'data-*', 'disabled', 'inline', 'innerLabel', 'innerLabelChecked', 'key', 'label', 'large', 'role', 'tagName', 'updateKey']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Switch, self).__init__(children=children, **args)
