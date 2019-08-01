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
        this.props.childData = {};
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

        // if (!this.props.childData) {
        //     this.props.childData = {}
        // }
        console.log(this.props.childData);
        console.log(key, data);
        const newChildData = {
            ...this.props.childData,
            [key]: {...this.props.childData.key, ...data}
        }
        // this.props.setProps({childData: newChildData});
        
        this.setState((state) => {
            console.log('setting state');
            console.log(state);
            console.log(newChildData)
            let newData;
            if (state) {
                // TODO Make this properly recursive
                
                newData = {childData: {...state.childData, ...newChildData}};
            }
            else {
                newData = {childData: newChildData};
            }
            // TODO This is a terrible way of updating
            // TODO Cancel these on load
            // setTimeout(this.props.setProps(newData), 100);
            this.props.setProps(newData);
            if (this.props.setParentProps) {
                this.props.setParentProps(newData.childData);
            }
            return newData;
          });
        // setTimeout(this.props.setProps({}), 1000);

        // Potentially update a parent component
        // if (this.props.setParentProps) {
        //     this.props.setParentProps(newChildData);
        // }
        console.log(this.props.childData);
        console.log('updated');
    }

    render() {
        const { children, ...htmlProps } = this.props;
        const clonedChildren = React.Children.map(this.props.children, (child, idx) => {
            if (child.props._dashprivate_layout) {
                child.props._dashprivate_layout.props.setParentProps = data => this.handleChildChange(
                    child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data
                    );
                child.props._dashprivate_layout.props.initParentState = data => this.initState(
                    child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data
                    );
            }
            
            if (idx < this.props.nRows) {
                return child;
            }
            
            // return React.cloneElement(child, {
            //   someData: "someData",
            //   someState: "someState",
            //   someFunction: x => x
            // });
          }).filter(o => o);
        
        return <BPFormGroup {...htmlProps}>
            { clonedChildren }
        </BPFormGroup>
    }
}

FormGroup.defaultProps = {
    nRows: 100
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
