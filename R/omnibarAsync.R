# AUTO GENERATED FILE - DO NOT EDIT

omnibarAsync <- function(children=NULL, id=NULL, combo=NULL, items=NULL, key=NULL, label=NULL, query=NULL, value=NULL) {
    
    props <- list(children=children, id=id, combo=combo, items=items, key=key, label=label, query=query, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'OmnibarAsync',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'combo', 'items', 'key', 'label', 'query', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
