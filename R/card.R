# AUTO GENERATED FILE - DO NOT EDIT

#' @export
card <- function(children=NULL, id=NULL, elevation=NULL, href=NULL, interactive=NULL, key=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, role=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, elevation=elevation, href=href, interactive=interactive, key=key, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, role=role, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Card',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'elevation', 'href', 'interactive', 'key', 'n_clicks', 'n_clicks_timestamp', 'role', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
