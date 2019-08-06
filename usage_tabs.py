import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

external_stylesheets = [
    'https://codepen.io/chriddyp/pen/bWLwgP.css',
]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True



# app.css.append_css({
#     "external_url": "https://codepen.io/chriddyp/pen/bWLwgP.css"
# })

app.layout = html.Div([
    html.Div(className="three columns", children=dash_blueprint.Tabs(id='tabs', children=[
        dash_blueprint.Tab(id='tab1', title='Tab 1', children=[
            html.Div('This is tab 1 content')
        ]),
        dash_blueprint.Tab(id='tab2', title='Tab 2', children=[
            html.Div('This is tab 2 content')
        ]),
        dash_blueprint.Tab(id='tab3', title='Tab 3', children=[
            html.Div('This is tab 3 content')
        ]),
    ])),
    html.Div(id='output'),

]

)

# @app.callback(
#     Output('output', 'children'),
#     [
#         Input('tree', 'selectedNode')
#     ]
# )
# def selected_node_data(selected_node):
#     return str(selected_node)



if __name__ == '__main__':
    app.run_server(debug=False)
