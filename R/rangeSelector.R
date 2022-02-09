# AUTO GENERATED FILE - DO NOT EDIT

rangeSelector <- function(id=NULL, data=NULL, group=NULL, groupSize=NULL, height=NULL, isDate=NULL, margin=NULL, selectSingle=NULL, selected=NULL, width=NULL, yLines=NULL) {
    
    props <- list(id=id, data=data, group=group, groupSize=groupSize, height=height, isDate=isDate, margin=margin, selectSingle=selectSingle, selected=selected, width=width, yLines=yLines)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RangeSelector',
        namespace = 'dash_blueprint',
        propNames = c('id', 'data', 'group', 'groupSize', 'height', 'isDate', 'margin', 'selectSingle', 'selected', 'width', 'yLines'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
