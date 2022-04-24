# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tabs <- function(children=NULL, id=NULL, animate=NULL, defaultSelectedTabId=NULL, key=NULL, large=NULL, renderActiveTabPanelOnly=NULL) {
    
    props <- list(children=children, id=id, animate=animate, defaultSelectedTabId=defaultSelectedTabId, key=key, large=large, renderActiveTabPanelOnly=renderActiveTabPanelOnly)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tabs',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'animate', 'defaultSelectedTabId', 'key', 'large', 'renderActiveTabPanelOnly'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
