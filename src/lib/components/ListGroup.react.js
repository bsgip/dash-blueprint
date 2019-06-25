import React from 'react';
import PropTypes from 'prop-types';
// import { FormGroup } from "..";
import { FormGroup as BPFormGroup, Button } from "@blueprintjs/core";
// import { Switch } from '..';


var _ = require('lodash');

export default class ListGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildChange = this.handleChildChange.bind(this);
        this.formGroup = React.createRef();
        this.props.childData = {};
        this.initState = this.initState.bind(this);
        this.recalcList = this.recalcList.bind(this);
        // this.nRows = 3;
        
    }

    recalcList(nRows) {
        console.log(this.props);
        console.log('recalcing list');
        
        if (this.props.setProps) {
            
            this.setState((state) => {
                let rows = [];
                for (let i = 0; i < nRows; i++) {
                    rows.push(this.props.childData[this.props.children[i].props._dashprivate_layout.props.key]);
                };
                console.log(rows);
                if (!rows.includes(null)) {
                    this.props.setProps({listData: rows});
                    // return {listData: rows};
                }
                
              });
            // this.props.setProps(
            //     {listData: rows}
            // )
        }
        
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
            this.props.setProps(newData);
            // TODO This is terrible and indeterministic, but without setTimeout,
            // this always sets the new row to None
            setTimeout(this.recalcList, 50, this.props.nRows);
            // this.recalcList(this.props.nRows);
            if (this.props.setParentProps) {
                this.props.setParentProps(newData.childData);
            }
            return newData;
          });
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

          }).filter(o => o);
        
        return <div>
                    <BPFormGroup {...htmlProps} label="something">
                        { clonedChildren }
                    </BPFormGroup>
                    <Button icon="add" disabled={this.props.nRows >= this.props.maxRows}
                    onClick={() => {
                        if (this.props.setProps) {
                            this.props.setProps({
                                nRows: this.props.nRows + 1
                            }
                                )
                            this.recalcList(this.props.nRows + 1);
                        }
                        else {
                            this.setState({nRows: this.props.nRows + 1});
                        }
                        }
            }/>
                    <Button icon="remove" 
                      disabled={this.props.nRows <= this.props.minRows}
                    onClick={() => {
                        if (this.props.setProps) {
                            this.props.setProps({
                                nRows: this.props.nRows - 1
                            }
                                )
                            this.recalcList(this.props.nRows - 1);
                        }
                        else {
                            this.setState({nRows: this.props.nRows - 1});
                        }
                        }
            }/>
                </div>
    }
}

ListGroup.defaultProps = {
    nRows: 1,
    minRows: 0,
    maxRows: 2,
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
     * Child component data
     */
    childData: PropTypes.string,

    /**
     * List of child data for currently visible rows
     */
    listData: PropTypes.string,

    /**
     * Whether to show a limited number of children
     */
    nRows: PropTypes.number,

    /**
     * Min number of rows to show
     */
    minRows: PropTypes.number,

    /**
     * Max number of rows to show
     */
    maxRows: PropTypes.number,
};
