import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button } from "@blueprintjs/core";
// import { Button } from "./Button.react";
import { Tr } from './Tr.react'
import { renderMoreLessButtons } from '../utils/renderMoreLessButtons';
import { handleRowClick } from '../utils/handleRowClick';
import { renderPagination } from '../utils/renderPagination';
import { filterRows } from '../utils/filterRows';
import { renderHeader } from '../utils/renderHeader';

var _ = require('lodash');

/**
 * This component provides Blueprint styling to native HTML tables.
 * 
 * It also includes additional functionality for searching, ordering and pagination of
 * data in the table.
 * 
 * IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
 * want selection to show properly, and use css to modify rows with className 'selected'
 * @param props
 * @returns {*}
 * @constructor
 */
export default class HTMLTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleRowClick = handleRowClick.bind(this);
        this.filterRows = filterRows.bind(this);
        this.renderPagination = renderPagination.bind(this);
        this.renderSimpleMoreLessButtons = renderMoreLessButtons.bind(this);
        this.renderHeader = renderHeader.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.Trs = {};
        this.setState({n_clicks: 0});
        this.state = {n_clicks: 0};
    }

    renderBody() {
        const { sort_column, children, displayLimit, pageNumber, setProps, ...tableProps } = {...this.props};
        
        let sortMultiplier = this.props.sort_direction === 'desc' ? -1 : 1;
        if (children.length > 1) {
            // // Add an on-click method to each row
            // children[children.length - 1].props._dashprivate_layout.props.children.map(row => {
            //     row.props.onClick = (event) => this.handleRowClick(row.props.key, event)
            // });
            // Apply the filter values to each row
            

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
        let filteredChildren = this.filterRows(children[children.length - 1].props._dashprivate_layout.props.children.slice(0), this.props.filter_strings);

        let orderedKeys = filteredChildren.map(child => child.props.rowKey);
        children[children.length - 1].props._dashprivate_layout.props.children.map(row => {
            row.props.onClick = (event) => this.handleRowClick(row.props.rowKey, event, orderedKeys)
        });

        let clonedTbody = React.cloneElement(children[children.length - 1], 
            {
                _dashprivate_layout: {
                    ...children[children.length - 1].props._dashprivate_layout,
                    // namespace: clonedTbody._dashprivate_layout.namespace,
                    // type: clonedTbody._dashprivate_layout.type,
                    props: {
                        ...children[children.length - 1].props._dashprivate_layout.props,
                        children: filteredChildren.slice((this.props.current_page - 1) * this.props.page_size, this.props.current_page * this.props.page_size)
                    }
                }
            });


        if (this.props.selectable) {
            // Map selection to active state
            clonedTbody.props._dashprivate_layout.props.children = clonedTbody.props._dashprivate_layout.props.children.map(child => {
                if (this.props.selection && this.props.selection.indexOf(child.props.rowKey) > -1) {
                    child.props.selected = true;
                    child.props.n_clicks = this.state.n_clicks;
                    child.props.n_clicks = this.props.row_click;

                    // if (this.Trs[child.props.rowKey]) {
                    //     this.Trs[child.props.rowKey].setState({selected: true});
                    // }
                    
                    // child.props.className = child.props.className ? child.props.className.replace(" selected", "") + " selected" : " selected";
                }
                else {
                    child.props.selected = false;
                    child.props.n_clicks = this.props.row_click;

                    // if (this.Trs[child.props.rowKey]) {
                    //     this.Trs[child.props.rowKey].setState({selected: false});
                    // }
                }
                child.props.ref = (ref) => { this.Trs[child.props.rowKey] = ref; return true; }
                return child;
            })
            // Dodgy hack that forces a re-render of components when teh selection is changed.
            // This becomes super slow for large tables, and should be refactored to only
            // re-render those rows where the `selected` prop has changed.
            // clonedTbody = {
            //     ...clonedTbody,
            //     key: this.props.row_click
            // };
        }
        return {
            clonedTbody: clonedTbody,
            filteredChildren: filteredChildren
        };
    }

    render() {
        const { filterHeader, headerRow } = this.renderHeader();
        const { clonedTbody, filteredChildren } = this.renderBody();
        const { selectable, sort_column, children, displayLimit, pageNumber, setProps, ...tableProps } = {...this.props};
        
        
        
        // console.log(clonedTbody);
        let pagination;
        if (this.props.show_more_less) {
            pagination = this.renderSimpleMoreLessButtons(filteredChildren.length);
        }
        else {
            pagination = this.renderPagination(filteredChildren.length);
        }
        return (
            <div>
                <BPHTMLTable {...tableProps} >
                    {[children.slice(1, children.length - 1)].concat([headerRow, filterHeader, clonedTbody])}
                </BPHTMLTable>
                {pagination}
            </div>
        );
    }
}

HTMLTable.defaultProps = {
    sort_direction: 'asc',
    filter_by: {},
    // TODO remove these defaults
    filter_columns: [],
    sort_columns: [],
    filter_strings: {},
    page_size: 10,
    current_page: 1,
    selection: [],
    show_more_size: 10,
    n_clicks: 0,
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
    sort_direction: PropTypes.string,

    /**
     * Filtering strings
     */
    filter_by: PropTypes.object,

    /**
     * Column numbers that may be filtered
     */
    filter_columns: PropTypes.array,

    /**
     * Columns that can be sorted on
     */
    sort_columns: PropTypes.array,

    /**
     * Strings to filter columns by
     */
    filter_strings: PropTypes.object,

    /**
     * Page size (in rows)
     */
    page_size: PropTypes.number,

    /**
     * Current page to show
     */
    current_page: PropTypes.number,

    /**
     * Number of rows to increase/decrease page size by
     * (for use in simple show more mode)
     */
    show_more_size: PropTypes.number,

    /**
     * Show simple more/less buttons to adjust page size
     */
    show_more_less: PropTypes.bool,

    /**
     * Whether row selection is enabled
     */
    selectable: PropTypes.bool,

    /**
     * Currently selected rows
     */
    selection: PropTypes.array,

    n_clicks: PropTypes.number,



};
