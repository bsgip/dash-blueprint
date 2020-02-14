# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FormGroup(Component):
    """A FormGroup component.
Wrapper around the blueprint FormGroup component.
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
- label (string; optional): Label of this form group.
- childData (dict; optional): Collected values of all children of this form group.
- className (string; optional): A space-delimited list of class names to pass along to a child element.
- contentClassName (string; optional): A space-delimited list of class names to pass along to the Classes.FORM_CONTENT element that contains children.
- disabled (boolean; optional): Whether form group should appear as non-interactive. Remember that input elements must be disabled separately.
- helperText (string; optional): Optional helper text. The given content will be wrapped in Classes.FORM_HELPER_TEXT and displayed beneath children. Helper text color is determined by the intent.
- inline (boolean; optional): Whether to render the label and children on a single line.
- intent (optional): Visual intent color to apply to element.
- labelFor (string; optional): id attribute of the labelable form element that this FormGroup controls, used as <label for> attribute.
- labelInfo (string; optional): Optional secondary text that appears after the label.
- style (dict; optional): CSS properties to apply to the root element."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, label=Component.UNDEFINED, childData=Component.UNDEFINED, className=Component.UNDEFINED, contentClassName=Component.UNDEFINED, disabled=Component.UNDEFINED, helperText=Component.UNDEFINED, inline=Component.UNDEFINED, intent=Component.UNDEFINED, labelFor=Component.UNDEFINED, labelInfo=Component.UNDEFINED, style=Component.UNDEFINED, nRows=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'label', 'childData', 'className', 'contentClassName', 'disabled', 'helperText', 'inline', 'intent', 'labelFor', 'labelInfo', 'style']
        self._type = 'FormGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'key', 'label', 'childData', 'className', 'contentClassName', 'disabled', 'helperText', 'inline', 'intent', 'labelFor', 'labelInfo', 'style']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FormGroup, self).__init__(children=children, **args)
