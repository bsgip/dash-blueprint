import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button } from "@blueprintjs/core";
// import { Button } from "./Button.react";
import { Tr } from './Tr.react'

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
        this.filterRows = this.filterRows.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.Trs = {};
    }

    handleRowClick(key, event, orderedKeys) {
        // TODO Handle these in such a way as to prevent text selection when holding shift
        event.preventDefault();
        

        if (this.props.selectable) {
            // Handle selection of multiple rows
            
            // TODO Handle shift key
            if (event.shiftKey && this.props.selection) {
                // Add range to selection
                let rangeStart = orderedKeys.indexOf(this.props.row_click);
                let rangeEnd = orderedKeys.indexOf(key) + 1;
                if (rangeStart >= rangeEnd) {
                    let tempRangeStart = rangeStart;
                    rangeStart = rangeEnd - 1;
                    rangeEnd = tempRangeStart;
                }
                let keys = orderedKeys.slice(rangeStart, rangeEnd);
                console.log(keys);
                this.props.setProps({selection: this.props.selection.concat(keys)});
            }
            
            else if (event.metaKey) {
                if (this.props.selection.includes(key)) {
                    this.props.setProps({selection: this.props.selection.filter(item => item !== key)});
                }
                else {
                    this.props.setProps({selection: this.props.selection.concat([key])});
                    this.props.setProps({row_click: key});
                }
            }
            else {
                this.props.setProps({selection: [key]})
                this.props.setProps({row_click: key});
            }
            
        }

        
    }

    renderPagination(nRowsFiltered) {
        /**
         * TODO There is a potential issue combining filtering and pagination, as we may
         * filter to the point where there are still results, but there are no results on the 
         * current page. Should we be resetting the current page when filtering? Or is this a 
         * case of user beware, and treat it as it currently is. 
         */
        let paginationButtons = [];
        const nPages = parseInt((nRowsFiltered - 1) / this.props.page_size) + 1;
        if (nPages === 1) {
            return null
        }

        let [start, end] = [Math.max(this.props.current_page - 2, 1), Math.min(this.props.current_page + 2, nPages)];
        if (start > 1) {
            paginationButtons.push(
                <Button minimal={true} onClick={() => this.props.setProps({current_page: 1})}>{"<<"}</Button>
            )
        }
        for (let i = start; i <= end; i++) {
            // let j = parseInt(i);
            paginationButtons.push(
                <Button minimal={true} 
                    disabled={i === this.props.current_page}
                    onClick={() => {this.props.setProps({current_page: i})}}
                    >
                    {i}
                </Button>
            )
        }
        if (end < nPages) {
            paginationButtons.push(
                <Button minimal={true} onClick={() => this.props.setProps({current_page: nPages})}>{">>"}</Button>
            )
        }
        return <div>
            {paginationButtons}
            <span>{"(" + nRowsFiltered + " rows)"}</span>
        </div>
    }

    filterRows(rows, filterStrings) {
        const filterFunctions = Object.entries(filterStrings).map(([idx, value]) => {
            if (value.indexOf("<=") === 0) {
                const a = Number(value.slice(2));
                return (entry) => entry.props.children[idx].props.children <= a;
            }
            else if (value.indexOf("<") === 0) {
                const a = Number(value.slice(1));
                return (entry) => entry.props.children[idx].props.children < a;
            }
            else if (value.indexOf(">=") === 0) {
                const a = Number(value.slice(2));
                return (entry) => entry.props.children[idx].props.children >= a;
            }
            else if (value.indexOf(">") === 0) {
                const a = Number(value.slice(1));
                return (entry) => entry.props.children[idx].props.children > a;
            }
            else {
                return (entry) => {
                    let entryValue = entry.props.children[idx].props.children;
                    if (typeof entryValue === "string") {
                        entryValue = entryValue.toLowerCase();
                    }
                    else {
                        entryValue = entryValue + "";
                    }
                    return entryValue.toLowerCase().indexOf(value) > -1;
                }
            }
        });
        const filteredRows = rows.filter((entry) => {
            for (var i in filterFunctions) {
                if (!filterFunctions[i](entry)) {
                    return false
                }
            }
            return true
        });
        return filteredRows;
    }

    render() {
        // Set up filtering options
        let filterHeader = null;
        if (this.props.filter_columns) {
            const filterBy = this.props.filter_columns.map((filter, idx) => {
                return <th>{(filter ? <EditableText placeholder="filter by..." onChange={(value) => {
                    this.props.setProps({
                        filter_strings: {
                            ...this.props.filter_strings,
                            [idx]: value
                        }
                    });
                }}></EditableText> : null)}</th>;
            });
            filterHeader = <thead>{filterBy}</thead>;
        }

        
        let headerRow = this.props.children[0];
        if (this.props.sort_columns) {
            // Add sort elements to the column headers
            const mangledChildren = this.props.children[0].props._dashprivate_layout.props.children.map((child, idx) => {
                if (!this.props.sort_columns[idx]) {
                    return child;
                }
                const appendedChildren = [
                            {
                                namespace: "dash_blueprint",
                                props: {
                                    children: null,
                                    minimal: true,
                                    // id: "some-id",
                                    icon: "chevron-up",
                                    className: "bp3-button table-sort-button",
                                    small: true,
                                    style: {"cursor": "default"},
                                    disabled: this.props.sort_column === idx && this.props.sort_direction === 'asc',
                                    onClick: () => {
                                        this.props.setProps({
                                            sort_column: idx,
                                            sort_direction: 'asc'
                                        })
                                    }
                                },
                                type: "Button"
                            },
                            {
                                namespace: "dash_blueprint",
                                props: {
                                    children: null,
                                    minimal: true,
                                    // id: "some-id",
                                    icon: "chevron-down",
                                    className: "bp3-button table-sort-button",
                                    small: true,
                                    style: {"cursor": "default"},
                                    disabled: this.props.sort_column === idx && this.props.sort_direction === 'desc',
                                    onClick: () => {
                                        this.props.setProps({
                                            sort_column: idx,
                                            sort_direction: 'desc'
                                        })
                                    }
                                },
                                type: "Button"
                            }
                            

                ]
                
                const newChild = {
                    ...child,
                    props: {
                        ...child.props,
                        children: (Array.isArray(child.props.children) ? 
                            child.props.children.concat(appendedChildren) :
                            [child.props.children].concat(appendedChildren)
                        )
                            
                            
                        // ]
                    }
                };
                return newChild;
            });
            headerRow = {
                ...this.props.children[0],
                props: {
                    ...this.props.children[0].props,
                    _dashprivate_layout: {
                        ...this.props.children[0].props._dashprivate_layout,
                        props: {
                            ...this.props.children[0].props._dashprivate_layout.props,
                            children: mangledChildren
                        }
                    }
                }
            };
        };
        
        const { sort_column, children, displayLimit, pageNumber, ...tableProps } = {...this.props};
        
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

        let orderedKeys = filteredChildren.map(child => child.props.key);
        children[children.length - 1].props._dashprivate_layout.props.children.map(row => {
            row.props.onClick = (event) => this.handleRowClick(row.props.key, event, orderedKeys)
        });

        const clonedTbody = React.cloneElement(children[children.length - 1], 
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
                if (this.props.selection && this.props.selection.indexOf(child.props.key) > -1) {
                    child.props.selected = true;

                    if (this.Trs[child.props.key]) {
                        this.Trs[child.props.key].setState({selected: true});
                    }
                    
                    // child.props.className = child.props.className ? child.props.className.replace(" selected", "") + " selected" : " selected";
                }
                else {
                    child.props.selected = false;

                    if (this.Trs[child.props.key]) {
                        this.Trs[child.props.key].setState({selected: false});
                    }
                }
                child.props.ref = (ref) => { this.Trs[child.props.key] = ref; return true; }
                return child;
            })
        }

        const pagination = this.renderPagination(filteredChildren.length);
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
    filter_columns: [false, true, true, true],
    sort_columns: [false, true, true, true],
    filter_strings: {},
    page_size: 10,
    current_page: 1,
    selection: []
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
     * Whether row selection is enabled
     */
    selectable: PropTypes.bool,

    /**
     * Currently selected rows
     */
    selection: PropTypes.array,



};
