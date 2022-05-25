# AUTO GENERATED FILE - DO NOT EDIT

#' @export
inputGroup <- function(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL, fill=NULL, form=NULL, formAction=NULL, hidden=NULL, intent=NULL, key=NULL, lang=NULL, large=NULL, leftIcon=NULL, name=NULL, placeholder=NULL, required=NULL, role=NULL, round=NULL, small=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL, title=NULL, type=NULL, valid=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, accessKey=accessKey, autoFocus=autoFocus, className=className, contentEditable=contentEditable, contextMenu=contextMenu, dir=dir, disabled=disabled, draggable=draggable, fill=fill, form=form, formAction=formAction, hidden=hidden, intent=intent, key=key, lang=lang, large=large, leftIcon=leftIcon, name=name, placeholder=placeholder, required=required, role=role, round=round, small=small, spellCheck=spellCheck, style=style, tabIndex=tabIndex, title=title, type=type, valid=valid, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'InputGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'accessKey', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'dir', 'disabled', 'draggable', 'fill', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'large', 'leftIcon', 'name', 'placeholder', 'required', 'role', 'round', 'small', 'spellCheck', 'style', 'tabIndex', 'title', 'type', 'valid', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
