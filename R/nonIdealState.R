# AUTO GENERATED FILE - DO NOT EDIT

nonIdealState <- function(children=NULL, id=NULL, className=NULL, description=NULL, icon=NULL, key=NULL, role=NULL, title=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, description=description, icon=icon, key=key, role=role, title=title, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NonIdealState',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'description', 'icon', 'key', 'role', 'title', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
