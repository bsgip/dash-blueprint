# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Checkbox(Component):
    """A Checkbox component.
A checkbox allows the user to toggle between checked, unchecked,
and (rarely) indeterminate states.

Keyword arguments:

- children (boolean | number | string | dict | list; optional):
    JSX label for the control.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- alignIndicator (string; optional):
    Alignment of the indicator within container.

- aria-* (string; optional):
    A wildcard aria attribute.

- autoFocus (string; optional):
    The element should be automatically focused after the page loaded.

- checked (boolean; default False):
    Whether the control is checked.

- className (string; optional):
    A space-delimited list of class names to pass along to a child
    element.

- data-* (string; optional):
    A wildcard data attribute.

- disabled (boolean; optional):
    Indicates whether the user can interact with the element.

- inline (boolean; optional):
    Whether the control should appear as an inline element.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; optional):
    Text label for the control.  Use children or labelElement to
    supply JSX content. This prop actually supports JSX elements, but
    TypeScript will throw an error because HTMLAttributes only allows
    strings.

- large (boolean; optional):
    Whether this control should use large styles.

- role (string; optional):
    The ARIA role attribute.

- tagName (string; optional):
    Name of the HTML tag that wraps the checkbox.  By default a
    <label> is used, which effectively enlarges the click target to
    include all of its children. Supply a different tag name if this
    behavior is undesirable or you're listening to click events from a
    parent element (as the label can register duplicate clicks)."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, autoFocus=Component.UNDEFINED, disabled=Component.UNDEFINED, alignIndicator=Component.UNDEFINED, checked=Component.UNDEFINED, className=Component.UNDEFINED, inline=Component.UNDEFINED, label=Component.UNDEFINED, large=Component.UNDEFINED, tagName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'alignIndicator', 'aria-*', 'autoFocus', 'checked', 'className', 'data-*', 'disabled', 'inline', 'key', 'label', 'large', 'role', 'tagName']
        self._type = 'Checkbox'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'alignIndicator', 'aria-*', 'autoFocus', 'checked', 'className', 'data-*', 'disabled', 'inline', 'key', 'label', 'large', 'role', 'tagName']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Checkbox, self).__init__(children=children, **args)
