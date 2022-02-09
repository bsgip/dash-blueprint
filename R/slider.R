# AUTO GENERATED FILE - DO NOT EDIT

slider <- function(children=NULL, id=NULL, className=NULL, disabled=NULL, initialValue=NULL, key=NULL, labelPrecision=NULL, labelRenderer=NULL, labelStepSize=NULL, labelType=NULL, max=NULL, min=NULL, releaseValue=NULL, showTrackFill=NULL, stepSize=NULL, updateKey=NULL, value=NULL, vertical=NULL) {
    
    props <- list(children=children, id=id, className=className, disabled=disabled, initialValue=initialValue, key=key, labelPrecision=labelPrecision, labelRenderer=labelRenderer, labelStepSize=labelStepSize, labelType=labelType, max=max, min=min, releaseValue=releaseValue, showTrackFill=showTrackFill, stepSize=stepSize, updateKey=updateKey, value=value, vertical=vertical)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Slider',
        namespace = 'dash_blueprint',
        propNames = c('children', 'id', 'className', 'disabled', 'initialValue', 'key', 'labelPrecision', 'labelRenderer', 'labelStepSize', 'labelType', 'max', 'min', 'releaseValue', 'showTrackFill', 'stepSize', 'updateKey', 'value', 'vertical'),
        package = 'dashBlueprint'
        )

    structure(component, class = c('dash_component', 'list'))
}
