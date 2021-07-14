import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

#app.config['suppress_callback_exceptions']=True

app.layout = html.Div([

    html.Div(children=[
        dash_blueprint.Sparkline()
    ])   

])


if __name__ == '__main__':
    app.run_server(debug=True)