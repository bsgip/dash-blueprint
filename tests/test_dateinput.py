from dash.testing.application_runners import import_app


def test_render_dateinput(dash_duo):
    
    app = import_app('tests.app.dateinput')
    dash_duo.start_server(app)

    date_input = dash_duo.find_elements('.bp3-input-group')
    assert len(date_input) == 1

    # FormGroup is not valid until date chosen
    dash_duo.wait_for_text_to_equal("#date-input-output", "None, False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    dash_duo.multiple_click(date_input[0], 1)

    day_selections = dash_duo.find_elements(".bp3-datepicker-day-wrapper")
    assert len(day_selections) >= 28
    assert len(day_selections) <= 35

    day_of_month = int(day_selections[10].text)
    dash_duo.multiple_click(day_selections[10], 1)

    date_input = dash_duo.find_element('.bp3-input-group > input')
    date_value = date_input.get_attribute("value")
    assert int(date_value.split("-")[-1]) == day_of_month

    dash_duo.wait_for_text_to_equal("#date-input-output", f"{date_value}, True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", f"{{'date-input': '{date_value}'}}")
    
