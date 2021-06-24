# AUTO GENERATED FILE - DO NOT EDIT

select <- function(id=NULL, className=NULL, disabled=NULL, filterable=NULL, icon=NULL, items=NULL, minimal=NULL, popoverProps=NULL, value=NULL) {
    
    props <- list(id=id, className=className, disabled=disabled, filterable=filterable, icon=icon, items=items, minimal=minimal, popoverProps=popoverProps, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Select',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'disabled', 'filterable', 'icon', 'items', 'minimal', 'popoverProps', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
