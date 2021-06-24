# AUTO GENERATED FILE - DO NOT EDIT

navbarGroup <- function(children=NULL, id=NULL, align=NULL, className=NULL) {
    
    props <- list(children=children, id=id, align=align, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NavbarGroup',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'align', 'className'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
