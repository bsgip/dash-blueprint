import React from 'react';
import PropTypes from 'prop-types';
// import { classNames } from "classnames";
import { ProgressBar as BPProgressBar } from "@blueprintjs/core"

const ProgressBar = (props) => {
    console.log(props);
    return <BPProgressBar 
        {...props}
    />;
};


ProgressBar.defaultProps = {
    animate: true,
    stripes: true,
};

ProgressBar.propTypes = {
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
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Whether the background should animate.
     */
    animate: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     * "none"
        | "primary"
        | "success"
        | "warning"
        | "danger"
     */
    intent: PropTypes.string,

    /**
     * Whether the background should be striped.
     */
    stripes: PropTypes.bool,

    /**
     * A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.
     */
    value: PropTypes.number,

};

export default ProgressBar;