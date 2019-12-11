import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText } from "@blueprintjs/core";
import { Button } from "./Button.react";

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
    }

    handleRowClick(key) {
        console.log(key + ' row clicked');
        this.props.setProps({row_click: key});
    }

    filterRows(rows, filterStrings) {
        console.log(filterStrings);
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
        console.log(filterFunctions);
        const filteredRows = rows.filter((entry) => {
            for (var i in filterFunctions) {
                if (!filterFunctions[i](entry)) {
                    return false
                }
            }
            return true
        });
        console.log('filtering rows');
        console.log(filteredRows.length);
        return filteredRows;
    }

    render() {
        // Set up filtering options
        let filterHeader = null;
        if (this.props.filter_columns) {
            const filterBy = this.props.filter_columns.map((filter, idx) => {
                return <th>{(filter ? <EditableText placeholder="filter by..." onChange={(value) => {
                    console.log(value);
                    this.props.setProps({
                        filter_strings: {
                            ...this.props.filter_strings,
                            [idx]: value
                        }
                    });
                    console.log(this.props.filter_strings);
                }}></EditableText> : null)}</th>;
            });
            filterHeader = <thead>{filterBy}</thead>;
        }
        console.log(this.props.children);
        console.log('inserting sort elements');

        
        let headerRow = this.props.children[0];
        if (this.props.sort_columns) {
            // Add sort elements to the column headers
            const mangledChildren = this.props.children[0].props._dashprivate_layout.props.children.map((child, idx) => {
                console.log(child);
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
                                    className: "bp3-button",
                                    style: {"cursor": "default"},
                                    disabled: this.props.sort_column === idx && this.props.sort_direction === 'asc',
                                    onClick: () => {
                                        console.log('something was clicked');
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
                                    className: "bp3-button",
                                    style: {"cursor": "default"},
                                    disabled: this.props.sort_column === idx && this.props.sort_direction === 'desc',
                                    onClick: () => {
                                        console.log('something was clicked');
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
        

            // this.props.sort_columns.map((sortEnabled, idx) => {
            //     if (sortEnabled) {
            //         console.log(this.props.children[0].props._dashprivate_layout.props.children[idx].props.children);
            //         this.props.children[0].props._dashprivate_layout.props.children[idx].props.children = (
            //             <div>
            //                 {React.cloneElement(this.props.children[0].props._dashprivate_layout.props.children[idx].props.children)}
            //             </div>
            //         )
            //         // [
            //         //     <Button minimal={true} icon="chevron-down" />,
            //         //     <Button minimal={true} icon="chevron-up" />
            //         // ]
            //         // (
            //         // <div>
            //         //     {/* <div>{this.props.children[0].props._dashprivate_layout.props.children[idx].props.children}</div> */}
                        
                        
            //         // </div>)
            //         console.log(this.props.children[0].props._dashprivate_layout.props.children[idx].props.children);
            //     }
                
            // })
        
        
            
            
        

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
        clonedTbody.props = {
            ...clonedTbody.props,
            _dashprivate_layout: {
                ...clonedTbody.props._dashprivate_layout,
                // namespace: clonedTbody._dashprivate_layout.namespace,
                // type: clonedTbody._dashprivate_layout.type,
                props: {
                    ...clonedTbody.props._dashprivate_layout.props,
                    children: filteredChildren.slice(0,100)
                }
            }
        };
        console.log(clonedTbody);
        console.log(children[children.length - 1]);
        console.log(clonedTbody.props._dashprivate_layout.props.children);
        // props.children[1].props._dashprivate_layout.props.children[0].props.onClick = () => console.log('in onclick');
        return (
            <BPHTMLTable {...tableProps} >
                {[children.slice(1, children.length - 1)].concat([headerRow, filterHeader, clonedTbody])}
            </BPHTMLTable>
        );
    }
}

HTMLTable.defaultProps = {
    sort_direction: 'asc',
    filter_by: {},
    // TODO remove these defaults
    filter_columns: [false, true, true, true],
    sort_columns: [false, true, true, true],
    filter_strings: {}
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



};
