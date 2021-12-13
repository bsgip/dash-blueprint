from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('usage.usage_radiogroup')
    dash_duo.start_server(app)

    radiogroups = dash_duo.find_elements('.bp3-control')
    assert len(radiogroups) == 2

    assert radiogroups[0].text == "option 1"
    dash_duo.multiple_click(radiogroups[0].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#radiogroup-output", "opt1")

    assert radiogroups[1].text == "option 2"
    dash_duo.multiple_click(radiogroups[1].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#radiogroup-output", "opt2")
