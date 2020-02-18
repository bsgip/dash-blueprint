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
    dash_blueprint.Breadcrumbs(
        items=[
            {
                "href": "/users",
                "icon": "folder-close",
                "text": "Users"
            },
            {
                "href": "/users/janet",
                "icon": "folder-close",
                "text": "Janet"
            },
            {
                # "href": "/document",
                "icon": "documeent",
                "text": "image.jpg"
            },
        ]
    )


]

)

if __name__ == '__main__':
    app.run_server(debug=False)
