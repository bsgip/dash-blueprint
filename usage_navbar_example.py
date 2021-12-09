import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.config['suppress_callback_exceptions']=True

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
                        dbp.Button(children="Feeders", href="/feeders", **navbar_button_options),
                        dbp.Button(children="Jobs", href="/jobs", **navbar_button_options),
                    ]
                    
                ),
                dbp.NavbarGroup(
                    children=[
                        dbp.Button(icon="user", **navbar_button_options),
                        dbp.Button(icon="notifications", disabled=True, **navbar_button_options),
                        dbp.Button(icon="cog", disabled=True, **navbar_button_options),
                    ],
                    align="right"
                )
            ]
        ),
        html.Div(
            children=[
                "Text goes here",
                dbp.Button(id="create-job-button", intent="primary", children="New Job", icon="plus"),
                html.Div(id="create-job-form")
            ]
        )
        
    ]
)


def doe_calculation_options():
    return html.Div(
        children=[dbp.Select(id="create-doe-calc-feeder", items=[
            {
                "label": "Feeder ABC",
                "value": "ABC"
            },
            {
                "label": "Feeder XYZ",
                "value": "XYZ"
            }
        ],
        value="XYZ"
        ),
        html.Div(id="create-doe-calc-valid")]
    )


@app.callback(
    Output("create-job-form", "children"),
    Input("create-job-button", "n_clicks"),
    prevent_initial_call=True
)
def show_create_job_form(n_clicks):
    return dbp.Dialog(
        title="Create New Job",
        children=doe_calculation_options(),
        isOpen=True,
        canOutsideClickClose=False,
        canEscapeKeyClose=False
    )

@app.callback(
    Output("create-doe-calc-valid", "children"),
    Input("create-doe-calc-feeder", "value"),
    prevent_initial_callback=True
)
def update_job_create_status(value):
    return "You have selected " + str(value)

if __name__ == '__main__':
    app.run_server(debug=True)
