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
        dash_blueprint.Switch(id="switch", children="switch option"),
        dash_blueprint.Switch(
            id="switch-2", children="default true switch option", checked=True
        ),
        html.Div(id="output"),
        html.Div(id="output-2"),
        dash_blueprint.FormGroup(
            id="formgroup",
            children=[
                dash_blueprint.Switch(
                    id="chb1",
                    children=html.I("switch 1"),
                    key="c1",
                    className="bp3-inline",
                ),
                dash_blueprint.Switch(
                    id="chb2", children="switch 2", key="c2", className="bp3-inline"
                ),
            ],
        ),
        html.Div(id="group-output"),
    ]
)


@app.callback(Output("group-output", "children"), [Input("formgroup", "childData")])
def update_date(child_data):
    print(child_data)
    return str(child_data)


@app.callback(Output("output", "children"), [Input("switch", "checked")])
def update_date(checked):
    print(checked)
    return str(checked)


@app.callback(Output("output-2", "children"), [Input("switch-2", "checked")])
def update_date(checked):
    print(checked)
    return str(checked)


if __name__ == "__main__":
    app.run_server(debug=False)
