import dash_blueprint
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    id="main-div",
    children=[
        dash_blueprint.Hotkey(id="hotkey-b", combo="shift + b"),
        dash_blueprint.Hotkey(
            id="hotkey-a",
            combo="shift + a",
            globalTrigger=False,
            children=[
                html.Div(id="hotkey-a-div", children="Hotkey A enabled if this is focused"),
                html.Div(id="hotkey-a-result"),
            ],
        ),
        html.Div(id="hotkey-b-result")
    ],
)


@app.callback(Output("hotkey-a-result", "children"), [Input("hotkey-a", "n_presses")])
def button_clicked(n_presses):
    return "Hotkey A activated {} times".format(n_presses)


@app.callback(Output("hotkey-b-result", "children"), [Input("hotkey-b", "n_presses")])
def button_clicked(n_presses):
    return "Hotkey B activated {} times".format(n_presses)

if __name__ == "__main__":
    app.run_server(debug=False)
