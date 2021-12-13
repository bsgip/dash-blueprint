import React from 'react';
import PropTypes from 'prop-types';
import {MultiSelect as BPMultiSelect} from '@blueprintjs/select';
import {Button, MenuItem, Intent} from '@blueprintjs/core';
import {filterItemByQueryString, renderSelectItem} from '../utils/text';

const INTENTS = [
    Intent.NONE,
    Intent.PRIMARY,
    Intent.SUCCESS,
    Intent.DANGER,
    Intent.WARNING,
];

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

        const selectedItems = props.items.filter((item) =>
            props.value.includes(item.value)
        );
        const selectedValues = selectedItems.map((item) => item.value);
        const valid = !props.required || selectedItems.length > 0;
        props.setProps &&
            props.setProps({
                value: selectedValues,
                selectedItems: selectedItems,
                valid: valid,
            });
        console.log(props);
        props.setParentProps && props.setParentProps(props.value, valid);

        if (!props.setProps) {
            this.state = {
                value: props.value,
                selectedItems: props.items.filter((item) =>
                    props.value.includes(item.value)
                ),
                valid: !props.required || props.value.length > 0,
            };
        }
    }

    handleTagRemove = (_tag, index) => {
        this.deselectItem(index);
    };

    getSelectedItemIndex(item) {
        return this.props.setProps
            ? this.props.value.indexOf(item.value)
            : this.state.value.indexOf(item.value);
    }

    isItemSelected(item) {
        return this.getSelectedItemIndex(item) !== -1;
    }

    selectItem(item) {
        this.selectItems([item]);
    }

    selectItems(itemsToSelect) {
        const {
            value,
            selectedItems,
            setProps,
            setParentProps,
            required,
        } = this.props;

        if (setProps) {
            const newItemsToSelect = itemsToSelect.filter(
                (item) => !value.includes(item.value)
            );
            const newValues = value.concat(
                newItemsToSelect.map((_item) => _item.value)
            );
            const valid = !required || newValues.length > 0;
            setProps({
                value: newValues,
                selectedItems: selectedItems.concat(newItemsToSelect),
                valid: valid,
            });
            setParentProps && setParentProps(newValues, valid);
        } else {
            const newItemsToSelect = itemsToSelect.filter(
                (item) => !this.state.value.includes(item.value)
            );
            const newValues = this.state.value.concat(
                newItemsToSelect.map((_item) => _item.value)
            );
            const valid = !required || newValues.length > 0;
            this.setState({
                value: newValues,
                selectedItems: this.state.selectedItems.concat(
                    newItemsToSelect
                ),
                valid: valid,
            });
            setParentProps && setParentProps(newValues, valid);
        }
    }

    deselectItem(index) {
        const {
            value,
            selectedItems,
            setProps,
            setParentProps,
            required,
        } = this.props;
        if (setProps) {
            const newValues = value.filter((val, i) => i !== index);
            const valid = !required || newValues.length > 0;
            setProps({
                value: newValues,
                selectedItems: selectedItems.filter((val, i) => i !== index),
                valid: valid,
            });
            setParentProps && setParentProps(newValues, valid);
        } else {
            const newValues = this.state.value.filter((val, i) => i !== index);
            const valid = !required || newValues.length > 0;
            this.setState({
                value: newValues,
                selectedItems: this.state.selectedItems.filter(
                    (val, i) => i !== index
                ),
                valid: valid,
            });
            setParentProps && setParentProps(newValues, valid);
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
            this.props.setProps({
                value: [],
                selectedItems: [],
                valid: !this.props.required,
            });
        } else {
            this.setState({
                value: [],
                selectedItems: [],
                valid: !this.props.required,
            });
        }
        this.props.setParentProps &&
            this.props.setParentProps([], !this.props.required);
    };

    renderTag = (item) => item.label;

    render() {
        const {
            setProps,
            icon,
            disabled,
            minimal,
            popoverProps,
            tagMinimal,
            ...htmlProps
        } = this.props;
        const value = setProps ? this.props.value : this.state.value;
        const selectedItems = setProps
            ? this.props.selectedItems
            : this.state.selectedItems;
        const getTagProps = (_value, index) => ({
            intent:
                this.state && this.state.intent
                    ? INTENTS[index % INTENTS.length]
                    : Intent.NONE,
            minimal: tagMinimal,
        });
        const clearButton =
            value.length > 0 ? (
                <Button
                    icon="cross"
                    minimal={true}
                    onClick={this.handleClear}
                />
            ) : undefined;
        return (
            <BPMultiSelect
                itemPredicate={filterItemByQueryString}
                itemRenderer={renderSelectItem}
                onItemSelect={this.handleItemSelect}
                popoverProps={{minimal: minimal, ...this.props.popoverProps}}
                {...htmlProps}
                tagRenderer={this.renderTag}
                tagInputProps={{
                    tagProps: getTagProps,
                    onRemove: this.handleTagRemove,
                    rightElement: clearButton,
                }}
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
    placeholder: 'Search...',
    required: true,
};

MultiSelect.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Items to choose from
     */
    items: PropTypes.array,

    /**
     * The selected item
     */
    value: PropTypes.array,

    /**
     * Class name
     */
    className: PropTypes.string,

    /**
     * Whether the menu is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Whether the list can be filtered
     */
    filterable: PropTypes.bool,

    /**
     * Use minimal popover style
     */
    minimal: PropTypes.bool,

    /**
     * Button icon
     */
    icon: PropTypes.string,

    /**
     * Additional props to define the popover behaviour
     */
    popoverProps: PropTypes.object,

    /**
     * Returns selected items
     */
    selectedItems: PropTypes.array,

    /**
     * Input placeholder text. Shorthand for tagInputProps.placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Whether this input is required. Used in form validation
     */
    required: PropTypes.bool,

    /**
     * Determine whether the input is valid. Used in form validation
     */
    valid: PropTypes.bool,
};
