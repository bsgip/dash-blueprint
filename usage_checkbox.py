import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

    dash_blueprint.Checkbox(id='checkbox', children='checkbox option'),
    dash_blueprint.Checkbox(id='checkbox-2', children='default true checkbox option', checked=True),
    html.Div(id='output'),
    html.Div(id='output-2'),

    # dash_blueprint.FormGroup(
    dash_blueprint.CheckboxGroup(
        id='formgroup',
        children=[
            dash_blueprint.Checkbox(
                id='chb1', children='chk1', key='c1', className='bp3-inline'
            ),
            dash_blueprint.Checkbox(
                id='chb2', children='chk2', key='c2', className='bp3-inline'
            ),
        ]
    ),
    html.Div(id='group-output'),


]

)

@app.callback(
    Output('group-output', 'children'),
    [
        Input('formgroup', 'value'),
        # Input('formgroup', 'childData'),  # If FormGroup
        
    ]
)
def update_date(child_data):
    print(child_data)
    return str(child_data)

@app.callback(
    Output('output', 'children'),
    [
        Input('checkbox', 'checked'),
        # Input('daterangeinput', 'end_date')
    ]
)
def update_date(checked):
    print(checked)
    return str(checked)

@app.callback(
    Output('output-2', 'children'),
    [
        Input('checkbox-2', 'checked'),
        # Input('daterangeinput', 'end_date')
    ]
)
def update_date(checked):
    print(checked)
    return str(checked)

if __name__ == '__main__':
    app.run_server(debug=False)
