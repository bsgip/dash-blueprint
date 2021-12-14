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
                dbp.DatePicker(
                    id="date-picker",
                    required=True,
                )
            ]
        ),
        html.Div(id="date-picker-output"),
        html.Div(id="formgroup-valid"),
        html.Div(id="formgroup-output"),
    ]
)


@app.callback(
    Output("date-picker-output", "children"), [Input("date-picker", "date"), Input("date-picker", "valid")]
)
def update_output(value, is_valid):
    return "{}, {}".format(value, is_valid)


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
