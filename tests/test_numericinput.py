from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_editabletext(dash_duo):
    app = import_app('tests.app.numericinput')
    dash_duo.start_server(app)

    
    dash_duo.wait_for_text_to_equal("#numericinput-value", "")
    dash_duo.wait_for_text_to_equal("#numericinput-valid", "False")
    # dash_duo.wait_for_text_to_equal("#formgroup-output", "{'numericinput': None}")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
    numeric_input = dash_duo.find_element("#numericinput")
    dash_duo.clear_input(numeric_input)


    numeric_input.send_keys("50")
    dash_duo.wait_for_text_to_equal("#numericinput-value", "50")
    dash_duo.wait_for_text_to_equal("#numericinput-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'numericinput': 50}")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")

