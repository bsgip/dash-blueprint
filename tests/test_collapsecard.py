from dash.testing.application_runners import import_app

def test_render_collapsecard(dash_duo):
    app = import_app('tests.app.collapsecard')
    dash_duo.start_server(app)

    dash_duo.multiple_click(".bp3-card", 1)
    dash_duo.wait_for_text_to_equal(".collapsed-div", "This div is initially collapsed")

    # The div should remain open when clicken on the button on the card
    dash_duo.multiple_click(".bp3-button", 1)
    dash_duo.wait_for_text_to_equal(".collapsed-div", "This div is initially collapsed")

    # The div should close when the card is clicked on again
    dash_duo.multiple_click(".bp3-card", 1)
    dash_duo.wait_for_no_elements(".collapsed-div")
