import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dash_blueprint.Button(
        id='button',
        children='some stuff',
        intent='danger'
    ),
    html.Div(id='output')
])

@app.callback(
    Output('output', 'children'),
    [
        Input('button', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    return n_clicks


if __name__ == '__main__':
    app.run_server(debug=True)
