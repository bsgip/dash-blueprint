# AUTO GENERATED FILE - DO NOT EDIT

dateInput <- function(children=NULL, id=NULL, canClearSelection=NULL, clearButtonText=NULL, date=NULL, defaultValue=NULL, key=NULL, maxDate=NULL, minDate=NULL, required=NULL, timePrecision=NULL, todayButtonText=NULL, valid=NULL) {
    
    props <- list(children=children, id=id, canClearSelection=canClearSelection, clearButtonText=clearButtonText, date=date, defaultValue=defaultValue, key=key, maxDate=maxDate, minDate=minDate, required=required, timePrecision=timePrecision, todayButtonText=todayButtonText, valid=valid)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateInput',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'canClearSelection', 'clearButtonText', 'date', 'defaultValue', 'key', 'maxDate', 'minDate', 'required', 'timePrecision', 'todayButtonText', 'valid'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
