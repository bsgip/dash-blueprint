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
        this.props.setProps || (this.state = {value: props.value});
    }

    handleRadioChange(event) {
        const {setProps, setParentProps} = this.props;
        setProps
            ? setProps({value: event.target.value})
            : this.setState({value: event.target.value});
        setParentProps && setParentProps(event.target.value);
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
    value: [],
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
};
