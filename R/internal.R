.dashBlueprint_js_metadata <- function() {
deps_metadata <- list(`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = 'dash_blueprint.min.js',
stylesheet = NULL, head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE), class = "html_dependency"),
`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = 'dash_blueprint.min.js.map',
stylesheet = NULL, head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE, dynamic = TRUE), class = "html_dependency"),
`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = NULL,
stylesheet = 'blueprint.css', head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE), class = "html_dependency"),
`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = NULL,
stylesheet = 'blueprint.css.map', head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE), class = "html_dependency"),
`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = NULL,
stylesheet = 'blueprint-datetime.css', head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE), class = "html_dependency"),
`dash_blueprint` = structure(list(name = "dash_blueprint",
version = "0.0.1", src = list(href = NULL,
file = "deps"), meta = NULL,
script = NULL,
stylesheet = 'blueprint-datetime.css.map', head = NULL, attachment = NULL, package = "dashBlueprint",
all_files = FALSE), class = "html_dependency"))
return(deps_metadata)
}

dash_assert_valid_wildcards <- function (attrib = list("data", "aria"), ...)
{
    args <- list(...)
    validation_results <- lapply(names(args), function(x) {
        grepl(paste0("^(", paste0(attrib, collapse="|"), ")-[a-zA-Z0-9_-]+$"),
            x)
    })
    if (FALSE %in% validation_results) {
        stop(sprintf("The following props are not valid in this component: '%s'",
            paste(names(args)[grepl(FALSE, unlist(validation_results))],
                collapse = ", ")), call. = FALSE)
    }
    else {
        return(args)
    }
}
