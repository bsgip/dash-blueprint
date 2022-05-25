from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_editabletext(dash_duo):
    app = import_app('tests.app.inputgroup')
    dash_duo.start_server(app)

    
    dash_duo.wait_for_text_to_equal("#inputgroup-value", "")
    dash_duo.wait_for_text_to_equal("#inputgroup-valid", "False")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'inputgroup': ''}")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
    numeric_input = dash_duo.find_element("#inputgroup")
    dash_duo.clear_input(numeric_input)


    numeric_input.send_keys("50")
    dash_duo.wait_for_text_to_equal("#inputgroup-value", "50")
    dash_duo.wait_for_text_to_equal("#inputgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'inputgroup': '50'}")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")

    
    dash_duo.clear_input(numeric_input)
    dash_duo.wait_for_text_to_equal("#inputgroup-value", "")
    dash_duo.wait_for_text_to_equal("#inputgroup-valid", "False")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'inputgroup': ''}")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
    

