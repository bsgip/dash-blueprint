# AUTO GENERATED FILE - DO NOT EDIT

dateInput <- function(children=NULL, id=NULL, canClearSelection=NULL, clearButtonText=NULL, date=NULL, defaultValue=NULL, key=NULL, maxDate=NULL, minDate=NULL, timePrecision=NULL, todayButtonText=NULL) {
    
    props <- list(children=children, id=id, canClearSelection=canClearSelection, clearButtonText=clearButtonText, date=date, defaultValue=defaultValue, key=key, maxDate=maxDate, minDate=minDate, timePrecision=timePrecision, todayButtonText=todayButtonText)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateInput',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'canClearSelection', 'clearButtonText', 'date', 'defaultValue', 'key', 'maxDate', 'minDate', 'timePrecision', 'todayButtonText'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
