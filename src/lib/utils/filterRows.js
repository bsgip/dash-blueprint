export function filterRows(rows, filterStrings) {
    const filterFunctions = Object.entries(filterStrings).map(([idx, value]) => {
        // TODO This should be dealt with more comprehensively. Currently it naively checks 
        // for equality if an array is passed into filter_strings
        if (Array.isArray(value)) {
            return (entry) => {
                console.log(entry.props.children[idx].props.children);
                // A super-cumbersome check for nested divs in the table
                // TODO Create Value components that allow for the actual table value to be
                // present directly nested in the cell, regardless of display value
                const entryText = entry.props.children[idx].props.children.props ? entry.props.children[idx].props.children.props.children : entry.props.children[idx].props.children;
                return value.includes(entryText);
            }
        }
        if (value.indexOf("<=") === 0) {
            const a = Number(value.slice(2));
            return (entry) => entry.props.children[idx].props.children <= a;
        }
        else if (value.indexOf("<") === 0) {
            const a = Number(value.slice(1));
            return (entry) => entry.props.children[idx].props.children < a;
        }
        else if (value.indexOf(">=") === 0) {
            const a = Number(value.slice(2));
            return (entry) => entry.props.children[idx].props.children >= a;
        }
        else if (value.indexOf(">") === 0) {
            const a = Number(value.slice(1));
            return (entry) => entry.props.children[idx].props.children > a;
        }
        else {
            return (entry) => {
                let entryValue = entry.props.children[idx].props.children;
                if (typeof entryValue === "string") {
                    entryValue = entryValue.toLowerCase();
                }
                else {
                    entryValue = entryValue + "";
                }
                return entryValue.toLowerCase().indexOf(value) > -1;
            }
        }
    });
    const filteredRows = rows.filter((entry) => {
        for (var i in filterFunctions) {
            if (!filterFunctions[i](entry)) {
                return false
            }
        }
        return true
    });
    return filteredRows;
};