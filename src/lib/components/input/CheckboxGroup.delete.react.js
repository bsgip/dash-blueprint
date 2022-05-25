import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FormGroup as BPFormGroup} from '@blueprintjs/core';

/**
 * This is a wrapper around a set of BlueprintJS checkbox and FormGroup components
 * to give functionality similar to the standard Dash checkbox component.
 *
 * The BlueprintJS checkbox treats every checkbox individually, whereas this groups
 * them into selection items
 */

const CheckboxGroup = (props) => {
    const {
        setProps,
        setParentProps,
        value,
        children,
        ...formgroupProps
    } = props;
    const [valueState, setValueState] = useState(new Set(value || []));
    setParentProps && setParentProps(value || []);
    if (setParentProps) {
        console.log(value);
        console.log('Setting parent state');
    }

    const handleChange = (key, checked) => {
        console.log('handlin change');
        const updateValue = setProps ? new Set(value || []) : valueState;
        console.log(checked);
        checked ? updateValue.add(key) : updateValue.delete(key);

        console.log('UPdating value');
        console.log(Array.from(value));
        setProps ? setProps({value: Array.from(value)}) : setValueState(value);
        setParentProps && setParentProps(Array.from(value));
    };

    /**
     * It's not pretty, but we are injecting the handeChildChange into the props of the
     * child components so that the parent props are updated when the child value changes.
     */
    const clonedChildren = React.Children.map(children, (child) => {
        if (child.props._dashprivate_layout) {
            child.props._dashprivate_layout.props.setParentProps = (data) =>
                handleChange(
                    child.props._dashprivate_layout.props.key ||
                        child.props._dashprivate_layout.props.id,
                    data
                );
        }
        return child;
    });

    return <BPFormGroup {...formgroupProps}>{clonedChildren}</BPFormGroup>;
};

CheckboxGroup.defaultProps = {
    value: [],
};

CheckboxGroup.propTypes = {
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
};

export default CheckboxGroup;
