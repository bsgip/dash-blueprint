# AUTO GENERATED FILE - DO NOT EDIT

card <- function(children=NULL, id=NULL, accessKey=NULL, autoFocus=NULL, className=NULL, contentEditable=NULL, contextMenu=NULL, dir=NULL, disabled=NULL, draggable=NULL, elevation=NULL, form=NULL, formAction=NULL, hidden=NULL, href=NULL, interactive=NULL, key=NULL, lang=NULL, n_clicks=NULL, n_clicks_timestamp=NULL, name=NULL, role=NULL, spellCheck=NULL, style=NULL, tabIndex=NULL, type=NULL, value=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, accessKey=accessKey, autoFocus=autoFocus, className=className, contentEditable=contentEditable, contextMenu=contextMenu, dir=dir, disabled=disabled, draggable=draggable, elevation=elevation, form=form, formAction=formAction, hidden=hidden, href=href, interactive=interactive, key=key, lang=lang, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp, name=name, role=role, spellCheck=spellCheck, style=style, tabIndex=tabIndex, type=type, value=value, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Card',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'accessKey', 'autoFocus', 'className', 'contentEditable', 'contextMenu', 'dir', 'disabled', 'draggable', 'elevation', 'form', 'formAction', 'hidden', 'href', 'interactive', 'key', 'lang', 'n_clicks', 'n_clicks_timestamp', 'name', 'role', 'spellCheck', 'style', 'tabIndex', 'type', 'value', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
