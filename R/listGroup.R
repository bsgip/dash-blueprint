# AUTO GENERATED FILE - DO NOT EDIT

#' @export
listGroup <- function(children=NULL, id=NULL, childData=NULL, header=NULL, key=NULL, label=NULL, listData=NULL, maxRows=NULL, minRows=NULL, nRows=NULL) {
    
    props <- list(children=children, id=id, childData=childData, header=header, key=key, label=label, listData=listData, maxRows=maxRows, minRows=minRows, nRows=nRows)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ListGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'childData', 'header', 'key', 'label', 'listData', 'maxRows', 'minRows', 'nRows'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
