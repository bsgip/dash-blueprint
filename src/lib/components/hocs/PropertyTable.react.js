import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button, ProgressBar, Intent, Text, InputGroup } from "@blueprintjs/core";
import Tr from '../Tr.react';
import Select from '../Select.react';
import { INTENT_SUCCESS } from '@blueprintjs/core/lib/esm/common/classes';
// import { HTMLTable } from '../../index';
import { handleRowClick } from '../../utils/handleRowClick';
import { renderMoreLessButtons } from '../../utils/renderMoreLessButtons';

import '../../../css/histogram.css';

function renderHeader(columns, actions) {
    // return columns.map((column) => {<th >{"header"}</th>});
    // return columns.map((column) => {<td >{column.key}</td>});
    const headerCells = columns.map((column) => <th>{column.label}</th>);
    console.log(headerCells);
    return headerCells;
}

function renderFilterHeader(columns, rows, setProps, filter) {
    
    console.log('filter is');
    console.log(filter);
    const filterCells = columns.map((column) => {
        switch (column.filter) {
            case "string":
                return <th><InputGroup 
                value={filter ? filter[column.key] : ""}
                onChange={(event) => setProps({
                    filter: {
                        ...filter,
                        [column.key]: event.target.value
                    }
                })} /></th>;
            case "select":
                const selectOptions = [...new Set(rows.map(row => row[column.key]))].filter(item => item !== undefined).map(item => {return {label: item}});
                console.log(selectOptions);
                return <th><Select items={selectOptions} 
                onChange={(event) => console.log(event)}
                setParentProps={(val) => setProps({filter: {
                    ...filter,
                    [column.key]: val.value.label
                }})}
                value={filter ? filter[column.key] : null}
                /></th>
        }
        return <th></th>
    });
    return filterCells;

}

function renderRow(row, columns, actions, setProps, actionButtonProps) {
    return columns.map((column) => {
        if (column.type == "action") {
            return <td ><Button icon={column.icon} 
                    onClick={(event) => {
                        event.stopPropagation(); // Stop the event contributing to selection change
                        setProps({[column.action + "Action"]: row});
                    }} 
                    {...actionButtonProps} /></td>
        }
        return <td >{row[column.key]}</td>
    });
    // // row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS
    // return (<div className={"bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram"}
    //             // style={{borderRadius: "0px", background: "none"}}
    //         >
    //         <div className={"bp3-progress-meter"}
    //             style={{
    //                 width: (scaledValue * 100).toPrecision(2) + "%",
    //                 borderRadius: "0px"
    //             }}
    //         >

    //         </div>
    //     </div>);
}
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
export default class PropertyTable extends React.Component {
    constructor(props) {
        super(props);
        // this.updateSelection = this.updateSelection.bind(this);
        this.handleRowClick = handleRowClick.bind(this);
        this.setState = this.setState.bind(this);
        this.renderMoreLessButtons = renderMoreLessButtons.bind(this);
        this.filterRows = this.filterRows.bind(this);
        this.truncateRows = this.truncateRows.bind(this);
        // this.handleRowClick = this.handleRowClick.bind(this);
        // this.filterRows = this.filterRows.bind(this);
        // this.renderPagination = this.renderPagination.bind(this);
        // this.Trs = {};
        // this.setState({n_clicks: 0});
        this.state = {
            n_clicks: 0,
            page_size: props.page_size
        };
    }

    // updateSelection(key, event, orderedKeys) {
    //     console.log(event);
    //     console.log(orderedKeys);
    //     console.log(key);
    //     console.log(this.state);
    //     event.preventDefault();
    //     const setProps = this.props.setProps ? this.props.setProps : this.setState;
    //     if (this.props.selectable || true) {
    //         setProps({
    //             selection: [key],
    //             row_click: key
    //         })
    //     }
    // }

    truncateRows(filteredRows) {
        const pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
        return filteredRows.slice(0, pageSize);
    }
    
    filterRows() {
        let filteredRows = this.props.rows;
        const filter = this.props.filter || this.state.filter;
        if (filter) {
            filteredRows = filteredRows.filter(row => {
                return Object.entries(filter).every(([k, v]) => {
                    // console.log(row[k].toString().toLowerCase(), v.toLowerCase());
                    // console.log(row[k].toString().toLowerCase().indexOf(v.toLowerCase()));
                    // return row[k].toString().toLowerCase() == v;
                    return row[k] != undefined && row[k].toString().toLowerCase().indexOf(v.toString().toLowerCase()) >= 0
                })
            });
        }
        
        return filteredRows;
    }

