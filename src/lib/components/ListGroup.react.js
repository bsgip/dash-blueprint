import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as div} from "@blueprintjs/core";
import { Switch } from '..';

var _ = require('lodash');

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
        console.log(props);
        // this.props.children = [
        //     _.cloneDeep(this.props.children),
        //     _.cloneDeep(this.props.children),
        //     _.cloneDeep(this.props.children),
        // ];
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
    handleChildChange(i, data) {
        console.log(i);
    }

    render() {
        const { children, ...htmlProps } = this.props;
        const clonedChildren = React.Children.map(this.props.children, (child, idx) => {
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
        
        return <div {...htmlProps}>
            { clonedChildren }
        </div>
    }


    render() {
        // console.log('rendering list group');
        // console.log(this);
        // const numrows = this.nRows;
        const { children, ...htmlProps } = this.props;
        
        let rows = [];
        for (let i = 0; i < this.nRows; i++) {
            rows.push(_.cloneDeep(children));
        }

        // var rows = [];
        // for (let i = 0; i < numrows; i++) {
        //     // // let arrNumber = i;
        //     // // TODO Check what values are stored in the state
        //     // let clonedChildren = React.Children.map(this.props.children, child => {
        //     //     // let clone = this.recursiveCloneChild(child);
        //     //     return ( function(i, that) {
        //     //         let clone = Object.assign({}, child);
        //     //         if (child.props._dashprivate_layout) {
                        
        //     //             console.log('cl');
        //     //             console.log(clone);
        //     //             console.log(clone === child);
        //     //             clone.props._dashprivate_layout.props = Object.assign({}, child.props._dashprivate_layout.props);
        //     //             clone.props._dashprivate_layout.props.setParentProps = data => that.handleChildChange(
        //     //                 i,
        //     //                 clone.props._dashprivate_layout.props.key || clone.props._dashprivate_layout.props.id, 
        //     //                 data
        //     //                 );
        //     //                 clone.props._dashprivate_layout.props.id = clone.props._dashprivate_layout.props.id + i;
        //     //         }
        //     //         console.log('cloned');
        //     //         console.log(clone);
        //     //         console.log(clone.props._dashprivate_layout.props.id);
        //     //         return React.cloneElement(clone);
        //     //     } )(i, this);
        //     // });
                
        //     // //   );
        //     // console.log(clonedChildren);
        //     let clone = React.cloneElement(this.props.children[0]);
        //     console.log(clone.props);
        //     clone.props._dashprivate_layout = Object.assign({}, clone.props._dashprivate_layout);
        //     clone.props._dashprivate_layout.props = Object.assign({}, clone.props._dashprivate_layout.props);
        //     clone.props._dashprivate_layout.props.id = 'c' + i;
        //     clone.props._dashprivate_layout.props.key = 'k' + i;
        //     clone.id = i;
        //     // clone.props._dashprivate_layout.id = 'c' + i;
        //     rows.push(<div {...htmlProps} key={i} >
        //         <Switch id={i}>
        //             { clone.props.children }
        //         </Switch>
        //     </div>);
        // }
        
        // console.log(rows);
        // console.log(rows[0][0] === rows[1][0]);
        // return <div>
        //     { rows }
        // </div>
        return <div {...htmlProps}>
            {rows}
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
