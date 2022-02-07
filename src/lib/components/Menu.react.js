import React from 'react';
import PropTypes from 'prop-types';
import {Menu as BPMenu} from '@blueprintjs/core';

/**
 * Menus display lists of interactive items.
 * @param {*} props
 */

const Menu = (props) => {
    return <BPMenu {...props}>{props.children}</BPMenu>;
};

Menu.defaultProps = {
    // TODO
};

Menu.propTypes = {
    // TODO
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,

    /**
     * The ARIA role attribute
     */
    role: PropTypes.string,

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
    className: PropTypes.string,

    /**
     * Whether the menu items in this menu should use a large appearance.
     * @default false
     */
    large: PropTypes.bool,
};

export default Menu;
