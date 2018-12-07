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

    dash_blueprint.DatePicker(id='datepicker',
                              defaultValue=arrow.now().replace(years=-4).datetime),

    dash_blueprint.DateInput(id='dateinput',
                                  defaultValue=arrow.now().replace(years=-4).date()),
    html.Div(id='output')

]

)


@app.callback(
    Output('output', 'children'),
    [
        Input('dateinput', 'date')
    ]
)
def update_date(date):
    print(date)
    return date


if __name__ == '__main__':
    app.run_server(debug=False)
