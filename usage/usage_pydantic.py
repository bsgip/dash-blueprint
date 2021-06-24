import dash_blueprint as dbp
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

from typing import List
from pydantic.dataclasses import dataclass
import dataclasses

@dataclass
class User:
    id: int
    name: str = 'John Doe'
    # friends: List[int] = dataclasses.field(default_factory=lambda: [0])

users = [
    User(1, 'John'),
    User(2, 'Jow'),
    User(3, 'James'),
]

new_field_mapping = {
    'string': dbp.InputGroup,
    'integer': dbp.NumericInput,
    'float': dbp.NumericInput,
}

view_field_mapping = {
    'string': dbp.Text,
    'integer': dbp.Text,
    'float': dbp.Text
}

list_field_mapping = {
    'string': html.Td,
    'integer': html.Td,
    'float': html.Td
}

def new_object_form(model):
    """Create fields that allow for the form entry of a new object

    Args:
        model (dataclass): Pydantic model for the object

    Returns:
        List[object]: list of dash html objects
    """
    rows = []
    for name, props in model.__pydantic_model__.schema()['properties'].items():

        rows.append(
            dbp.FormGroup(
                inline=True,
                label=props['title'],
                children=new_field_mapping[props['type']]()
            )
        )
    return dbp.FormGroup(id='user-formgroup', children=rows)

def view_object_form(model, obj):
    """Create a read-only form representation of the object

    Args:
        model (dataclass): Pydantic model for the object
        obj (object): representation of the 
    """
    rows = []
    for name, props in model.__pydantic_model__.schema()['properties'].items():
        rows.append(
            dbp.FormGroup(
                inline=True,
                label=props['title'],
                children=view_field_mapping[props['type']](children=getattr(obj, name))
            )
        )
    return dbp.FormGroup(id='user-formgroup-ro', children=rows)

def list_objects_table(model, objs):
    """Create a table of objects with values

    Args:
        model (dataclass): Pydantic model for the object
        objs (List[object]): iterable of objects to display
    """
    rows = []
    schema = model.__pydantic_model__.schema()
    display_props = list(schema['properties'].keys())
    for obj in objs:
        row = []
        for prop in display_props:
            row.append(list_field_mapping[schema['properties'][prop]['type']](children=getattr(obj, prop)))
        rows.append(dbp.Tr(row))
    return dbp.HTMLTable(
            id="table",
            sort_column=0,
            # filter_columns=[False, True, True],
            sort_columns=[True, True, True, False, True],
            # interactive=True,
            # show_more_less=True,
            children=[
                html.Thead(
                    dbp.Tr(children=[
                        html.Th(children=schema['properties'][prop]['title']) for prop in display_props
                    ])
                ),
                dbp.Tbody(children=rows),
            ],
        )


app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        
        dcc.Location(id="url", refresh=False),
        # new_object_form(User),
        # view_object_form(User, users[0]),
        list_objects_table(User, users),
        # dash_blueprint.Toaster(id="first-toaster"),
        # dash_blueprint.Toaster(
        #     id="second-toaster", toasterId="second-toaster", position="bottom-left"
        # ),
        # dash_blueprint.Toaster(
        #     id="third-toaster-same-as-first", position="bottom-right"
        # ),
    ]
)



if __name__ == "__main__":
    app.run_server(debug=True)
