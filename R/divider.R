# AUTO GENERATED FILE - DO NOT EDIT

divider <- function(id=NULL, className=NULL, tagName=NULL) {
    
    props <- list(id=id, className=className, tagName=tagName)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Divider',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'tagName'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
