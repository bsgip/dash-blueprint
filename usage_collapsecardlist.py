import dash_blueprint
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True


app.layout = html.Div(
    [
        html.Div(
            id="outer",
            children=dash_blueprint.CollapseCardList(
                id="collapse-card-list",
                selected=["1"],
                children=[
                    dash_blueprint.CollapseCard(
                        id="collapse-card-1",
                        key="1",
                        children=[
                            html.Div("Some header info"),
                            dash_blueprint.RawCollapse(
                                children=[
                                    html.Div("Div - "),
                                    html.Div("A collapse thing"),
                                ]
                            ),
                        ],
                        interactive=True,
                        elevation=4,
                    ),
                    dash_blueprint.CollapseCard(
                        id="collapse-card-2",
                        key="2",
                        children=[
                            html.Div("Another header info"),
                            dash_blueprint.RawCollapse("Another collapse thing"),
                        ],
                        interactive=True,
                        elevation=4,
                    ),
                ],
            ),
        ),
        html.Div(id="output"),
        dcc.Interval(
            id="interval-component", interval=5 * 1000, n_intervals=0  # in milliseconds
        ),
    ]
)


@app.callback(Output("output", "children"), [Input("collapse-card-list", "selected")])
def button_clicked(selected):

    return "@2: {}".format(selected)


@app.callback(
    Output("collapse-card-list", "children"),
    [Input("interval-component", "n_intervals")],
    [
        # State('collapse-card-list', 'selected')
    ],
)
def reload_list(n_intervals):  # , selected):
    # print(selected)
    return (
        # dash_blueprint.CollapseCardList(
        #     id='collapse-card-list',
        #     # key=f'{n_intervals}',
        #     selected=selected,
        #     children=
        [
            dash_blueprint.CollapseCard(
                id="collapse-card-1",
                key="1",
                children=[
                    html.Div(f"Some header info ({n_intervals})"),
                    dash_blueprint.RawCollapse("A collapse thing"),
                ],
                interactive=True,
                elevation=4,
            ),
            dash_blueprint.CollapseCard(
                id="collapse-card-2",
                key="2",
                children=[
                    html.Div("Another header info"),
                    dash_blueprint.RawCollapse(f"Another {n_intervals} collapse thing"),
                ],
                interactive=True,
                elevation=4,
            ),
        ]
        # )
    )


if __name__ == "__main__":
    app.run_server(debug=True)
