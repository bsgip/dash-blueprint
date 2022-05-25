# AUTO GENERATED FILE - DO NOT EDIT

#' @export
hTMLTable <- function(children=NULL, id=NULL, bordered=NULL, className=NULL, condensed=NULL, current_page=NULL, filter_by=NULL, filter_columns=NULL, filter_strings=NULL, interactive=NULL, key=NULL, n_clicks=NULL, page_size=NULL, role=NULL, row_click=NULL, selectable=NULL, selection=NULL, show_more_less=NULL, show_more_size=NULL, small=NULL, sort_column=NULL, sort_columns=NULL, sort_direction=NULL, striped=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, bordered=bordered, className=className, condensed=condensed, current_page=current_page, filter_by=filter_by, filter_columns=filter_columns, filter_strings=filter_strings, interactive=interactive, key=key, n_clicks=n_clicks, page_size=page_size, role=role, row_click=row_click, selectable=selectable, selection=selection, show_more_less=show_more_less, show_more_size=show_more_size, small=small, sort_column=sort_column, sort_columns=sort_columns, sort_direction=sort_direction, striped=striped, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'HTMLTable',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'bordered', 'className', 'condensed', 'current_page', 'filter_by', 'filter_columns', 'filter_strings', 'interactive', 'key', 'n_clicks', 'page_size', 'role', 'row_click', 'selectable', 'selection', 'show_more_less', 'show_more_size', 'small', 'sort_column', 'sort_columns', 'sort_direction', 'striped', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
