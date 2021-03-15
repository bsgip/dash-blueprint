import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as BPFormGroup} from "@blueprintjs/core";


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

    initState(key, data) {
        this.setState((state) => {
            
            if (state) {
                const newChildData = {
                    ...state.childData,
                    [key]: {...this.props.childData.key, ...data}
                }
                return {childData: {...state.childData, ...newChildData}};
            }
            const newChildData = {
                [key]: {...this.props.childData.key, ...data}
            }
            return {childData: newChildData};
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
    handleChildChange(key, data) {
        // TODO Better way to check if the data is a simple object (string, number) or object.
        // For objects, we spread data with the current child data.
        // For simple values, we simply replace the data
        let newChildData;
        console.log(key);
        console.log(data);
        if (this.props.collapseChildData) {
            newChildData = data;
        }
        else if (typeof data === 'object' && data !== null) {
            newChildData = {
                ...this.props.childData,
                [key]: {...this.props.childData.key, ...data}
            }
        }
        else {
            newChildData = {
                ...this.props.childData,
                [key]: data
            }
        }
        
        
        this.setState((state) => {

            let newData;
            if (this.props.collapseChildData) {
                newData = {childData: newChildData};
            }
            else if (state) {
                // TODO Make this properly recursive, since there might be deeper nested data.        
                newData = {childData: {...state.childData, ...newChildData}};
            }
            else {
                newData = {childData: newChildData};
            }
            this.props.setProps(newData);
            if (this.props.setParentProps) {
                this.props.setParentProps(newData.childData);
            }
            return newData;
          });
        
    }

    render() {
        /**
         * Hacky, but we need to add the setParentProps to any children so they can update 
         * the parent state.
         */
        const childComponents = ["FormGroup", "EditableText", "NumericInput", "Checkbox", "CheckboxGroup", "DatePicker", "InputGroup", "ListGroup", "NumericInput", "RadioGroup", "Select", "Slider", "Switch", ];

        const { children, key, setParentProps, initParentState, ...htmlProps } = this.props;
        console.log('rendering formgroup');
        console.log('something');
        console.log(htmlProps);
        const clonedChildren = React.Children.map(this.props.children, (child) => {
            console.log({...child.props});
            // Only add functions if the components explicitly can handle them (hackily hard-coded for now)
            if (child.props._dashprivate_layout && child.props._dashprivate_layout.namespace === "dash_blueprint" && childComponents.includes(child.props._dashprivate_layout.type)) {
                child.props._dashprivate_layout.props.setParentProps = data => this.handleChildChange(
                    child.props._dashprivate_layout.props.updateKey || child.props._dashprivate_layout.props.id, data
                    );
                child.props._dashprivate_layout.props.initParentState = data => this.initState(
                    child.props._dashprivate_layout.props.updateKey || child.props._dashprivate_layout.props.id, data
                    );
                // child.props._dashprivate_layout.props.doAThing = data => this.initState(
                //     child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data
                //     );
            }
            console.log(child);
            return child;
            
          });
        
        return <BPFormGroup {...htmlProps}>
            { clonedChildren }
        </BPFormGroup>
    }
}

FormGroup.defaultProps = {
    childData: {},
    collapseChildData: false
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
     * Label of this form group.
     */
    'label': PropTypes.string,

    /**
     * Collected values of all children of this form group.
     * This will usually be an object, unless `collapseChildData` is `true`,
     * in which case a single value will be passed in.
     */
    childData: PropTypes.any,

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
};
