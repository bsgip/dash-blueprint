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

    dash_blueprint.EditableText(id='text', placeholder='type some text here', multiline=True),
    
    html.Div(id='output'),
    html.Div(id='output-2'),


]

)


@app.callback(
    Output('output', 'children'),
    [
        Input('text', 'value'),
    ]
)
def update_date(value):
    print(value)
    return str(value)

@app.callback(
    Output('output-2', 'children'),
    [
        Input('text', 'confirmedValue'),
    ]
)
def update_date(value):
    print(value)
    return 'Confirmed: ' + str(value)


if __name__ == '__main__':
    app.run_server(debug=False)
