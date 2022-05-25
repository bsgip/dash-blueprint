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
            children=[
                dbp.NumericInput(
                    id="numericinput",
                    # value=4,
                    required=True
                )
            ]
        ),
        html.Div(id="numericinput-value"),
        html.Div(id="numericinput-valid"),
        html.Div(id="formgroup-valid"),
        html.Div(id="formgroup-output"),
    ]
)

@app.callback(
    Output("numericinput-value", "children"),
    Input("numericinput", "value")
)
def update_text_value(value):
    return value

@app.callback(
    Output("numericinput-valid", "children"),
    Input("numericinput", "valid")
)
def update_valid_input(value):
    return str(value)

@app.callback(
    Output("formgroup-valid", "children"), [Input("formgroup", "valid")]
)
def update_output(valid):
    return str(valid)


@app.callback(
    Output("formgroup-output", "children"), [Input("formgroup", "value")]
)
def update_output(value):
    print(value)
    return str(value)


if __name__ == "__main__":
    app.run_server(debug=False)
