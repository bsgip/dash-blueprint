import React from 'react';
import PropTypes from 'prop-types';
import { MenuDivider as BPMenuDivider } from "@blueprintjs/core";



const MenuDivider = (props) => {
    return (
        <BPMenuDivider {...props}/>
    );
};

MenuDivider.defaultProps = {
    tagName: 'div'
};

MenuDivider.propTypes = {
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
     * Optional header title.
     */
    'title': PropTypes.string,

};

export default MenuDivider;