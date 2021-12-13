import json

import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.FormGroup(
            id="formgroup",
            children=[
                dbp.Switch(id="switch", children="switch option"),
                dbp.Switch(
                    id="switch-2", children="default true switch option", checked=True
                ),
            ]
        ),
        
        html.Div(id="switch-output"),
        html.Div(id="switch-2-output"),
        html.Div(id="formgroup-output-validation"),
        html.Div(id="formgroup-output"),
        
    ]
)



@app.callback(Output("switch-output", "children"), [Input("switch", "checked")])
def update_date(checked):
    return str(checked)


@app.callback(Output("switch-2-output", "children"), [Input("switch-2", "checked")])
def update_date(checked):
    return str(checked)

@app.callback(Output("formgroup-output", "children"), [Input("formgroup", "value")])
def update_date(child_data):
    return str(child_data)

@app.callback(Output("formgroup-output-validation", "children"), [Input("formgroup", "valid")])
def update_date(valid):
    return str(valid)

if __name__ == "__main__":
    app.run_server(debug=False)
