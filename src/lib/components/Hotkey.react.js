import { Hotkey as BPHotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import * as React from "react";
import PropTypes from 'prop-types';

/**
 * Hotkeys enable you to create interactions based on user keyboard events.
 * 
 * When a Hotkey is enabled, a hotkey interaction will trigger an n_presses and n_presses_timestamp
 * update
 */

@HotkeysTarget
export default class Hotkey extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }

    fireEvent(label) {
        if (this.props.setProps) {
            this.props.setProps({
                n_presses: this.props.n_presses + 1,
                n_presses_timestamp: Date.now(),
                hotkey: label
            })
        }

    }

    renderHotkeys() {
        return <Hotkeys>
            <BPHotkey
                global={this.props.global}
                combo={this.props.combo}
                label={this.props.label}
                onKeyDown={() => {
                    this.fireEvent('press')
                }}
            />
        </Hotkeys>;
    }
}


Hotkey.defaultProps = {
    n_presses: 0,
    n_presses_timestamp: -1,
    label: "hotkey",
    global: true
};

Hotkey.propTypes = {
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
     * An integer that represents the number of times
     * that this shortcut has been fired.
     */
    'n_presses': PropTypes.integer,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_presses changed. This can be used to tell
     * which event was fired most recently.
     */
    'n_presses_timestamp': PropTypes.integer,

    /**
     * Signifies the last hotkey that was pressed
     */
    'hotkey': PropTypes.string,

    /**
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Hotkey combination string, such as "space" or "cmd+n".
     */
    combo: PropTypes.string,

    /**
     * If false, the hotkey is active only when the target is focused. 
     * If true, the hotkey can be triggered regardless of what component is focused.
     */
    'global': PropTypes.bool,

    /**
     * Label for component
     */
    label: PropTypes.string

};