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
        dash_blueprint.Button(
                id='button',
                children='show some toasts',
                intent='danger'
            ),
        dash_blueprint.Button(
                    id='button-2',
                    children='show other toasts',
                    intent='primary'
                )
        ])
    ,

    dcc.Location(id='url', refresh=False),

    dash_blueprint.Toaster(id='first-toaster'),
    dash_blueprint.Toaster(id='second-toaster', toasterId='second-toaster', position='bottom-left'),
    dash_blueprint.Toaster(id='third-toaster-same-as-first', position='bottom-right'),
]

)


@app.callback(
    Output('first-toaster', 'toasts'),
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
    Output('third-toaster-same-as-first', 'toasts'),
    [
        Input('button-2', 'n_clicks')
    ]
)
def button_clicked(n_clicks):
    messages = [{'message': 'but another message shows up here',
                'action': {'text': 'crazy!', 'href': '/newurl'}
    }]
    return messages



if __name__ == '__main__':
    app.run_server(debug=False)
