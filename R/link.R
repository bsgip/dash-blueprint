# AUTO GENERATED FILE - DO NOT EDIT

link <- function(children=NULL, id=NULL, className=NULL, href=NULL, loading_state=NULL, refresh=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, href=href, loading_state=loading_state, refresh=refresh, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Link',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'href', 'loading_state', 'refresh', 'style'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
