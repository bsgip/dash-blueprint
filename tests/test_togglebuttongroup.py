from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_togglebuttongroup(dash_duo):
    app = import_app("tests.app.togglebuttongroup")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#tbg-value", "")

    button = dash_duo.find_element("#button")
    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#tbg-value", "a")

    button = dash_duo.find_element("#button-2")
    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#tbg-value", "b")

    button = dash_duo.find_element("#button-3")
    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#tbg-value", "c")
