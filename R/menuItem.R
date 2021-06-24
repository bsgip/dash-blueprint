# AUTO GENERATED FILE - DO NOT EDIT

menuItem <- function(children=NULL, id=NULL, active=NULL, className=NULL, content=NULL, disabled=NULL, fill=NULL, href=NULL, icon=NULL, iconSize=NULL, intent=NULL, key=NULL, labelClassName=NULL, large=NULL, minimal=NULL, multiline=NULL, popoverProps=NULL, preserveSearchString=NULL, role=NULL, shouldDismissPopover=NULL, tagName=NULL, text=NULL, textClassName=NULL, vertical=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, active=active, className=className, content=content, disabled=disabled, fill=fill, href=href, icon=icon, iconSize=iconSize, intent=intent, key=key, labelClassName=labelClassName, large=large, minimal=minimal, multiline=multiline, popoverProps=popoverProps, preserveSearchString=preserveSearchString, role=role, shouldDismissPopover=shouldDismissPopover, tagName=tagName, text=text, textClassName=textClassName, vertical=vertical, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuItem',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'active', 'className', 'content', 'disabled', 'fill', 'href', 'icon', 'iconSize', 'intent', 'key', 'labelClassName', 'large', 'minimal', 'multiline', 'popoverProps', 'preserveSearchString', 'role', 'shouldDismissPopover', 'tagName', 'text', 'textClassName', 'vertical', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
