# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Collapse(Component):
    """A Collapse component.
This is pretty much a straight copy/paste from the dash html component button,
except we render a blueprint button
@param props
@returns {*}
@constructor

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- minimal (boolean; default True): Show a minimal button
- showText (string; optional): Text to display for show button
- showIcon (string; optional): Icon to display for show button
- hideText (string; optional): Text to display for hide button
- hideIcon (string; optional): Icon to display for hide button
- showRightIcon (string; optional): Icon to display for show button
- hideRightIcon (string; optional): Icon to display for hide button
- isOpen (boolean; default False): Whether content is shown initially
- keepChildrenMounted (boolean; default False): Whether the child components will remain mounted when the Collapse is closed. 
Setting to true may improve performance by avoiding re-mounting children.
- transitionDuration (number; default 200): The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. 
Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
- key (string; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, minimal=Component.UNDEFINED, showText=Component.UNDEFINED, showIcon=Component.UNDEFINED, hideText=Component.UNDEFINED, hideIcon=Component.UNDEFINED, showRightIcon=Component.UNDEFINED, hideRightIcon=Component.UNDEFINED, isOpen=Component.UNDEFINED, keepChildrenMounted=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'minimal', 'showText', 'showIcon', 'hideText', 'hideIcon', 'showRightIcon', 'hideRightIcon', 'isOpen', 'keepChildrenMounted', 'transitionDuration', 'key', 'role', 'data-*', 'aria-*']
        self._type = 'Collapse'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'minimal', 'showText', 'showIcon', 'hideText', 'hideIcon', 'showRightIcon', 'hideRightIcon', 'isOpen', 'keepChildrenMounted', 'transitionDuration', 'key', 'role', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Collapse, self).__init__(children=children, **args)
