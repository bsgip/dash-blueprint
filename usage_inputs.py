import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

#app.config['suppress_callback_exceptions']=True

app.layout = html.Div([
    dash_blueprint.NumericInput(id='numeric-input'),
    dash_blueprint.InputGroup(id='text-input', placeholder='Enter value here...'),
    html.Div(id='numeric-output'),
    html.Div(id='text-output'),
    
]

)


@app.callback(
    Output('numeric-output', 'children'),
    [
        Input('numeric-input', 'value')
    ]
)
def numeric_input_changed(value):
    print('button clicked! - {}'.format(value))
    return f'You have entered {value}'

@app.callback(
    Output('text-output', 'children'),
    [
        Input('text-input', 'value')
    ]
)
def text_input_changed(value):

    return f'You have entered text: {value}'


if __name__ == '__main__':
    app.run_server(debug=True)
