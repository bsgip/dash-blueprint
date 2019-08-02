import React from 'react';
import PropTypes from 'prop-types';
import { Tree as BPTree, ITreeNode } from "@blueprintjs/core";


// const INITIAL_STATE = [
//     {
//         id: 0,
//         hasCaret: true,
//         icon: "folder-close",
//         label: "Folder 0",
//     },
//     {
//         id: 1,
//         icon: "folder-close",
//         isExpanded: true,
//         label: "FOLDER 1",
//         childNodes: [
//             {
//                 id: 2,
//                 icon: "document",
//                 label: "Item 0",
//                 secondaryLabel: "SECONDARY"
//             },
//             {
//                 id: 3,
//                 // icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
//                 label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
//             },
//             {
//                 id: 4,
//                 hasCaret: true,
//                 icon: "folder-close",
//                 // label: (
//                 //     // <Tooltip content="foo" position={Position.RIGHT}>
//                 //     //     Folder 2
//                 //     // </Tooltip>
//                 // ),
//                 childNodes: [
//                     { id: 5, label: "No-Icon Item" },
//                     { id: 6, icon: "tag", label: "Item 1" },
//                     {
//                         id: 7,
//                         hasCaret: true,
//                         icon: "folder-close",
//                         label: "Folder 3",
//                         childNodes: [
//                             { id: 8, icon: "document", label: "Item 0" },
//                             { id: 9, icon: "tag", label: "Item 1" },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 2,
//         hasCaret: true,
//         icon: "folder-close",
//         label: "Super secret files",
//         disabled: true,
//     },
// ];

export default class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.handleNodeExpand = this.handleNodeExpand.bind(this);
        this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.forEachNode = this.forEachNode.bind(this);
        // this.state = {
        //     nodes: INITIAL_STATE
        // };
    }

    handleNodeClick = (nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.props.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        console.log(nodeData);
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
        console.log('expanding');
        nodeData.isExpanded = true;
        this.setState(this.state);
    };

    handleNodeCollapse = (nodeData) => {
        console.log('collapsing');
        nodeData.isExpanded = false;
        this.setState(this.state);
    };
    
    render() {
        console.log('rendering tree');
        console.log(this.state);
        // const state = [
        //     <ITreeNode id={0} hasCaret={true} icon="folder-close" label="Some folder" />
        // ]
        const { nodes, ...thisProps } = this.props;
        // const state = this.state;
        // console.log(state.map);
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
