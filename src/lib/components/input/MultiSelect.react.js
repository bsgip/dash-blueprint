import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MultiSelect as BPMultiSelect} from '@blueprintjs/select';
import {Button, MenuItem, Intent} from '@blueprintjs/core';
import {filterItemByQueryString, renderSelectItem} from '../../utils/text';

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

const MultiSelect = (props) => {
    const {
        value,
        selectedItems,
        setProps,
        setParentProps,
        required,
        ...htmlProps
    } = props;
    const [selectedItemsState, setSelectedItemsState] = useState(selectedItems);
    const [valueState, setValueState] = useState(selectedItems);

    const selectedValues = selectedItems.map((item) => item.value);
    const valid = !props.required || selectedItems.length > 0;

    setProps &&
        setProps({
            value: selectedValues,
            selectedItems: selectedItems,
            valid: valid,
        });
    setParentProps && setParentProps(selectedValues, valid);

    const selectItems = (itemsToSelect) => {
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
                (item) => !valueState.includes(item.value)
            );
            const newValues = valueState.concat(
                newItemsToSelect.map((_item) => _item.value)
            );
            const valid = !required || newValues.length > 0;
            setSelectedItemsState(selectedItemsState.concat(newItemsToSelect));
            setValueState(newValues);
            console.log(selectedItemsState.concat(newItemsToSelect));
            setParentProps && setParentProps(newValues, valid);
        }
    };

    const deselectItem = (index) => {
        if (setProps) {
            const newValues = value.filter((_, i) => i !== index);
            const valid = !required || newValues.length > 0;
            setProps({
                value: newValues,
                selectedItems: selectedItems.filter((val, i) => i !== index),
                valid: valid,
            });
            setParentProps && setParentProps(newValues, valid);
        } else {
            const newValues = selectedItemsState.filter(
                (val, i) => i !== index
            );
            const valid = !required || newValues.length > 0;
            setSelectedItemsState(
                selectedItemsState.filter((_, i) => i !== index)
            );
            setValueState(newValues);
            setParentProps && setParentProps(newValues, valid);
        }
    };

    const handleTagRemove = (_tag, index) => {
        deselectItem(index);
    };

    const getSelectedItemIndex = (item) => {
        return setProps
            ? value.indexOf(item.value)
            : valueState.indexOf(item.value);
    };

    const isItemSelected = (item) => {
        return getSelectedItemIndex(item) !== -1;
    };

    const selectItem = (item) => {
        selectItems([item]);
    };

    const handleItemSelect = (item) => {
        if (!isItemSelected(item)) {
            selectItem(item);
        } else {
            deselectItem(getSelectedItemIndex(item));
        }
    };

    const handleClear = () => {
        if (setProps) {
            setProps({
                value: [],
                selectedItems: [],
                valid: !required,
            });
        } else {
            setSelectedItemsState([]);
            setValueState([]);
        }
        setParentProps && setParentProps([], !required);
    };

    const renderTag = (item) => item.label;

    const {icon, disabled, minimal, popoverProps, tagMinimal} = props;
    const valueToShow = setProps ? value : valueState;
    const selectedItemsToShow = setProps ? selectedItems : selectedItemsState;
    const getTagProps = (_value, index) => ({
        minimal: tagMinimal,
    });
    const clearButton =
        valueToShow.length > 0 ? (
            <Button icon="cross" minimal={true} onClick={handleClear} />
        ) : undefined;
    return (
        <BPMultiSelect
            itemPredicate={filterItemByQueryString}
            itemRenderer={renderSelectItem}
            onItemSelect={handleItemSelect}
            popoverProps={{minimal: minimal, ...popoverProps}}
            {...htmlProps}
            tagRenderer={renderTag}
            tagInputProps={{
                tagProps: getTagProps,
                onRemove: handleTagRemove,
                rightElement: clearButton,
            }}
            selectedItems={selectedItemsToShow}
        />
    );
};

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

export default MultiSelect;
