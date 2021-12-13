# AUTO GENERATED FILE - DO NOT EDIT

formGroup <- function(children=NULL, id=NULL, childData=NULL, childValidation=NULL, className=NULL, collapseChildData=NULL, contentClassName=NULL, disabled=NULL, helperText=NULL, inline=NULL, intent=NULL, key=NULL, label=NULL, labelFor=NULL, labelInfo=NULL, required=NULL, style=NULL, valid=NULL) {
    
    props <- list(children=children, id=id, childData=childData, childValidation=childValidation, className=className, collapseChildData=collapseChildData, contentClassName=contentClassName, disabled=disabled, helperText=helperText, inline=inline, intent=intent, key=key, label=label, labelFor=labelFor, labelInfo=labelInfo, required=required, style=style, valid=valid)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'FormGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'childData', 'childValidation', 'className', 'collapseChildData', 'contentClassName', 'disabled', 'helperText', 'inline', 'intent', 'key', 'label', 'labelFor', 'labelInfo', 'required', 'style', 'valid'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
