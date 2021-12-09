import React from 'react';
import PropTypes, { checkPropTypes } from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button, ProgressBar, Intent, Text, InputGroup } from "@blueprintjs/core";
import Tr from '../Tr.react';
import Select from '../Select.react';
import Sparkline from '../spark/Sparkline.react';
import { INTENT_SUCCESS } from '@blueprintjs/core/lib/esm/common/classes';

import { handleRowClick } from '../../utils/handleRowClick';
import { renderMoreLessButtons } from '../../utils/renderMoreLessButtons';

import '../../../css/histogram.css';

const KEY_COLUMN = "id";

function filterRows(rows, columns, filter) {
    
    const filterFunction = Object.entries(filter).map(([idx, value]) => {
        const column = columns.find((c) => c.key == idx);
        
        if (!value) {
            return (entry) => true
        }
        if (column.type == "string" || Array.isArray(value)) {
            const stringArray = value.split(",").map((elem) => elem.toLowerCase().trim()).filter((elem) => elem.length > 0);
            
            return (entry) => stringArray.some((element) => {
                // Exact match
                return getRowValue(entry, column.key) && (getRowValue(entry, column.key).toString().toLowerCase() === element)
                // return getRowValue(entry, column.key) && getRowValue(entry, column.key).toString().toLowerCase().indexOf(element) >= 0
            })
        } else if (column.type == "number") {
            if (value.indexOf && value.indexOf("<=") === 0) {
                const a = Number(value.slice(2));
                return (entry) => getRowValue(entry, column.key) <= a;
            }
            else if (value.indexOf && value.indexOf("<") === 0) {
                const a = Number(value.slice(1));
                return (entry) => getRowValue(entry, column.key) < a;
            }
            else if (value.indexOf && value.indexOf(">=") === 0) {
                const a = Number(value.slice(2));
                return (entry) => getRowValue(entry, column.key) >= a;
            }
            else if (value.indexOf && value.indexOf(">") === 0) {
                const a = Number(value.slice(1));
                return (entry) => getRowValue(entry, column.key) > a;
            } else {
                // Compare numbers as strings exactly. Not bulletproof, but will do for now
                const stringArray = value.toString().split(",").map((elem) => elem.toLowerCase().trim()).filter((elem) => elem.length > 0);
                return (entry) => stringArray.some((element) => getRowValue(entry, column.key) && (getRowValue(entry, column.key).toString().toLowerCase() === element))
            }
        }
    })
    return rows.filter((row) => Object.entries(filterFunction).every(([idx, value]) => value(row)))
};

function renderFilterHeader(columns, rows, setProps, filter) {
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
                const selectOptions = [...new Set(rows.map(row => getRowValue(row, column.key)))].filter(item => item !== undefined).map(item => {return {label: item}});
                console.log(selectOptions);
                return <th>
                    <Select 
                        items={selectOptions} 
                        popoverProps={{
                            boundary: "window",
                            modifiers: {
                                // arrow: { enabled: true },
                                flip: { enabled: true },
                                // keepTogether: { enabled: true },
                                // preventOverflow: { enabled: true },
                            }
                        }}
                        fill={true}
                        onChange={(event) => console.log(event)}
                        setParentProps={(val) => setProps({filter: {
                            ...filter,
                            [column.key]: val.value.label
                        }})}
                        value={filter ? filter[column.key] : null}
                    />
                </th>
        }
        return <th></th>
    });
    return filterCells;

}

function renderSparkline(data, columnProps) {
    return <Sparkline data={data} {...columnProps} />;
}

function getRowValue(row, key) {
    // Preferentially retrieve from row.properties to handle geojson data
    return row.properties && row.properties[key] || row[key]
}

