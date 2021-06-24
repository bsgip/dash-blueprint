export function handleRowClick(key, event, orderedKeys) {
    // TODO Handle these in such a way as to prevent text selection when holding shift
    event.preventDefault();
    console.log('handling row click');
    

    if (this.props.selectable) {
        // Handle selection of multiple rows using shift or meta keys
        // Setting row_click here 
        if (event.shiftKey && this.props.selection) {
            // Add range to selection
            let rangeStart = orderedKeys.indexOf(this.props.row_click);
            let rangeEnd = orderedKeys.indexOf(key) + 1;
            if (rangeStart >= rangeEnd) {
                let tempRangeStart = rangeStart;
                rangeStart = rangeEnd - 1;
                rangeEnd = tempRangeStart;
            }
            else {
                rangeStart = rangeStart + 1;
            }
            let keys = orderedKeys.slice(rangeStart, rangeEnd);
            this.props.setProps({selection: this.props.selection.concat(keys)});
            this.props.setProps({row_click: key});
        }
        
        else if (event.metaKey) {
            if (this.props.selection.includes(key)) {
                // re-renders only de-selected
                this.props.setProps({selection: this.props.selection.filter(item => item !== key)});
            }
            else {

                this.props.setProps({selection: this.props.selection.concat([key])});
                this.props.setProps({row_click: key});
            }
        }
        else {
            this.props.setProps({selection: [key]})
            this.props.setProps({row_click: key});
        }
        
    }

    
};