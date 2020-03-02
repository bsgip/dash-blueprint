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
        dash_blueprint.FormGroup(
            id="formgroup",
            label="Group of Switches",
            inline=True,
            children=[
                dash_blueprint.Switch(
                    id="chb1",
                    children=html.I("switch 1"),
                    key="c1",
                    className="bp3-inline",
                    checked=True,
                ),
                dash_blueprint.Switch(
                    id="chb2",
                    children="switch 2",
                    key="c2",
                    className="bp3-inline",
                    # style={'display': 'none'}
                ),
                html.Hr(),
            ],
        ),
        dash_blueprint.FormGroup(
            id="formgroup-2",
            label="Group of Switches with longer form name",
            inline=True,
            children=[
                dash_blueprint.Switch(
                    id="chb1-2",
                    children=html.I("switch 1"),
                    key="c1",
                    className="bp3-inline",
                    checked=True,
                ),
                dash_blueprint.Switch(
                    id="chb2-2",
                    children="switch 2",
                    key="c2",
                    className="bp3-inline",
                    # style={'display': 'none'}
                ),
                html.Hr(),
            ],
        ),
        html.Div(id="date-range-input-output"),
        html.Div(id="date-range-output"),
        html.Div(id="output"),
    ]
)


@app.callback(
    Output("output", "children"),
    [
        Input("formgroup", "childData"),
    ],
)
def update_date(child_data):
    print(child_data)
    return json.dumps(child_data)


if __name__ == "__main__":
    app.run_server(debug=True)
