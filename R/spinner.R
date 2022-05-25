# AUTO GENERATED FILE - DO NOT EDIT

#' @export
spinner <- function(id=NULL, className=NULL, intent=NULL, key=NULL, role=NULL, size=NULL, tagName=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(id=id, className=className, intent=intent, key=key, role=role, size=size, tagName=tagName, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Spinner',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'intent', 'key', 'role', 'size', 'tagName', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
