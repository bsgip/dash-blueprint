import React from 'react';
import PropTypes from 'prop-types';
import {MenuDivider as BPMenuDivider} from '@blueprintjs/core';

/**
 * Use MenuDivider to separate menu sections. Optionally, add a title to the divider.
 * @param {*} props
 */

const MenuDivider = (props) => {
    return <BPMenuDivider {...props} />;
};

MenuDivider.defaultProps = {};

MenuDivider.propTypes = {
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
     * Optional header title.
     */
    title: PropTypes.string,
};

export default MenuDivider;
