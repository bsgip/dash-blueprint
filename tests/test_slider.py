from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_and_update_slider(dash_duo):
    app = import_app("tests.app.slider")
    dash_duo.start_server(app)

    slider_labels = dash_duo.find_elements(".bp3-slider-label")
    assert len(slider_labels) == 7

    dash_duo.wait_for_text_to_equal("#slider-output", "20")
    dash_duo.multiple_click(slider_labels[3], 1)
    dash_duo.wait_for_text_to_equal("#slider-output", "60")


def test_render_slider_in_formgroup(dash_duo):
    app = import_app("tests.app.slider")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#formgroup-output-validation", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'slider': 20}")

    slider_labels = dash_duo.find_elements(".bp3-slider-label")
    assert len(slider_labels) == 7

    dash_duo.wait_for_text_to_equal("#slider-output", "20")
    dash_duo.multiple_click(slider_labels[3], 1)
    dash_duo.wait_for_text_to_equal("#slider-output", "60")

    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'slider': 60}")
