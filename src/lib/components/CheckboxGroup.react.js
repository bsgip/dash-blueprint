import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as BPFormGroup} from "@blueprintjs/core";


/**
 * This is a wrapper around a set of BlueprintJS checkbox and FormGroup components
 * to give functionality similar to the standard Dash checkbox component.
 * 
 * The BlueprintJS checkbox treats every checkbox individually, whereas this groups
 * them into selection items
 */

export default class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildChange = this.handleChildChange.bind(this);
        this.formGroup = React.createRef();
        if (this.props.setParentProps) {
            this.props.setParentProps({value: this.props.value})
        }
        const checkedKeys = this.props.children.filter(
            child => child.props._dashprivate_layout.props.checked === true)
            .map(child => child.props._dashprivate_layout.props.key);
        this.props.setProps(
            {
                value: checkedKeys
            }
        )
    }

    /**
     * Similar to a FormGroup, but this wraps up a set of checkboxes into a similar form
     * to the standard dash Checkbox
     * 
     * @param {string} key 
     * @param {object} data 
     */
    handleChildChange(key, data) {
        let value;
        if (!this.props.value) {
            value = new Set([]);
        }
        else {
            value = new Set(this.props.value);
        }
        if (data.checked) {
            value.add(key);
        }
        else {
            value.delete(key);
        }

        this.props.setProps({value: Array.from(value)});
        if (this.props.setParentProps) {
            this.props.setParentProps({value: Array.from(value)});
        }
    }

    render() {
        const { children, ...htmlProps } = this.props;
        /**
         * It's not pretty, but we are injecting the handeChildChange into the props of the 
         * child components so that the parent props are updated when the child value changes.
         */
        const clonedChildren = React.Children.map(this.props.children, child => {
            if (child.props._dashprivate_layout) {
                child.props._dashprivate_layout.props.setParentProps = data => this.handleChildChange(
                    child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data
                    );
            }
            return child;
          });
        
        return <BPFormGroup {...htmlProps}>
            { clonedChildren }
        </BPFormGroup>
    }
}

CheckboxGroup.defaultProps = {
    value: []
};

CheckboxGroup.propTypes = {
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
     * Label for the form group
     */
    'label': PropTypes.string,

    /**
     * Label for the form group
     */
    value: PropTypes.array,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,
};
