# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dateRangeInput <- function(children=NULL, id=NULL, canClearSelection=NULL, clearButtonText=NULL, date_range=NULL, defaultValue=NULL, end_date=NULL, key=NULL, maxDate=NULL, minDate=NULL, required=NULL, shortcuts=NULL, singleMonthOnly=NULL, start_date=NULL, timePrecision=NULL, todayButtonText=NULL, valid=NULL) {
    
    props <- list(children=children, id=id, canClearSelection=canClearSelection, clearButtonText=clearButtonText, date_range=date_range, defaultValue=defaultValue, end_date=end_date, key=key, maxDate=maxDate, minDate=minDate, required=required, shortcuts=shortcuts, singleMonthOnly=singleMonthOnly, start_date=start_date, timePrecision=timePrecision, todayButtonText=todayButtonText, valid=valid)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateRangeInput',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'canClearSelection', 'clearButtonText', 'date_range', 'defaultValue', 'end_date', 'key', 'maxDate', 'minDate', 'required', 'shortcuts', 'singleMonthOnly', 'start_date', 'timePrecision', 'todayButtonText', 'valid'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
