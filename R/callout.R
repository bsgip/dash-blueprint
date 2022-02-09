# AUTO GENERATED FILE - DO NOT EDIT

callout <- function(children=NULL, id=NULL, className=NULL, icon=NULL, intent=NULL, key=NULL, role=NULL, title=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, icon=icon, intent=intent, key=key, role=role, title=title, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Callout',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'icon', 'intent', 'key', 'role', 'title', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
