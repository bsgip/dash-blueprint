# AUTO GENERATED FILE - DO NOT EDIT

collapseCard <- function(children=NULL, id=NULL, elevation=NULL, interactive=NULL, isOpen=NULL, key=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, role=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, elevation=elevation, interactive=interactive, isOpen=isOpen, key=key, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, role=role, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CollapseCard',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'elevation', 'interactive', 'isOpen', 'key', 'n_clicks', 'n_clicks_timestamp', 'role', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
