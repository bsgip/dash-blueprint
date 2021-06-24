# AUTO GENERATED FILE - DO NOT EDIT

rawCollapse <- function(children=NULL, id=NULL, className=NULL, hideIcon=NULL, hideText=NULL, isOpen=NULL, keepChildrenMounted=NULL, key=NULL, minimal=NULL, role=NULL, showIcon=NULL, showText=NULL, transitionDuration=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, hideIcon=hideIcon, hideText=hideText, isOpen=isOpen, keepChildrenMounted=keepChildrenMounted, key=key, minimal=minimal, role=role, showIcon=showIcon, showText=showText, transitionDuration=transitionDuration, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RawCollapse',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'hideIcon', 'hideText', 'isOpen', 'keepChildrenMounted', 'key', 'minimal', 'role', 'showIcon', 'showText', 'transitionDuration', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
