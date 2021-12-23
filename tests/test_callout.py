from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_callout(dash_duo):
    app = import_app('tests.app.callout')
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(".bp3-heading", "Callout Title")
    