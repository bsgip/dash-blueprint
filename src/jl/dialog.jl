# AUTO GENERATED FILE - DO NOT EDIT

export dialog

"""
    dialog(;kwargs...)
    dialog(children::Any;kwargs...)
    dialog(children_maker::Function;kwargs...)


A Dialog component.
Blueprint Dialog box for Dash

https://blueprintjs.com/docs/#core/components/dialog.dialog

@param props
@returns {*}
@constructor
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `autoFocus` (Bool; optional): Whether the overlay should acquire application focus when it first opens.
- `backdropClassName` (String; optional): CSS class names to apply to backdrop element.
- `backdropProps` (Dict; optional): HTML props for the backdrop element.
- `canEscapeKeyClose` (Bool; optional): Whether pressing the esc key should invoke onClose.
- `canOutsideClickClose` (Bool; optional): Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke onClose.
- `className` (String; optional): A space-delimited list of class names to pass along to a child element.
- `enforceFocus` (Bool; optional): Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones usePortal={false}.
- `icon` (String; optional): Name of a Blueprint UI icon to render in the dialog's header. Note that the header will only be rendered if title is provided.
- `isCloseButtonShown` (Bool; optional): Whether to show the close button in the dialog's header. Note that the header will only be rendered if title is provided.
- `isOpen` (Bool; optional): Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `lazy` (Bool; optional): If true and usePortal={true}, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.
- `portalClassName` (String; optional): Space-delimited string of class names applied to the Portal element if usePortal={true}.
- `shouldReturnFocusOnClose` (Bool; optional): Whether the application should return focus to the last active element in the document after this overlay closes.
- `style` (Dict; optional): CSS styles to apply to the dialog.
- `title` (String; optional): Title of the dialog. If provided, an element with Classes.DIALOG_HEADER will be rendered inside the dialog before any children elements.
- `transitionDuration` (Real; optional): Indicates how long (in milliseconds) the overlay's enter/leave transition takes. This is used by React CSSTransition to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
- `transitionName` (String; optional): Name of the transition for internal CSSTransition. Providing your own name here will require defining new CSS transition properties.
- `usePortal` (Bool; optional): Whether the overlay should be wrapped in a Portal, which renders its contents in a new element attached to portalContainer prop.

This prop essentially determines which element is covered by the backdrop: if false, then only its parent is covered; otherwise, the entire page is covered (because the parent of the Portal is the <body> itself).

Set this prop to false on nested overlays (such as Dialog or Popover) to ensure that they are rendered above their parents.
"""
function dialog(; kwargs...)
        available_props = Symbol[:children, :id, :autoFocus, :backdropClassName, :backdropProps, :canEscapeKeyClose, :canOutsideClickClose, :className, :enforceFocus, :icon, :isCloseButtonShown, :isOpen, :key, :lazy, :portalClassName, :shouldReturnFocusOnClose, :style, :title, :transitionDuration, :transitionName, :usePortal]
        wild_props = Symbol[Symbol("aria-")]
        return Component("dialog", "Dialog", "dash_blueprint", available_props, wild_props; kwargs...)
end

dialog(children::Any; kwargs...) = dialog(;kwargs..., children = children)
dialog(children_maker::Function; kwargs...) = dialog(children_maker(); kwargs...)
