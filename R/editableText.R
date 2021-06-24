# AUTO GENERATED FILE - DO NOT EDIT

editableText <- function(children=NULL, id=NULL, className=NULL, confirmOnEnterKey=NULL, confirmedValue=NULL, defaultValue=NULL, disabled=NULL, intent=NULL, isEditing=NULL, maxLength=NULL, maxLines=NULL, minLines=NULL, minWidth=NULL, multiline=NULL, placeholder=NULL, selectAllOnFocus=NULL, type=NULL, value=NULL) {
    
    props <- list(children=children, id=id, className=className, confirmOnEnterKey=confirmOnEnterKey, confirmedValue=confirmedValue, defaultValue=defaultValue, disabled=disabled, intent=intent, isEditing=isEditing, maxLength=maxLength, maxLines=maxLines, minLines=minLines, minWidth=minWidth, multiline=multiline, placeholder=placeholder, selectAllOnFocus=selectAllOnFocus, type=type, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'EditableText',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'confirmOnEnterKey', 'confirmedValue', 'defaultValue', 'disabled', 'intent', 'isEditing', 'maxLength', 'maxLines', 'minLines', 'minWidth', 'multiline', 'placeholder', 'selectAllOnFocus', 'type', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
