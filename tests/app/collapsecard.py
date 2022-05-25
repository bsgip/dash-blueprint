import dash_blueprint as dbp
from dash import Dash, html

app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.CollapseCard(
            id="collapse-card-1",
            key="1",
            children=[
                dbp.H6("Some header info"),
                html.Span("some other text"),
                dbp.CollapseDetails(
                    keepChildrenMounted=False,
                    children=[
                        html.Div(className="collapsed-div", children="This div is initially collapsed"),
                        dbp.Button("A button"),
                    ],
                ),
                html.Div("Another div in the card")
            ],
            elevation=4,
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=False)
