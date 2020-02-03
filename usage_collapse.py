
import time
import dash_blueprint
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(id='main-div',
children=[html.Div(id='header-div',

    children=[
        html.Span('Heading'),
        dash_blueprint.Collapse(
            id='collapse',
            showText='SomeHeader',
            hideText='SomeHeader',
            showIcon=None,
            hideIcon=None,
            showRightIcon="small-plus",
            hideRightIcon=None,
            keepChildrenMounted=True,
            isOpen=True,
            children=[
                dash_blueprint.Button(
                        id='button',
                        children='Open Drawer',
                        intent='danger'
                    ),
                dash_blueprint.Button(
                            id='button-2',
                            children='Create drawer',
                            intent='primary'
                        ),
                html.Div('some text here')
                ]
                
        ),

    
    
]),
html.Div(id='output'),]

)



# @app.callback(
#     Output('drawer-right', 'isOpen'),
#     [
#         Input('button', 'n_clicks')
#     ]
# )
# def open_drawer(n_clicks):
#     if n_clicks:
#         return True

# @app.callback(
#     Output('drawer-2-container', 'children'),
#     [
#         Input('button-2', 'n_clicks')
#     ]
# )
# def create_drawer(n_clicks):
#     if n_clicks is None:
#         return None
#     time.sleep(2)
#     return dash_blueprint.Drawer(
#                 id='drawer-2-right',
#                 children=[html.Div('Dynamically generated drawer')],
#                 isOpen=True
#             )

if __name__ == '__main__':
    app.run_server(debug=False)
