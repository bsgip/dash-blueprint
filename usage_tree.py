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


TREE = [{
        "id": 0,
        "hasCaret": True,
        "icon": "folder-close",
        "label": "Folder 0",
    },
    {
        "id": 1,
        "icon": "folder-close",
        "isExpanded": True,
        "label": "FOLDER 1",
        "childNodes": [
            {
                "id": 2,
                "icon": "document",
                "label": "Item 0",
                "secondaryLabel": "SECONDARY"
            },
            {
                "id": 3,
                "label": "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
            },
            {
                "id": 4,
                "hasCaret": True,
                "icon": "folder-close",
                "childNodes": [
                    { "id": 5, "label": "No-Icon Item" },
                    { "id": 6, "icon": "tag", "label": "Item 1" },
                    {
                        "id": 7,
                        "hasCaret": True,
                        "icon": "folder-close",
                        "label": "Folder 3",
                        "childNodes": [
                            { "id": 8, "icon": "document", "label": "Item 0" },
                            { "id": 9, "icon": "tag", "label": "Item 1" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        "id": 2,
        "hasCaret": True,
        "icon": "folder-close",
        "label": "Super secret files",
        "disabled": True,
    },
    ]


# app.css.append_css({
#     "external_url": "https://codepen.io/chriddyp/pen/bWLwgP.css"
# })

app.layout = html.Div([
    html.Div(className="three columns", children=dash_blueprint.Tree(id='tree', key='tree', nodes=TREE)),
    html.Div(id='output'),

]

)

@app.callback(
    Output('output', 'children'),
    [
        Input('tree', 'selectedNode')
    ]
)
def selected_node_data(selected_node):
    return str(selected_node)



if __name__ == '__main__':
    app.run_server(debug=False)
