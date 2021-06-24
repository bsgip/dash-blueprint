# AUTO GENERATED FILE - DO NOT EDIT

radioGroup <- function(children=NULL, id=NULL, className=NULL, inline=NULL, key=NULL, label=NULL, name=NULL, options=NULL, value=NULL) {
    
    props <- list(children=children, id=id, className=className, inline=inline, key=key, label=label, name=name, options=options, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RadioGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'inline', 'key', 'label', 'name', 'options', 'value'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
