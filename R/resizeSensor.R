# AUTO GENERATED FILE - DO NOT EDIT

resizeSensor <- function(children=NULL, id=NULL, debounceTimer=NULL, key=NULL, observeParents=NULL, size=NULL) {
    
    props <- list(children=children, id=id, debounceTimer=debounceTimer, key=key, observeParents=observeParents, size=size)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResizeSensor',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'debounceTimer', 'key', 'observeParents', 'size'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
