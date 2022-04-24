# AUTO GENERATED FILE - DO NOT EDIT

#' @export
checkboxGroup <- function(children=NULL, id=NULL, className=NULL, key=NULL, label=NULL, value=NULL) {
    
    props <- list(children=children, id=id, className=className, key=key, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CheckboxGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'key', 'label', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
