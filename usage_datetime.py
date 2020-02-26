import dash_blueprint
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

import arrow

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    className="bp3-dark",
    children=[
        dash_blueprint.DatePicker(
            id="datepicker", defaultValue=arrow.now().shift(years=-4).datetime
        ),
        dash_blueprint.DateInput(
            id="dateinput", defaultValue=arrow.now().shift(years=-4).date()
        ),
        html.Div(id="output"),
        dash_blueprint.DateRangePicker(
            id="daterangepicker",
            # start_date=arrow.now().replace(years=-4).date()
        ),
        html.Div(id="date-range-output"),
        dash_blueprint.DateRangeInput(
            id="daterangeinput",
            # start_date=arrow.now().replace(years=-4).date()
        ),
        html.Div(id="date-range-input-output"),
    ],
)


@app.callback(
    Output("date-range-input-output", "children"),
    [Input("daterangeinput", "start_date"), Input("daterangeinput", "end_date")],
)
def update_date(start_date, end_date):
    print(start_date, end_date)
    return "{} - {}".format(start_date, end_date)


@app.callback(
    Output("date-range-output", "children"),
    [Input("daterangepicker", "start_date"), Input("daterangepicker", "end_date")],
)
def update_date(start_date, end_date):
    print(start_date, end_date)
    return "{} - {}".format(start_date, end_date)


@app.callback(Output("output", "children"), [Input("dateinput", "date")])
def update_date(date):
    print(date)
    return date


if __name__ == "__main__":
    app.run_server(debug=False)
