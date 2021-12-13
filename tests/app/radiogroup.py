
import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output

app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    id="outer-div",
    children=[
        dbp.RadioGroup(id="radiogroup", options=[
            {
                "label": "option 1",
                "value": "opt1"
            },
            {
                "label": "option 2",
                "value": "opt2"
            },
        ]),
        html.Div(id="radiogroup-output"),
    ]
)


@app.callback(Output("radiogroup-output", "children"), [Input("radiogroup", "value")])
def update_date(value):
    return str(value or "")


if __name__ == "__main__":
    app.run_server(debug=True)
