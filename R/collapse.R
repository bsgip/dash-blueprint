# AUTO GENERATED FILE - DO NOT EDIT

collapse <- function(children=NULL, id=NULL, buttonProps=NULL, className=NULL, hideIcon=NULL, hideRightIcon=NULL, hideText=NULL, isOpen=NULL, keepChildrenMounted=NULL, key=NULL, minimal=NULL, role=NULL, showIcon=NULL, showRightIcon=NULL, showText=NULL, transitionDuration=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, buttonProps=buttonProps, className=className, hideIcon=hideIcon, hideRightIcon=hideRightIcon, hideText=hideText, isOpen=isOpen, keepChildrenMounted=keepChildrenMounted, key=key, minimal=minimal, role=role, showIcon=showIcon, showRightIcon=showRightIcon, showText=showText, transitionDuration=transitionDuration, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Collapse',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'buttonProps', 'className', 'hideIcon', 'hideRightIcon', 'hideText', 'isOpen', 'keepChildrenMounted', 'key', 'minimal', 'role', 'showIcon', 'showRightIcon', 'showText', 'transitionDuration', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
