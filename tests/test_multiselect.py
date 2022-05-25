from dash.testing.application_runners import import_app


def test_render_simple_multiselect(dash_duo):

    app = import_app("tests.app.multiselect")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#select-output", "you selected [], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'multi-select': []}")

    # Click on dropdown
    dash_duo.multiple_click(".bp3-multi-select-tag-input-input", 1)
    menu_items = dash_duo.find_elements(".bp3-menu-item")

    dash_duo.multiple_click(menu_items[0], 1)
    dash_duo.wait_for_text_to_equal("#select-output", "you selected ['thing'], True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'multi-select': ['thing']}")

    dash_duo.multiple_click(menu_items[1], 1)
    dash_duo.wait_for_text_to_equal(
        "#select-output", "you selected ['thing', 'thing-2'], True"
    )
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal(
        "#formgroup-output", "{'multi-select': ['thing', 'thing-2']}"
    )

    # Now remove each tag and test that it is invalid again
    tag_removes = dash_duo.find_elements(".bp3-tag-remove")
    assert len(tag_removes) == 2

    dash_duo.multiple_click(tag_removes[0], 1)
    dash_duo.wait_for_text_to_equal("#select-output", "you selected ['thing-2'], True")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal(
        "#formgroup-output", "{'multi-select': ['thing-2']}"
    )

    # Should only be one tag remaining now
    tag_removes = dash_duo.find_elements(".bp3-tag-remove")
    assert len(tag_removes) == 1

    dash_duo.multiple_click(tag_removes[0], 1)
    dash_duo.wait_for_text_to_equal("#select-output", "you selected [], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
    dash_duo.wait_for_text_to_equal("#formgroup-output", "{'multi-select': []}")
