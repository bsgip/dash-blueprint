# AUTO GENERATED FILE - DO NOT EDIT

#' @export
checkbox <- function(children=NULL, id=NULL, alignIndicator=NULL, autoFocus=NULL, checked=NULL, className=NULL, disabled=NULL, inline=NULL, key=NULL, label=NULL, large=NULL, role=NULL, tagName=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, alignIndicator=alignIndicator, autoFocus=autoFocus, checked=checked, className=className, disabled=disabled, inline=inline, key=key, label=label, large=large, role=role, tagName=tagName, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Checkbox',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'alignIndicator', 'autoFocus', 'checked', 'className', 'disabled', 'inline', 'key', 'label', 'large', 'role', 'tagName', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
