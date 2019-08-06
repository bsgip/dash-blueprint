import React from 'react';
import PropTypes from 'prop-types';
import { Tab as BPTab } from "@blueprintjs/core";


const Tab = (props) => {
    const {children, id, title, ...htmlProps} = props;
    console.log('rendering tab');
    console.log(id);
    return (
        <BPTab id={id} title={"tab title"}>
            {"some kind of child object"}
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