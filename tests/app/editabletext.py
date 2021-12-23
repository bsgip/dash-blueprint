import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.FormGroup(
            children=[
                dbp.EditableText(
                    id="editabletext",
                    value="default value",
                    selectAllOnFocus=True
                )
            ]
        ),
        html.Div(id="editabletext-value"),
        html.Div(id="editabletext-confirmed-value"),
        html.Div(id="formgroup-valid"),
        html.Div(id="formgroup-output"),
    ]
)

@app.callback(
    Output("editabletext-value", "children"),
    Input("editabletext", "value")
)
def update_text_value(value):
    return value

@app.callback(
    Output("editabletext-confirmed-value", "children"),
    Input("editabletext", "confirmedValue")
)
def update_text_value(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=False)
