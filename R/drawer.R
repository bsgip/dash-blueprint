# AUTO GENERATED FILE - DO NOT EDIT

drawer <- function(children=NULL, id=NULL, autoFocus=NULL, className=NULL, isOpen=NULL, key=NULL, role=NULL, title=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, autoFocus=autoFocus, className=className, isOpen=isOpen, key=key, role=role, title=title, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Drawer',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'autoFocus', 'className', 'isOpen', 'key', 'role', 'title', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
