import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

from time import sleep

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.config["suppress_callback_exceptions"] = True

navbar_button_options = dict(minimal=True)

app.layout = html.Div(
    [
        dbp.Navbar(
            children=[
                dbp.NavbarGroup(
                    children=[
                        dbp.NavbarHeading(children="evolve"),
                        dbp.NavbarDivider(),
                        dbp.Button(children="Home", href="/", **navbar_button_options),
                        dbp.Button(
                            children="Feeders", href="/feeders", **navbar_button_options
                        ),
                        dbp.Button(
                            children="Jobs", href="/jobs", **navbar_button_options
                        ),
                    ]
                ),
                dbp.NavbarGroup(
                    children=[
                        dbp.Button(icon="user", **navbar_button_options),
                        dbp.Button(
                            icon="notifications", disabled=True, **navbar_button_options
                        ),
                        dbp.Button(icon="cog", disabled=True, **navbar_button_options),
                    ],
                    align="right",
                ),
            ]
        ),
        html.Div(
            children=[
                "Text goes here",
                dbp.Button(
                    id="create-job-button",
                    intent="primary",
                    children="New Job",
                    icon="plus",
                ),
                html.Div(id="create-job-form"),
            ]
        ),
    ]
)

FEEDER = "4440062"


def doe_config_options():
    return [
        dbp.FormGroup(
            id="doe_options",
            children=[
                dbp.FormGroup(
                    id="min_export",
                    label="Min export",
                    helperText="Minimum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_export",
                    label="Max export",
                    helperText="Maximum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=1.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_import",
                    label="Min import",
                    helperText="Minimum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import2",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size2",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_export",
                    label="Min export",
                    helperText="Minimum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_export3",
                    label="Max export",
                    helperText="Maximum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=1.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_import3",
                    label="Min import",
                    helperText="Minimum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import3",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size3",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import23",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size23",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_export",
                    label="Min export",
                    helperText="Minimum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_export",
                    label="Max export",
                    helperText="Maximum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=1.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_import",
                    label="Min import",
                    helperText="Minimum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import2",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size2",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_export",
                    label="Min export",
                    helperText="Minimum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_export3",
                    label="Max export",
                    helperText="Maximum export proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=1.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="min_import3",
                    label="Min import",
                    helperText="Minimum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(max=1.0, min=0.0, stepSize=0.1, value=0.0)
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import3",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size3",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="max_import23",
                    label="Max import",
                    helperText="Maximum import proportion of connection limit to allocate to premise",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.1,
                            value=1.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
                dbp.FormGroup(
                    id="step_size23",
                    label="Step Size",
                    helperText="Step size (in kW) of envelope transitions",
                    children=[
                        dbp.NumericInput(
                            max=1.0,
                            min=0.0,
                            stepSize=0.5,
                            value=0.0,
                        )
                    ],
                    inline=True,
                    collapseChildData=True,
                ),
            ],
        )
    ]


def feeder_config_options():
    return [
        dbp.FormGroup(
            label="Feeder",
            children=dbp.Select(
                id="create-doe-calc-feeder",
                items=[
                    {"label": f"Feeder {FEEDER}", "value": FEEDER},
                ],
                value=FEEDER,
                disabled=True,
            ),
            inline=True,
            collapseChildData=True,
        ),
        dbp.FormGroup(
            label="Date Range",
            children=dbp.DateRangeInput(id="doe_date"),
            inline=True,
            collapseChildData=True,
        ),
    ]


def doe_calculation_options():
    return html.Div(
        children=[
            html.Div(children=feeder_config_options() + doe_config_options()),
            html.Div(id="options-output"),
        ]
    )


@app.callback(
    Output("create-job-form", "children"),
    Input("create-job-button", "n_clicks"),
    prevent_initial_call=True,
)
def show_create_job_form(n_clicks):
    sleep(1)
    return dbp.Dialog(
        title="Create New Job",
        children=doe_calculation_options(),
        isOpen=True,
        canOutsideClickClose=False,
        canEscapeKeyClose=False,
    )


@app.callback(
    Output("options-output", "children"),
    Input("doe_options", "value"),
    prevent_initial_callback=True,
)
def update_job_create_status(value):
    return "You have selected " + str(value)


if __name__ == "__main__":
    app.run_server(debug=True)
