import json

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

    # dash_blueprint.FormGroup(id='formgroup', children=[
    #     dash_blueprint.DatePicker(id='datepicker',
    #                             defaultValue=arrow.now().replace(years=-4).datetime),

    #     dash_blueprint.DatePicker(id='dateinput',
    #                                 defaultValue=arrow.now().replace(years=-4).date()),
        

    #     # dash_blueprint.DateRangePicker(id='daterangepicker',
    #     #                                 #start_date=arrow.now().replace(years=-4).date()
    #     #                                 ),

        

    #     # dash_blueprint.DateRangeInput(id='daterangeinput',
    #     #                                     #start_date=arrow.now().replace(years=-4).date()
    #     #                                     ),

        
    # ]),
    dash_blueprint.FormGroup(
                id='formgroup',
                label='Group of Switches',
                children=[
                    dash_blueprint.Switch(
                        id='chb1', children=html.I('switch 1'), key='c1', className='bp3-inline', checked=True
                    ),
                    dash_blueprint.Switch(
                        id='chb2', children='switch 2', key='c2', className='bp3-inline',
                        # style={'display': 'none'}
                    ),
                    html.Hr(),
                ]
            ),
    html.Div(id='date-range-input-output'),
    html.Div(id='date-range-output'),
    html.Div(id='output'),


]

)



@app.callback(
    Output('output', 'children'),
    [
        Input('formgroup', 'childData'),
        # Input('daterangeinput', 'end_date')
    ]
)
def update_date(child_data):
    print(child_data)
    return json.dumps(child_data)

# @app.callback(
#     Output('date-range-output', 'children'),
#     [
#         Input('daterangepicker', 'start_date'),
#         Input('daterangepicker', 'end_date')
#     ]
# )
# def update_date(start_date, end_date):
#     print(start_date, end_date)
#     return '{} - {}'.format(start_date, end_date)


# @app.callback(
#     Output('output', 'children'),
#     [
#         Input('dateinput', 'date')
#     ]
# )
# def update_date(date):
#     print(date)
#     return date


if __name__ == '__main__':
    app.run_server(debug=False)
