from dash import Dash, html
from dash.dependencies import Input, Output

import dash_blueprint as dbp


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Navbar(
            id="navbar",
            children=[
                dbp.NavbarGroup(
                    children=[
                        dbp.NavbarHeading(dbp.H3(["example", html.Strong("app")])),
                        dbp.NavbarDivider(),
                        dbp.Button(children="Some Button", icon="plus"),
                    ]
                ),
                dbp.NavbarGroup(
                    children=[
                        dbp.NavbarDivider(),
                        dbp.Button(icon="notifications", minimal=True),
                        dbp.Button(icon="cog", minimal=True),
                    ],
                    align="right",
                ),
            ],
        ),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False)
