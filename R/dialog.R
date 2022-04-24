# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dialog <- function(children=NULL, id=NULL, autoFocus=NULL, backdropClassName=NULL, backdropProps=NULL, canEscapeKeyClose=NULL, canOutsideClickClose=NULL, className=NULL, enforceFocus=NULL, icon=NULL, isCloseButtonShown=NULL, isOpen=NULL, key=NULL, lazy=NULL, portalClassName=NULL, shouldReturnFocusOnClose=NULL, style=NULL, title=NULL, transitionDuration=NULL, transitionName=NULL, usePortal=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria'), ...))

    props <- list(children=children, id=id, autoFocus=autoFocus, backdropClassName=backdropClassName, backdropProps=backdropProps, canEscapeKeyClose=canEscapeKeyClose, canOutsideClickClose=canOutsideClickClose, className=className, enforceFocus=enforceFocus, icon=icon, isCloseButtonShown=isCloseButtonShown, isOpen=isOpen, key=key, lazy=lazy, portalClassName=portalClassName, shouldReturnFocusOnClose=shouldReturnFocusOnClose, style=style, title=title, transitionDuration=transitionDuration, transitionName=transitionName, usePortal=usePortal, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Dialog',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'autoFocus', 'backdropClassName', 'backdropProps', 'canEscapeKeyClose', 'canOutsideClickClose', 'className', 'enforceFocus', 'icon', 'isCloseButtonShown', 'isOpen', 'key', 'lazy', 'portalClassName', 'shouldReturnFocusOnClose', 'style', 'title', 'transitionDuration', 'transitionName', 'usePortal', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
