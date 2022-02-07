import React from 'react';
import PropTypes from 'prop-types';
import {NavbarHeading as BPNavbarHeading} from '@blueprintjs/core';

const NavbarHeading = (props) => {
    const {children, htmlProps} = {...props};
    return <BPNavbarHeading {...htmlProps}>{children}</BPNavbarHeading>;
};

NavbarHeading.defaultProps = {};

NavbarHeading.propTypes = {
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
};

export default NavbarHeading;
