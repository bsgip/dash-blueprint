import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Tabs as BPTabs, Tab } from "@blueprintjs/core";


const Tabs = (props) => {
    const { children, ...htmlProps } = props;
    console.log(props);
    const tabChildren = children.map(child => {
        //             console.log(child.props);
        //             console.log(child.props._dashprivate_layout);
                    return <Tab id={child.props._dashprivate_layout.props.id} 
                    title={child.props._dashprivate_layout.props.title} 
                    panel={child.props._dashprivate_layout.props.children} />
                })
    console.log(tabChildren);
    return (

        <BPTabs {...htmlProps} >
            {/* <Tab id={'tab1'} title={'tab 1'} panel={'This is tab 1'}></Tab>
            <Tab id={'tab2'} title={'tab 2'} panel={'This is tab 2'}></Tab> */}
            {tabChildren}
        </BPTabs>
    );
};

// export default class Tabs extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleNodeExpand = this.handleNodeExpand.bind(this);
    //     this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
    //     this.handleNodeClick = this.handleNodeClick.bind(this);
    //     this.forEachNode = this.forEachNode.bind(this);

    // }

    // handleNodeClick = (nodeData, _nodePath, e) => {
    //     const originallySelected = nodeData.isSelected;
    //     if (!e.shiftKey) {
    //         this.forEachNode(this.props.nodes, n => (n.isSelected = false));
    //     }
    //     nodeData.isSelected = originallySelected == null ? true : !originallySelected;
    //     console.log(nodeData);
    //     const {setProps} = this.props;
    //     if (setProps) {
    //         setProps({selectedNode: nodeData});
    //     }
    //     else {
    //         this.setState({selectedNode: nodeData})
    //     }
    // };

    // forEachNode(nodes, callback) {
    //     if (nodes == null) {
    //         return;
    //     }

    //     for (const node of nodes) {
    //         callback(node);
    //         this.forEachNode(node.childNodes, callback);
    //     }
    // }

    // handleNodeExpand = (nodeData) => {
    //     console.log('expanding');
    //     nodeData.isExpanded = true;
    //     this.setState(this.state);
    // };

    // handleNodeCollapse = (nodeData) => {
    //     console.log('collapsing');
    //     nodeData.isExpanded = false;
    //     this.setState(this.state);
    // };
    
//     render() {
//         console.log('rendering tabs');
//         const { children, id, defaultSelectedTabId, large, renderActiveTabPanelOnly, ...thisProps } = this.props;
//         console.log(this.props);
//         const tabChildren = children.map(child => {
//             console.log(child.props);
//             console.log(child.props._dashprivate_layout);
//             return child //.props._dashprivate_layout
//         })
//         console.log(tabChildren);
//         return (

//             <BPTabs
//                 id={id}
//                 defaultSelectedTabId={defaultSelectedTabId}
//                 large={large}
//                 renderActiveTabPanelOnly={renderActiveTabPanelOnly}
//             >
//                 {tabChildren}

//             </BPTabs>
//         );
//     }
// }

Tabs.defaultProps = {
    renderActiveTabPanelOnly: false,
    large: false,
    animate: true,
    defaultSelectedTabId: 'tab1'
};

Tabs.propTypes = {
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

    'defaultSelectedTabId': PropTypes.string,

    'renderActiveTabPanelOnly': PropTypes.bool,
    'large': PropTypes.bool,
    'animate': PropTypes.bool,

};

export default Tabs;