import { Button } from "@blueprintjs/core";

export function renderMoreLessButtons(nRowsFiltered) {
    let paginationButtons = [];
    const nPages = parseInt((nRowsFiltered - 1) / this.props.page_size) + 1;
    if (this.props.selectable) {
        paginationButtons.push(
            <Button key="button-clear" minimal={true} small={true} icon="small-cross"
                disabled={!this.props.selection}
                onClick={() => {this.props.setProps({selection: []})}}
                >
                <span className="bp3-text-small">clear</span>
            </Button>
        )
    }
    if (this.props.page_size > this.props.show_more_size) {
        paginationButtons.push(
            <Button key="button-less" minimal={true} small={true} icon="chevron-up"
                onClick={() => {this.props.setProps({page_size: this.props.page_size - this.props.show_more_size})}}
                >
                <span className="bp3-text-small">less</span>
            </Button>
        )
    }
    if (nRowsFiltered > this.props.page_size) {
        paginationButtons.push(
            <Button key="button-more" minimal={true}  small={true} icon="chevron-down"
                onClick={() => {this.props.setProps({page_size: this.props.page_size + this.props.show_more_size})}}
                >
                <span className="bp3-text-small">more</span>
            </Button>
        )
    }
    return paginationButtons
};