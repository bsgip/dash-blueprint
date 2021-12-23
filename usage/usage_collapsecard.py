import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dash_blueprint.CollapseCard(
            id="button",
            children=[
                html.Div("Some header info"),
                dash_blueprint.CollapseDetails("A collapse thing"),
                dash_blueprint.CollapseDetails("This is also collapsed"),
            ],
            interactive=True,
            elevation=4,
        ),
        dash_blueprint.CollapseCard(
            id="collapse-card-1",
            key="1",
            children=[
                dash_blueprint.H6("Some header info"),
                html.Span("some other text"),
                dash_blueprint.CollapseDetails(
                    keepChildrenMounted=False,
                    children=[
                        html.Div("A collapse thing"),
                        dash_blueprint.Button("A button"),
                    ],
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
                dash_blueprint.CollapseDetails("Another collapse thing"),
            ],
            interactive=True,
            elevation=4,
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=False)
