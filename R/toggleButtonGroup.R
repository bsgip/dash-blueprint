# AUTO GENERATED FILE - DO NOT EDIT

toggleButtonGroup <- function(children=NULL, id=NULL, alignText=NULL, className=NULL, fill=NULL, key=NULL, large=NULL, minimal=NULL, role=NULL, value=NULL, vertical=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, alignText=alignText, className=className, fill=fill, key=key, large=large, minimal=minimal, role=role, value=value, vertical=vertical, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ToggleButtonGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'alignText', 'className', 'fill', 'key', 'large', 'minimal', 'role', 'value', 'vertical', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
