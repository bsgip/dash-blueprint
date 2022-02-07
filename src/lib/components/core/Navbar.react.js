import React from 'react';
import PropTypes from 'prop-types';
import {Navbar as BPNavbar} from '@blueprintjs/core';

/**
 * Navbars present useful navigation controls at the top of an application.
 * @param {*} props
 */

const Navbar = (props) => {
    const {children, htmlProps} = {...props};
    return <BPNavbar {...htmlProps}>{children}</BPNavbar>;
};

Navbar.defaultProps = {
    fixedToTop: false,
};

Navbar.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * Whether this navbar should be fixed to the top of the viewport (using CSS position: fixed).
     */
    fixedToTop: PropTypes.bool,
};

export default Navbar;
