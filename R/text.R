# AUTO GENERATED FILE - DO NOT EDIT

text <- function(children=NULL, id=NULL, className=NULL, ellipsize=NULL, key=NULL, role=NULL, tagName=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, ellipsize=ellipsize, key=key, role=role, tagName=tagName, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Text',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'ellipsize', 'key', 'role', 'tagName', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
