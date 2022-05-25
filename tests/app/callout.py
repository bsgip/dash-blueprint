from dash import Dash, html
from dash.dependencies import Input, Output

import dash_blueprint as dbp


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Callout(
            title="Callout Title",
            intent="warning",
            children=[
                "Some callout information",
                dbp.Button(children="Here is a button in the callout")
            ]
        )
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False)
