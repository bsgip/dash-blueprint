from dash import Dash, html
from dash.dependencies import Input, Output

import dash_blueprint as dbp


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Menu(
            children=[
                dbp.MenuItem(text="Top level", children=[
                    dbp.MenuItem(text="Sub Menu 1", href="/sub1"),
                    dbp.MenuItem(text="Sub Menu 2", href="/sub2"),
                ])
            ]
        )
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False)
