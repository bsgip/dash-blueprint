import React from 'react';
import PropTypes from 'prop-types';
import {Collapse as BPCollapse, Button} from '@blueprintjs/core';

/**
 * This component renders the collapsible portion of a CollapseCard. When not rendered
 * as a direct child of a CollapseCard, this component is useless as there is no way
 * to trigger it to open.
 */

const CollapseDetails = (props) => {
    const {children, isOpen, ...collapseProps} = props;
    return (
        <BPCollapse isOpen={isOpen} {...collapseProps}>
            {children}
        </BPCollapse>
    );
};

CollapseDetails.defaultProps = {
    minimal: true,
    transitionDuration: 200,
    keepChildrenMounted: false,
    isOpen: false,
};

CollapseDetails.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * Show a minimal button
     */
    minimal: PropTypes.bool,

    /**
     * Text to display for show button
     */
    showText: PropTypes.string,

    /**
     * Icon to display for show button
     */
    showIcon: PropTypes.string,

    /**
     * Text to display for hide button
     */
    hideText: PropTypes.string,

    /**
     * Icon to display for hide button
     */
    hideIcon: PropTypes.string,

    /**
     * Whether content is shown initially
     */
    isOpen: PropTypes.bool,

    /**
     * Whether the child components will remain mounted when the Collapse is closed.
     * Setting to true may improve performance by avoiding re-mounting children.
     */
    keepChildrenMounted: PropTypes.bool,

    /**
     * The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS.
     * Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
     */
    transitionDuration: PropTypes.number,

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
};

export default CollapseDetails;
