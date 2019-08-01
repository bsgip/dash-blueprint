import json

import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dash_blueprint.Tree(id='tree', key='tree'),
    html.Div(id='group-output'),


]

)


if __name__ == '__main__':
    app.run_server(debug=False)
