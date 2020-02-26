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
        dash_blueprint.ProgressBar(id="pb1"),
        html.Div(
            style={"width": "400px", "height": "20px"},
            children=dash_blueprint.ProgressBar(
                id="pb2", animate=False, stripes=False, value=0.7
            ),
        ),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
