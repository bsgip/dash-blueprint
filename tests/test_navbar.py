from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_navbar(dash_duo):
    app = import_app("tests.app.navbar")
    dash_duo.start_server(app)

    navbar_heading = dash_duo.find_elements(".bp3-navbar-heading")
    assert len(navbar_heading) == 1

    navbar_divider = dash_duo.find_elements(".bp3-navbar-divider")
    assert len(navbar_divider) == 2
