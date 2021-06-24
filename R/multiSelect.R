# AUTO GENERATED FILE - DO NOT EDIT

multiSelect <- function(id=NULL, className=NULL, disabled=NULL, filterable=NULL, icon=NULL, items=NULL, minimal=NULL, placeholder=NULL, popoverProps=NULL, selectedItems=NULL, value=NULL) {
    
    props <- list(id=id, className=className, disabled=disabled, filterable=filterable, icon=icon, items=items, minimal=minimal, placeholder=placeholder, popoverProps=popoverProps, selectedItems=selectedItems, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MultiSelect',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'disabled', 'filterable', 'icon', 'items', 'minimal', 'placeholder', 'popoverProps', 'selectedItems', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
