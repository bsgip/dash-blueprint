# AUTO GENERATED FILE - DO NOT EDIT

histogram <- function(children=NULL, id=NULL, className=NULL, key=NULL, maxCount=NULL, role=NULL, row_click=NULL, rows=NULL, selectable=NULL, selection=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, key=key, maxCount=maxCount, role=role, row_click=row_click, rows=rows, selectable=selectable, selection=selection, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Histogram',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'key', 'maxCount', 'role', 'row_click', 'rows', 'selectable', 'selection', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
