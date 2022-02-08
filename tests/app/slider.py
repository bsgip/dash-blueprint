import json

import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.FormGroup(
            id="formgroup",
            children=[
                dbp.Slider(
                    id="slider", min=0, max=100, stepSize=10, labelStepSize=20, value=20
                ),
            ],
        ),
        html.Div(id="slider-output"),
        html.Div(id="formgroup-output-validation"),
        html.Div(id="formgroup-output"),
    ]
)


@app.callback(Output("slider-output", "children"), [Input("slider", "value")])
def update_date(value):
    return str(value)


@app.callback(Output("formgroup-output", "children"), [Input("formgroup", "value")])
def update_date(child_data):
    return str(child_data)


@app.callback(
    Output("formgroup-output-validation", "children"), [Input("formgroup", "valid")]
)
def update_date(valid):
    return str(valid)


if __name__ == "__main__":
    app.run_server(debug=False)
