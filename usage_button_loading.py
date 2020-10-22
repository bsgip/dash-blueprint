# -*- coding: utf-8 -*-
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.exceptions import PreventUpdate
import dash_blueprint as dbp
import time

from dash.dependencies import Input, Output

app = dash.Dash(__name__)

def render_save_button(hidden=False):
    if hidden:
        style = {'visibility': 'hidden'}
    else:
        style = {}
    return dbp.Button(id='save-button', children='Save', style=style)

def render_edit_button(hidden=False):
    if hidden:
        style = {'visibility': 'hidden'}
    else:
        style = {}
    return dbp.Button(id='edit-button', children=dcc.Loading(id='edit-loading', children='Edit'), style=style)

app.layout = html.Div(
    children=[
        html.Div(
            className="loader-wrapper",
            children=[
                dcc.Loading(
                    html.Div(id='buttons', children=[
            render_save_button(True), render_edit_button(False)
        ]), 
        type='circle', debug=False, fullscreen=False)
            ],
            style={
    'width': '200px',
    'border': 'aliceblue',
    'border-style': 'dashed',
    'margin': '100px'
}
        )
        
    ],
)



@app.callback(
    Output('buttons', 'children'), [Input('save-button', 'n_clicks'), Input('edit-button', 'n_clicks')]
)
def update_form(save_click, edit_click):
    ctx = dash.callback_context

    if not ctx.triggered:
        button_id = 'No clicks yet'
        raise PreventUpdate
    else:
        time.sleep(100)
        button_id = ctx.triggered[0]['prop_id'].split('.')[0]
        print(button_id)
        if button_id.startswith('save'):
            return [render_edit_button(False), render_save_button(True)]
        return [render_save_button(False), render_edit_button(True)]



if __name__ == "__main__":
    app.run_server(debug=False)