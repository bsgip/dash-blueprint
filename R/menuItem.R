# AUTO GENERATED FILE - DO NOT EDIT

#' @export
menuItem <- function(children=NULL, id=NULL, active=NULL, className=NULL, disabled=NULL, href=NULL, htmlTitle=NULL, icon=NULL, intent=NULL, key=NULL, label=NULL, labelClassName=NULL, multiline=NULL, popoverProps=NULL, preserveSearchString=NULL, role=NULL, shouldDismissPopover=NULL, tagName=NULL, target=NULL, text=NULL, textClassName=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, active=active, className=className, disabled=disabled, href=href, htmlTitle=htmlTitle, icon=icon, intent=intent, key=key, label=label, labelClassName=labelClassName, multiline=multiline, popoverProps=popoverProps, preserveSearchString=preserveSearchString, role=role, shouldDismissPopover=shouldDismissPopover, tagName=tagName, target=target, text=text, textClassName=textClassName, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MenuItem',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'active', 'className', 'disabled', 'href', 'htmlTitle', 'icon', 'intent', 'key', 'label', 'labelClassName', 'multiline', 'popoverProps', 'preserveSearchString', 'role', 'shouldDismissPopover', 'tagName', 'target', 'text', 'textClassName', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
