# AUTO GENERATED FILE - DO NOT EDIT

#' @export
button <- function(children=NULL, id=NULL, accessKey=NULL, active=NULL, alignText=NULL, autoFocus=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL, form=NULL, formAction=NULL, hidden=NULL, href=NULL, icon=NULL, intent=NULL, key=NULL, lang=NULL, large=NULL, minimal=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, name=NULL, rightIcon=NULL, role=NULL, small=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL, title=NULL, type=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, accessKey=accessKey, active=active, alignText=alignText, autoFocus=autoFocus, className=className, contentEditable=contentEditable, contextMenu=contextMenu, dir=dir, disabled=disabled, draggable=draggable, form=form, formAction=formAction, hidden=hidden, href=href, icon=icon, intent=intent, key=key, lang=lang, large=large, minimal=minimal, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, name=name, rightIcon=rightIcon, role=role, small=small, spellCheck=spellCheck, style=style, tabIndex=tabIndex, title=title, type=type, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Button',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'accessKey', 'active', 'alignText', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'dir', 'disabled', 'draggable', 'form', 'formAction', 'hidden', 'href', 'icon', 'intent', 'key', 'lang', 'large', 'minimal', 'n_clicks', 'n_clicks_timestamp', 'name', 'rightIcon', 'role', 'small', 'spellCheck', 'style', 'tabIndex', 'title', 'type', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
