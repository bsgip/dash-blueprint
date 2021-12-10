import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

from time import sleep

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dash_blueprint.MultiSelect(
            id="simple-select",
            placeholder="Job Status...",
            items=[
                {"value": "thing", "label": "Thing", "sub": "another"},
                {
                    "value": "thing-2",
                    "label": "Second Thing",
                    "sub": "2nd",
                    "href": "/blah/thing",
                },
            ],
            # value=["thing"],
            # filterable=False,
        ),
        html.Div(id="simple-select-output"),
    ]
)


@app.callback(
    Output("simple-select-output", "children"), 
    [Input("simple-select", "value"), Input("simple-select", "valid")]
)
def update_output(value, valid):
    return "you selected {}, {}".format(value, valid)


if __name__ == "__main__":
    app.run_server(debug=False)
