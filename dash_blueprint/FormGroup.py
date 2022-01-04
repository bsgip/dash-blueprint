# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FormGroup(Component):
    """A FormGroup component.
Form groups support more complex form controls than simple labels,
such as control groups or NumericInput.
They also support additional helper text to aid with user navigation.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- childValidation (boolean | number | string | dict | list; optional):
    Collected values of all children of this form group. This will
    usually be an object, unless `collapseChildData` is `True`, in
    which case a single value will be passed in.

- className (string; optional):
    A space-delimited list of class names to pass along to a child
    element.

- collapseChildData (boolean; default False):
    If `True`, this component assumes there is only one child
    component that updates data, and collapses `childData` from an
    object to a single value. This can be useful when working with
    lots of form groups to avoid having to extract single values from
    objects.

- contentClassName (string; optional):
    A space-delimited list of class names to pass along to the
    Classes.FORM_CONTENT element that contains children.

- disabled (boolean; optional):
    Whether form group should appear as non-interactive. Remember that
    input elements must be disabled separately.

- helperText (string; optional):
    Optional helper text. The given content will be wrapped in
    Classes.FORM_HELPER_TEXT and displayed beneath children. Helper
    text color is determined by the intent.

- inline (boolean; optional):
    Whether to render the label and children on a single line.

- intent (string; optional):
    Visual intent color to apply to element.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- label (string; optional):
    Label of this form group.

- labelFor (string; optional):
    id attribute of the labelable form element that this FormGroup
    controls, used as <label for> attribute.

- labelInfo (string; optional):
    Optional secondary text that appears after the label.

- required (boolean; default True):
    Whether this input is required. Used in form validation.

- style (dict; optional):
    CSS properties to apply to the root element.

- valid (boolean; optional):
    Determine whether the input is valid. Used in form validation.

- value (boolean | number | string | dict | list; optional):
    Collected values of all children of this form group. This will
    usually be an object, unless `collapseChildData` is `True`, in
    which case a single value will be passed in."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, label=Component.UNDEFINED, value=Component.UNDEFINED, childValidation=Component.UNDEFINED, className=Component.UNDEFINED, contentClassName=Component.UNDEFINED, disabled=Component.UNDEFINED, helperText=Component.UNDEFINED, inline=Component.UNDEFINED, intent=Component.UNDEFINED, labelFor=Component.UNDEFINED, labelInfo=Component.UNDEFINED, style=Component.UNDEFINED, collapseChildData=Component.UNDEFINED, required=Component.UNDEFINED, valid=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'childValidation', 'className', 'collapseChildData', 'contentClassName', 'disabled', 'helperText', 'inline', 'intent', 'key', 'label', 'labelFor', 'labelInfo', 'required', 'style', 'valid', 'value']
        self._type = 'FormGroup'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'childValidation', 'className', 'collapseChildData', 'contentClassName', 'disabled', 'helperText', 'inline', 'intent', 'key', 'label', 'labelFor', 'labelInfo', 'required', 'style', 'valid', 'value']
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