function renderRow(row, columns, actions, setProps, actionButtonProps) {
    return columns.map((column) => {
        if (column.type == "action") {
            return <td ><Button icon={column.icon} 
                    onClick={(event) => {
                        event.stopPropagation(); // Stop the event contributing to selection change
                        setProps({[column.action + "Action"]: {
                            row: row,
                            time: new Date().getTime()
                        }});
                        setProps({action: {
                            row: row,
                            action: column.action,
                            time: new Date().getTime()
                        }})
                    }} 
                    {...actionButtonProps} /></td>
        } else if (column.type == "sparkline") {
            return <td >{renderSparkline(getRowValue(row, column.key), column.props)}</td>;
        }
        return <td ><Text ellipsize={true}>{getRowValue(row, column.key)}</Text></td>
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

function renderSort(column, setProps, sortBy, sortDirection) {
    return <React.Fragment>
        <Button icon={"chevron-up"} small={true} style={{cursor: "default"}}
                    minimal
                    disabled={sortBy === column.key && sortDirection === 'asc'}
                    onClick={() => {
                        console.log('setting sort props');
                        setProps({
                            sortBy: column.key,
                            sortDirection: 'asc'
                        })
                    }
                    }
                />
                <Button icon={"chevron-down"} small={true} style={{cursor: "default"}}
                    minimal
                    disabled={sortBy === column.key && sortDirection === 'desc'}
                    onClick={() => {
                        console.log('setting sort props');
                        setProps({
                            sortBy: column.key,
                            sortDirection: 'desc'
                        })
                    }
                    }
                />
    </React.Fragment>
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
        this.sortRows = this.sortRows.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
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

    renderHeader(columns, actions) {
        // return columns.map((column) => {<th >{"header"}</th>});
        // return columns.map((column) => {<td >{column.key}</td>});
        const [sortBy, sortDirection] = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection];
        const setProps = this.props.setProps || this.setState;
        const headerCells = columns.map((column) => (
            <th>
                <span>
                    <span>
                        {column.sort !== false && column.type !== "sparkline" && column.type !== "action" ? 
                        renderSort(column, setProps, sortBy, sortDirection) : null}
                    </span>
                    <Text ellipsize={true} tagName={"span"}>{column.label}</Text>
                </span>
            </th>));
        return headerCells;
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

    sortRows(filteredRows) {
        const [sortBy, sortDirection] = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection];
        console.log('checking sort');
        console.log(sortBy, sortDirection);

        if (sortBy) {
            // return filteredRows.sort(sort_by('sortBy', sortDirection === "asc"));
            if (sortDirection == 'asc') {
                return filteredRows.sort((a, b) => (a[sortBy] > b[sortBy]) - (b[sortBy] > a[sortBy]));
            } else {
                return filteredRows.sort((a, b) => (b[sortBy] > a[sortBy]) - (a[sortBy] > b[sortBy]));
            }            
        }
        return filteredRows;
    }

    truncateRows(filteredRows) {
        const pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
        return filteredRows.slice(0, pageSize);
    }
    
    filterRows() {
        let filteredRows = this.props.rows;
        const filter = this.props.filter || this.state.filter;
        if (filter) {
            filteredRows = filterRows(filteredRows, this.props.columns, filter);
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
        const header = (<tr>{this.renderHeader(columns, actions)}</tr>);
        let filterHeader;
        
        
        if (columns.find((column) => column.filter)) {
            filterHeader = <tr>{renderFilterHeader(columns, rows, setProps ? setProps : this.setState, setProps ? this.props.filter : this.state.filter)}</tr>;
        };
        console.log(this.renderHeader(columns, actions));
        console.log(columns);
        

        const rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
        const filteredRows = this.filterRows(rows);
        const sortedRows = this.sortRows(filteredRows);
        const keyColumn = 'id'
        let orderedKeys = sortedRows.map(row => row[keyColumn]);

        const truncateRows = this.truncateRows(sortedRows);
        
        const body = truncateRows.map(row => (<Tr selected={rowSelection.indexOf(row[keyColumn]) > -1} key={row[keyColumn]} onClick={(event) => this.handleRowClick(row[keyColumn], event, orderedKeys)}>
                {renderRow(row, columns, actions, setProps ? setProps : this.setState, actionButtonProps)}
            </Tr>));
        let pagination;
        if (this.props.show_more_less) {
            pagination = this.renderMoreLessButtons(sortedRows.length);
        }
        return (<React.Fragment>
            <BPHTMLTable className="histogram" interactive={true}>
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
    infoAction: PropTypes.object,

    /**
     * Generic action not covered by previous options
     */
    action: PropTypes.object,


};
