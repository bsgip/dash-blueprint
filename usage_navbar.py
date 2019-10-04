import json

import dash_blueprint as dbp
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
    dbp.Navbar(
        id='navbar',
        children=[
            dbp.NavbarGroup(
                children=[
                    dbp.NavbarHeading(dbp.H3(['c3x', html.Strong('nem')])),
                ]
            ),
            dbp.NavbarGroup(
                children=[
                    dbp.NavbarDivider(),
                    dbp.Button(icon='notifications', minimal=True),
                    dbp.Button(icon='cog', minimal=True),
                    # dbp.Button(
                    #     id='button',
                    #     children='some stuff',
                    #     intent='danger'
                    # ),
                ],
                align='right'
            ),
            dbp.NavbarGroup(
                align='right',
                children=[
                    
                    dbp.Select(
                        items=[
                            {
                                'label': state,
                                'value': state
                            } for state in ('NSW', 'SA', 'QLD', 'VIC', 'TAS')
                        ],
                        filterable=False
                    ),
                    dbp.DateInput(
                    ),
                ]
            ),
            
            
        ]
    ),
    dbp.H1(id='header', children="This is a H1 header"),
    dbp.Divider(),
    dbp.H2(id='header2', children="This is a H2 header"),
    dbp.H3(id='header3', children="This is a H3 header"),
    dbp.Divider(),
    dbp.Button(
        id='button',
        children='some stuff',
        intent='danger'
    ),
    html.Div(id='output')

]

)

# @app.callback(
#     Output('output', 'children'),
#     [
#         Input('button', 'n_clicks')
#     ]
# )
# def n_c(n_clicks):
#     return n_clicks



if __name__ == '__main__':
    app.run_server(debug=False)
