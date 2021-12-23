from dash import Dash, html
from dash.dependencies import Input, Output

import dash_blueprint as dbp


app = Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        dbp.Breadcrumbs(
            items=[
                {"href": "/users", "icon": "folder-close", "text": "Users"},
                {"href": "/users/janet", "icon": "folder-close", "text": "Janet"},
                {"icon": "document", "text": "image.jpg"},
            ]
        )
    ]
)

if __name__ == "__main__":
    app.run_server(debug=False)
