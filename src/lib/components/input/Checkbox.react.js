import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Checkbox as BPCheckbox} from '@blueprintjs/core';

/**
 * A checkbox allows the user to toggle between checked, unchecked,
 * and (rarely) indeterminate states.
 */

const Checkbox = (props) => {
    const {
        checked,
        setProps,
        setParentProps,
        value,
        children,
        ...checkboxProps
    } = props;
    const [checkedState, setCheckedState] = useState(checked);

    const handleChange = () => {
        const checkUpdate = setProps ? !checked : !checkedState;
        if (setProps) {
            setProps({checked: checkUpdate});
            setParentProps && setParentProps(checkUpdate);
        } else {
            setCheckedState(checkUpdate);
        }
    };

    return (
        <BPCheckbox
            checked={setProps ? checked : checkedState}
            onChange={handleChange}
            {...checkboxProps}
        >
            {children}
        </BPCheckbox>
    );
};

Checkbox.defaultProps = {
    checked: false,
};

Checkbox.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,

    /**
     * The ARIA role attribute
     */
    role: PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: PropTypes.string,

    /**
     * Indicates whether the user can interact with the element.
     */
    disabled: PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,

    /**
     * Alignment of the indicator within container.
     */
    alignIndicator: PropTypes.string,

    /**
     * Whether the control is checked.
     */
    checked: PropTypes.bool,

    /**
     *JSX label for the control.
     */
    children: PropTypes.any,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Whether the control is non-interactive.
     */
    disabled: PropTypes.bool,

    /**
     * Whether the control should appear as an inline element.
     */
    inline: PropTypes.bool,

    /**
     * Text label for the control.
     *
     * Use children or labelElement to supply JSX content. This prop actually supports JSX elements,
     * but TypeScript will throw an error because HTMLAttributes only allows strings.
     */
    label: PropTypes.string,

    /**
     * Whether this control should use large styles.
     */
    large: PropTypes.bool,

    /**
     * Name of the HTML tag that wraps the checkbox.
     *
     * By default a <label> is used, which effectively enlarges the click target to include all
     * of its children. Supply a different tag name if this behavior is undesirable or you're
     * listening to click events from a parent element (as the label can register duplicate clicks).
     */
    tagName: PropTypes.string,
};

export default Checkbox;
