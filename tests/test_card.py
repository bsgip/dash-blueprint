from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_card(dash_duo):
    app = import_app('tests.app.card')
    dash_duo.start_server(app)

    dash_duo.multiple_click(".bp3-button", 1)
    assert not dash_duo._driver.current_url.endswith("/foo"), "Clicking button should not cause Card URL update"

    dash_duo.multiple_click(".bp3-heading", 1)
    assert dash_duo._driver.current_url.endswith("/foo"), "Clicking button should not cause Card URL update"
    