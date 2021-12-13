
import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output

app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    id="outer-div",
    
    children=[
        dbp.FormGroup(
            id="formgroup",
            required=True,
            children=dbp.RadioGroup(id="radiogroup", required=True, options=[
                {
                    "label": "option 1",
                    "value": "opt1"
                },
                {
                    "label": "option 2",
                    "value": "opt2"
                },
            ]),
        ),
        html.Div(id="radiogroup-output"),
        html.Div(id="formgroup-valid"),
        html.Div(id="formgroup-validation"),
    ]
)


@app.callback(Output("radiogroup-output", "children"), [Input("radiogroup", "valid")])
def update_date(value):
    return str(value)


@app.callback(Output("formgroup-validation", "children"), [Input("formgroup", "childValidation")])
def update_date(value):
    return str(value)

@app.callback(Output("formgroup-valid", "children"), [Input("formgroup", "valid")])
def update_date(value):
    return str(value)

if __name__ == "__main__":
    app.run_server(debug=True)
