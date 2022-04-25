import dash_blueprint as dbp
from dash import Dash, html
from dash.dependencies import Input, Output

app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = dbp.FormGroup(
    id="formgroup",
    children=[
        dbp.Checkbox(id="checkbox-1", children="checkbox option"),
        dbp.Checkbox(
            id="checkbox-2", children="default true checkbox option", checked=True
        ),
        dbp.CheckboxGroup(
            id="checkboxgroup",
            children=[
                dbp.Checkbox(
                    id="chb1",
                    children="chk1",
                    key="c1",
                    className="bp3-inline",
                    checked=True,
                ),
                dbp.Checkbox(
                    id="chb2", children="chk2", key="c2", className="bp3-inline"
                ),
            ],
        ),
        html.Div(id="checkbox-1-output"),
        html.Div(id="checkbox-2-output"),
        html.Div(id="checkboxgroup-output"),
        html.Div(id="formgroup-output"),
    ],
)


@app.callback(
    Output("formgroup-output", "children"),
    [
        Input("formgroup", "value"),
    ],
)
def update_date(form_data):
    return str(form_data)


@app.callback(
    Output("checkbox-1-output", "children"),
    [
        Input("checkbox-1", "checked"),
    ],
)
def update_date(checked):
    return str(checked)


@app.callback(
    Output("checkbox-2-output", "children"),
    [
        Input("checkbox-2", "checked"),
    ],
)
def update_date(checked):
    return str(checked)


@app.callback(
    Output("checkboxgroup-output", "children"),
    [
        Input("checkboxgroup", "value"),
    ],
)
def update_date(form_data):
    return str(form_data)


if __name__ == "__main__":
    app.run_server(debug=True)
