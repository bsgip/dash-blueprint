# AUTO GENERATED FILE - DO NOT EDIT

#' @export
sparkline <- function(id=NULL, ariaLabel=NULL, barSeries=NULL, data=NULL, height=NULL, key=NULL, lineSeries=NULL, margin=NULL, max=NULL, min=NULL, width=NULL) {
    
    props <- list(id=id, ariaLabel=ariaLabel, barSeries=barSeries, data=data, height=height, key=key, lineSeries=lineSeries, margin=margin, max=max, min=min, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Sparkline',
        namespace = 'dash_blueprint',
        propNames = c('id', 'ariaLabel', 'barSeries', 'data', 'height', 'key', 'lineSeries', 'margin', 'max', 'min', 'width'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
