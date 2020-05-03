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



def histogram(
    count, MAX_COUNT=200
):
    progress_bars = []
    width = int(count / MAX_COUNT * 100)
    if count > MAX_COUNT:
        className = "bp3-progress-meter bp3-histogram-contracted"
    else:
        className = "bp3-progress-meter"
    progress_bars.append(
        html.Div(
            className=className,
            style={
                "width": f"{width}%",
            #     "left": f"{0}%",
            #     "background-color": "#0f9960",
            #     "border-radius": "0px",
            },
        )
    )
    return html.Div(
        className="bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram",
        children=progress_bars,
    )


rows = []
for i in range(2000):
    count = random.randint(100, 230)
    rows.append(
        dash_blueprint.Tr(
            rowKey=f"{i}",
            key=f"{i}",
            className="someclass",
            children=[
                html.Td(dash_blueprint.Text(f"TRANSFORMER{i}", ellipsize=True)),
                html.Td(count),
                html.Td(histogram(count)),
            ],
        )
    )


app.layout = html.Div(
    className="bp3-dark",
    children=[
        dash_blueprint.Button(
            id="sort-button", minimal=True, small=True, icon="chevron-down"
        ),
        dash_blueprint.HTMLTable(
            id="table",
            # sort_column=0,
            selectable=True,
            # filter_columns=[False, True, True],
            # sort_columns=[True, False],
            interactive=True,
            condensed=True,
            show_more_less=True,
            page_size=10,
            show_more_size=100,
            children=[
                html.Thead(
                    key="head",
                    children=[
                        # html.Th(["Link"]),
                        # html.Th("Element"),
                        # html.Th(html.Span(["V", html.Sub("min")])),
                        # html.Th("Voltage Range"),
                        # html.Th(html.Span(["V", html.Sub("max")])),
                    ]
                ),
                html.Tbody(children=rows, key="body"),
            ],
        ),
        html.Div(id="selected-row"),
    ],
)


# @app.callback(
#     Output("selected-row", "children"),
#     [Input("table", "row_click"), Input("table", "selection")],
# )
# def row_selected(row_key, selection):
#     return f"You clicked on row {row_key}. Selection is {selection}"


if __name__ == "__main__":
    app.run_server(debug=True)
