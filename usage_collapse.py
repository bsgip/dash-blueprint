
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
                ],
            buttonProps={'text': 'Overriding prop'}
                
        ),

    
    
]),
html.Div(id='output'),]

)



if __name__ == '__main__':
    app.run_server(debug=False)
