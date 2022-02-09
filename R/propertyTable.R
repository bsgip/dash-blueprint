# AUTO GENERATED FILE - DO NOT EDIT

propertyTable <- function(children=NULL, id=NULL, action=NULL, actionButtonProps=NULL, actions=NULL, className=NULL, columns=NULL, fuzzyMatch=NULL, infoAction=NULL, key=NULL, locateAction=NULL, maxCount=NULL, page_size=NULL, role=NULL, row_click=NULL, rows=NULL, selectable=NULL, selection=NULL, show_more_less=NULL, show_more_size=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, action=action, actionButtonProps=actionButtonProps, actions=actions, className=className, columns=columns, fuzzyMatch=fuzzyMatch, infoAction=infoAction, key=key, locateAction=locateAction, maxCount=maxCount, page_size=page_size, role=role, row_click=row_click, rows=rows, selectable=selectable, selection=selection, show_more_less=show_more_less, show_more_size=show_more_size, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PropertyTable',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'action', 'actionButtonProps', 'actions', 'className', 'columns', 'fuzzyMatch', 'infoAction', 'key', 'locateAction', 'maxCount', 'page_size', 'role', 'row_click', 'rows', 'selectable', 'selection', 'show_more_less', 'show_more_size', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
