import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Button(id="button", children="Click Me", icon="file"),
        html.Div(id="button-clicks"),
    ]
)


@app.callback(Output("button-clicks", "children"), [Input("button", "n_clicks")])
def update_output(n_clicks):
    return str(n_clicks)


if __name__ == "__main__":
    app.run_server(debug=False)
