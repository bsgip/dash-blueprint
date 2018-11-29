import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import * as React from "react";
import PropTypes from 'prop-types';

@HotkeysTarget
export default class GlobalHotkeys extends React.Component {
    render() {
        return <div>Custom content</div>;
    }

    fireEvent(label) {
        console.log('firing event!');
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
        return <Hotkeys>
            <Hotkey
                global={true}
                combo="shift + a"
                label="Be awesome all the time"
                onKeyDown={() => {
                    console.log('awesone');
                    this.fireEvent('awesome')
                }}
            />
            <Hotkey
                group="Fancy shortcuts"
                combo="shift + f"
                label="Be fancy only when focused"
                onKeyDown={() => console.log("So fancy!")}
            />
        </Hotkeys>;
    }
}


GlobalHotkeys.defaultProps = {
    n_presses: 0,
    n_presses_timestamp: -1,
    hotkey: null
};

GlobalHotkeys.propTypes = {
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



};