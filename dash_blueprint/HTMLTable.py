# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class HTMLTable(Component):
    """A HTMLTable component.
This component provides Blueprint styling to native HTML tables.

It also includes additional functionality for searching, ordering and pagination of
data in the table.

IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
want selection to show properly, and use css to modify rows with className 'selected'
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
- role (string; optional): The ARIA role attribute
- data-* (string; optional): A wildcard data attribute
- aria-* (string; optional): A wildcard aria attribute
- className (string; optional): Often used with CSS to style elements with common properties.
- bordered (boolean; optional): Enables borders between rows and cells.
- condensed (boolean; optional): Use small, condensed appearance.
- interactive (boolean; optional): Enables hover styles on row.
- small (boolean; optional): Use small, condensed appearance for this element and all child elements.
- striped (boolean; optional): Use an alternate background color on odd rows.
- row_click (string; optional): Key for the clicked row
- sort_column (number; optional): Column to sort values on
- sort_direction (string; default 'asc'): Sort direction (asc or desc)
- filter_by (dict; optional): Filtering strings
- filter_columns (list; optional): Column numbers that may be filtered
- sort_columns (list; optional): Columns that can be sorted on
- filter_strings (dict; optional): Strings to filter columns by
- page_size (number; default 10): Page size (in rows)
- current_page (number; default 1): Current page to show
- show_more_size (number; default 10): Number of rows to increase/decrease page size by
(for use in simple show more mode)
- show_more_less (boolean; optional): Show simple more/less buttons to adjust page size
- selectable (boolean; optional): Whether row selection is enabled
- selection (list; optional): Currently selected rows
- n_clicks (number; default 0)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, bordered=Component.UNDEFINED, condensed=Component.UNDEFINED, interactive=Component.UNDEFINED, small=Component.UNDEFINED, striped=Component.UNDEFINED, row_click=Component.UNDEFINED, sort_column=Component.UNDEFINED, sort_direction=Component.UNDEFINED, filter_by=Component.UNDEFINED, filter_columns=Component.UNDEFINED, sort_columns=Component.UNDEFINED, filter_strings=Component.UNDEFINED, page_size=Component.UNDEFINED, current_page=Component.UNDEFINED, show_more_size=Component.UNDEFINED, show_more_less=Component.UNDEFINED, selectable=Component.UNDEFINED, selection=Component.UNDEFINED, n_clicks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'bordered', 'condensed', 'interactive', 'small', 'striped', 'row_click', 'sort_column', 'sort_direction', 'filter_by', 'filter_columns', 'sort_columns', 'filter_strings', 'page_size', 'current_page', 'show_more_size', 'show_more_less', 'selectable', 'selection', 'n_clicks']
        self._type = 'HTMLTable'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'key', 'role', 'data-*', 'aria-*', 'className', 'bordered', 'condensed', 'interactive', 'small', 'striped', 'row_click', 'sort_column', 'sort_direction', 'filter_by', 'filter_columns', 'sort_columns', 'filter_strings', 'page_size', 'current_page', 'show_more_size', 'show_more_less', 'selectable', 'selection', 'n_clicks']
        self.available_wildcard_properties =            ['data-', 'aria-']

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(HTMLTable, self).__init__(children=children, **args)
