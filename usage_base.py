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

    dash_blueprint.ButtonGroup(
    id='button-group',
    children=[
        dash_blueprint.Tooltip(content='This does something', children=dash_blueprint.Button(
                id='button',
                children='some stuff',
                intent='danger'
            )),
        dash_blueprint.Button(
                    id='button-2',
                    children='other stuff',
                    intent='primary',
                    icon='cog'
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
                dash_blueprint.Tooltip(children=dcc.Link(href='/here', children='somewhere'), content='This is a tooltip')
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
    dash_blueprint.Tooltip(children=html.Div(children='some text'), content='This is a tooltip', targetClassName='tooltip-indicator'),
    dash_blueprint.ResizeSensor(
        id='resize-watcher',
        children=html.Div(id='current-href'),
        debounceTimer=2000
    ),
    html.Div(id='debounce-event', children='debounce'),

    dash_blueprint.Toaster(id='my-toaster'),
    dash_blueprint.Toaster(id='second-toaster', toasterId='second-toaster', position='bottom-left'),
    dash_blueprint.Toaster(id='third-toaster', position='bottom-right'),
    dash_blueprint.Icon(icon="search", iconSize=64, color='blue'),
    dash_blueprint.Spinner(size=60, value=0.7),
    dash_blueprint.RadioGroup(
        id='radiogroup',
        options=[
            {
                'label': 'One',
                'value': 'one'
            },
            {
                'label': 'Two',
                'value': 'two'
            }
        ]
    ),
    html.Div(id='radiogroup-output')
    #dash_blueprint.Popover(
    #)
]

)

@app.callback(
    Output('radiogroup-output', 'children'),
    [
        Input('radiogroup', 'value')
    ]
)
def radiogroup_select(value):
    return f'You have selected {value}'

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
    Output('my-toaster', 'toasts'),
    [
        Input('button', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    print('button clicked! - {}'.format(n_clicks))
    messages = [{'message': 'button clicked for the {}th time'.format(n_clicks),
                'action': {'text': 'go elsewhere', 'href': '/elsewhere'}
    }]
    if n_clicks is not None and n_clicks > 5 and n_clicks < 10:
        messages.append({'message': 'bonus message for clicking so many times!', 'intent': 'success'})
    elif n_clicks is not None and n_clicks > 9:
        return [{'message': 'you\'ve clicked it too many times!!!', 'intent': 'warning'}]
    return messages

@app.callback(
    Output('second-toaster', 'toasts'),
    [
        Input('button-2', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    print('button clicked! - {}'.format(n_clicks))
    messages = [{'message': '2nd button clicked for the {}th time'.format(n_clicks),
                'action': {'text': 'go somewhere', 'href': '/somewhere'}
    }]
    if n_clicks is not None and n_clicks > 5 and n_clicks < 10:
        messages.append({'message': 'bonus message for clicking so many times!', 'intent': 'success'})
    elif n_clicks is not None and n_clicks > 9:
        return [{'message': 'you\'ve clicked it too many times!!!', 'intent': 'warning'}]
    return messages


@app.callback(
    Output('third-toaster', 'toasts'),
    [
        Input('button-2', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    messages = [{'message': 'but another message shows up here',
                'action': {'text': 'crazy!', 'href': '/newurl'}
    }]
    return messages


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