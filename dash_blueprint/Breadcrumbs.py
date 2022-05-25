# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Breadcrumbs(Component):
    """A Breadcrumbs component.
Breadcrumbs identify the path to the current resource in an application.

On click, a Dash Breadcrumb will update the URL to the href of the given crumb.
Items are expected to be an array with `href` and `text` entries, e.g.

```
[{
    text: "Foo",
    href: "/foo",
    icon: "folder"
}]
```
as well as other `Breadcrumb` options:
- icon
- iconTitle
- intent

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

- collapseFrom (string; optional):
    Which direction the breadcrumbs should collapse from: start or
    end.

- data-* (string; optional):
    A wildcard data attribute.

- items (list; optional):
    All breadcrumbs to display. Breadcrumbs that do not fit in the
    container will be rendered in an overflow menu instead.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- minVisibleItems (number; optional):
    The minimum number of visible breadcrumbs that should never
    collapse into the overflow menu, regardless of DOM dimensions.

- overflowListProps (dict; optional):
    Props to spread to OverflowList. Note that items,
    overflowRenderer, and visibleItemRenderer cannot be changed.

- popoverProps (dict; optional):
    Props to spread to the Popover showing the overflow menu.

- role (string; optional):
    The ARIA role attribute."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, collapseFrom=Component.UNDEFINED, items=Component.UNDEFINED, minVisibleItems=Component.UNDEFINED, overflowListProps=Component.UNDEFINED, popoverProps=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'collapseFrom', 'data-*', 'items', 'key', 'minVisibleItems', 'overflowListProps', 'popoverProps', 'role']
        self._type = 'Breadcrumbs'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'collapseFrom', 'data-*', 'items', 'key', 'minVisibleItems', 'overflowListProps', 'popoverProps', 'role']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Breadcrumbs, self).__init__(children=children, **args)
