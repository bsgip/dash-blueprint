import React from 'react';
import PropTypes from 'prop-types';
import { Select as BPSelect } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";


function escapeRegExpChars(text) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}


function highlightText(text, query) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

function filterItem(query, item, _index, exactMatch) {
    const normalizedName = item.label.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
        return normalizedTitle === normalizedQuery;
    } else {
        return `${item.value}. ${normalizedName} ${item.tag}`.indexOf(normalizedQuery) >= 0;
    }
};

function renderItem(item, { handleClick, modifiers, query }) {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${item.label}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={item.tag}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    );
};


/**
 * @param props
 * @returns {*}
 * @constructor
 */

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected, event) {
        if (this.props.setProps) {
            this.props.setProps({value: selected.value});
            this.props.setProps({selectedItem: selected})
        } else {
            this.setState({value: selected});
        }
        // TODO Is this needed for form groups?
        // if (this.props.setParentProps) {
        //     this.props.setParentProps({value: selected})
        // }
    }


    render() {
        var selectedLabel;
        if (this.props.value && !this.props.selectedItem) {
            // On initialisation, value may be populated but selectedItem won't be.
            const filteredItems = this.props.items.filter(x => x.value === this.props.value);
            console.log(filteredItems);
            selectedLabel = filteredItems[0].label;
            
        } else {
            selectedLabel = this.props.selectedItem ? this.props.selectedItem.label : '(No selection)';
        }
        
        const {icon, disabled, minimal, popoverProps, ...htmlProps} = this.props;

        return (<BPSelect 
            itemPredicate={filterItem}
            itemRenderer={renderItem}
            onItemSelect={this.handleChange}
            popoverProps={{minimal: minimal, ...this.props.popoverProps}}
            {...htmlProps}
            
            
        >
            <Button
                        icon={icon}
                        rightIcon="caret-down"
                        text={selectedLabel ? `${selectedLabel}` : "(No selection)"}
                        disabled={disabled}
                    />
                </BPSelect>);
    }
}

Select.defaultProps = {
    checked: false,
    disabled: false,
    filterable: true,
    minimal: true,
};

Select.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * Items to choose from
     */
    'items': PropTypes.array,

     /**
      * The selected item
      */
     'value': PropTypes.string,

     /**
      * Class name
      */
     'className': PropTypes.string,

     /**
      * Whether the menu is disabled
      */
     'disabled': PropTypes.bool,

     /**
      * Whether the list can be filtered
      */
     'filterable': PropTypes.bool,

     /**
      * Use minimal popover style
      */
     'minimal': PropTypes.bool,

     /**
      * Button icon
      */
     'icon': PropTypes.string,

     /**
      * Additional props to define the popover behaviour
      */
     'popoverProps': PropTypes.object

};
