import React from 'react';
import PropTypes from 'prop-types';
import { Tree as BPTree, ITreeNode } from "@blueprintjs/core";


/**
 * Trees display hierarchical data. In this implementation, selecting a Node in the tree
 * redirects to the given href
 */
export default class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.handleNodeExpand = this.handleNodeExpand.bind(this);
        this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.forEachNode = this.forEachNode.bind(this);

    }

    handleNodeClick = (nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.props.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        const {setProps} = this.props;
        if (setProps) {
            setProps({selectedNode: nodeData});
        }
        else {
            this.setState({selectedNode: nodeData})
        }
    };

    forEachNode(nodes, callback) {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        const {setProps} = this.props;
        if (setProps) {
            setProps({nClicks: 1});
        }
        this.setState(this.state);
    };

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        const {setProps} = this.props;
        if (setProps) {
            setProps({nClicks: 1});
        }
        this.setState(this.state);
    };
    
    render() {
        const { nodes, ...thisProps } = this.props;
        return (

            <BPTree
                contents={nodes}
                onNodeClick={this.handleNodeClick}
                onNodeCollapse={this.handleNodeCollapse}
                onNodeExpand={this.handleNodeExpand}
            >

            </BPTree>
        );
    }
}

Tree.defaultProps = {
};

Tree.propTypes = {
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
     * A callback for firing events to dash.
     */
    'setProps': PropTypes.func,

    /**
     * Set of nodes to be rendered
     */
    'nodes': PropTypes.array,

    /**
     * Currently selected node
     */
    'selectedNode': PropTypes.object
};
