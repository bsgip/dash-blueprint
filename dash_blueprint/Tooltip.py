# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tooltip(Component):
    """A Tooltip component.
A tooltip is a lightweight popover for showing additional information during hover interactions.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- aria-* (string; optional):
    A wildcard aria attribute.

- canEscapeKeyClose (boolean; optional):
    Whether pressing the esc key should invoke onClose.

- captureDismiss (boolean; optional):
    When enabled, preventDefault() is invoked on click events that
    close this popover,  which will prevent those clicks from closing
    outer popovers. When disabled,  clicking inside a
    Classes.POPOVER_DISMISS element will close the parent popover.
    See
    http://blueprintjs.com/docs/#core/components/popover.closing-on-click.

- className (string; optional):
    A space-delimited list of class names to pass along to a child
    element.

- content (string; optional):
    The content that will be displayed inside of the tooltip.

- data-* (string; optional):
    A wildcard data attribute.

- defaultIsOpen (boolean; optional):
    Initial opened state when uncontrolled.

- disabled (boolean; optional):
    Indicates whether the user can interact with the element.

- enforceFocus (boolean; optional):
    Whether the overlay should prevent focus from leaving itself. That
    is, if the user attempts to focus an element outside the overlay
    and this prop is enabled, then the overlay will immediately bring
    focus back to itself. If you are nesting overlay components,
    either disable this prop on the \"outermost\" overlays or mark the
    nested ones usePortal={False}.

- hoverCloseDelay (number; optional):
    The amount of time in milliseconds the tooltip should remain open
    after the user hovers off the trigger. The timer is canceled if
    the user mouses over the target before it expires.

- hoverOpenDelay (number; optional):
    The amount of time in milliseconds the tooltip should wait before
    opening after the user hovers over the trigger. The timer is
    canceled if the user mouses away from the target before it
    expires.

- inheritDarkTheme (boolean; optional):
    Whether a popover that uses a Portal should automatically inherit
    the dark theme from its parent.

- intent (string; optional):
    Visual intent color to apply to element.

- interactionKind (string; optional):
    \"hover\" |
    \"hover-target\"PopoverInteractionKind.HOVER_TARGET_ONLY  The kind
    of hover interaction that triggers the display of the tooltip.
    Tooltips do not support click interactions.

- isOpen (boolean; optional):
    Whether the popover is visible. Passing this prop puts the popover
    in controlled mode, where the only way to change visibility is by
    updating this property. If disabled={True}, this prop will be
    ignored, and the popover will remain closed.

- key (string; optional):
    A unique identifier for the component, used to improve performance
    by React.js while rendering components See
    https://reactjs.org/docs/lists-and-keys.html for more info.

- lazy (boolean; optional):
    If True and usePortal={True}, the Portal containing the children
    is created and attached to the DOM when the overlay is opened for
    the first time; otherwise this happens when the component mounts.
    Lazy mounting provides noticeable performance improvements if you
    have lots of overlays at once, such as on each row of a table.

- openOnTargetFocus (boolean; optional):
    Whether the popover should open when its target is focused. If
    True, target will render with tabindex=\"0\" to make it focusable
    via keyboard navigation.

- popoverClassName (string; optional):
    A space-delimited string of class names applied to the popover
    element.

- portalClassName (string; optional):
    Space-delimited string of class names applied to the Portal
    element if usePortal={True}.

- position (string; optional):
    The position (relative to the target) at which the popover should
    appear.  The default value of \"auto\" will choose the best
    position when opened and will allow the popover to reposition
    itself to remain onscreen as the user scrolls around.

- role (string; optional):
    The ARIA role attribute.

- targetClassName (string; optional):
    Space-delimited string of class names applied to the target
    element.

- targetProps (dict; optional):
    HTML props to spread to target element. Use targetTagName to
    change the type of element rendered. Note that ref is not
    supported.

- targetTagName (string; optional):
    HTML tag name for the target element. This must be an HTML element
    to ensure that it supports the necessary DOM event handlers.  By
    default, a <span> tag is used so popovers appear as inline-block
    elements and can be nested in text. Use <div> tag for a block
    element.

- transitionDuration (number; optional):
    Indicates how long (in milliseconds) the tooltip's
    appear/disappear transition takes. This is used by React
    CSSTransition to know when a transition completes and must match
    the duration of the animation in CSS. Only set this prop if you
    override Blueprint's default transitions with new transitions of a
    different length.

- usePortal (boolean; optional):
    Whether the popover should be rendered inside a Portal attached to
    portalContainer prop.  Rendering content inside a Portal allows
    the popover content to escape the physical bounds of its parent
    while still being positioned correctly relative to its target.
    Using a Portal is necessary if any ancestor of the target hides
    overflow or uses very complex positioning.  Not using a Portal can
    result in smoother performance when scrolling and allows the
    popover content to inherit CSS styles from surrounding elements,
    but it remains subject to the overflow bounds of its ancestors.

- wrapperTagName (string; optional):
    HTML tag name for the wrapper element, which also receives the
    className prop."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, role=Component.UNDEFINED, disabled=Component.UNDEFINED, canEscapeKeyClose=Component.UNDEFINED, captureDismiss=Component.UNDEFINED, className=Component.UNDEFINED, content=Component.UNDEFINED, defaultIsOpen=Component.UNDEFINED, enforceFocus=Component.UNDEFINED, hoverCloseDelay=Component.UNDEFINED, hoverOpenDelay=Component.UNDEFINED, inheritDarkTheme=Component.UNDEFINED, intent=Component.UNDEFINED, interactionKind=Component.UNDEFINED, isOpen=Component.UNDEFINED, lazy=Component.UNDEFINED, openOnTargetFocus=Component.UNDEFINED, popoverClassName=Component.UNDEFINED, portalClassName=Component.UNDEFINED, position=Component.UNDEFINED, targetClassName=Component.UNDEFINED, targetProps=Component.UNDEFINED, targetTagName=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, usePortal=Component.UNDEFINED, wrapperTagName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'canEscapeKeyClose', 'captureDismiss', 'className', 'content', 'data-*', 'defaultIsOpen', 'disabled', 'enforceFocus', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'intent', 'interactionKind', 'isOpen', 'key', 'lazy', 'openOnTargetFocus', 'popoverClassName', 'portalClassName', 'position', 'role', 'targetClassName', 'targetProps', 'targetTagName', 'transitionDuration', 'usePortal', 'wrapperTagName']
        self._type = 'Tooltip'
        self._namespace = 'dash_blueprint'
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'canEscapeKeyClose', 'captureDismiss', 'className', 'content', 'data-*', 'defaultIsOpen', 'disabled', 'enforceFocus', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'intent', 'interactionKind', 'isOpen', 'key', 'lazy', 'openOnTargetFocus', 'popoverClassName', 'portalClassName', 'position', 'role', 'targetClassName', 'targetProps', 'targetTagName', 'transitionDuration', 'usePortal', 'wrapperTagName']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tooltip, self).__init__(children=children, **args)
