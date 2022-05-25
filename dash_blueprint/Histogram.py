# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Histogram(Component):
    """A Histogram component.
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

- aria-* (string; optional):
    A wildcard aria attribute.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- data-* (string; optional):
    A wildcard data attribute.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- maxCount (number; optional):
    Maximum count to be included in the histogram. Values above this
    number will be rendered a different colour.

- page_size (number; default 5):
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

- showCount (boolean; default False):
    Show count on histogram bar.

- show_more_less (boolean; default True):
    Show simple more/less buttons to adjust page size.

- show_more_size (number; default 10):
    Number of rows to increase/decrease page size by (for use in
    simple show more mode)."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, rows=Component.UNDEFINED, maxCount=Component.UNDEFINED, row_click=Component.UNDEFINED, page_size=Component.UNDEFINED, show_more_size=Component.UNDEFINED, show_more_less=Component.UNDEFINED, selectable=Component.UNDEFINED, selection=Component.UNDEFINED, showCount=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'maxCount', 'page_size', 'role', 'row_click', 'rows', 'selectable', 'selection', 'showCount', 'show_more_less', 'show_more_size']
        self._type = 'Histogram'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'maxCount', 'page_size', 'role', 'row_click', 'rows', 'selectable', 'selection', 'showCount', 'show_more_less', 'show_more_size']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Histogram, self).__init__(children=children, **args)
