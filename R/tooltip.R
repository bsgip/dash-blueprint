# AUTO GENERATED FILE - DO NOT EDIT

tooltip <- function(children=NULL, id=NULL, canEscapeKeyClose=NULL, captureDismiss=NULL, className=NULL, content=NULL, defaultIsOpen=NULL, disabled=NULL, enforceFocus=NULL, hoverCloseDelay=NULL, hoverOpenDelay=NULL, inheritDarkTheme=NULL, intent=NULL, interactionKind=NULL, isOpen=NULL, key=NULL, lazy=NULL, openOnTargetFocus=NULL, popoverClassName=NULL, portalClassName=NULL, position=NULL, role=NULL, targetClassName=NULL, targetProps=NULL, targetTagName=NULL, transitionDuration=NULL, usePortal=NULL, wrapperTagName=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, canEscapeKeyClose=canEscapeKeyClose, captureDismiss=captureDismiss, className=className, content=content, defaultIsOpen=defaultIsOpen, disabled=disabled, enforceFocus=enforceFocus, hoverCloseDelay=hoverCloseDelay, hoverOpenDelay=hoverOpenDelay, inheritDarkTheme=inheritDarkTheme, intent=intent, interactionKind=interactionKind, isOpen=isOpen, key=key, lazy=lazy, openOnTargetFocus=openOnTargetFocus, popoverClassName=popoverClassName, portalClassName=portalClassName, position=position, role=role, targetClassName=targetClassName, targetProps=targetProps, targetTagName=targetTagName, transitionDuration=transitionDuration, usePortal=usePortal, wrapperTagName=wrapperTagName, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tooltip',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'canEscapeKeyClose', 'captureDismiss', 'className', 'content', 'defaultIsOpen', 'disabled', 'enforceFocus', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'intent', 'interactionKind', 'isOpen', 'key', 'lazy', 'openOnTargetFocus', 'popoverClassName', 'portalClassName', 'position', 'role', 'targetClassName', 'targetProps', 'targetTagName', 'transitionDuration', 'usePortal', 'wrapperTagName', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
