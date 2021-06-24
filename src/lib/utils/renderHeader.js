import { EditableText } from "@blueprintjs/core";

export function renderHeader() {
    // Set up filtering options
    let filterHeader = null;
    if (this.props.filter_columns) {
        const filterBy = this.props.filter_columns.map((filter, idx) => {
            return <th key={"filter-by-" + idx}>{(filter ? <EditableText placeholder="filter by..." onChange={(value) => {
                this.props.setProps({
                    filter_strings: {
                        ...this.props.filter_strings,
                        [idx]: value
                    }
                });
            }}></EditableText> : null)}</th>;
        });
        filterHeader = <thead key="head-filter"><tr>{filterBy}</tr></thead>;
    }

    
    let headerRow = this.props.children[0];
    if (this.props.sort_columns) {
        // Add sort elements to the column headers
        let childrenToMangle;
        if (this.props.children[0].props._dashprivate_layout.props.children.type === "Tr") {
            childrenToMangle = this.props.children[0].props._dashprivate_layout.props.children.props.children;
            console.log('Taking children from deeper nest');
        }
        else {
            childrenToMangle = this.props.children[0].props._dashprivate_layout.props.children;
        }
        console.log(this.props.children[0].props._dashprivate_layout.props.children);
        console.log(childrenToMangle);
        console.log(this.props.children[0].props._dashprivate_layout);
        const mangledChildren = childrenToMangle.map((child, idx) => {
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
                        children: {
                            ...this.props.children[0].props._dashprivate_layout.props.children,
                            props: {
                                ...this.props.children[0].props._dashprivate_layout.props.children.props,
                                children: childrenToMangle
                            }
                        }
                    }
                }
            }
        };
    };
    return {
        filterHeader: filterHeader,
        headerRow: headerRow
    }
}