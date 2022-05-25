import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumbs as BPBreadcrumbs, Breadcrumb} from '@blueprintjs/core';

/**
 * Breadcrumbs identify the path to the current resource in an application.
 *
 * On click, a Dash Breadcrumb will update the URL to the href of the given crumb.
 * Items are expected to be an array with `href` and `text` entries, e.g.
 *
 * ```
 * [{
 *     text: "Foo",
 *     href: "/foo",
 *     icon: "folder"
 * }]
 * ```
 * as well as other `Breadcrumb` options:
 * - icon
 * - iconTitle
 * - intent
 */
const Breadcrumbs = (props) => {
    const {items, ...breadcrumbsProps} = props;

    items.map((item) => {
        if (item.href && !item.onClick) {
            item.onClick = (e) => this.onBreadcrumbClick(e, item.href);
        }
    });

    const onBreacrumbClick = (e, href) => {
        if (href && !e.metaKey) {
            // prevent anchor from updating location
            e.preventDefault();
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
            window.scrollTo(0, 0);
        }
    };

    const renderBreadcrumb = ({text, ...breadcrumbProps}) => (
        <Breadcrumb {...breadcrumbProps}>{text}</Breadcrumb>
    );

    return (
        <BPBreadcrumbs
            currentBreadcrumbRenderer={renderBreadcrumb}
            items={items}
            {...breadcrumbsProps}
        />
    );
};

Breadcrumbs.defaultProps = {
    items: [],
};

Breadcrumbs.propTypes = {
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
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Which direction the breadcrumbs should collapse from: start or end.
     */
    collapseFrom: PropTypes.string,

    /**
     * All breadcrumbs to display. Breadcrumbs that do not fit in the container
     * will be rendered in an overflow menu instead.
     */
    items: PropTypes.array,

    /**
     * The minimum number of visible breadcrumbs that should never collapse into the
     * overflow menu, regardless of DOM dimensions.
     */
    minVisibleItems: PropTypes.number,

    /**
     * Props to spread to OverflowList. Note that items, overflowRenderer,
     * and visibleItemRenderer cannot be changed.
     */
    overflowListProps: PropTypes.object,

    /**
     * Props to spread to the Popover showing the overflow menu.
     */
    popoverProps: PropTypes.object,
};

export default Breadcrumbs;
