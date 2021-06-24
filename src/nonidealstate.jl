# AUTO GENERATED FILE - DO NOT EDIT

export nonidealstate

"""
    nonidealstate(;kwargs...)
    nonidealstate(children::Any;kwargs...)
    nonidealstate(children_maker::Function;kwargs...)


A NonIdealState component.
Non-ideal UI states inform the user that some content is unavailable. There are several types of non-ideal states, including:

Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.

Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.

Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next.
@param {*} props
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `aria-*` (String; optional): A wildcard aria attribute
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `data-*` (String; optional): A wildcard data attribute
- `description` (String; optional): A longer description of the non-ideal state. A string or 
number value will be wrapped in a <div> to preserve margins.
- `icon` (String; optional): The name of a Blueprint icon or a JSX Element (such as <Spinner/>) to render above the title.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `role` (String; optional): The ARIA role attribute
- `title` (String; optional): The title of the non-ideal state.
"""
function nonidealstate(; kwargs...)
        available_props = Symbol[:children, :id, :className, :description, :icon, :key, :role, :title]
        wild_props = Symbol[Symbol("aria-"), Symbol("data-")]
        return Component("nonidealstate", "NonIdealState", "dash_blueprint", available_props, wild_props; kwargs...)
end

nonidealstate(children::Any; kwargs...) = nonidealstate(;kwargs..., children = children)
nonidealstate(children_maker::Function; kwargs...) = nonidealstate(children_maker(); kwargs...)

