import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect as BPMultiSelect } from "@blueprintjs/select";
import { Button, MenuItem, Intent } from "@blueprintjs/core";
import { filterItemByQueryString, renderSelectItem } from '../utils/text';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];


/**
 * Use MultiSelect<T> for choosing multiple items in a list. 
 * The component renders a TagInput wrapped in a Popover. 
 */

export default class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleTagRemove = this.handleTagRemove.bind(this);
        this.getSelectedItemIndex = this.getSelectedItemIndex.bind(this);
        this.isItemSelected = this.isItemSelected.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.selectItems = this.selectItems.bind(this);
        this.deselectItem = this.deselectItem.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.renderTag = this.renderTag.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }


    handleTagRemove = (_tag, index) => {
        this.deselectItem(index);
    };

    getSelectedItemIndex(item) {
        return this.props.value.indexOf(item.value);
    }

    isItemSelected(item) {
        return this.getSelectedItemIndex(item) !== -1;
    }

    selectItem(item) {
        this.selectItems([item]);
    }

    selectItems(itemsToSelect) {

        const { value, selectedItems } = this.props;
        const newValues = itemsToSelect.map((_item) => _item.value);
        if (this.props.setProps) {
            this.props.setProps({value: value.concat(newValues)});
            this.props.setProps({selectedItems: selectedItems.concat(selectedItems)});
        } else {
            this.setState({value: value.concat(newValues)});
            this.setState({selectedItems: selectedItems.concat(selectedItems)});
        }
    }

    deselectItem(index) {
        const { items } = this.props;
        const { value, selectedItems } = this.props;
        if (this.props.setProps) {
            this.props.setProps({value: value.filter((val, i) => i !== index)});
            this.props.setProps({selectedItems: selectedItems.filter((val, i) => i !== index)});
        } else {
            this.setState({value: value.filter((val, i) => i !== index)});
            this.setState({selectedItems: selectedItems.filter((val, i) => i !== index)});
        }
    }

    handleItemSelect = (item) => {
        if (!this.isItemSelected(item)) {
            this.selectItem(item);
        } else {
            this.deselectItem(this.getSelectedItemIndex(item));
        }
    };


    handleClear = () => {
        if (this.props.setProps) {
            this.props.setProps({value: []});
            this.props.setProps({selectedItems: []});
        } else {
            this.setState({value: []});
            this.setState({selectedItems: []});
        }
    }

    renderTag = (item) => item.label;


    render() {
        const {icon, disabled, minimal, popoverProps, tagMinimal, ...htmlProps} = this.props;
        const { value } = this.props;
        
        const selectedItems = this.props.items.filter((_item) => value.indexOf(_item.value) !== -1);
        const getTagProps = (_value, index) => ({
            intent: this.state && this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
            minimal: tagMinimal,
        });
        const clearButton =
            value.length > 0 ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : undefined;
        return (<BPMultiSelect 
            itemPredicate={filterItemByQueryString}
            itemRenderer={renderSelectItem}
            onItemSelect={this.handleItemSelect}
            popoverProps={{minimal: minimal, ...this.props.popoverProps}}
            {...htmlProps}
            tagRenderer={this.renderTag}
            tagInputProps={{ tagProps: getTagProps, onRemove: this.handleTagRemove, rightElement: clearButton }}
            selectedItems={selectedItems}    
        />
            
         );
    }
}

MultiSelect.defaultProps = {
    disabled: false,
    filterable: true,
    minimal: true,
    value: [],
    selectedItems: [],
    placeholder: "Search...",
};

MultiSelect.propTypes = {
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
     'value': PropTypes.array,

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
     'popoverProps': PropTypes.object,

     /**
      * Returns selected items
      */
     'selectedItems': PropTypes.array,

     /**
      * Input placeholder text. Shorthand for tagInputProps.placeholder.
      */
     placeholder: PropTypes.string,

};
