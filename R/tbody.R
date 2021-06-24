# AUTO GENERATED FILE - DO NOT EDIT

tbody <- function(children=NULL, id=NULL, className=NULL, key=NULL, rowKey=NULL, selected=NULL) {
    
    props <- list(children=children, id=id, className=className, key=key, rowKey=rowKey, selected=selected)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tbody',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'key', 'rowKey', 'selected'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
