import time
import dash_blueprint
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    id="main-div",
    children=[
        html.Div(
            id="header-div",
            children=[
                html.Div("Heading"),
                dash_blueprint.ToggleButtonGroup(
                    id="tbg",
                    children=[
                        dash_blueprint.Button(
                            id="button", key="a", children="Toggle A", icon="file"
                        ),
                        dash_blueprint.Button(
                            id="button-2",
                            key="b",
                            children="Toggle B",
                            icon="settings",
                            # intent='primary',
                            active=True,
                        ),
                        dash_blueprint.Button(
                            id="button-3", key="c", children="Toggle C", icon="file"
                        ),
                    ],
                ),
            ],
        ),
        html.Div(id="output"),
    ],
)


@app.callback(Output("output", "children"), [Input("tbg", "value")])
def toggle_value(value):
    return str(value) + " has been toggled on"


if __name__ == "__main__":
    app.run_server(debug=False)
