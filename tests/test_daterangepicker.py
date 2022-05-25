from dash.testing.application_runners import import_app


def get_elements_with_text(dash_duo, selector, text):
    return [
        element for element in dash_duo.find_elements(selector) if element.text == text
    ]


def test_render_daterangeinput(dash_duo):

    app = import_app("tests.app.daterangepicker")
    dash_duo.start_server(app)

    date_input = dash_duo.find_elements(".bp3-input-group")
    assert len(date_input) == 2

    # FormGroup is not valid until date chosen
    dash_duo.wait_for_text_to_equal("#date-range-picker-output", "[None, None], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    dash_duo.multiple_click(date_input[0], 1)

    year = int(
        dash_duo.find_element(".bp3-datepicker-year-select > select").get_attribute(
            "value"
        )
    )
    month = (
        int(
            dash_duo.find_element(
                ".bp3-datepicker-month-select > select"
            ).get_attribute("value")
        )
        + 1
    )

    day_selections = dash_duo.find_elements(".bp3-datepicker-day-wrapper")
    assert len(day_selections) >= 28 * 2
    assert len(day_selections) <= 35 * 2 + 7

    start_day = 10
    end_day = 20
    start_day_input = get_elements_with_text(
        dash_duo, ".bp3-datepicker-day-wrapper", "10"
    )[0]
    end_day_input = get_elements_with_text(
        dash_duo, ".bp3-datepicker-day-wrapper", "20"
    )[0]
    dash_duo.multiple_click(start_day_input, 1)

    # start_day_value = date_inputs[0].get_attribute("value")
    dash_duo.multiple_click(end_day_input, 1)
    # end_day_value = date_inputs[1].get_attribute("value")

    date_inputs = dash_duo.find_elements(".bp3-input-group > input")
    # dash_duo.wait_for_text_to_equal(date_inputs[0], f"{year:04d}-{month:02d}-{start_day:02d}")
    assert (
        date_inputs[0].get_attribute("value")
        == f"{year:04d}-{month:02d}-{start_day:02d}"
    )
    # dash_duo.wait_for_text_to_equal(date_inputs[1], f"{year:04d}-{month:02d}-{end_day:02d}")
    assert (
        date_inputs[1].get_attribute("value") == f"{year:04d}-{month:02d}-{end_day:02d}"
    )

    dash_duo.wait_for_text_to_equal(
        "#date-range-picker-output",
        f"['{year:04d}-{month:02d}-{start_day:02d}', '{year:04d}-{month:02d}-{end_day:02d}'], True",
    )
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "True")
    dash_duo.wait_for_text_to_equal(
        "#formgroup-output",
        f"{{'date-range-input': ['{year:04d}-{month:02d}-{start_day:02d}', '{year:04d}-{month:02d}-{end_day:02d}']}}",
    )

    # Now cancel and reset the validation
    date_inputs = dash_duo.find_elements(".bp3-input-group > input")
    dash_duo.multiple_click(date_input[0], 1)
    start_day_input = get_elements_with_text(
        dash_duo, ".bp3-datepicker-day-wrapper", "10"
    )[0]
    end_day_input = get_elements_with_text(
        dash_duo, ".bp3-datepicker-day-wrapper", "20"
    )[0]

    dash_duo.multiple_click(start_day_input, 1)
    dash_duo.wait_for_text_to_equal(
        "#date-range-picker-output",
        f"[None, '{year:04d}-{month:02d}-{end_day:02d}'], False",
    )
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")

    dash_duo.multiple_click(end_day_input, 1)
    dash_duo.wait_for_text_to_equal("#date-range-picker-output", "[None, None], False")
    dash_duo.wait_for_text_to_equal("#formgroup-valid", "False")