    render() {
        const props = this.props;
        const {rows, columns, actions, maxCount, setProps, actionButtonProps, ...tableProps} = this.props;
        let scalingConstant = maxCount;
        if (!scalingConstant) {
            scalingConstant = Math.max(...rows.map((row) => row.count));
        };
        console.log(rows.map((row) => row.count));
        const header = (<tr>{renderHeader(columns, actions)}</tr>);
        let filterHeader;
        
        
        if (columns.find((column) => column.filter)) {
            filterHeader = <tr>{renderFilterHeader(columns, rows, setProps ? setProps : this.setState, setProps ? this.props.filter : this.state.filter)}</tr>;
        };
        console.log(renderHeader(columns, actions));
        console.log(columns);
        let orderedKeys = rows.map(row => row.key);

        const rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
        const filteredRows = this.filterRows(rows);

        const truncateRows = this.truncateRows(filteredRows);
        
        const body = truncateRows.map(row => (<Tr selected={rowSelection.indexOf(row.key) > -1} key={row.key} onClick={(event) => this.handleRowClick(row.key, event, orderedKeys)}>
                {renderRow(row, columns, actions, setProps ? setProps : this.setState, actionButtonProps)}
            </Tr>));
        let pagination;
        if (this.props.show_more_less) {
            pagination = this.renderMoreLessButtons(filteredRows.length);
        }
        return (<React.Fragment>
            <BPHTMLTable className="histogram" style={{width: "100%"}} interactive={true}>
                <thead>{[header, filterHeader]}</thead>
                <tbody>{body}</tbody>
            </BPHTMLTable>
            {pagination}
        </React.Fragment>
        );
    }

}

PropertyTable.defaultProps = {
    // sort_direction: 'asc',
    // filter_by: {},
    // // TODO remove these defaults
    // filter_columns: [],
    // sort_columns: [],
    // filter_strings: {},
    page_size: 10,
    // current_page: 1,
    // selection: [],
    show_more_size: 10,
    // n_clicks: 0,
    rows: [],
    selectable: true,
    show_more_less: true,
    actionButtonProps: {
        minimal: true,
        small: true
    }
};

PropertyTable.propTypes = {
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
     * Row data used to create the histogram
     */
    rows: PropTypes.array,

    /**
     * Maximum count to be included in the histogram. Values above this number
     * will be rendered a different colour
     */
    maxCount: PropTypes.number,

    // /**
    //  * Enables borders between rows and cells.
    //  */
    // bordered: PropTypes.bool,

    // /**
    //  * Use small, condensed appearance.
    //  */
    // condensed: PropTypes.bool,

    // /**
    //  * Enables hover styles on row.
    //  */
    // interactive: PropTypes.bool,

    // /**
    //  * Use small, condensed appearance for this element and all child elements.
    //  */
    // small: PropTypes.bool,

    // /**
    //  * Use an alternate background color on odd rows.
    //  */
    // striped: PropTypes.bool,

    /**
     * Key for the clicked row
     */
    row_click: PropTypes.string,

    // /**
    //  * Column to sort values on
    //  */
    // sort_column: PropTypes.number,

    // /**
    //  * Sort direction (asc or desc)
    //  */
    // sort_direction: PropTypes.string,

    // /**
    //  * Filtering strings
    //  */
    // filter_by: PropTypes.object,

    // /**
    //  * Column numbers that may be filtered
    //  */
    // filter_columns: PropTypes.array,

    // /**
    //  * Columns that can be sorted on
    //  */
    // sort_columns: PropTypes.array,

    // /**
    //  * Strings to filter columns by
    //  */
    // filter_strings: PropTypes.object,

    /**
     * Page size (in rows)
     */
    page_size: PropTypes.number,

    // /**
    //  * Current page to show
    //  */
    // current_page: PropTypes.number,

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

    /**
     * An array of properties to display in the table
     */
    columns: PropTypes.array,

    /**
     * A set of actions to display in the first column
     */
    actions: PropTypes.arrayOf(PropTypes.string),

    // n_clicks: PropTypes.number,

    /**
     * Props to pass through to the action button
     */
    actionButtonProps: PropTypes.object,

    /**
     * Row selected for locate action
     */
    locateAction: PropTypes.object,

    /**
     * Row clicked for info action
     */
    infoAction: PropTypes.object


};
