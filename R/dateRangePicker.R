# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dateRangePicker <- function(children=NULL, id=NULL, canClearSelection=NULL, clearButtonText=NULL, date=NULL, defaultValue=NULL, end_date=NULL, key=NULL, maxDate=NULL, minDate=NULL, shortcuts=NULL, singleMonthOnly=NULL, start_date=NULL, timePrecision=NULL, todayButtonText=NULL) {
    
    props <- list(children=children, id=id, canClearSelection=canClearSelection, clearButtonText=clearButtonText, date=date, defaultValue=defaultValue, end_date=end_date, key=key, maxDate=maxDate, minDate=minDate, shortcuts=shortcuts, singleMonthOnly=singleMonthOnly, start_date=start_date, timePrecision=timePrecision, todayButtonText=todayButtonText)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateRangePicker',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'canClearSelection', 'clearButtonText', 'date', 'defaultValue', 'end_date', 'key', 'maxDate', 'minDate', 'shortcuts', 'singleMonthOnly', 'start_date', 'timePrecision', 'todayButtonText'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
