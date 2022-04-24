# AUTO GENERATED FILE - DO NOT EDIT

#' @export
numericInput <- function(children=NULL, id=NULL, accessKey=NULL, allowNumericCharactersOnly=NULL, autoFocus=NULL, buttonPosition=NULL, clampValueOnBlur=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL, fill=NULL, form=NULL, formAction=NULL, hidden=NULL, intent=NULL, key=NULL, lang=NULL, large=NULL, leftIcon=NULL, max=NULL, min=NULL, minorStepSize=NULL, name=NULL, placeholder=NULL, required=NULL, role=NULL, selectAllOnFocus=NULL, selectAllOnIncrement=NULL, shiftSize=NULL, spellCheck=NULL, stepSize=NULL, stringValue=NULL, style=NULL, tabIndex=NULL, title=NULL, type=NULL, valid=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, accessKey=accessKey, allowNumericCharactersOnly=allowNumericCharactersOnly, autoFocus=autoFocus, buttonPosition=buttonPosition, clampValueOnBlur=clampValueOnBlur, className=className, contentEditable=contentEditable, contextMenu=contextMenu, dir=dir, disabled=disabled, draggable=draggable, fill=fill, form=form, formAction=formAction, hidden=hidden, intent=intent, key=key, lang=lang, large=large, leftIcon=leftIcon, max=max, min=min, minorStepSize=minorStepSize, name=name, placeholder=placeholder, required=required, role=role, selectAllOnFocus=selectAllOnFocus, selectAllOnIncrement=selectAllOnIncrement, shiftSize=shiftSize, spellCheck=spellCheck, stepSize=stepSize, stringValue=stringValue, style=style, tabIndex=tabIndex, title=title, type=type, valid=valid, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NumericInput',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'accessKey', 'allowNumericCharactersOnly', 'autoFocus', 'buttonPosition', 'clampValueOnBlur', 'className', 'contentEditable', 'contextMenu', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'max', 'min', 'minorStepSize', 'name', 'placeholder', 'required', 'role', 'selectAllOnFocus', 'selectAllOnIncrement', 'shiftSize', 'spellCheck', 'stepSize', 'stringValue', 'style', 'tabIndex', 'title', 'type', 'valid', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
