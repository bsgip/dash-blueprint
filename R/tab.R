# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tab <- function(children=NULL, id=NULL, className=NULL, disabled=NULL, panelClassName=NULL, title=NULL) {
    
    props <- list(children=children, id=id, className=className, disabled=disabled, panelClassName=panelClassName, title=title)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tab',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'disabled', 'panelClassName', 'title'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
