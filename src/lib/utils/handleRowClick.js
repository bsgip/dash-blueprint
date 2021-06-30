export function handleRowClick(key, event, orderedKeys) {
    // TODO Handle these in such a way as to prevent text selection when holding shift
    event.preventDefault();
    const setProps = this.props.setProps ? this.props.setProps : this.setState;
    const selection = this.props.setProps ? this.props.selection : this.state.selection;
    const row_click = this.props.setProps ? this.props.row_click : this.state.row_click;
    

    if (this.props.selectable) {
        // Handle selection of multiple rows using shift or meta keys
        // Setting row_click here
        if (event.shiftKey && selection) {
            // Add range to selection
            let rangeStart = orderedKeys.indexOf(row_click);
            let rangeEnd = orderedKeys.indexOf(key) + 1;
            if (rangeStart >= rangeEnd) {
                let tempRangeStart = rangeStart;
                rangeStart = rangeEnd - 1;
                rangeEnd = tempRangeStart;
            } else {
                rangeStart = rangeStart + 1;
            }
            let keys = orderedKeys.slice(rangeStart, rangeEnd).filter((key) => selection.indexOf(key) === -1);
            console.log(keys);
            console.log(orderedKeys);
            setProps({selection: selection.concat(keys)});
            setProps({row_click: key});
        } else if (event.metaKey) {
            if (selection.includes(key)) {
                // re-renders only de-selected
                setProps({
                    selection: selection.filter(
                        (item) => item !== key
                    ),
                });
            } else {
                setProps({
                    selection: selection.concat([key]),
                });
                setProps({row_click: key});
            }
        } else {
            setProps({selection: [key]});
            setProps({row_click: key});
        }
        console.log('key selected');
        console.log(key);
        console.log(selection);
        console.log(row_click);
        console.log(event);
    }
}
