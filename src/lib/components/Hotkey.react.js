import { Hotkey as BPHotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import * as React from "react";
import PropTypes from 'prop-types';

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
        if (this.props.fireEvent) {this.props.fireEvent({event: 'press'})}

    }

    renderHotkeys() {
        console.log(this.props);
        return <Hotkeys>
            <BPHotkey
                global={this.props.glob}
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
    hotkey: null,
    label: "hotkey",
    combo: "shift + s",
    glob: true
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
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    /**
     * All dashEvents that can be fired
     */
    'dashEvents': PropTypes.oneOf(['press']),

    /**
     * The keyboard combination to fire the event
     */
    combo: PropTypes.string,

    /**
     * Whether the key should be enabled globally or only on focus
     */
    glob: PropTypes.bool,

    /**
     * Label for component
     */
    label: PropTypes.string

};