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
rows = []
for i in range(100):
    v_min = random.randint(0,230)
    v_max = random.randint(240, 260)
    rows.append(
        dash_blueprint.Tr(
            key=f'{i}',
            className="someclass",
            children=[
                html.Td(dash_blueprint.Link(href=f"/blah/{i}", children="View info")),
                html.Td(f'Transformer element ({i})'),
                html.Td(v_min),
                html.Td(range_warning_bar(v_min, v_max)),
                html.Td(v_max),
            ]
        )
    )



app.layout = html.Div(
    className="bp3-dark",
    children=[
        dash_blueprint.Button(id='sort-button', minimal=True, small=True, icon="chevron-down"),
        dash_blueprint.HTMLTable(id='table', sort_column=2, 
            selectable=True,
            filter_columns=[False, True, True], sort_columns=[True, False, True, False, True],
            interactive=True, children=[
            html.Thead(children=[
                html.Th([
                    'Link'
                ]),
                html.Th('Element'),
                html.Th(html.Span(['V', html.Sub('min')])),
                html.Th('Voltage Range'),
                html.Th(html.Span(['V', html.Sub('max')])),
            ]),
            # html.Thead(children=[
            #     html.Th(dash_blueprint.EditableText()),
            #     html.Th(dash_blueprint.EditableText()),
            #     html.Th(dash_blueprint.EditableText()),
            #     html.Th(dash_blueprint.EditableText()),
            #     html.Th(dash_blueprint.EditableText())
            # ]),
            html.Tbody(
                children=rows
            )
        ]
        ),
        html.Div(id='selected-row')

]

)

# @app.callback(
#     [Output('table', 'sort_column'), Output('table', 'sort_direction')],
#     [
#         Input('sort-button', 'n_clicks')
#     ]
# )
# def update_sort_column(n_clicks):
#     sort_column = random.randint(1, 3)
#     print(f'changing sort column to {sort_column}')
#     return sort_column, 'desc'

@app.callback(
    Output('selected-row', 'children'),
    [
        Input('table', 'row_click'),
        Input('table', 'selection')
    ]
)
def row_selected(row_key, selection):
    return f'You clicked on row {row_key}. Selection is {selection}'


if __name__ == '__main__':
    app.run_server(debug=True)
