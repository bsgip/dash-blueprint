# AUTO GENERATED FILE - DO NOT EDIT

switch <- function(children=NULL, id=NULL, alignIndicator=NULL, checked=NULL, className=NULL, disabled=NULL, inline=NULL, innerLabel=NULL, innerLabelChecked=NULL, key=NULL, label=NULL, large=NULL, role=NULL, tagName=NULL, updateKey=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, alignIndicator=alignIndicator, checked=checked, className=className, disabled=disabled, inline=inline, innerLabel=innerLabel, innerLabelChecked=innerLabelChecked, key=key, label=label, large=large, role=role, tagName=tagName, updateKey=updateKey, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Switch',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'alignIndicator', 'checked', 'className', 'disabled', 'inline', 'innerLabel', 'innerLabelChecked', 'key', 'label', 'large', 'role', 'tagName', 'updateKey', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
