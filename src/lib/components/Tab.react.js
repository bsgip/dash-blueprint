import React from 'react';
import PropTypes from 'prop-types';
import { Tab as BPTab } from "@blueprintjs/core";

/**
 * Tab is a minimal wrapper with no functionality of its own—it is managed entirely by its parent Tabs wrapper. Tab title text can be set either via title prop or via React children (for more complex content).
 * 
 * The associated tab panel will be visible when the Tab is active. Omitting panel is supported and can be useful when you want the associated panel to appear elsewhere in the DOM (by rendering it yourself as needed).
 * @param {*} props 
 */
const Tab = (props) => {
    const {children, id, title, ...htmlProps} = props;
    return (
        <BPTab id={id} title={title}>
            {children}
        </BPTab>
    );
};

Tab.defaultProps = {
    
};

Tab.propTypes = {
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
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    'panelClassName': PropTypes.string,

    'title': PropTypes.string,

    'disabled': PropTypes.bool


};

export default Tab;