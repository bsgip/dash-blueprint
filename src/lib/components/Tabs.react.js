/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import classNames from "classnames";
import * as React from "react";
import PropTypes from 'prop-types';
import { Tab, AbstractPureComponent, Classes, Keys, DISPLAYNAME_PREFIX, Utils } from "@blueprintjs/core"

const Expander = () => <div className={Classes.FLEX_EXPANDER} />;

class TabTitle extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.handleClick = (e) => this.props.onClick(this.props.id, e);
    }
    render() {
        const { disabled, id, parentId, selected } = this.props;
        return (
            <div
                aria-controls={generateTabPanelId(parentId, id)}
                aria-disabled={disabled}
                aria-expanded={selected}
                aria-selected={selected}
                className={classNames(Classes.TAB, this.props.className)}
                data-tab-id={id}
                id={generateTabTitleId(parentId, id)}
                onClick={disabled ? undefined : this.handleClick}
                role="tab"
                tabIndex={disabled ? undefined : 0}
            >
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
// TabTitle.displayName = `${DISPLAYNAME_PREFIX}.TabTitle`;

function generateTabPanelId(parentId, tabId) {
    return `${Classes.TAB_PANEL}_${parentId}_${tabId}`;
}
function generateTabTitleId(parentId, tabId) {
    return `${Classes.TAB}-title_${parentId}_${tabId}`;
}

const TAB_SELECTOR = `.${Classes.TAB}`;

/**
 * Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in controlled mode by providing selectedTabId and onChange props, or in uncontrolled mode by optionally providing defaultSelectedTabId and onChange.
 * 
 * Children of the Tabs are rendered in order in the tab list, which is a flex container. Tab children are managed by the component; clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility.
 * 
 * Insert a <Tabs.Expander /> between any two children to right-align all subsequent children (or bottom-align when vertical).
 */
class Tabs extends AbstractPureComponent {
    constructor(props) {
        super(props);
        this.refHandlers = {
            tablist: (tabElement) => (this.tablistElement = tabElement),
        };
        this.handleKeyDown = (e) => {
            const focusedElement = document.activeElement.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            const enabledTabElements = this.getTabElements().filter(el => el.getAttribute("aria-disabled") === "false");
            const focusedIndex = enabledTabElements.indexOf(focusedElement);
            const direction = this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                const { length } = enabledTabElements;
                // auto-wrapping at 0 and `length`
                const nextFocusedIndex = (focusedIndex + direction + length) % length;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        this.handleKeyPress = (e) => {
            const targetTabElement = e.target.closest(TAB_SELECTOR);
            if (targetTabElement != null && Keys.isKeyboardClick(e.which)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        this.handleTabClick = (newTabId, event) => {
            Utils.safeInvoke(this.props.onChange, newTabId, this.state.selectedTabId, event);
            if (this.props.selectedTabId === undefined) {
                this.setState({ selectedTabId: newTabId });
            }
        };
        this.renderTabPanel = (tab) => {
            console.log('rendering tab panel');
            console.log(tab);
            const { className, panel, id, panelClassName } = tab.props;
            // const children = tab.props._dashprivate_layout.props.children;
            // if (panel === undefined) {
            //     return undefined;
            // }
            return (
                <div
                    aria-labelledby={generateTabTitleId(this.props.id, id)}
                    aria-hidden={id !== this.state.selectedTabId}
                    className={classNames(Classes.TAB_PANEL, className, panelClassName)}
                    id={generateTabPanelId(this.props.id, id)}
                    key={id}
                    role="tabpanel"
                >
                    {/* {"some content"} */}
                    {tab}
                </div>
            );
        };
        this.renderTabTitle = (child) => {
            if (isTabElement(child)) {
                const { id } = child.props;
                console.log('rendering title');
                console.log(child);
                return (
                    <TabTitle
                        // {...child.props}
                        id={child.props._dashprivate_layout.props.id}
                        title={child.props._dashprivate_layout.props.title}
                        parentId={this.props.id}
                        onClick={this.handleTabClick}
                        selected={id === this.state.selectedTabId}
                    />
                );
            }
            return child;
        };
        const selectedTabId = this.getInitialSelectedTabId();
        this.state = { selectedTabId };
    }
    render() {
        console.log('rendering new-style tabs');
        const { indicatorWrapperStyle, selectedTabId } = this.state;

        console.log(this);
        const tabTitles = React.Children.map(this.props.children, this.renderTabTitle);

        const tabPanels = this.getTabChildren()
            .filter(tab => (tab.props.id || tab.props._dashprivate_layout.props.id) === selectedTabId)
            .map(this.renderTabPanel);
        console.log(tabPanels);
        // const children = tabPanels[0].props.children;
        const tabIndicator = this.props.animate ? (
            <div className={Classes.TAB_INDICATOR_WRAPPER} style={indicatorWrapperStyle}>
                <div className={Classes.TAB_INDICATOR} />
            </div>
        ) : null;

        const classes = classNames(Classes.TABS, { [Classes.VERTICAL]: this.props.vertical }, this.props.className);
        const tabListClasses = classNames(Classes.TAB_LIST, {
            [Classes.LARGE]: this.props.large,
        });

        console.log('finished rendering tabs');
        console.log(this.props.children);

        return (
            <div className={classes}>
                <div
                    className={tabListClasses}
                    onKeyDown={this.handleKeyDown}
                    onKeyPress={this.handleKeyPress}
                    ref={this.refHandlers.tablist}
                    role="tablist"
                >
                    {tabIndicator}
                    {tabTitles}
                </div>
                {tabPanels[0].props.children}
            </div>
        );
    }
    componentDidMount() {
        this.moveSelectionIndicator();
    }
    componentWillReceiveProps({ selectedTabId }) {
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            this.setState({ selectedTabId });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            const didChildrenChange = !Utils.arraysEqual(this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), Utils.shallowCompareKeys);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    }
    getInitialSelectedTabId() {
        // NOTE: providing an unknown ID will hide the selection
        const { defaultSelectedTabId, selectedTabId } = this.props;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            const tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props._dashprivate_layout.props.id;
        }
    }
    getKeyCodeDirection(e) {
        if (isEventKeyCode(e, Keys.ARROW_LEFT, Keys.ARROW_UP)) {
            return -1;
        }
        else if (isEventKeyCode(e, Keys.ARROW_RIGHT, Keys.ARROW_DOWN)) {
            return 1;
        }
        return undefined;
    }
    getTabChildrenProps(props = this.props) {
        return this.getTabChildren(props).map(child => child.props);
    }
    /** Filters children to only `<Tab>`s */
    getTabChildren(props = this.props) {
        return React.Children.toArray(props.children).filter(isTabElement);
    }
    /** Queries root HTML element for all tabs with optional filter selector */
    getTabElements(subselector = "") {
        if (this.tablistElement == null) {
            return [];
        }
        return Array.from(this.tablistElement.querySelectorAll(TAB_SELECTOR + subselector));
    }
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    moveSelectionIndicator() {
        if (this.tablistElement == null || !this.props.animate) {
            return;
        }
        const tabIdSelector = `${TAB_SELECTOR}[data-tab-id="${this.state.selectedTabId}"]`;
        const selectedTabElement = this.tablistElement.querySelector(tabIdSelector);
        let indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            const { clientHeight, clientWidth, offsetLeft, offsetTop } = selectedTabElement;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: `translateX(${Math.floor(offsetLeft)}px) translateY(${Math.floor(offsetTop)}px)`,
                width: clientWidth,
            };
        }
        this.setState({ indicatorWrapperStyle });
    }
}
/** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
Tabs.Expander = Expander;
Tabs.Tab = Tab;
Tabs.defaultProps = {
    animate: true,
    large: false,
    renderActiveTabPanelOnly: true
};
// Tabs.displayName = `${DISPLAYNAME_PREFIX}.Tabs`;
// return child;
// ;
function isEventKeyCode(e, ...codes) {
    return codes.indexOf(e.which) >= 0;
}
function isTabElement(child) {
    // TODO Proper check for this as dash can't handle this
    return true;
    // return Utils.isElementOfType(child, Tab);
}


// import React, { Children } from 'react';
// import PropTypes from 'prop-types';
// import { Tabs as BPTabs, Tab } from "@blueprintjs/core";

// export const Expander = () => <div className={Classes.FLEX_EXPANDER} />;

// export class Tabs extends AbstractPureComponent {
//     /** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
//     static Expander = Expander;

//     static Tab = Tab;

//     static defaultProps = {
//         animate: true,
//         large: false,
//         renderActiveTabPanelOnly: false,
//         vertical: false,
//     };

// const Tabs = (props) => {
//     const { children, ...htmlProps } = props;
//     console.log(props);
//     const tabChildren = children.map(child => {
//         //             console.log(child.props);
//         //             console.log(child.props._dashprivate_layout);
//                     return <Tab id={child.props._dashprivate_layout.props.id} 
//                     title={child.props._dashprivate_layout.props.title} 
//                     panel={child.props._dashprivate_layout.props.children} />
//                 })
//     console.log(tabChildren);
//     return (

//         <BPTabs {...htmlProps} >
//             {/* <Tab id={'tab1'} title={'tab 1'} panel={'This is tab 1'}></Tab>
//             <Tab id={'tab2'} title={'tab 2'} panel={'This is tab 2'}></Tab> */}
//             {tabChildren}
//         </BPTabs>
//     );
// };

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

    renderActiveTabPanelOnly: PropTypes.bool,
    'large': PropTypes.bool,
    'animate': PropTypes.bool,

};

export default Tabs;