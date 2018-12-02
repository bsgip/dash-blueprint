import React from 'react';
import PropTypes from 'prop-types';
import { Omnibar as BPOmnibar} from "@blueprintjs/select";
import {HotkeysTarget, Hotkeys, Hotkey, H5, Switch, Button, MenuItem, KeyCombo} from '@blueprintjs/core';
import { CustomEvent } from './MenuItem.react'



// function highlightText(text, query) {
//     let lastIndex = 0;
//     const words = query
//         .split(/\s+/)
//         .filter(word => word.length > 0)
//         .map(escapeRegExpChars);
//     if (words.length === 0) {
//         return [text];
//     }
//     const regexp = new RegExp(words.join("|"), "gi");
//     const tokens: React.ReactNode[] = [];
//     while (true) {
//         const match = regexp.exec(text);
//         if (!match) {
//             break;
//         }
//         const length = match[0].length;
//         const before = text.slice(lastIndex, regexp.lastIndex - length);
//         if (before.length > 0) {
//             tokens.push(before);
//         }
//         lastIndex = regexp.lastIndex;
//         tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
//     }
//     const rest = text.slice(lastIndex);
//     if (rest.length > 0) {
//         tokens.push(rest);
//     }
//     return tokens;
// }
//
// function escapeRegExpChars(text: string) {
//     return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
// }


/**
 * Wrapper around the blueprint ResizeSensor component. Resize events are fired each time the child div
 * resizes, with a custom debounce timeout to ensure we aren't overloaded with events.
 * @param props
 * @returns {*}
 * @constructor
 */

@HotkeysTarget
export default class OmnibarAsync extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
        OmnibarAsync.filterItem = OmnibarAsync.filterItem.bind(this);

    }

    handleQueryChange(query, _event) {
        // this.setState({
        //     items: [
        //         {'value': 'updated', 'label': 'updated', 'sub': 'worked'}
        //     ]
        // });
        // Check that the query has changed - it looks like we get two updates, one with undefined event
        if (this.props.setProps && _event) {
            this.props.setProps({
                query: query
            })
        }
        // if (this.props.fireEvent) {this.props.fireEvent({event: 'query'})}
    }

    renderItem(item, { handleClick, modifiers, _query }){
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <MenuItem
                active={modifiers.active}
                disabled={modifiers.disabled}
                label={item.sub}
                key={item.value}
                onClick={handleClick}
                text={item.label}
            />
        );
    }

    static filterItem(query, item) {
        return `${item.value}. ${item.label.toLowerCase()} ${item.sub ? item.sub.toLowerCase() : ""}`.indexOf(query.toLowerCase()) >= 0;
    }

    // handleResetChange(resetOnSelect) {
    //     this.setState({ true });
    // }
    handleClick(_event) {
        this.setState({ isOpen: true });
    };

    handleItemSelect(item) {
        this.setState({ isOpen: false });
        console.log('handling select');
        if (this.props.setProps) {
            this.props.setProps({
                value: item.value
            })
        }
        if (this.props.fireEvent) {this.props.fireEvent({event: 'click'})}
        if (item.href) {
            // prevent anchor from updating location
            window.history.pushState({}, '', item.href);
            window.dispatchEvent(new CustomEvent('select'));

            // scroll back to top
            window.scrollTo(0, 0);
        }
    };

    handleClose() {
        this.setState({ isOpen: false });
    }

    handleToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    renderHotkeys() {
        return (
            <Hotkeys>
                <Hotkey
                    global={true}
                    combo="shift + o"
                    label="Show Omnibar"
                    onKeyDown={this.handleToggle}
                    // prevent typing "O" in omnibar input
                    preventDefault={true}
                />
            </Hotkeys>
        );
    }

    // componentDidMount() {
    //     console.log('component mounted');
    //     console.log(this);
    //     this.omnibar = new BPOmnibar({
    //             noResults: new MenuItem({disabled:true, text: "No results."}),
    //             onItemSelect: this.handleItemSelect,
    //             onClose: this.handleClose,
    //             itemPredicate: Omnibar.filterItem,
    //             itemRenderer: this.renderItem,
    //             items: this.props.items
    //         }
    //     )
    // }

    render() {
        const options = (
            <div>
                <H5>Props</H5>
                <Switch label="Reset on select" checked={true} onChange={this.handleResetChange} />
            </div>
        );

        return (
            <div options={options} {...this.props}>
                <span>
                    <Button text="Click to show Omnibar" onClick={this.handleClick} />
                    {" or press "}
                    <KeyCombo combo="shift + o" />
                </span>

                <BPOmnibar
                    {...this.state}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.handleItemSelect}
                    onClose={this.handleClose}
                    // itemPredicate={Omnibar.filterItem}
                    itemRenderer={this.renderItem}
                    items={this.props.items}
                    // ref={this.omnibar}
                    onQueryChange={this.handleQueryChange}

                />
            </div>
        );
    }
}

OmnibarAsync.defaultProps = {
};

OmnibarAsync.propTypes = {
    // TODO
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    'key': PropTypes.string,

    /**
     * Selected value from dropdown
     */
    value: PropTypes.string,

    /**
     * Set of items to search
     */
    items: PropTypes.any,


    /**
     * Query string
     */
    query: PropTypes.string,


    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    /**
     * All dashEvents that can be fired
     */
    'dashEvents': PropTypes.oneOf(['query']),
};
