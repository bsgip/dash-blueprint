import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

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
    dash_blueprint.Popover(
        children=[
            dash_blueprint.Button(children='open'),
            html.Div(children=[
                dash_blueprint.Button(id='popover-button', children='another button'),
                dcc.Link(href='/here', children='somewhere')
            ])
        ]
    ),
    dash_blueprint.Menu(
        children=[
            dash_blueprint.MenuItem(text='Menu Item 1', href='elsewhere'),
            dcc.Link(href='Elsewhere', children='Dash Link')
        ]
    )
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
        Input('popover-button', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    print('button 2 clicked! - {}'.format(n_clicks))
    return '@2: {}'.format(n_clicks)


if __name__ == '__main__':
    app.run_server(debug=False)
