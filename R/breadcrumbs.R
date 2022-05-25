# AUTO GENERATED FILE - DO NOT EDIT

#' @export
breadcrumbs <- function(children=NULL, id=NULL, className=NULL, collapseFrom=NULL, items=NULL, key=NULL, minVisibleItems=NULL, overflowListProps=NULL, popoverProps=NULL, role=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, collapseFrom=collapseFrom, items=items, key=key, minVisibleItems=minVisibleItems, overflowListProps=overflowListProps, popoverProps=popoverProps, role=role, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Breadcrumbs',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'collapseFrom', 'items', 'key', 'minVisibleItems', 'overflowListProps', 'popoverProps', 'role', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
