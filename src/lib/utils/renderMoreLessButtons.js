import React from 'react';
import { Button } from "@blueprintjs/core";

export function renderMoreLessButtons(nRowsFiltered) {
    const setProps = this.props.setProps ? this.props.setProps : this.setState;
    const selection = this.props.setProps ? this.props.selection : this.state.selection;
    const pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
    const filter = this.props.setProps ? this.props.filter : this.state.filter;
    const show_more_size = this.props.show_more_size;
    let paginationButtons = [];
    const nPages = parseInt((nRowsFiltered - 1) / this.props.page_size) + 1;
    if (this.props.selectable) {
        paginationButtons.push(
            <Button key="button-clear" minimal={true} small={true} icon="small-cross"
                disabled={!selection && !filter}
                onClick={() => {setProps({
                    selection: [],
                    filter: null
                })}}
                >
                <span className="bp3-text-small">clear</span>
            </Button>
        )
    }
    console.log(pageSize);
    console.log(show_more_size);
    if (pageSize > show_more_size) {
        paginationButtons.push(
            <Button key="button-less" minimal={true} small={true} icon="chevron-up"
                onClick={() => {setProps({page_size: pageSize - show_more_size})}}
                >
                <span className="bp3-text-small">less</span>
            </Button>
        )
    }
    if (nRowsFiltered > pageSize) {
        paginationButtons.push(
            <Button key="button-more" minimal={true}  small={true} icon="chevron-down"
                onClick={() => {setProps({page_size: pageSize + show_more_size})}}
                >
                <span className="bp3-text-small">more</span>
            </Button>
        )
    }
    return paginationButtons
};