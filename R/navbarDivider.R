# AUTO GENERATED FILE - DO NOT EDIT

#' @export
navbarDivider <- function(id=NULL, className=NULL) {
    
    props <- list(id=id, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NavbarDivider',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
