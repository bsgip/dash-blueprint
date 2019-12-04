import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable } from "@blueprintjs/core";


/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */

const HTMLTable = (props) => {
    return (

        <BPHTMLTable {...props} >
            {props.children}
        </BPHTMLTable>
    );
};

HTMLTable.defaultProps = {
    
};

HTMLTable.propTypes = {
    // TODO
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
     * Enables borders between rows and cells.
     */
    bordered: PropTypes.bool,

    /**
     * Use small, condensed appearance.
     */
    condensed: PropTypes.bool,

    /**
     * Enables hover styles on row.
     */
    interactive: PropTypes.bool,

    /**
     * Use small, condensed appearance for this element and all child elements.
     */
    small: PropTypes.bool,

    /**
     * Use an alternate background color on odd rows.
     */
    striped: PropTypes.bool,



};

export default HTMLTable;