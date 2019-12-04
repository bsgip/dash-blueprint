import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

external_stylesheets = [
    'https://codepen.io/chriddyp/pen/bWLwgP.css',
]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

RANGE_LOW, RANGE_HIGH = 210, 260
WARN_LOW, WARN_HIGH = 219, 253
def normalise(value, min_value, max_value):
    return (value - min_value) / (max_value - min_value) * 100

def range_warning_bar(value_low, value_high, warn_low=WARN_LOW, warn_high=WARN_HIGH, range_low=RANGE_LOW, range_high=RANGE_HIGH):
    value_low = normalise(value_low, range_low, range_high)
    value_high = normalise(value_high, range_low, range_high)
    warn_low = normalise(warn_low, range_low, range_high)
    warn_high = normalise(warn_high, range_low, range_high)
    range_high = normalise(range_high, range_low, range_high)
    range_low = normalise(range_low, range_low, range_high)
    progress_bars = []
    if value_low < warn_low:
        width = warn_low - value_low
        offset = value_low
        progress_bars.append(
            html.Div(
                className="bp3-progress-meter",
                style={"width": f"{warn_low - value_low}%", "left": f"{value_low}%", "background-color": "#db3737", "border-radius": "0px"}
            )
        )
    offset = max(value_low, warn_low)
    width = min(value_high, warn_high) - offset
    progress_bars.append(
        html.Div(
                className="bp3-progress-meter",
                style={"width": f"{width}%", "left": f"{offset}%", "background-color": "#0f9960", "border-radius": "0px"}
            )
    )
    if value_high > warn_high:
        width = value_high - warn_high
        offset = warn_high
        progress_bars.append(
            html.Div(
                className="bp3-progress-meter",
                style={"width": f"{width}%", "left": f"{offset}%", "background-color": "#db3737", "border-radius": "0px"}
            )
        )
    return html.Div(className="bp3-progress-bar bp3-intent-danger bp3-no-animation bp3-no-stripes",
        children=progress_bars
    )



app.layout = html.Div(
    className="bp3-dark",
    children=[
    dash_blueprint.HTMLTable(interactive=True, children=[
        html.Thead(children=[
            html.Th('Project'),
            html.Th('Description'),
            html.Th('Technologies'),
        ]),
        html.Tbody(
            children=[
                html.Tr(
                    key='1',
                    children=[
                        html.Td(dcc.Link(href="/blah", children="bludeprint")),
                        html.Td('CSS framework and UI toolkit'),
                        html.Td(range_warning_bar(210, 255)),
                    ]
                ),
                html.Tr(
                    key='1',
                    children=[
                        html.Td('Blueprint'),
                        html.Td('CSS framework and UI toolkit'),
                        html.Td(range_warning_bar(200, 260)),
                    ]
                ),
                html.Tr(
                    key='1',
                    children=[
                        html.Td('Blueprint'),
                        html.Td('CSS framework and UI toolkit'),
                        html.Td(range_warning_bar(230, 244)),
                    ]
                )
            ]
        )
    ])

]

)



if __name__ == '__main__':
    app.run_server(debug=True)
