import React from 'react';
import PropTypes from 'prop-types';
import {Radio, RadioGroup as BPRadioGroup} from '@blueprintjs/core';

/**
 * A radio button typically represents a single option in a mutually exclusive list
 * (where only one item can be selected at a time).
 * Blueprint provides Radio and RadioGroup components for these two layers.
 */

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        props.setProps
            ? props.setProps({valid: !props.required || !!props.value})
            : (this.state = {
                  value: props.value,
                  valid: !props.required || !!props.value,
              });
        props.setParentProps && props.setParentProps(props.value);
        props.validateParent &&
            props.validateParent(!props.required && !!props.value);
    }

    handleRadioChange(event) {
        const {required, setProps, setParentProps, validateParent} = this.props;
        setProps
            ? setProps({value: event.target.value, valid: true})
            : this.setState({value: event.target.value, valid: true});
        setParentProps && setParentProps(event.target.value);
        validateParent && validateParent(true); // Will always end up with a selection
    }

    render() {
        const {options, setProps, value, ...htmlProps} = this.props;
        const children = options.map((item) => {
            return <Radio key={item.value} {...item} />;
        });

        return (
            <BPRadioGroup
                {...htmlProps}
                onChange={this.handleRadioChange}
                selectedValue={setProps ? this.props.value : this.state.value}
            >
                {children}
            </BPRadioGroup>
        );
    }
}

RadioGroup.defaultProps = {
    required: false,
};

RadioGroup.propTypes = {
    // TODO
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
     * Label for the form group
     */
    label: PropTypes.string,

    /**
     * Label for the form group
     */
    value: PropTypes.array,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

    /**
     * Whether the radio buttons are to be displayed inline horizontally.
     */
    inline: PropTypes.bool,

    /**
     * Optional label text to display above the radio buttons.
     */
    label: PropTypes.string,

    /**
     * Name of the group, used to link radio buttons together in HTML. If omitted, a unique name will be generated internally.
     */
    name: PropTypes.string,

    /**
     * Array of options to render in the group. This prop is mutually exclusive with children: either provide an array of IOptionProps objects or provide <Radio> children elements.
     */
    options: PropTypes.array,

    /**
     * Value of the selected radio. The child with this value will be :checked.
     */
    value: PropTypes.any,

    /**
     * Whether this input is required. Used in form validation
     */
    required: PropTypes.bool,

    /**
     * Determine whether the input is valid. Used in form validation
     */
    valid: PropTypes.bool,
};
