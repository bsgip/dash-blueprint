from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_breadcrumbs(dash_duo):
    app = import_app('tests.app.breadcrumbs')
    dash_duo.start_server(app)

    breadcrumbs = dash_duo.find_elements('.bp3-breadcrumb')
    assert len(breadcrumbs) == 3

    dash_duo.multiple_click(breadcrumbs[0], 1)
    assert dash_duo._driver.current_url.endswith("/users")

    # Refresh breadcrumbs list
    breadcrumbs = dash_duo.find_elements('.bp3-breadcrumb')
    
    dash_duo.multiple_click(breadcrumbs[1], 1)
    assert dash_duo._driver.current_url.endswith("/users/janet")
