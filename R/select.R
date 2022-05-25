# AUTO GENERATED FILE - DO NOT EDIT

#' @export
select <- function(id=NULL, className=NULL, disabled=NULL, fill=NULL, filterable=NULL, icon=NULL, items=NULL, label=NULL, minimal=NULL, popoverProps=NULL, required=NULL, valid=NULL, value=NULL) {
    
    props <- list(id=id, className=className, disabled=disabled, fill=fill, filterable=filterable, icon=icon, items=items, label=label, minimal=minimal, popoverProps=popoverProps, required=required, valid=valid, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Select',
        namespace = 'dash_blueprint',
        propNames = c('id', 'className', 'disabled', 'fill', 'filterable', 'icon', 'items', 'label', 'minimal', 'popoverProps', 'required', 'valid', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
