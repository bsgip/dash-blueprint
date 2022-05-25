from dash.testing.application_runners import import_app

def get_elements_with_text(dash_duo, selector, text):
    return [element for element in dash_duo.find_elements(selector) if element.text == text]

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
    assert len(day_selections) <= 7 * 6

    day_input = get_elements_with_text(dash_duo, ".bp3-datepicker-day-wrapper", "10")[0]
    day_of_month = 10
    dash_duo.multiple_click(day_input, 1)

    year = int(dash_duo.find_element(".bp3-datepicker-year-select > select").get_attribute("value"))
    month = int(dash_duo.find_element(".bp3-datepicker-month-select > select").get_attribute("value")) + 1

    date_input = dash_duo.find_element('.bp3-input-group > input')
    date_value = date_input.get_attribute("value")
    assert int(date_value.split("-")[-1]) == day_of_month

    dash_duo.wait_for_text_to_equal("#date-input-output", f"{date_value}, True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", f"{{'date-input': '{date_value}'}}")
    
