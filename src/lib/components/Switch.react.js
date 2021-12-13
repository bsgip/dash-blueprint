import React from 'react';
import PropTypes from 'prop-types';
import {Switch as BPSwitch} from '@blueprintjs/core';
import {thisTypeAnnotation} from '@babel/types';

/**
 * A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
 */

export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        if (props.setParentProps) {
            props.setParentProps(props.checked);
        }
        props.setProps ? null : (this.state = props.checked);
    }

    handleChange() {
        const {setProps, setParentProps} = this.props;
        const checked = !(setProps ? this.props.checked : this.state.checked);
        if (setProps) {
            setProps({checked: checked});
        } else {
            this.setState({checked: checked});
        }
        setParentProps && setParentProps(checked);
    }

    render() {
        const {
            children,
            setParentProps,
            initParentState,
            checked,
            setProps,
            updateKey,
            ...htmlProps
        } = this.props;

        return (
            <BPSwitch
                checked={setProps ? checked : this.state.checked}
                onChange={this.handleChange}
                {...htmlProps}
            >
                {this.props.children}
            </BPSwitch>
        );
    }
}

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
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    checked: PropTypes.bool,

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
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: PropTypes.string,

    /**
     * Indicates whether the user can interact with the element.
     */
    disabled: PropTypes.string,

    /**
     * Indicates the form that is the owner of the element.
     */
    form: PropTypes.string,

    /**
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    formAction: PropTypes.string,

    /**
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: PropTypes.string,

    /**
     * Defines the type of the element.
     */
    type: PropTypes.string,

    /**
     * Defines a default value which will be displayed in the element on page load.
     */
    value: PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    accessKey: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    contentEditable: PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    contextMenu: PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    dir: PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    draggable: PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    hidden: PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    lang: PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    spellCheck: PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    tabIndex: PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    title: PropTypes.string,

    /**
     * Button intent (primary/success/warning/danger/none)
     */
    intent: PropTypes.string,

    /**
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,
};
