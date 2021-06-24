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
        dash_blueprint.ButtonGroup(
            id="button-group",
            children=[
                dash_blueprint.Button(
                    id="button", children="some stuff", intent="danger"
                ),
                dash_blueprint.Button(
                    id="button-2", children="other stuff", intent="primary", icon="cog"
                ),
            ],
        ),
        html.Div(id="output"),
        html.Div(id="output-2"),
        dash_blueprint.Popover(
            children=[
                dash_blueprint.Button(children="open"),
                html.Div(
                    children=[
                        dash_blueprint.Button(
                            id="popover-button", children="another button"
                        ),
                        dcc.Link(href="/here", children="somewhere"),
                    ]
                ),
            ]
        ),
        dash_blueprint.Menu(
            children=[
                dash_blueprint.MenuItem(text="Menu Item 1", href="elsewhere"),
                dash_blueprint.MenuItem(
                    text="", href="something", icon="history", iconSize=64, active=True
                ),
                dash_blueprint.MenuItem(
                    text="Submenu item",
                    icon="history",
                    iconSize=64,
                    active=True,
                    children=[
                        dash_blueprint.MenuItem(text="SubMenu Item 1", href="sub1"),
                        dash_blueprint.MenuItem(text="SubMenu Item 2", href="sub2"),
                    ],
                ),
                dcc.Link(href="Elsewhere", children="Dash Link"),
            ]
        ),
        dcc.Location(id="url", refresh=False),
        dash_blueprint.ResizeSensor(
            id="resize-watcher",
            children=html.Div(id="current-href"),
            debounceTimer=2000,
        ),
        html.Div(id="debounce-event", children="debounce"),
        dash_blueprint.Toaster(id="my-toaster"),
        dash_blueprint.Toaster(
            id="second-toaster", toasterId="second-toaster", position="bottom-left"
        ),
        dash_blueprint.Toaster(id="third-toaster", position="bottom-right"),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
