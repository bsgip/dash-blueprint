from dash import Dash, html
from dash.dependencies import Input, Output

import dash_blueprint as dbp


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Card(
            elevation=2,
            interactive=True,
            href="/foo",
            children=[
                dbp.H4("Card Title"),
                "Some card information",
                dbp.Button(children="Here is a button in the card")
            ]
        )
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False)
