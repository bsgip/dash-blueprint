import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable } from "@blueprintjs/core";

var _ = require('lodash');

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */
export default class HTMLTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(key) {
        console.log(key + ' row clicked');
        this.props.setProps({row_click: key});
    }

    render() {
        console.log('re-rendering table');
        console.log(this.props.sort_column);
        
        const { sort_column, children, displayLimit, pageNumber, ...tableProps } = {...this.props};
        const clonedTbody = React.cloneElement(children[children.length - 1]);
        console.log(clonedTbody);
        let sortMultiplier = this.props.sort_direction === 'desc' ? -1 : 1;
        if (children.length > 1) {
            // Add an on-click method to each row
            children[children.length - 1].props._dashprivate_layout.props.children.map(row => {
                row.props.onClick = () => this.handleRowClick(row.props.key)
            });
            if (typeof sort_column === "number") {
                children[children.length - 1].props._dashprivate_layout.props.children.sort((a, b) => {
                    
                    let x = a.props.children[sort_column].props.children;
                    let y = b.props.children[sort_column].props.children;
                    // Go one level deep if this is still an object
                    if (typeof x === "object") {
                        x = x.props.children;
                    }
                    if ( typeof y === "object" ) {
                        y = y.props.children;
                    }
                    if (typeof x === "string") {
                        x = x.toLowerCase();
                        y = y.toLowerCase();
                        if (x < y) {
                            return -1 * sortMultiplier;
                        }
                        if (x > y) {
                            return 1 * sortMultiplier;
                        }
                        return 0;
                    };
                    if (typeof x === "number") {
                        return (x - y) * sortMultiplier;
                    };
                });
            }
        };
        // deep clone causes maximum call stack size to be exceeded??
        // var clone = _.cloneDeep(clonedTbody);
        // clone.props._dashprivate_layout.props.children = clonedTbody.props._dashprivate_layout.props.children.slice(0,100);
        
        clonedTbody.props = {
            ...clonedTbody.props,
            _dashprivate_layout: {
                ...clonedTbody.props._dashprivate_layout,
                // namespace: clonedTbody._dashprivate_layout.namespace,
                // type: clonedTbody._dashprivate_layout.type,
                props: {
                    ...clonedTbody.props._dashprivate_layout.props,
                    children: clonedTbody.props._dashprivate_layout.props.children.slice(0,100)
                }
            }
        };
        console.log(clonedTbody);
        console.log(children[children.length - 1]);
        console.log(clonedTbody.props._dashprivate_layout.props.children);
        // props.children[1].props._dashprivate_layout.props.children[0].props.onClick = () => console.log('in onclick');
        return (
            <BPHTMLTable {...tableProps} >
                {[children.slice(0, children.length - 1)].concat([clonedTbody])}
            </BPHTMLTable>
        );
    }
}

HTMLTable.defaultProps = {
    sort_direction: 'asc'
};

HTMLTable.propTypes = {
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
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Enables borders between rows and cells.
     */
    bordered: PropTypes.bool,

    /**
     * Use small, condensed appearance.
     */
    condensed: PropTypes.bool,

    /**
     * Enables hover styles on row.
     */
    interactive: PropTypes.bool,

    /**
     * Use small, condensed appearance for this element and all child elements.
     */
    small: PropTypes.bool,

    /**
     * Use an alternate background color on odd rows.
     */
    striped: PropTypes.bool,

    /**
     * Key for the clicked row
     */
    row_click: PropTypes.string,

    /**
     * Column to sort values on
     */
    sort_column: PropTypes.number,

    /**
     * Sort direction (asc or desc)
     */
    sort_direction: PropTypes.string



};
