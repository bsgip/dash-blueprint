# AUTO GENERATED FILE - DO NOT EDIT

#' @export
form <- function(children=NULL, id=NULL, key=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria'), ...))

    props <- list(children=children, id=id, key=key, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Form',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'key', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
