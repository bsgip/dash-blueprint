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


new_field_mapping = {
    'string': dbp.InputGroup,
    'integer': dbp.NumericInput,
    'float': dbp.NumericInput,
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


app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        
        dcc.Location(id="url", refresh=False),
        new_object_form(User)
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
