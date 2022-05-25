# AUTO GENERATED FILE - DO NOT EDIT

#' @export
progressBar <- function(children=NULL, id=NULL, animate=NULL, className=NULL, intent=NULL, stripes=NULL, value=NULL) {
    
    props <- list(children=children, id=id, animate=animate, className=className, intent=intent, stripes=stripes, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ProgressBar',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'animate', 'className', 'intent', 'stripes', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
