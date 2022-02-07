# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tag <- function(children=NULL, id=NULL, active=NULL, className=NULL, fill=NULL, icon=NULL, intent=NULL, key=NULL, large=NULL, minimal=NULL, multiline=NULL, rightIcon=NULL, role=NULL, round=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, active=active, className=className, fill=fill, icon=icon, intent=intent, key=key, large=large, minimal=minimal, multiline=multiline, rightIcon=rightIcon, role=role, round=round, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tag',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'active', 'className', 'fill', 'icon', 'intent', 'key', 'large', 'minimal', 'multiline', 'rightIcon', 'role', 'round', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
