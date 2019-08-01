import React from 'react';
import PropTypes from 'prop-types';
import { Tree as BPTree, ITreeNode } from "@blueprintjs/core";


export default class Tree extends React.Component {

    render() {
        console.log('rendering tree');
        const INITIAL_STATE = [
            {
                id: 0,
                hasCaret: true,
                icon: "folder-close",
                label: "Folder 0",
            },
            {
                id: 1,
                icon: "folder-close",
                isExpanded: true,
                label: "FOLDER 1",
                childNodes: [
                    {
                        id: 2,
                        icon: "document",
                        label: "Item 0",
                        secondaryLabel: "SECONDARY"
                    },
                    {
                        id: 3,
                        icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                        label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
                    },
                    {
                        id: 4,
                        hasCaret: true,
                        icon: "folder-close",
                        label: (
                            <Tooltip content="foo" position={Position.RIGHT}>
                                Folder 2
                            </Tooltip>
                        ),
                        childNodes: [
                            { id: 5, label: "No-Icon Item" },
                            { id: 6, icon: "tag", label: "Item 1" },
                            {
                                id: 7,
                                hasCaret: true,
                                icon: "folder-close",
                                label: "Folder 3",
                                childNodes: [
                                    { id: 8, icon: "document", label: "Item 0" },
                                    { id: 9, icon: "tag", label: "Item 1" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                hasCaret: true,
                icon: "folder-close",
                label: "Super secret files",
                disabled: true,
            },
        ];
        const state = [
            <ITreeNode id={0} hasCaret={true} icon="folder-close" label="Some folder" />
        ]
        // const { nodes, ...this.Props } = this.props;
        return (

            <BPTree
                contents={INITIAL_STATE}
          
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
};
