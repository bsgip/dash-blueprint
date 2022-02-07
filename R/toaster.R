# AUTO GENERATED FILE - DO NOT EDIT

#' @export
toaster <- function(children=NULL, id=NULL, autoFocus=NULL, canEscapeKeyClear=NULL, className=NULL, key=NULL, position=NULL, role=NULL, toasterId=NULL, toasts=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, autoFocus=autoFocus, canEscapeKeyClear=canEscapeKeyClear, className=className, key=key, position=position, role=role, toasterId=toasterId, toasts=toasts, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Toaster',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'autoFocus', 'canEscapeKeyClear', 'className', 'key', 'position', 'role', 'toasterId', 'toasts', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
