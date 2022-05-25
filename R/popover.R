# AUTO GENERATED FILE - DO NOT EDIT

#' @export
popover <- function(children=NULL, id=NULL, alignText=NULL, boundary=NULL, captureDismiss=NULL, className=NULL, content=NULL, defaultIsOpen=NULL, disabled=NULL, fill=NULL, hasBackdrop=NULL, hoverCloseDelay=NULL, hoverOpenDelay=NULL, inheritDarkTheme=NULL, interactionKind=NULL, key=NULL, large=NULL, minimal=NULL, modifiers=NULL, openOnTargetFocus=NULL, position=NULL, role=NULL, targetTagName=NULL, transitionDuration=NULL, usePortal=NULL, vertical=NULL, wrapperTagName=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, alignText=alignText, boundary=boundary, captureDismiss=captureDismiss, className=className, content=content, defaultIsOpen=defaultIsOpen, disabled=disabled, fill=fill, hasBackdrop=hasBackdrop, hoverCloseDelay=hoverCloseDelay, hoverOpenDelay=hoverOpenDelay, inheritDarkTheme=inheritDarkTheme, interactionKind=interactionKind, key=key, large=large, minimal=minimal, modifiers=modifiers, openOnTargetFocus=openOnTargetFocus, position=position, role=role, targetTagName=targetTagName, transitionDuration=transitionDuration, usePortal=usePortal, vertical=vertical, wrapperTagName=wrapperTagName, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Popover',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'alignText', 'boundary', 'captureDismiss', 'className', 'content', 'defaultIsOpen', 'disabled', 'fill', 'hasBackdrop', 'hoverCloseDelay', 'hoverOpenDelay', 'inheritDarkTheme', 'interactionKind', 'key', 'large', 'minimal', 'modifiers', 'openOnTargetFocus', 'position', 'role', 'targetTagName', 'transitionDuration', 'usePortal', 'vertical', 'wrapperTagName', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
