import json
import random

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

external_stylesheets = [
    # 'https://codepen.io/chriddyp/pen/bWLwgP.css',
]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True



app.layout = html.Div(
    className="bp3-dark",
    children=[
        dash_blueprint.Button(
            id="sort-button", minimal=True, small=True, icon="chevron-down"
        ),
        dash_blueprint.Histogram(
            id="histogram",
            rows=[
                {"key": "1", "label": "Object 1", "count": 20},
                {"key": "2", "label": "Object with a really super long name", "count": 10},
                {"key": "3", "label": "Something else", "count": 4}
            ] + [
                {"key": f"{i}", "label": f"Object {i}", "count": 2} for i in range(4, 20)
            ]
        ),
        html.Div(id="selected-row"),
    ],
)


@app.callback(
    Output("selected-row", "children"),
    [Input("histogram", "row_click"), Input("histogram", "selection")],
)
def row_selected(row_key, selection):
    return f"You clicked on row {row_key}. Selection is {selection}"


if __name__ == "__main__":
    app.run_server(debug=True)
