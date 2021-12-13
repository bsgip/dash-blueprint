from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_and_update_switch(dash_duo):
    app = import_app('tests.app.switch')
    dash_duo.start_server(app)

    radiogroups = dash_duo.find_elements('.bp3-control')
    assert len(radiogroups) == 2

    
    dash_duo.wait_for_text_to_equal("#switch-output", "False")
    dash_duo.multiple_click(radiogroups[0].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#switch-output", "True")

    dash_duo.wait_for_text_to_equal("#switch-2-output", "True")
    dash_duo.multiple_click(radiogroups[1].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#switch-2-output", "False")


def test_render_switches_in_formgroup(dash_duo):
    app = import_app('tests.app.switch')
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#formgroup-output-validation", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'switch': False, 'switch-2': True}")

    radiogroups = dash_duo.find_elements('.bp3-control')

    dash_duo.multiple_click(radiogroups[0].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'switch': True, 'switch-2': True}")

    dash_duo.multiple_click(radiogroups[1].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'switch': True, 'switch-2': False}")
