import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Tree as BPTree} from '@blueprintjs/core';
import {cloneDeep} from 'lodash-es';

const forEachNode = (nodes, callback) => {
    if (nodes == null) {
        return;
    }
    for (const node of nodes) {
        callback(node);
        forEachNode(node.childNodes, callback);
    }
};

function forNodeAtPath(nodes, path, callback) {
    callback(BPTree.nodeFromPath(path, nodes));
}

function treeExampleReducer(state, action) {
    switch (action.type) {
        case 'DESELECT_ALL':
            const newState1 = cloneDeep(state);
            forEachNode(newState1, (node) => (node.isSelected = false));
            return newState1;
        case 'SET_IS_EXPANDED':
            const newState2 = cloneDeep(state);
            forNodeAtPath(
                newState2,
                action.payload.path,
                (node) => (node.isExpanded = action.payload.isExpanded)
            );
            return newState2;
        case 'SET_IS_SELECTED':
            const newState3 = cloneDeep(state);
            forNodeAtPath(
                newState3,
                action.payload.path,
                (node) => (node.isSelected = action.payload.isSelected)
            );
            return newState3;
        default:
            return state;
    }
}

/**
 * Trees display hierarchical data. In this implementation, selecting a Node in the tree
 * redirects to the given href
 */
const Tree = (props) => {
    const {setProps, selectedNode, nodes, ...treeProps} = props;
    const [selectedNodeState, setSelectedNodeState] = useState(selectedNode);

    // const handleNodeClick = (nodeData, _nodePath, e) => {
    //     const originallySelected = nodeData.isSelected;
    //     if (!e.shiftKey) {
    //         forEachNode(nodes, (n) => (n.isSelected = false));
    //     }
    //     nodeData.isSelected =
    //         originallySelected == null ? true : !originallySelected;
    //     setProps
    //         ? setProps({selectedNode: nodeData})
    //         : setSelectedNodeState(nodeData);
    // };

    // handleNodeExpand = (nodeData) => {
    //     nodeData.isExpanded = true;
    //     setProps && setProps({nClicks: 1});
    // };

    // handleNodeCollapse = (nodeData) => {
    //     nodeData.isExpanded = false;
    //     // const {setProps} = props;
    //     // if (setProps) {
    //     //     setProps({nClicks: 1});
    //     // }
    //     // this.setState(this.state);
    // };

    const [treeNodes, dispatch] = React.useReducer(treeExampleReducer, nodes);

    const handleNodeClick = React.useCallback((node, nodePath, e) => {
        const originallySelected = node.isSelected;
        console.log(node);
        if (!e.shiftKey) {
            dispatch({type: 'DESELECT_ALL'});
        }
        dispatch({
            payload: {
                path: nodePath,
                isSelected:
                    originallySelected == null ? true : !originallySelected,
            },
            type: 'SET_IS_SELECTED',
        });
        // TODO Handle multi-selection and switching on/off selection
        console.log('Selecting ' + node.id);
        setProps && setProps({selectedNode: node.id});
    }, []);

    const handleNodeCollapse = React.useCallback((_node, nodePath) => {
        dispatch({
            payload: {path: nodePath, isExpanded: false},
            type: 'SET_IS_EXPANDED',
        });
    }, []);

    const handleNodeExpand = React.useCallback((_node, nodePath) => {
        dispatch({
            payload: {path: nodePath, isExpanded: true},
            type: 'SET_IS_EXPANDED',
        });
    }, []);

    return (
        <BPTree
            contents={treeNodes}
            onNodeClick={handleNodeClick}
            onNodeCollapse={handleNodeCollapse}
            onNodeExpand={handleNodeExpand}
            {...treeProps}
        ></BPTree>
    );
};

Tree.defaultProps = {};

Tree.propTypes = {
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
     * A callback for firing events to dash.
     */
    setProps: PropTypes.func,

    /**
     * Set of nodes to be rendered
     */
    nodes: PropTypes.array,

    /**
     * Currently selected node
     */
    selectedNode: PropTypes.string,
};

export default Tree;
