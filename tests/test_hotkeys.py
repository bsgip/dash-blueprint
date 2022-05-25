from dash.testing.application_runners import import_app

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_hotkeys(dash_duo):
    app = import_app('tests.app.hotkeys')
    dash_duo.start_server(app)


    ActionChains(dash_duo.driver).key_down(Keys.SHIFT).send_keys('b').key_up(Keys.SHIFT).perform()
    ActionChains(dash_duo.driver).key_down(Keys.SHIFT).send_keys('b').key_up(Keys.SHIFT).perform()

    dash_duo.wait_for_text_to_equal("#hotkey-b-result", "Hotkey B activated 2 times")

    # Hotkey A not activated as focus area not selected
    ActionChains(dash_duo.driver).key_down(Keys.SHIFT).send_keys('a').key_up(Keys.SHIFT).perform()
    dash_duo.wait_for_text_to_equal("#hotkey-a-result", "Hotkey A activated None times")

    # Hotkey A now activated
    dash_duo.multiple_click("#hotkey-a-div", 1)
    ActionChains(dash_duo.driver).key_down(Keys.SHIFT).send_keys('a').key_up(Keys.SHIFT).perform()
    dash_duo.wait_for_text_to_equal("#hotkey-a-result", "Hotkey A activated 1 times")
