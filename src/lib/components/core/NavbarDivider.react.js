import React from 'react';
import PropTypes from 'prop-types';
import {NavbarDivider as BPNavbarDivider} from '@blueprintjs/core';

const NavbarDivider = (props) => {
    return <BPNavbarDivider {...props} />;
};

NavbarDivider.defaultProps = {};

NavbarDivider.propTypes = {
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
};

export default NavbarDivider;
