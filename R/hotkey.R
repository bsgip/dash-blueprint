# AUTO GENERATED FILE - DO NOT EDIT

hotkey <- function(children=NULL, id=NULL, className=NULL, combo=NULL, globalTrigger=NULL, hotkey=NULL, key=NULL, label=NULL, n_presses=NULL, n_presses_timestamp=NULL, role=NULL, ...) {
    
    wildcard_names = names(dash_assert_valid_wildcards(attrib = list('aria', 'data'), ...))

    props <- list(children=children, id=id, className=className, combo=combo, globalTrigger=globalTrigger, hotkey=hotkey, key=key, label=label, n_presses=n_presses, n_presses_timestamp=n_presses_timestamp, role=role, ...)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Hotkey',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'combo', 'globalTrigger', 'hotkey', 'key', 'label', 'n_presses', 'n_presses_timestamp', 'role', wildcard_names),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
