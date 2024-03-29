import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

external_stylesheets = ["https://codepen.io/chriddyp/pen/bWLwgP.css"]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dash_blueprint.H1(id="header", children="This is a H1 header"),
        dash_blueprint.H2(id="header2", children="This is a H2 header"),
        dash_blueprint.H3(id="header3", children="This is a H3 header"),
        html.Div(
            className="eight columns",
            children=dash_blueprint.Tabs(
                id="tabs",
                large=True,
                children=[
                    html.Div(
                        id="tab1",
                        title="Tab 1",
                        children=[
                            html.Div("This is tab 1 content"),
                            dcc.Graph(
                                id="example-graph-1",
                                figure={
                                    "data": [
                                        {
                                            "x": [1, 2, 3],
                                            "y": [4, 1, 2],
                                            "type": "bar",
                                            "name": "SF",
                                        },
                                        {
                                            "x": [1, 2, 3],
                                            "y": [2, 4, 5],
                                            "type": "bar",
                                            "name": u"Montréal",
                                        },
                                    ],
                                    "layout": {"title": "Dash Data Visualization"},
                                },
                            ),
                        ],
                    ),
                    html.Div(
                        id="tab2",
                        title="Tab 2",
                        children=[
                            html.Div("This is tab 2 content"),
                            dcc.Graph(
                                id="example-graph-2",
                                figure={
                                    "data": [
                                        {
                                            "x": [1, 2, 3],
                                            "y": [4, 1, 2],
                                            "type": "bar",
                                            "name": "SF",
                                        },
                                        {
                                            "x": [1, 2, 3],
                                            "y": [2, 0, 0],
                                            "type": "bar",
                                            "name": u"Montréal",
                                        },
                                    ],
                                    "layout": {"title": "Dash Data Visualization"},
                                },
                            ),
                        ],
                    ),
                    html.Div(
                        id="tab3",
                        title="Tab 3",
                        children=[
                            html.Div("This is tab 3 content"),
                            dcc.Graph(
                                id="example-graph-3",
                                figure={
                                    "data": [
                                        {
                                            "x": [1, 2, 3],
                                            "y": [99, 1, 2],
                                            "type": "bar",
                                            "name": "SF",
                                        },
                                        {
                                            "x": [1, 2, 3],
                                            "y": [2, 4, 5],
                                            "type": "bar",
                                            "name": u"Montréal",
                                        },
                                    ],
                                    "layout": {"title": "Dash Data Visualization"},
                                },
                            ),
                        ],
                    ),
                ],
            ),
        ),
        html.Div(id="output"),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=False)
