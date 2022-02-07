# AUTO GENERATED FILE - DO NOT EDIT

#' @export
menu <- function(children=NULL, id=NULL, className=NULL, key=NULL, large=NULL, role=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, key=key, large=large, role=role, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Menu',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'key', 'large', 'role', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
