# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RangeSelector(Component):
    """A RangeSelector component.
RangeSelector component using d3 and hooks

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- data (list; optional):
    Data.

- group (boolean; default False):
    Flag whether data should be aggregated and presented as a count.
    Currently not implemented.

- groupSize (number; default 1):
    For grouped data, the size of the grouping.

- height (number; optional):
    Chart height.

- isDate (boolean; default True):
    Whether to cast the data x values as a date.

- margin (dict; default {    left: 20,    right: 20,    top: 20,    bottom: 40,}):
    Margin to use around chart.

- selectSingle (boolean; default True):
    Flag whether to allow only selection of a single bar in the chart.

- selected (list; optional):
    Selected datum (use in point click callbacks).

- width (number; optional):
    Chart width.

- yLines (list; optional):
    markings to add on y-axis."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, data=Component.UNDEFINED, selected=Component.UNDEFINED, margin=Component.UNDEFINED, isDate=Component.UNDEFINED, yLines=Component.UNDEFINED, selectSingle=Component.UNDEFINED, group=Component.UNDEFINED, groupSize=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'group', 'groupSize', 'height', 'isDate', 'margin', 'selectSingle', 'selected', 'width', 'yLines']
        self._type = 'RangeSelector'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'group', 'groupSize', 'height', 'isDate', 'margin', 'selectSingle', 'selected', 'width', 'yLines']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RangeSelector, self).__init__(**args)
