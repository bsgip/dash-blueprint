import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card as BPCard} from '@blueprintjs/core';

/**
 * A card is a bounded unit of UI content with a solid background color.
 */

const Card = (props) => {
    const {
        href,
        refresh,
        preserveSearchString,
        setProps,
        children,
        ...cardProps
    } = props;
    return (
        <BPCard
            onClick={(e) => {
                if (setProps) {
                    setProps({
                        n_clicks: props.n_clicks + 1,
                        n_clicks_timestamp: Date.now(),
                    });
                }
                if (href) {
                    // prevent anchor from updating location
                    e.preventDefault();
                    const newLocation = preserveSearchString
                        ? href + window.location.search
                        : href;
                    if (refresh) {
                        window.location.pathname = newLocation;
                    } else {
                        window.history.pushState({}, '', newLocation);
                        window.dispatchEvent(
                            new CustomEvent('_dashprivate_pushstate')
                        );
                    }
                    // scroll back to top
                    window.scrollTo(0, 0);
                }
            }}
            {...cardProps}
        >
            {children}
        </BPCard>
    );
};

Card.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1,
};

Card.propTypes = {
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

Recommended when onClick is also defined.
     */
    interactive: PropTypes.bool,

    /**
     * window location to set on click
     */
    href: PropTypes.string,
};

export default Card;
