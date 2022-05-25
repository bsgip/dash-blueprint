# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NonIdealState(Component):
    """A NonIdealState component.
Non-ideal UI states inform the user that some content is unavailable. There are several types of non-ideal states, including:

Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.

Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.

Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next.
@param {*} props

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

- description (string; optional):
    A longer description of the non-ideal state. A string or  number
    value will be wrapped in a <div> to preserve margins.

- icon (string; optional):
    The name of a Blueprint icon or a JSX Element (such as <Spinner/>)
    to render above the title.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- role (string; optional):
    The ARIA role attribute.

- title (string; optional):
    The title of the non-ideal state."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, description=Component.UNDEFINED, icon=Component.UNDEFINED, title=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'description', 'icon', 'key', 'role', 'title']
        self._type = 'NonIdealState'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'description', 'icon', 'key', 'role', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NonIdealState, self).__init__(children=children, **args)
