from dash.testing.application_runners import import_app


def test_render_datepicker(dash_duo):
    
    app = import_app('tests.app.datepicker')
    dash_duo.start_server(app)


    # FormGroup is not valid until date chosen
    dash_duo.wait_for_text_to_equal("#date-picker-output", "None, False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")


    day_selections = dash_duo.find_elements(".bp3-datepicker-day-wrapper")
    assert len(day_selections) >= 28
    assert len(day_selections) <= 35

    day = int(day_selections[10].text)
    dash_duo.multiple_click(day_selections[10], 1)

    year = int(dash_duo.find_element(".bp3-datepicker-year-select > select").get_attribute("value"))
    month = int(dash_duo.find_element(".bp3-datepicker-month-select > select").get_attribute("value")) + 1



    dash_duo.wait_for_text_to_equal("#date-picker-output", f"{year:04d}-{month:02d}-{day:02d}, True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", f"{{'date-picker': '{year:04d}-{month:02d}-{day:02d}'}}")
    
