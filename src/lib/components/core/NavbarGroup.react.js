import React from 'react';
import PropTypes from 'prop-types';
import {NavbarGroup as BPNavbarGroup} from '@blueprintjs/core';

const NavbarGroup = (props) => {
    const {children, ...htmlProps} = props;
    console.log(htmlProps);
    return <BPNavbarGroup {...htmlProps}>{children}</BPNavbarGroup>;
};

NavbarGroup.defaultProps = {
    align: 'left',
};

NavbarGroup.propTypes = {
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
     * The side of the navbar on which the group should appear. The Alignment enum provides constants for these values.
     * One of (`left`, `center`, `right`)
     */
    align: PropTypes.string,
};

export default NavbarGroup;
