import React from 'react';
import PropTypes from 'prop-types';
import { NonIdealState as BPNonIdealState } from "@blueprintjs/core";


/**
 * Non-ideal UI states inform the user that some content is unavailable. There are several types of non-ideal states, including:
 * 
 * Empty state: a container has just been created and has no data in it yet, or a container's contents have been intentionally removed.
 * 
 * Loading state: a container is awaiting data. A good practice is to show a spinner for this state, with optional explanatory text below the spinner.
 * 
 * Error state: something went wrong (for instance, 404 and 500 HTTP errors). In this case, a good practice is to add a call to action directing the user what to do next.
 * @param {*} props 
 */

const NonIdealState = (props) => {
    const {children, ...htmlProps} = props;
    return (
        <BPNonIdealState {...htmlProps} >
            {children}
        </BPNonIdealState>
    );
};

NonIdealState.defaultProps = {
};

NonIdealState.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,


    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,


    

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * A longer description of the non-ideal state. A string or 
     * number value will be wrapped in a <div> to preserve margins.
     */
    description: PropTypes.string,

    /**
     * The name of a Blueprint icon or a JSX Element (such as <Spinner/>) to render above the title.
     */
    icon: PropTypes.string,

    /**
     * The title of the non-ideal state.
     */
    title: PropTypes.string,



    



};

export default NonIdealState;