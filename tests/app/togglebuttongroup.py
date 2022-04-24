import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.FormGroup(
            id="formgroup",
            required=True,
            children=[
                dbp.ToggleButtonGroup(
                    id="tbg",
                    children=[
                        dbp.Button(
                            id="button", key="a", children="Toggle A", icon="file"
                        ),
                        dbp.Button(
                            id="button-2",
                            key="b",
                            children="Toggle B",
                            icon="settings",
                            # intent='primary',
                            active=True,
                        ),
                        dbp.Button(
                            id="button-3", key="c", children="Toggle C", icon="file"
                        ),
                    ],
                ),
            ],
        ),
        html.Div(id="tbg-value"),
        html.Div(id="tbg-valid"),
        html.Div(id="fromgroup-valid"),
        html.Div(id="formgroup-output"),
    ]
)


@app.callback(
    Output("tbg-value", "children"), [Input("tbg", "value")]
)
def update_output(value):
    return str(value or "")


@app.callback(
    Output("tbg-valid", "children"), [Input("tbg", "valid")]
)
def update_output(is_valid):
    return str(is_valid)


@app.callback(Output("formgroup-valid", "children"), [Input("formgroup", "valid")])
def update_output(valid):
    return str(valid)


@app.callback(Output("formgroup-output", "children"), [Input("formgroup", "value")])
def update_output(value):
    return str(value)


if __name__ == "__main__":
    app.run_server(debug=False)
