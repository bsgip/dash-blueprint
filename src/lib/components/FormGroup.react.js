import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as BPFormGroup} from "@blueprintjs/core";


/**
 * Wrapper around the blueprint FormGroup component.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildChange = this.handleChildChange.bind(this);
        this.formGroup = React.createRef();

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
    handleChildChange(key, data) {

        if (!this.props.childData) {
            this.props.childData = {}
        }
        const newChildData = {
            ...this.props.childData,
            [key]: {...this.props.childData.key, ...data}
        }
        this.props.setProps({childData: newChildData});
    }

    render() {
        const { children, ...htmlProps } = this.props;
        const clonedChildren = React.Children.map(this.props.children, child => {
            if (child.props._dashprivate_layout) {
                child.props._dashprivate_layout.props.setParentProps = data => this.handleChildChange(
                    child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data
                    );
            }
            return child;
            // return React.cloneElement(child, {
            //   someData: "someData",
            //   someState: "someState",
            //   someFunction: x => x
            // });
          });
        
        return <BPFormGroup {...htmlProps}>
            { clonedChildren }
        </BPFormGroup>
    }
}

FormGroup.defaultProps = {
    
};

FormGroup.propTypes = {
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
    childData: PropTypes.object,
};
