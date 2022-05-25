from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_editabletext(dash_duo):
    app = import_app('tests.app.editabletext')
    dash_duo.start_server(app)

    text_input = dash_duo.find_element(".bp3-editable-text")
    dash_duo.wait_for_text_to_equal("#editabletext-value", "default value")
    dash_duo.wait_for_text_to_equal("#editabletext-confirmed-value", "")
    dash_duo.clear_input(text_input)
    dash_duo.wait_for_text_to_equal("#editabletext-value", "")

    text_input.send_keys("new value")
    dash_duo.wait_for_text_to_equal("#editabletext-value", "new value")
    dash_duo.wait_for_text_to_equal("#editabletext-confirmed-value", "")

    text_input.send_keys("foo\n")
    dash_duo.wait_for_text_to_equal("#editabletext-value", "foo")
    dash_duo.wait_for_text_to_equal("#editabletext-confirmed-value", "foo")
