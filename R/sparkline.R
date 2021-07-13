# AUTO GENERATED FILE - DO NOT EDIT

sparkline <- function(children=NULL, id=NULL, key=NULL, n_clicks=NULL, n_clicks_timestamp=NULL) {
    
    props <- list(children=children, id=id, key=key, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Sparkline',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'key', 'n_clicks', 'n_clicks_timestamp'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
