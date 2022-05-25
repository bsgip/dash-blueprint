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
                dbp.Select(
                    id="simple-select",
                    required=True,
                    items=[
                        {"value": "thing", "label": "Thing", "sub": "another"},
                        {
                            "value": "thing-2",
                            "label": "Second Thing",
                            "sub": "2nd",
                            "href": "/blah/thing",
                        },
                    ],
                )
            ]
        ),
        html.Div(id="select-output"),
        html.Div(id="formgroup-valid"),
        html.Div(id="formgroup-output"),
    ]
)


@app.callback(
    Output("select-output", "children"), [Input("simple-select", "value"), Input("simple-select", "valid")]
)
def update_output(value, is_valid):
    return "you selected {}, {}".format(value, is_valid)


@app.callback(
    Output("formgroup-valid", "children"), [Input("formgroup", "valid")]
)
def update_output(valid):
    return str(valid)


@app.callback(
    Output("formgroup-output", "children"), [Input("formgroup", "value")]
)
def update_output(value):
    return str(value)


if __name__ == "__main__":
    app.run_server(debug=False)
