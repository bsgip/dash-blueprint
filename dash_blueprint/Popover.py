# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Popover(Component):
    """A Popover component.
Popovers display floating content next to a target element.

Popover is built on top of the Popper.js library. Popper.js is a small (~6kb) 
library that offers a powerful, customizable positioning engine and operates at blazing speed (~60fps).
@param {*} props

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- alignText (string; optional):
    Text alignment within button. By default, icons and text will be
    centered within the button. Passing `\"left\"` or `\"right\"` will
    align the button text to that side and push `icon` and `rightIcon`
    to either edge. Passing `\"center\"` will center the text and
    icons together.

- aria-* (string; optional):
    A wildcard aria attribute.

- boundary (string; default "scrollParent"):
    boundary.

- captureDismiss (boolean; default False)

- className (string; optional):
    Often used with CSS to style elements with common properties.

- content (a list of or a singular dash component, string or number; optional):
    Popover content.

- data-* (string; optional):
    A wildcard data attribute.

- defaultIsOpen (boolean; default False)

- disabled (boolean; default False)

- fill (boolean; optional):
    Whether the button group should take up the full width of its
    container. @default False.

- hasBackdrop (boolean; default False)

- hoverCloseDelay (number; default 300)

- hoverOpenDelay (number; default 150)

- inheritDarkTheme (boolean; default True)

- interactionKind (string; default PopoverInteractionKind.CLICK)

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- large (boolean; optional):
    Whether the child buttons should appear with large styling.
    @default False.

- minimal (boolean; default False):
    Whether the child buttons should appear with minimal styling.
    @default False.

- modifiers (boolean | number | string | dict | list; optional)

- openOnTargetFocus (boolean; default True)

- position (string; default "auto")

- role (string; optional):
    The ARIA role attribute.

- targetTagName (string; default "span")

- transitionDuration (number; default 300)

- usePortal (boolean; default True)

- vertical (boolean; optional):
    Whether the button group should appear with vertical styling.
    @default False.

- wrapperTagName (string; default "span")"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, className=Component.UNDEFINED, alignText=Component.UNDEFINED, fill=Component.UNDEFINED, minimal=Component.UNDEFINED, large=Component.UNDEFINED, vertical=Component.UNDEFINED, content=Component.UNDEFINED, boundary=Component.UNDEFINED, captureDismiss=Component.UNDEFINED, defaultIsOpen=Component.UNDEFINED, disabled=Component.UNDEFINED, hasBackdrop=Component.UNDEFINED, hoverCloseDelay=Component.UNDEFINED, hoverOpenDelay=Component.UNDEFINED, inheritDarkTheme=Component.UNDEFINED, interactionKind=Component.UNDEFINED, modifiers=Component.UNDEFINED, openOnTargetFocus=Component.UNDEFINED, position=Component.UNDEFINED, targetTagName=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, usePortal=Component.UNDEFINED, wrapperTagName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'alignText', 'aria-*', 'boundary', 'captureDismiss', 'className', 'content', 'data-*', 'defaultIsOpen', 'disabled', 'fill', 'hasBackdrop', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'interactionKind', 'key', 'large', 'minimal', 'modifiers', 'openOnTargetFocus', 'position', 'role', 'targetTagName', 'transitionDuration', 'usePortal', 'vertical', 'wrapperTagName']
        self._type = 'Popover'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'alignText', 'aria-*', 'boundary', 'captureDismiss', 'className', 'content', 'data-*', 'defaultIsOpen', 'disabled', 'fill', 'hasBackdrop', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'interactionKind', 'key', 'large', 'minimal', 'modifiers', 'openOnTargetFocus', 'position', 'role', 'targetTagName', 'transitionDuration', 'usePortal', 'vertical', 'wrapperTagName']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Popover, self).__init__(children=children, **args)
