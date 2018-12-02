import React from 'react';
import PropTypes from 'prop-types';
import { Omnibar as BPOmnibar} from "@blueprintjs/select";
import {HotkeysTarget, Hotkeys, Hotkey, H5, Switch, Button, MenuItem, KeyCombo} from '@blueprintjs/core';



/**
 * Wrapper around the blueprint ResizeSensor component. Resize events are fired each time the child div
 * resizes, with a custom debounce timeout to ensure we aren't overloaded with events.
 * @param props
 * @returns {*}
 * @constructor
 */

@HotkeysTarget
export default class Omnibar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    // handleResetChange(resetOnSelect) {
    //     this.setState({ true });
    // }
    handleClick(_event) {
        this.setState({ isOpen: true });
    };

    handleItemSelect(film) {
        this.setState({ isOpen: false });

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
                    items={[]}
                />
            </div>
        );
    }

}

Omnibar.defaultProps = {

};

Omnibar.propTypes = {
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
     * Whether to observe parent sizes
     */
    observeParents: PropTypes.bool,

    /**
     * How long to debounce before firing an event. Useful for situations
     * where dynamic resizing would cause a lot of events to fire.
     */
    debounceTimer: PropTypes.number,

    /**
     * The current size of the observed e.g.
     * {'x': 0, 'y': 0, 'width': 884, 'height': 17.265625, 'top': 0,
     *  'right': 884, 'bottom': 17.265625, 'left': 0}
     * TODO use a proper PropType
     */
    size: PropTypes.any,

    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    /**
     * All dashEvents that can be fired
     */
    'dashEvents': PropTypes.oneOf(['resize']),
};
