import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import * as React from "react";
import PropTypes from 'prop-types';

@HotkeysTarget
export default class GlobalHotkeys extends React.Component {
    render() {
        return <div>Custom content</div>;
    }

    renderHotkeys() {
        return <Hotkeys>
            <Hotkey
                global={true}
                combo="shift + a"
                label="Be awesome all the time"
                onKeyDown={() => console.log("Awesome!")}
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
    // TODO

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
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    text: PropTypes.string,

    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    href: PropTypes.string,

    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill: PropTypes.bool,

    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal: PropTypes.bool,

    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large: PropTypes.bool,

    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical: PropTypes.bool,

    /**
     * Popover content
     */
    content: PropTypes.node,

    /**
     * Icon to display
     */
    icon: PropTypes.string,

    /**
     * Display text as multiline item
     */
    multiline: PropTypes.bool,

};