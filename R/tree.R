# AUTO GENERATED FILE - DO NOT EDIT

tree <- function(children=NULL, id=NULL, key=NULL, nodes=NULL, selectedNode=NULL) {
    
    props <- list(children=children, id=id, key=key, nodes=nodes, selectedNode=selectedNode)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'key', 'nodes', 'selectedNode'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
