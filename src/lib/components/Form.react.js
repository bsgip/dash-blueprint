import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@blueprintjs/core";


/**
 * Custom component that is a collection of FormGroups with submit button
 * that may have custom validation to enable
 * 
 * https://blueprintjs.com/docs/#core/components/dialog.dialog
 * 
 * @param props
 * @returns {*}
 * @constructor
 */

const Form = (props) => {
    const {setProps, children, ...formProps} = props;
    
    if (!setProps) {
        [isDialogOpen, setIsOpen] = React.useState(isOpen);
    }
    
    return <div 
        {...dialogProps} 
        
    >
        {children}
        <div>
            <Button>{"Submit"}</Button>
        </div>
    </div>

};

Form.defaultProps = {
    
};

Form.propTypes = {
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
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

};

export default Form;