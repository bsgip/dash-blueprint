# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PropertyTable(Component):
    """A PropertyTable component.
This component provides Blueprint styling to native HTML tables.

It also includes additional functionality for searching, ordering and pagination of
data in the table.

IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
want selection to show properly, and use css to modify rows with className 'selected'
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

- actionButtonProps (dict; default {    minimal: True,    small: True}):
    Props to pass through to the action button.

- actions (list of strings; optional):
    A set of actions to display in the first column.

- aria-* (string; optional):
    A wildcard aria attribute.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- columns (list; optional):
    An array of properties to display in the table.

- data-* (string; optional):
    A wildcard data attribute.

- infoAction (dict; optional):
    Row clicked for info action.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- locateAction (dict; optional):
    Row selected for locate action.

- maxCount (number; optional):
    Maximum count to be included in the histogram. Values above this
    number will be rendered a different colour.

- page_size (number; default 10):
    Page size (in rows).

- role (string; optional):
    The ARIA role attribute.

- row_click (string; optional):
    Key for the clicked row.

- rows (list; optional):
    Row data used to create the histogram.

- selectable (boolean; default True):
    Whether row selection is enabled.

- selection (list; optional):
    Currently selected rows.

- show_more_less (boolean; default True):
    Show simple more/less buttons to adjust page size.

- show_more_size (number; default 10):
    Number of rows to increase/decrease page size by (for use in
    simple show more mode)."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, rows=Component.UNDEFINED, maxCount=Component.UNDEFINED, row_click=Component.UNDEFINED, page_size=Component.UNDEFINED, show_more_size=Component.UNDEFINED, show_more_less=Component.UNDEFINED, selectable=Component.UNDEFINED, selection=Component.UNDEFINED, columns=Component.UNDEFINED, actions=Component.UNDEFINED, actionButtonProps=Component.UNDEFINED, locateAction=Component.UNDEFINED, infoAction=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'actionButtonProps', 'actions', 'aria-*', 'className', 'columns', 'data-*', 'infoAction', 'key', 'locateAction', 'maxCount', 'page_size', 'role', 'row_click', 'rows', 'selectable', 'selection', 'show_more_less', 'show_more_size']
        self._type = 'PropertyTable'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'actionButtonProps', 'actions', 'aria-*', 'className', 'columns', 'data-*', 'infoAction', 'key', 'locateAction', 'maxCount', 'page_size', 'role', 'row_click', 'rows', 'selectable', 'selection', 'show_more_less', 'show_more_size']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PropertyTable, self).__init__(children=children, **args)
