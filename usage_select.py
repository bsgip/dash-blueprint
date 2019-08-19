import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

from time import sleep

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

    # dash_blueprint.OmnibarAsync(id='omnibar',
    # label="Async search",
    # combo="shift + s",
    # items=[
    #     {'value': 'thing', 'label': 'Thing', 'sub': 'another'},
    #     {'value': 'thing-2', 'label': 'Second Thing', 'sub': '2nd', 'href': '/blah/thing'}
    # ]),

    # html.Div(id='output'),

    # dash_blueprint.Omnibar(id='omnibar-select',
    #     label="Sync select",
    #     combo="shift + o",
    #     items=[
    #         {'value': 'thing', 'label': 'Thing', 'sub': 'another'},
    #         {'value': 'thing-2', 'label': 'Second Thing', 'sub': '2nd', 'href': '/blah/thing'}
    #     ]),

    dash_blueprint.Select(id='simple-select',
        # label="Simple select",
        items=[
            {'value': 'thing', 'label': 'Thing', 'sub': 'another'},
            {'value': 'thing-2', 'label': 'Second Thing', 'sub': '2nd', 'href': '/blah/thing'}
        ],
        value='thing',
        # filterable=False,
        ),
        html.Div(id='simple-select-output')


]

)

@app.callback(
    Output('simple-select-output', 'children'),
    [
        Input('simple-select', 'value')
    ]
)
def update_output(value):
    return 'you selected {}'.format(value)


# @app.callback(
#     Output('output', 'children'),
#     [
#         Input('omnibar', 'value')
#     ]
# )
# def update_output(value):
#     return 'you selected {}'.format(value)


# @app.callback(
#     Output('omnibar', 'items'),
#     [
#         Input('omnibar', 'query')
#     ]
# )
# def update_output(query):
#     print('searching for {}'.format(query))
#     sleep(0.8)
#     return [{'value': 'returned value', 'label': 'returned label ' + query or 'none', 'sub': 'sub', 'icon': 'history'}]


if __name__ == '__main__':
    app.run_server(debug=False)
