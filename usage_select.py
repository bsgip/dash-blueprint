import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

    dash_blueprint.Omnibar(id='omnibar',
    items=[
        {'value': 'thing', 'label': 'Thing', 'sub': 'another'},
        {'value': 'thing-2', 'label': 'Second Thing', 'sub': '2nd', 'href': '/blah/thing'}
    ]),
    html.Div(id='output')

]

)



@app.callback(
    Output('output', 'children'),
    [
        Input('omnibar', 'value')
    ]
)
def update_output(value):
    return 'you selected {}'.format(value)

if __name__ == '__main__':
    app.run_server(debug=False)
