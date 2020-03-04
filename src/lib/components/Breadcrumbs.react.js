import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as BPBreadcrumbs,  Breadcrumb, Icon } from "@blueprintjs/core";

/**
 * Breadcrumbs identify the path to the current resource in an application.
 */

export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
        this.onBreadcrumbClick = this.onBreadcrumbClick.bind(this);
    };

    onBreadcrumbClick(e, href) {
        if (href && !e.metaKey) {
            // prevent anchor from updating location
            e.preventDefault();
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
            window.scrollTo(0, 0);
        }
    }

    renderBreadcrumb({text, ...restProps}) {
        return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
    }

    render() {
        this.props.items.map(item => {
            if (item.href && !item.onClick) {
                item.onClick = (e) => this.onBreadcrumbClick(e, item.href)
            }            
        });
        return (
            <BPBreadcrumbs 
                currentBreadcrumbRenderer={this.renderBreadcrumb}
                items={this.props.items}
            />
        )
    }
};

Breadcrumbs.defaultProps = {
    items: []
};

Breadcrumbs.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,


    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

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
