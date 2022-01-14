import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

import random
import json

app = dash.Dash()

USE_DATES = False

app.layout = html.Div(
    [
        dbp.RangeSelector(
            id='bubble-chart',
            margin={'left': 20, 'right': 20, 'top': 20, 'bottom': 20},
            isDate=USE_DATES,
            yLines=[220,240,260],
            selectSingle=False
        ),
        html.Div(
            [
                html.Button(id="update-data", children="Update Data", className="mr-1"),
                html.P(id='clicked-output')
            ]
        )
    ],
    style={
        "padding": "25px 50px"
    }
)


@app.callback(
    Output('bubble-chart', 'data'), 
    [Input("update-data", 'n_clicks')]
)
def change_data(n_clicks):

    colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'gray']

    n_points = random.randint(30, 288)

    import datetime

    start = datetime.datetime(2021, 1, 4)
    
    def compute_x(i):
        if USE_DATES:
            return str(start.replace(hour=5*i // 60, minute=5*i % 60))
        return 60 * i
    data = [
        {
            'id': x, 
            # 'x': str(start.replace(hour=5*x // 60, minute=5*x % 60)),
            'x': compute_x(x),
            'min': random.randint(220, 240),
            'max': random.randint(240, 253)
        } for x in range(n_points)  ]

    return data

@app.callback(
    Output('clicked-output', 'children'), 
    [Input("bubble-chart", 'selected')]
)
def click_point(datum):
    if datum is None:
        return "Click on something!"
    else:
        datum_str = json.dumps(datum)
        return datum_str

if __name__ == '__main__':
    app.run_server(debug=True)