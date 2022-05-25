from dash.testing.application_runners import import_app


def test_render_button(dash_duo):
    app = import_app("tests.app.checkbox")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#button-clicks", "None")

    button = dash_duo.find_element("#button")
    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#button-clicks", "1")

    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#button-clicks", "2")

    dash_duo.multiple_click(button, 1)
    dash_duo.wait_for_text_to_equal("#button-clicks", "3")
