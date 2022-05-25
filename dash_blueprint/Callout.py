# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Callout(Component):
    """A Callout component.
Callouts visually highlight important content for the user.
They can contain a title, an icon and content.
Each intent has a default icon associated with it.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- className (string; optional):
    A space-delimited list of class names to pass along to a child
    element.

- data-* (string; optional):
    A wildcard data attribute.

- icon (string; optional):
    Name of a Blueprint UI icon (or an icon element) to render on the
    left side.  If this prop is omitted or undefined, the intent prop
    will determine a default icon. If this prop is explicitly None, no
    icon will be displayed (regardless of intent).

- intent (string; optional):
    Visual intent color to apply to background, title, and icon.
    Defining this prop also applies a default icon, if the icon prop
    is omitted.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- role (string; optional):
    The ARIA role attribute.

- title (string; optional):
    String content of optional title element.  Due to a conflict with
    the HTML prop types, to provide JSX content simply pass <H4>JSX
    title content</H4> as first children element instead of using this
    prop (note uppercase tag name to use the Blueprint Heading
    component)."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, icon=Component.UNDEFINED, intent=Component.UNDEFINED, title=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'icon', 'intent', 'key', 'role', 'title']
        self._type = 'Callout'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'icon', 'intent', 'key', 'role', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Callout, self).__init__(children=children, **args)
