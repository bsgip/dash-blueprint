import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as BPFormGroup} from "@blueprintjs/core";


/**
 * Wrapper around the blueprint FormGroup component.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class ListGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildChange = this.handleChildChange.bind(this);
        // this.recursiveCloneChildren = this.recursiveCloneChildren.bind(this);
        this.nRows = 3;
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
    handleChildChange(i, key, data) {
        console.log(i);
        if (!this.props.childData) {
            this.props.childData = new Array(this.nRows);
        }
        if (!this.props.childData[i]) {
            this.props.childData[i] = {}
        }
        const newListData = {
            ...this.props.childData[i],
            [key]: {...this.props.childData[i].key, ...data}
        }
        console.log('newListData');
        console.log(newListData);
        console.log(this.props.childData);
        // const newChildData = new Array(this.props.childData);
        // console.log(newChildData);
        this.props.childData[i] = newListData;
        this.props.setProps({childData: this.props.childData});
    }


    render() {
        console.log('rendering list group');
        console.log(this);
        const numrows = this.nRows;
        const { children, ...htmlProps } = this.props;
        
        var rows = [];
        for (let i = 0; i < numrows; i++) {
            let arrNumber = i;
            // TODO Check what values are stored in the state
            let clonedChildren = React.Children.map(this.props.children, child => {
                // let clone = this.recursiveCloneChild(child);
                if (child.props._dashprivate_layout) {
                    child.props._dashprivate_layout.props.setParentProps = data => this.handleChildChange(
                        i,
                        child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, 
                        data
                        );
                        child.props._dashprivate_layout.props.id = child.props._dashprivate_layout.props.id + i;
                }
                console.log('cloned');
                console.log(child);
                return child;
              });
              console.log(clonedChildren);
              rows.push(<BPFormGroup {...htmlProps} key={arrNumber} >
                  { clonedChildren }
              </BPFormGroup>);
        }
        
        
        return <div>
            { rows }
        </div>
    }
}

ListGroup.defaultProps = {
    
};

ListGroup.propTypes = {
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
    childData: PropTypes.string,
};
