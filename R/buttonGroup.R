# AUTO GENERATED FILE - DO NOT EDIT

#' @export
buttonGroup <- function(children=NULL, id=NULL, alignText=NULL, className=NULL, fill=NULL, key=NULL, large=NULL, minimal=NULL, role=NULL, vertical=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, alignText=alignText, className=className, fill=fill, key=key, large=large, minimal=minimal, role=role, vertical=vertical, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ButtonGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'alignText', 'className', 'fill', 'key', 'large', 'minimal', 'role', 'vertical', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
