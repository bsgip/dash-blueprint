import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card as BPCard} from '@blueprintjs/core';

const COLLAPSECARDDETAILS = 'CollapseDetails';

/**
 * A combination of Collapse and Card, this shows additional details when the card is clicked on.
 *
 * Note: because of the janky way we recreate the children, it currently does not show the
 * transition on Collapse open/close.
 */

const CollapseCard = (props) => {
    const {children, isOpen, setProps, selectCard, ...cardProps} = props;
    const [isOpenState, setIsOpenState] = useState(isOpen);

    const handleShowHide = (e) => {
        e && e.stopPropagation();
        (setProps && setProps({isOpen: !isOpen})) ||
            setIsOpenState(!isOpenState);
        selectCard && selectCard();
    };

    /**
     * In order to modify the child objects generically (both as dash components and regular
     * react components), this function inspects each child object and applies the `isOpen`
     * property to those of type CollapseDetails
     */
    const collapseChildren = (children, isOpen) => {
        return children.map((child) => {
            if (
                child.props._dashprivate_layout &&
                child.props._dashprivate_layout.type === COLLAPSECARDDETAILS
            ) {
                // Where we are modifying Dash components, find those that should be hidden
                // and apply the `isOpen` property
                child.props._dashprivate_layout.props = {
                    ...child.props._dashprivate_layout.props,
                    isOpen: isOpen,
                    key: isOpen ? 'collapse-open' : 'collapse-closed',
                    className: isOpen ? 'collapse-open' : 'collapse-closed',
                };
                child = React.cloneElement(child, {
                    key: isOpen ? 'collapse-open' : 'collapse-closed',
                });
                return child;
            } else if (
                // Handle the case where we are using pure react components
                !child.props._dashprivate_layout &&
                child.type &&
                child.type.name === COLLAPSECARDDETAILS
            ) {
                child = React.cloneElement(child, {
                    key: isOpen ? 'collapse-open' : 'collapse-closed',
                    isOpen: isOpenState,
                });
                return child;
            }
            return child;
        });
    };

    return (
        <BPCard {...cardProps} onClick={handleShowHide}>
            {collapseChildren(children, isOpen)}
        </BPCard>
    );
};

CollapseCard.defaultProps = {
    interactive: true,
};

CollapseCard.propTypes = {
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
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    n_clicks: PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    n_clicks_timestamp: PropTypes.number,

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
     * Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
     */
    elevation: PropTypes.number,

    /**
     * Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.
     */
    interactive: PropTypes.bool,

    /**
     * Whether collapsed content is shown
     */
    isOpen: PropTypes.bool,
};

export default CollapseCard;
