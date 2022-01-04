from dash.testing.application_runners import import_app


def test_render_simple_select(dash_duo):
    
    app = import_app('tests.app.select_')
    dash_duo.start_server(app)
    
    dash_duo.wait_for_text_to_equal("#select-output", "you selected None, False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    # Click on dropdown
    dash_duo.multiple_click(".bp3-button", 1)
    menu_items = dash_duo.find_elements('.bp3-menu-item')

    dash_duo.multiple_click(menu_items[0], 1)
    dash_duo.wait_for_text_to_equal("#select-output", "you selected thing, True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'simple-select': 'thing'}")

    # Click on dropdown
    dash_duo.multiple_click(".bp3-button", 1)
    menu_items = dash_duo.find_elements('.bp3-menu-item')

    dash_duo.multiple_click(menu_items[1], 1)
    dash_duo.wait_for_text_to_equal("#select-output", "you selected thing-2, True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'simple-select': 'thing-2'}")

