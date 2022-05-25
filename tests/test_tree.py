import time

from dash.testing.application_runners import import_app

# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_and_update_switch(dash_duo):
    app = import_app("tests.app.tree")
    dash_duo.start_server(app)

    nodes = dash_duo.find_elements(".bp3-tree-node")
    assert len(nodes) == 6

    dash_duo.wait_for_text_to_equal("#tree-output", "None")
    dash_duo.multiple_click(nodes[2], 1)
    dash_duo.wait_for_text_to_equal("#tree-output", "2")

    carets = dash_duo.find_elements(".bp3-tree-node-caret")
    assert len(carets) == 4

    dash_duo.multiple_click(carets[2], 1)
    time.sleep(2)
    nodes = dash_duo.find_elements(".bp3-tree-node")
    assert len(nodes) == 9

    dash_duo.multiple_click(carets[2], 1)
    time.sleep(2)
    nodes = dash_duo.find_elements(".bp3-tree-node")
    assert len(nodes) == 6
