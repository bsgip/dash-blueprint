from dash.testing.application_runners import import_app


def test_render_daterangeinput(dash_duo):
    
    app = import_app('tests.app.daterangeinput')
    dash_duo.start_server(app)

    date_input = dash_duo.find_elements('.bp3-input-group')
    assert len(date_input) == 2

    # FormGroup is not valid until date chosen
    dash_duo.wait_for_text_to_equal("#date-range-input-output", "[None, None], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    dash_duo.multiple_click(date_input[0], 1)

    day_selections = dash_duo.find_elements(".bp3-datepicker-day-wrapper")
    assert len(day_selections) >= 28 * 2
    assert len(day_selections) <= 35 * 2

    start_day_of_month = int(day_selections[10].text)
    end_day_of_month = int(day_selections[20].text)
    dash_duo.multiple_click(day_selections[10], 1)
    date_inputs = dash_duo.find_elements('.bp3-input-group > input')
    start_day_value = date_inputs[0].get_attribute("value")
    dash_duo.multiple_click(day_selections[20], 1)
    end_day_value = date_inputs[1].get_attribute("value")

    
    assert int(start_day_value.split("-")[-1]) == start_day_of_month
    assert int(end_day_value.split("-")[-1]) == end_day_of_month

    dash_duo.wait_for_text_to_equal("#date-range-input-output", f"['{start_day_value}', '{end_day_value}'], True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", f"{{'date-range-input': ['{start_day_value}', '{end_day_value}']}}")


    # Now cancel and reset the validation
    date_inputs = dash_duo.find_elements('.bp3-input-group > input')
    dash_duo.multiple_click(date_input[0], 1)
    day_selections = dash_duo.find_elements(".bp3-datepicker-day-wrapper")

    dash_duo.multiple_click(day_selections[10], 1)
    dash_duo.wait_for_text_to_equal("#date-range-input-output", f"[None, '{end_day_value}'], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    dash_duo.multiple_click(day_selections[20], 1)
    dash_duo.wait_for_text_to_equal("#date-range-input-output", "[None, None], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")


    
