import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button, ProgressBar, Intent, Text } from "@blueprintjs/core";
// import { Button } from "./Button.react";
import Tr from '../Tr.react';
import { INTENT_SUCCESS } from '@blueprintjs/core/lib/esm/common/classes';
// import { HTMLTable } from '../../index';
// import { Button } from '../Button.react';
import { handleRowClick } from '../../utils/handleRowClick';
import { renderMoreLessButtons } from '../../utils/renderMoreLessButtons';

import '../../../css/histogram.css';

function renderHistogram(scaledValue) {
    // row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS
    return (<div className={"bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram"}
                // style={{borderRadius: "0px", background: "none"}}
            >
            <div className={"bp3-progress-meter"}
                style={{
                    width: (scaledValue * 100).toPrecision(2) + "%",
                    borderRadius: "0px"
                }}
            >

            </div>
        </div>);
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
export default class Histogram extends React.Component {
    constructor(props) {
        super(props);
        // this.updateSelection = this.updateSelection.bind(this);
        this.handleRowClick = handleRowClick.bind(this);
        this.setState = this.setState.bind(this);
        this.renderMoreLessButtons = renderMoreLessButtons.bind(this);
        this.filterRows = this.filterRows.bind(this);
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
    
    filterRows() {
        const pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
        const filteredRows = this.props.rows.slice(1, pageSize);
        console.log('filtered rows to length ' + pageSize);
        console.log(filteredRows)
        return filteredRows;
    }

    render() {
        const props = this.props;
        const {rows, maxCount, setProps, ...tableProps} = this.props;
        let scalingConstant = maxCount;
        if (!scalingConstant) {
            scalingConstant = Math.max(...rows.map((row) => row.count));
        };
        console.log(rows.map((row) => row.count));
        const header = <tr><th style={{width: "20%"}}>{"Label"}</th><th style={{width: "80%"}}>{"Count"}</th></tr>;
        console.log(scalingConstant);
        let orderedKeys = rows.map(row => row.key);

        const rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
        const filteredRows = this.filterRows(rows);

        const body = filteredRows.map(row => (<Tr selected={rowSelection.indexOf(row.key) > -1} key={row.key} onClick={(event) => this.handleRowClick(row.key, event, orderedKeys)}>
                <td key={"label"}><Text ellipsize={true}>{row.label}</Text></td>
                <td key={"count"}>
                {renderHistogram(row.count / scalingConstant)}
                    {/* <ProgressBar 
                        animate={false} 
                        intent={row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS} 
                        stripes={false} 
                        value={row.count / scalingConstant} /> */}
                </td>
            </Tr>));
        // return <div>{"test"}</div>;
        let pagination;
        if (this.props.show_more_less) {
            pagination = this.renderMoreLessButtons(rows.length);
        }
        return (<React.Fragment>
            <BPHTMLTable className="histogram" style={{width: "100%"}} interactive={true}>
                <thead>{header}</thead>
                <tbody>{body}</tbody>
            </BPHTMLTable>
            {pagination}
        </React.Fragment>
        );
    }

}

Histogram.defaultProps = {
    // sort_direction: 'asc',
    // filter_by: {},
    // // TODO remove these defaults
    // filter_columns: [],
    // sort_columns: [],
    // filter_strings: {},
    page_size: 5,
    // current_page: 1,
    // selection: [],
    show_more_size: 10,
    // n_clicks: 0,
    rows: [],
    selectable: true,
    show_more_less: true
};

Histogram.propTypes = {
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

    // n_clicks: PropTypes.number,



};
