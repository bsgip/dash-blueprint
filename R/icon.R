# AUTO GENERATED FILE - DO NOT EDIT

#' @export
icon <- function(id=NULL, className=NULL, color=NULL, htmlTitle=NULL, icon=NULL, iconSize=NULL, key=NULL, role=NULL, style=NULL, tagName=NULL, title=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(id=id, className=className, color=color, htmlTitle=htmlTitle, icon=icon, iconSize=iconSize, key=key, role=role, style=style, tagName=tagName, title=title, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Icon',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'color', 'htmlTitle', 'icon', 'iconSize', 'key', 'role', 'style', 'tagName', 'title', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
