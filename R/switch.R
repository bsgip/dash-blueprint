# AUTO GENERATED FILE - DO NOT EDIT

switch <- function(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL, checked=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL, form=NULL, formAction=NULL, hidden=NULL, intent=NULL, key=NULL, lang=NULL, name=NULL, role=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL, title=NULL, type=NULL, updateKey=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, accessKey=accessKey, autoFocus=autoFocus, checked=checked, className=className, contentEditable=contentEditable, contextMenu=contextMenu, dir=dir, disabled=disabled, draggable=draggable, form=form, formAction=formAction, hidden=hidden, intent=intent, key=key, lang=lang, name=name, role=role, spellCheck=spellCheck, style=style, tabIndex=tabIndex, title=title, type=type, updateKey=updateKey, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Switch',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'accessKey', 'autoFocus', 'checked', 'className', 'contentEditable', 'contextMenu', 'dir', 'disabled', 'draggable', 'form', 'formAction', 'hidden', 'intent', 'key', 'lang', 'name', 'role', 'spellCheck', 'style', 'tabIndex', 'title', 'type', 'updateKey', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
