import React from 'react';
import PropTypes from 'prop-types';
import { Select as BPSelect } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";


// interface IItem {
//     /** Title of film. */
//     title: string;
//     /** Release year. */
//     year: number;
//     /** IMDb ranking. */
//     rank: number;
// }

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


/**
 * @param props
 * @returns {*}
 * @constructor
 */

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.filterItem = this.filterItem.bind(this);
        this.renderItem = this.renderItem.bind(this);

    }

    filterItem = (query, item, _index, exactMatch) => {
        console.log('filtering item');
        const normalizedName = item.label.toLowerCase();
        const normalizedQuery = query.toLowerCase();
    
        if (exactMatch) {
            return normalizedTitle === normalizedQuery;
        } else {
            return `${item.value}. ${normalizedName} ${item.tag}`.indexOf(normalizedQuery) >= 0;
        }
    };
    
    renderItem = (item, { handleClick, modifiers, query }) => {
        console.log('rendering item');
        console.log(modifiers);
        if (!modifiers.matchesPredicate) {
            return null;
        }
        const text = `${item.label}`;
        return (
            <MenuItem
                active={modifiers.active}
                disabled={modifiers.disabled}
                label={item.tag}
                // key={film.rank}
                onClick={handleClick}
                text={highlightText(text, query)}
                // text={text}
            />
        );
    };


    handleChange(selected, event) {
        console.log('selection changed');
        console.log(this);
        console.log(selected);
        
        // TODO This is a terrible way of doing this
        if (this.props.setProps) {
            this.props.setProps({value: selected.value});
            this.props.setProps({selectedItem: selected})
        } else {
            this.setState({value: selected});
        }
        // if (this.props.setParentProps) {
        //     this.props.setParentProps({value: selected})
        // }
    }


    render() {
        console.log(this);
        console.log(BPSelect);

        const item = this.props.selectedItem ? this.props.selectedItem.label : '(No selection)';

        return (<BPSelect 
            // {...this.props}
            itemPredicate={this.filterItem}
            itemRenderer={this.renderItem}
            items={this.props.items}
            activeItem={"thing-2"}
            onItemSelect={this.handleChange}
            onActiveItemChange={(activeItem) => console.log('active item change')}
            
        >
            <Button
                        // icon="film"
                        rightIcon="caret-down"
                        text={item ? `${item}` : "(No selection)"}
                        // disabled={disabled}
                    />
                </BPSelect>);
        // return <div>{"There should be select here"}</div>
    }
}

Select.defaultProps = {
    checked: false,
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
     'value': PropTypes.string

};
