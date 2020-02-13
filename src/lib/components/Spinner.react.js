import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as BPSpinner } from "@blueprintjs/core";


const Spinner = (props) => {
    return <BPSpinner {...props} />;
};

Spinner.defaultProps = {
    
};

Spinner.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

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
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * numberSpinner.SIZE_STANDARD = 50
     * 
     * Width and height of the spinner in pixels. The size cannot be less than 10px.
     * 
     * Constants are available for common sizes:
     * Spinner.SIZE_SMALL = 20px
     * Spinner.SIZE_STANDARD = 50px
     * Spinner.SIZE_LARGE = 100px
     */
    size: PropTypes.number,

    /**
     * HTML tag for the two wrapper elements. If rendering a <Spinner> inside an <svg>, change this to an SVG element like "g".
     */
    tagName: PropTypes.string,

    /**
     * A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.
     */
    value: PropTypes.number,
};

export default Spinner;