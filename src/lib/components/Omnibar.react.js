import React from 'react';
import PropTypes from 'prop-types';
import {Omnibar as BPOmnibar} from '@blueprintjs/select';
import {
    HotkeysTarget,
    Hotkeys,
    Hotkey,
    H5,
    Switch,
    Button,
    MenuItem,
    KeyCombo,
} from '@blueprintjs/core';
import {CustomEvent} from './core/MenuItem.react';

/**
 * Omnibar<T> is a macOS Spotlight-style typeahead component composing Overlay and QueryList<T>.
 * Usage is similar to Select<T>: provide your items and a predicate to customize the
 * filtering algorithm. The component is fully controlled via the isOpen prop,
 * which means you can decide exactly how to trigger the component.
 */

@HotkeysTarget
class Omnibar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.renderItem = this.renderItem.bind(this);
        Omnibar.filterItem = Omnibar.filterItem.bind(this);
    }

    renderItem(item, {handleClick, modifiers, _query}) {
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
                icon={item.icon}
            />
        );
    }

    static filterItem(query, item) {
        return (
            `${item.value}. ${item.label.toLowerCase()} ${
                item.sub ? item.sub.toLowerCase() : ''
            }`.indexOf(query.toLowerCase()) >= 0
        );
    }

    handleClick(_event) {
        this.setState({isOpen: true});
    }

    handleItemSelect(item) {
        /**
         * If there is a href in the selected item, we update the window location
         * A dash event is also fired.
         */
        this.setState({isOpen: false});
        if (this.props.setProps) {
            this.props.setProps({
                value: item.value,
            });
        }
        if (item.href) {
            // prevent anchor from updating location
            window.history.pushState({}, '', item.href);
            window.dispatchEvent(new CustomEvent('select'));

            // scroll back to top
            window.scrollTo(0, 0);
        }
    }

    handleClose() {
        this.setState({isOpen: false});
        // TODO There should be an option to reset current query value on close
    }

    handleToggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    renderHotkeys() {
        return (
            <Hotkeys>
                <Hotkey
                    global={true}
                    combo={this.props.combo}
                    label={this.props.label}
                    onKeyDown={this.handleToggle}
                    // prevent typing "O" in omnibar input
                    preventDefault={true}
                />
            </Hotkeys>
        );
    }

    render() {
        const options = (
            <div>
                <H5>Props</H5>
                <Switch
                    label="Reset on select"
                    checked={true}
                    onChange={this.handleResetChange}
                />
            </div>
        );

        return (
            <div options={options} {...this.props}>
                {this.props.label ? (
                    <span>
                        <Button
                            text={this.props.label}
                            onClick={this.handleClick}
                        />
                        <KeyCombo combo={this.props.combo} />
                    </span>
                ) : null}

                <BPOmnibar
                    {...this.state}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.handleItemSelect}
                    onClose={this.handleClose}
                    itemPredicate={Omnibar.filterItem}
                    itemRenderer={this.renderItem}
                    items={this.props.items}
                    inputProps={{placeHolder: this.props.label}}
                />
            </div>
        );
    }
}

Omnibar.defaultProps = {
    combo: 'shift + s',
};

Omnibar.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,

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
     * Keyboard shortcut to show omnibar
     */
    combo: PropTypes.string,

    /**
     * Label to show on open button (also triggers display of button)
     */
    label: PropTypes.string,
};

export default Omnibar;
