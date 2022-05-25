from dash.testing.application_runners import import_app


def test_render_simple_radiogroup(dash_duo):
    
    app = import_app('tests.app.radiogroup')
    dash_duo.start_server(app)

    radiogroups = dash_duo.find_elements('.bp3-control')
    assert len(radiogroups) == 2

    # FormGroup is not valid until button clicked
    dash_duo.wait_for_text_to_equal("#formgroup-output", "False")

    assert radiogroups[0].text == "option 1"
    dash_duo.multiple_click(radiogroups[0].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#radiogroup-output", "opt1")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "True")

    assert radiogroups[1].text == "option 2"
    dash_duo.multiple_click(radiogroups[1].find_element_by_tag_name("span"), 1)
    dash_duo.wait_for_text_to_equal("#radiogroup-output", "opt2")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "True")
