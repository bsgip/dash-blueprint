# AUTO GENERATED FILE - DO NOT EDIT

#' @export
h4 <- function(children=NULL, id=NULL, className=NULL) {
    
    props <- list(children=children, id=id, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'H4',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
