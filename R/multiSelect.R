# AUTO GENERATED FILE - DO NOT EDIT

multiSelect <- function(id=NULL, className=NULL, disabled=NULL, filterable=NULL, icon=NULL, items=NULL, minimal=NULL, placeholder=NULL, popoverProps=NULL, required=NULL, selectedItems=NULL, valid=NULL, value=NULL) {
    
    props <- list(id=id, className=className, disabled=disabled, filterable=filterable, icon=icon, items=items, minimal=minimal, placeholder=placeholder, popoverProps=popoverProps, required=required, selectedItems=selectedItems, valid=valid, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MultiSelect',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'disabled', 'filterable', 'icon', 'items', 'minimal', 'placeholder', 'popoverProps', 'required', 'selectedItems', 'valid', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
