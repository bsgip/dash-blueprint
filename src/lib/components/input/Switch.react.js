import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch as BPSwitch} from '@blueprintjs/core';

/**
 * A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
 */
const Switch = (props) => {
    const {checked, setProps, setParentProps, children, ...switchProps} = props;

    const [checkedState, setCheckedState] = useState(checked);

    const handleChange = () => {
        const wasChecked = setProps ? checked : checkedState;
        setProps
            ? setProps({checked: !wasChecked})
            : setCheckedState(!wasChecked);
        setParentProps && setParentProps(!wasChecked, true);
    };

    useEffect(() => {
        setProps && setProps({checked: checked, valid: true});
        setParentProps && setParentProps(checked, true);
    }, []);

    return (
        <BPSwitch
            checked={setProps ? checked : checkedState}
            onChange={handleChange}
            {...switchProps}
        >
            {children}
        </BPSwitch>
    );
};

Switch.defaultProps = {
    checked: false,
};

Switch.propTypes = {
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
     * key to use when updating parent component
     */
    updateKey: PropTypes.string,

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
     * Text to display inside the switch indicator when unchecked.
     */
    innerLabel: PropTypes.string,

    /**
     * Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states.
     */
    innerLabelChecked: PropTypes.string,

    /**
     * Text label for the control.
     */
    label: PropTypes.string,

    /**
     * Whether this control should use large styles.
     */
    large: PropTypes.bool,

    /**
     * Name of the HTML tag that wraps the checkbox.
     *
     * By default a <label> is used, which effectively enlarges the click target to include all of its children. Supply a different tag name if this behavior is undesirable or you're listening to click events from a parent element (as the label can register duplicate clicks).
     */
    tagName: PropTypes.string,
};

export default Switch;
