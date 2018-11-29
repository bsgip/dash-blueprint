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
            dash_blueprint.MenuItem(text='Menu Item 2', href='something', icon='history'),
            dash_blueprint.MenuItem(text='Submenu item', children=[
                dash_blueprint.MenuItem(text='SubMenu Item 1', href='sub1'),
                dash_blueprint.MenuItem(text='SubMenu Item 2', href='sub2'),
            ]),
            dcc.Link(href='Elsewhere', children='Dash Link')
        ]
    ),

    dcc.Location(id='url', refresh=False),
    dash_blueprint.ResizeSensor(
        id='resize-watcher',
        children=html.Div(id='current-href'),
        debounceTimer=2000
    ),
    html.Div(id='debounce-event', children='debounce'),

    dash_blueprint.GlobalHotkeys(),

    #dash_blueprint.Popover(
    #)
]

)


@app.callback(
    Output('debounce-event', 'children'),
    [
        Input('resize-watcher', 'size')
    ])
def display_page(size):
    print(size)
    return html.Div([
        html.H3('Size is {}'.format(size))
    ])



@app.callback(
    Output('current-href', 'children'),
    [
        Input('url', 'pathname')
    ])
def display_page(pathname):
    return html.Div([
        html.H3('You are on page {}'.format(pathname))
    ])

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
