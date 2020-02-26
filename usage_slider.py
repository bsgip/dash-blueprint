import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dash_blueprint.Slider(
            id="slider", initialValue=0, value=-2, min=-10, max=8, stepSize=0.1
        ),
        dash_blueprint.Slider(id="slider-2", vertical=True, showTrackFill=False),
        html.Div(id="output"),
        html.Div(id="output-release"),
        html.Div(id="output-2"),
        dash_blueprint.FormGroup(
            id="formgroup",
            children=[
                dash_blueprint.Slider(
                    id="chb1",
                    children=html.I("slider 1"),
                    key="c1",
                    className="bp3-inline",
                    value=4,
                ),
                dash_blueprint.Slider(
                    id="chb2",
                    children="slider 2",
                    key="c2",
                    className="bp3-inline",
                    showTrackFill=False,
                ),
            ],
        ),
        html.Div(id="group-output"),
    ]
)


@app.callback(
    Output("group-output", "children"),
    [
        Input("formgroup", "childData"),
        # Input('formgroup', 'childData'),  # If FormGroup
    ],
)
def update_date(child_data):
    print(child_data)
    return str(child_data)


@app.callback(
    Output("output", "children"),
    [
        Input("slider", "value"),
        # Input('daterangeinput', 'end_date')
    ],
)
def update_date(checked):
    print(checked)
    return str(checked)


@app.callback(
    Output("output-release", "children"),
    [
        Input("slider", "releaseValue"),
        # Input('daterangeinput', 'end_date')
    ],
)
def update_release_value(checked):
    print(checked)
    return str(checked)


@app.callback(
    Output("output-2", "children"),
    [
        Input("slider-2", "value"),
        # Input('daterangeinput', 'end_date')
    ],
)
def update_date(checked):
    print(checked)
    return str(checked)


if __name__ == "__main__":
    app.run_server(debug=False)
