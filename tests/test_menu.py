from dash.testing.application_runners import import_app

from selenium.webdriver.common.action_chains import ActionChains

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_menu(dash_duo):
    app = import_app("tests.app.menu")
    dash_duo.start_server(app)

    main_menu = dash_duo.find_elements(".bp3-menu-item")
    assert len(main_menu) == 1

    # Hover over menu
    ActionChains(dash_duo._driver).move_to_element(main_menu[0]).perform()

    menu_items = dash_duo.find_elements(".bp3-menu-item")
    assert len(menu_items) == 3

    dash_duo.multiple_click(menu_items[1], 1)
    assert dash_duo._driver.current_url.endswith("/sub1")
