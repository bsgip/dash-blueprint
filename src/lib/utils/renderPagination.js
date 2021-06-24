import { Button } from "@blueprintjs/core";

export function renderPagination(nRowsFiltered) {
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
            <Button key="button-start" minimal={true} onClick={() => this.props.setProps({current_page: 1})}>{"<<"}</Button>
        )
    }
    for (let i = start; i <= end; i++) {
        paginationButtons.push(
            <Button minimal={true} 
                key={"button-" + i} 
                disabled={i === this.props.current_page}
                onClick={() => {this.props.setProps({current_page: i})}}
                >
                {i}
            </Button>
        )
    }
    if (end < nPages) {
        paginationButtons.push(
            <Button key="button-end" minimal={true} onClick={() => this.props.setProps({current_page: nPages})}>{">>"}</Button>
        )
    }
    return <div>
        {paginationButtons}
        <span>{"(" + nRowsFiltered + " rows)"}</span>
    </div>
};