import React from 'react';
import PropTypes from 'prop-types';
import { HTMLTable as BPHTMLTable, EditableText, Button, ProgressBar, Intent, Text } from "@blueprintjs/core";
// import { Button } from "./Button.react";
import { Tr } from '../Tr.react';
import { INTENT_SUCCESS } from '@blueprintjs/core/lib/esm/common/classes';
// import { HTMLTable } from '../../index';
// import { Button } from '../Button.react';


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
    // constructor(props) {
    //     super(props);
    //     this.handleRowClick = this.handleRowClick.bind(this);
    //     this.filterRows = this.filterRows.bind(this);
    //     this.renderPagination = this.renderPagination.bind(this);
    //     this.Trs = {};
    //     this.setState({n_clicks: 0});
    //     this.state = {n_clicks: 0};
    // }


    render() {
        const props = this.props;
        const {rows, maxCount, ...tableProps} = this.props;
        let scalingConstant = maxCount;
        if (!scalingConstant) {
            scalingConstant = Math.max(...rows.map((row) => row.count));
        };
        console.log(rows.map((row) => row.count));
        const header = <tr><th style={{width: "20%"}}>{"Label"}</th><th style={{width: "80%"}}>{"Count"}</th></tr>;
        console.log(scalingConstant);
        const body = rows.map(row => (<tr key={row.label}>
                <td key={"label"}><Text ellipsize={true}>{row.label}</Text></td>
                <td key={"count"}>
                    <ProgressBar 
                        animate={false} 
                        intent={row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS} 
                        stripes={false} 
                        value={row.count / scalingConstant} />
                </td>
            </tr>));
        // return <div>{"test"}</div>;
        return (<BPHTMLTable style={{width: "100%"}}>
            <thead>{header}</thead>
            <tbody>{body}</tbody>
        </BPHTMLTable>);
    }

}

Histogram.defaultProps = {
    // sort_direction: 'asc',
    // filter_by: {},
    // // TODO remove these defaults
    // filter_columns: [],
    // sort_columns: [],
    // filter_strings: {},
    // page_size: 10,
    // current_page: 1,
    // selection: [],
    // show_more_size: 10,
    // n_clicks: 0,
    rows: [],
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

    // /**
    //  * Key for the clicked row
    //  */
    // row_click: PropTypes.string,

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

    // /**
    //  * Page size (in rows)
    //  */
    // page_size: PropTypes.number,

    // /**
    //  * Current page to show
    //  */
    // current_page: PropTypes.number,

    // /**
    //  * Number of rows to increase/decrease page size by
    //  * (for use in simple show more mode)
    //  */
    // show_more_size: PropTypes.number,

    // /**
    //  * Show simple more/less buttons to adjust page size
    //  */
    // show_more_less: PropTypes.bool,

    // /**
    //  * Whether row selection is enabled
    //  */
    // selectable: PropTypes.bool,

    // /**
    //  * Currently selected rows
    //  */
    // selection: PropTypes.array,

    // n_clicks: PropTypes.number,



};
