import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

    dash_blueprint.ButtonGroup(
    id='button-group',
    children=[
        dash_blueprint.Button(
                id='button',
                children='some stuff',
                intent='danger'
            ),
        dash_blueprint.Button(
                    id='button-2',
                    children='other stuff',
                    intent='primary'
                )
        ])
    ,
    html.Div(id='output'),
    html.Div(id='output-2'),
]

)

@app.callback(
    Output('output', 'children'),
    [
        Input('button', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    print('button clicked! - {}'.format(n_clicks))
    return n_clicks


@app.callback(
    Output('output-2', 'children'),
    [
        Input('button-2', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    print('button 2 clicked! - {}'.format(n_clicks))
    return '@2: {}'.format(n_clicks)


if __name__ == '__main__':
    app.run_server(debug=False)
