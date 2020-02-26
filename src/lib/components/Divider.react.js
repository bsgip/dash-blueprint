import React from 'react';
import PropTypes from 'prop-types';
import { Divider as BPDivider } from "@blueprintjs/core";

/**
 * Divider visually separate contents with a thin line and margin on all sides.
 * 
 * Dividers work best in flex layouts where they will adapt to orientation without additional 
 * styles. Otherwise, a divider will appear as a full-width 1px-high block element.
 */

const Divider = (props) => {
    return (
        <BPDivider {...props}/>
    );
};

Divider.defaultProps = {
    tagName: 'div'
};

Divider.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    'className': PropTypes.string,

    /**
     * HTML tag to use for element.
     */
    'tagName': PropTypes.string,

};

export default Divider;