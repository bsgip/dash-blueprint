# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CollapseDetails(Component):
    """A CollapseDetails component.
This component renders the collapsible portion of a CollapseCard. When not rendered
as a direct child of a CollapseCard, this component is useless as there is no way
to trigger it to open.

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
    Often used with CSS to style elements with common properties.

- data-* (string; optional):
    A wildcard data attribute.

- hideIcon (string; optional):
    Icon to display for hide button.

- hideText (string; optional):
    Text to display for hide button.

- isOpen (boolean; default False):
    Whether content is shown initially.

- keepChildrenMounted (boolean; default False):
    Whether the child components will remain mounted when the Collapse
    is closed. Setting to True may improve performance by avoiding
    re-mounting children.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- minimal (boolean; default True):
    Show a minimal button.

- role (string; optional):
    The ARIA role attribute.

- showIcon (string; optional):
    Icon to display for show button.

- showText (string; optional):
    Text to display for show button.

- transitionDuration (number; default 200):
    The length of time the transition takes, in milliseconds. This
    must match the duration of the animation in CSS. Only set this
    prop if you override Blueprint's default transitions with new
    transitions of a different length."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, minimal=Component.UNDEFINED, showText=Component.UNDEFINED, showIcon=Component.UNDEFINED, hideText=Component.UNDEFINED, hideIcon=Component.UNDEFINED, isOpen=Component.UNDEFINED, keepChildrenMounted=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'hideIcon', 'hideText', 'isOpen', 'keepChildrenMounted', 'key', 'minimal', 'role', 'showIcon', 'showText', 'transitionDuration']
        self._type = 'CollapseDetails'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'hideIcon', 'hideText', 'isOpen', 'keepChildrenMounted', 'key', 'minimal', 'role', 'showIcon', 'showText', 'transitionDuration']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CollapseDetails, self).__init__(children=children, **args)
