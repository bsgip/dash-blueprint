import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup as BPFormGroup} from '@blueprintjs/core';

/**
 * Form groups support more complex form controls than simple labels,
 * such as control groups or NumericInput.
 * They also support additional helper text to aid with user navigation.
 */

export default class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildChange = this.handleChildChange.bind(this);
        this.formGroup = React.createRef();
        this.initState = this.initState.bind(this);
    }

    initState(key, data, valid) {
        this.setState((state) => {
            if (state) {
                const newChildData = {
                    ...state.value,
                    [key]: {...this.props.value.key, ...data},
                };
                const newChildValidation = {
                    ...state.childValidation,
                    [key]: valid,
                };
                return {
                    value: {...state.value, ...newChildData},
                    childValidation: {
                        ...state.childValidation,
                        ...newChildValidation,
                    },
                };
            }
            const newChildData = {
                [key]: {...this.props.value.key, ...data},
            };
            const newChildValidation = {
                [key]: {...this.props.childValidation.key, ...data},
            };
            return {
                value: newChildData,
                childValidation: newChildValidation,
            };
        });
    }

    /**
     * For child components that are aware, this function can be used to update the
     * FormGroup with property changes. This means that we can just use the childData
     * property for the FormGroup for a callback rather than checking each nested component.
     *
     * Only dash-blueprint objects will be supported. This is very much untested.
     *
     * @param {string} key
     * @param {object} data
     */
    handleChildChange(key, data, valid) {
        // TODO Better way to check if the data is a simple object (string, number) or object.
        // For objects, we spread data with the current child data.
        // For simple values, we simply replace the data
        const {
            collapseChildData,
            setProps,
            setParentProps,
            value,
            childValidation,
            required,
        } = this.props;
        let newChildData;
        let newChildValidation;
        if (collapseChildData) {
            newChildData = data;
            newChildValidation = valid;
        } else if (typeof data === 'object' && data !== null) {
            newChildData = {
                ...value,
                [key]: {...value.key, ...data},
            };
            newChildValidation = {
                ...childValidation,
                [key]: valid,
            };
        } else {
            newChildData = {
                ...value,
                [key]: data,
            };
            newChildValidation = {
                ...childValidation,
                [key]: valid,
            };
        }

        const validForm =
            !required || Object.values(newChildValidation).every(Boolean);

        this.setState((state) => {
            let newData;
            if (collapseChildData) {
                newData = {
                    value: newChildData,
                    childValidation: newChildValidation,
                    valid: validForm,
                };
            } else if (state) {
                // TODO Make this properly recursive, since there might be deeper nested data.
                newData = {
                    value: {...state.value, ...newChildData},
                    childValidation: {
                        ...state.childValidation,
                        ...newChildValidation,
                    },
                    valid: validForm,
                };
            } else {
                newData = {
                    value: newChildData,
                    childValidation: newChildValidation,
                    valid: validForm,
                };
            }
            // TODO this.setState throws a warning if not using as a Dash component

            setProps
                ? setProps(newData)
                : this.setState({value: newData.value});
            setParentProps && setParentProps(newData.value, validForm);

            return newData;
        });
    }

    insertSetParentProps() {
        /**
         * Hacky, but we need to add the setParentProps to any children so they can update
         * the parent state.
         */
        const childComponents = [
            'FormGroup',
            'EditableText',
            'NumericInput',
            'Checkbox',
            'CheckboxGroup',
            'DatePicker',
            'InputGroup',
            'ListGroup',
            'NumericInput',
            'RadioGroup',
            'Select',
            'Slider',
            'Switch',
        ];
        const clonedChildren = React.Children.map(
            this.props.children,
            (child) => {
                const dpl = child.props._dashprivate_layout;
                // Only add functions if the components explicitly can handle them (hackily hard-coded for now)
                if (
                    dpl &&
                    dpl.namespace === 'dash_blueprint' &&
                    childComponents.includes(dpl.type)
                ) {
                    dpl.props.setParentProps = (data, valid) =>
                        this.handleChildChange(
                            dpl.props.updateKey || dpl.props.id,
                            data,
                            valid
                        );
                    dpl.props.initParentState = (data, valid) =>
                        this.initState(
                            dpl.props.updateKey || dpl.props.id,
                            data,
                            valid
                        );
                } else {
                    // Native react object, splice in the setParentProps prop

                    return React.cloneElement(child, {
                        setParentProps: (data) =>
                            this.handleChildChange(child.props.id, data, valid),
                        initParentState: (data) =>
                            this.initState(child.props.id, data, valid),
                    });
                }
                console.log(child);
                return child;
            }
        );
        return clonedChildren;
    }

    render() {
        const {
            children,
            key,
            setParentProps,
            initParentState,
            ...htmlProps
        } = this.props;
        const moddedChildren = this.insertSetParentProps();
        return <BPFormGroup {...htmlProps}>{moddedChildren}</BPFormGroup>;
    }
}

FormGroup.defaultProps = {
    value: {},
    childValidation: {},
    collapseChildData: false,
    required: false,
};

FormGroup.propTypes = {
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
     * Label of this form group.
     */
    label: PropTypes.string,

    /**
     * Collected values of all children of this form group.
     * This will usually be an object, unless `collapseChildData` is `true`,
     * in which case a single value will be passed in.
     */
    value: PropTypes.any,

    /**
     * Collected values of all children of this form group.
     * This will usually be an object, unless `collapseChildData` is `true`,
     * in which case a single value will be passed in.
     */
    childValidation: PropTypes.any,

    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * A space-delimited list of class names to pass along to the Classes.FORM_CONTENT element that contains children.
     */
    contentClassName: PropTypes.string,

    /**
     * Whether form group should appear as non-interactive. Remember that input elements must be disabled separately.
     */
    disabled: PropTypes.bool,

    /**
     * Optional helper text. The given content will be wrapped in Classes.FORM_HELPER_TEXT and displayed beneath children. Helper text color is determined by the intent.
     */
    helperText: PropTypes.string,

    /**
     * Whether to render the label and children on a single line.
     */
    inline: PropTypes.bool,

    /**
     * Visual intent color to apply to element.
     */
    intent: PropTypes.string,

    /**
     * id attribute of the labelable form element that this FormGroup controls, used as <label for> attribute.
     */
    labelFor: PropTypes.string,

    /**
     * Optional secondary text that appears after the label.
     */
    labelInfo: PropTypes.string,

    /**
     * CSS properties to apply to the root element.
     */
    style: PropTypes.object,

    /**
     * If `true`, this component assumes there is only one child component that updates
     * data, and collapses `childData` from an object to a single value.
     * This can be useful when working with lots of form groups to avoid having
     * to extract single values from objects
     */
    collapseChildData: PropTypes.bool,

    /**
     * Whether this input is required. Used in form validation
     */
    required: PropTypes.bool,

    /**
     * Determine whether the input is valid. Used in form validation
     */
    valid: PropTypes.bool,
};
