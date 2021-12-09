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
    const normalizedName = item.label ? item.label.toString().toLowerCase() : "";
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
 * Use Select<T> for choosing one item from a list. The component's children will be wrapped in a Popover that contains the list and an optional InputGroup to filter it. Provide a predicate to customize the filtering algorithm. The value of a Select<T> (the currently chosen item) is uncontrolled: listen to changes with onItemSelect.
 */

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let selectedItem = null;
        if (props.value) {
            selectedItem = props.items.find(item => item.value === props.value);
        }
        props.setProps && props.setProps({label: selectedItem && selectedItem.label})
        if (!this.setProps) {
            this.state = {
                label: selectedItem && selectedItem.label,
                value: selectedItem && selectedItem.value,
            }
        }
    }

    handleChange(selected, event) {
        const setProps = this.props.setProps || this.setState;
        if (this.props.setProps) {
            this.props.setProps({value: selected.value, label: selected.label});
        }
        else {
            this.setState({value: selected.value, label: selected.label});
        }
        
        // Set value on parent if this property is provided
        this.props.setParentProps && this.props.setParentProps({value: selected});
    }


    render() {

        const selectedLabel = this.state && this.state.label || this.props.label;
        const {icon, disabled, minimal, popoverProps, ...htmlProps} = this.props;

        return (<BPSelect 
            itemPredicate={filterItem}
            itemRenderer={renderItem}
            onItemSelect={this.handleChange}
            activeItem={this.props.setProps ? this.props.value : this.state && this.state.value}
            popoverProps={{minimal: minimal, ...this.props.popoverProps}}
            {...htmlProps}

        >
            <Button
                        icon={icon}
                        rightIcon="caret-down"
                        text={selectedLabel ? `${selectedLabel}` : "(none)"}
                        disabled={disabled}
                    />
                </BPSelect>);
    }
}

Select.defaultProps = {
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
      * The selected item label
      */
      'label': PropTypes.string,

     /**
      * Class name
      */
     'className': PropTypes.string,

     /**
      * Whether the menu is disabled
      */
     'disabled': PropTypes.bool,

     /**
      * Whether the component should take up the full width of its container. 
      * This overrides popoverProps.fill. You also have to ensure that the 
      * child component has fill set to true or is styled appropriately.
      */
     fill: PropTypes.bool,


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
     'popoverProps': PropTypes.object,

     /**
      * Whether this input is required. Used in form validation
      */
     required: PropTypes.bool,

     /**
      * Determine whether the input is valid. Used in form validation
      */
     valid: PropTypes.bool

     

};
