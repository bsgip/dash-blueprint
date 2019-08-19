import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect as BPMultiSelect } from "@blueprintjs/select";
import { Button, MenuItem, Intent } from "@blueprintjs/core";


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

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];


/**
 * @param props
 * @returns {*}
 * @constructor
 */

export default class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
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

    handleItemSelect(item) {
        console.log(item);
        console.log('handling select');
    }

    handleTagRemove = (_tag, index) => {
        this.deselectItem(index);
    };

    getSelectedItemIndex(item) {
        console.log(item);
        console.log(this.props.value)
        return this.props.value.indexOf(item.value);
    }

    isItemSelected(item) {
        console.log('checking if selected');
        console.log(item)
        console.log(this.props.value);
        return this.getSelectedItemIndex(item) !== -1;
    }

    selectItem(item) {
        this.selectItems([item]);
    }

    selectItems(itemsToSelect) {
        // const { createdItems, films, items } = this.state;
        console.log('selecting items');
        console.log(itemsToSelect);

        // let nextCreatedItems = createdItems.slice();
        // let nextFilms = films.slice();
        // let nextItems = items.slice();

        // itemsToSelect.forEach(film => {
        //     // const results = maybeAddCreatedFilmToArrays(nextItems, nextCreatedItems, film);
        //     nextItems = results.items;
        //     // nextCreatedItems = results.createdItems;
        //     // Avoid re-creating an item that is already selected (the "Create
        //     // Item" option will be shown even if it matches an already selected
        //     // item).
        //     nextFilms = !arrayContainsFilm(nextFilms, film) ? [...nextFilms, film] : nextFilms;
        // });
        const { value, selectedItems } = this.props;
        const newValues = itemsToSelect.map((_item) => _item.value);
        if (this.props.setProps) {
            this.props.setProps({value: value.concat(newValues)});
            this.props.setProps({selectedItems: selectedItems.concat(selectedItems)});
        } else {
            this.setState({value: value.concat(newValues)});
            this.setState({selectedItems: selectedItems.concat(selectedItems)});
        }
        // this.setState({
        //     createdItems: nextCreatedItems,
        //     films: nextFilms,
        //     items: nextItems,
        // });
    }

    deselectItem(index) {
        console.log(this.props);
        const { items } = this.props;
        console.log('deselecting item');
        const { value, selectedItems } = this.props;
        if (this.props.setProps) {
            this.props.setProps({value: value.filter((val, i) => i !== index)});
            this.props.setProps({selectedItems: selectedItems.filter((val, i) => i !== index)});
        } else {
            this.setState({value: value.filter((val, i) => i !== index)});
            this.setState({selectedItems: selectedItems.filter((val, i) => i !== index)});
        }
        // const items = items[index];
        // const { createdItems: nextCreatedItems, items: nextItems } = maybeDeleteCreatedFilmFromArrays(
        //     this.state.items,
        //     this.state.createdItems,
        //     film,
        // );

        // // Delete the item if the user manually created it.
        // this.setState({
        //     createdItems: nextCreatedItems,
        //     films: films.filter((_film, i) => i !== index),
        //     items: nextItems,
        // });
    }

    handleItemSelect = (item) => {
        if (!this.isItemSelected(item)) {
            this.selectItem(item);
        } else {
            this.deselectItem(this.getSelectedItemIndex(item));
        }
    };

    // handleChange(selected, event) {
    //     if (this.props.setProps) {
    //         this.props.setProps({value: selected.value});
    //         this.props.setProps({selectedItem: selected})
    //     } else {
    //         this.setState({value: selected});
    //     }
    //     // TODO Is this needed for form groups?
    //     // if (this.props.setParentProps) {
    //     //     this.props.setParentProps({value: selected})
    //     // }
    // }

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
        const selectedLabel = this.props.selectedItem ? this.props.selectedItem.label : '(No selection)';
        const {icon, disabled, minimal, popoverProps, tagMinimal, ...htmlProps} = this.props;
        // const value = this.props.value ? this.props.value : [];
        const { value } = this.props;
        // const { value, selectedItems } = this.props;
        const selectedItems = this.props.items.filter((_item) => value.indexOf(_item.value) !== -1);
        console.log()
        console.log('rendering');
        console.log(selectedItems);
        console.log(this);
        const getTagProps = (_value, index) => ({
            intent: this.state && this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
            minimal: tagMinimal,
        });
        const clearButton =
            value.length > 0 ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : undefined;
        return (<BPMultiSelect 
            itemPredicate={filterItem}
            itemRenderer={renderItem}
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
    checked: false,
    disabled: false,
    filterable: true,
    minimal: true,
    value: [],
    selectedItems: [],
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

     'selectedItems': PropTypes.array

};
