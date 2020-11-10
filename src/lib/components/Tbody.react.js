import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is a reimplementation of html Tr with an extra state that supports modifying the className
 * when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
 */
class Tbody extends React.Component {

    // static getDerivedStateFromProps(prevProps, prevState, snapshot) {
    //     console.log('Getting derived state for Tr');
    //     console.log(prevProps);
    //     console.log(prevState);
    //     return {
    //         className: prevProps.className ? prevProps.className + " selected" : "selected",
    //         selected: prevProps.selected,
    //         row_click: prevProps.n_clicks,
    //     }
    // }

    // componentDidUpdate() {
    //     console.log('Tr component updated');
    // }

    // componentDidMount() {
    //     console.log(this.props.key + ' Tr component mounted');
    // }
    
    render() {
        const { children, selected, key, setProps, ...htmlProps } = this.props;
        // console.log(htmlProps);
        // console.log(rowKey);
        console.log('rendering Tbody');
        console.log(this.props);
        let newChildren;
        if (children) {
            newChildren = children.map(child => {
                return {
                    ...child,
                    key: child.props._dashprivate_layout.props.selected ? child.props._dashprivate_layout.props.key + "s" : child.props._dashprivate_layout.props.key
                    }
                }   
            );
        }
        // let selectedRowKey = rowKey;
        // if (this.state && this.state.selected) {
        //     console.log(rowKey + " is selected");
        //     htmlProps.className = htmlProps.className ? htmlProps.className + " selected" : "selected";
        //     selectedRowKey = key + "s";
        // }
        // else {
        //     console.log(rowKey + " is not selected");
        //     selectedRowKey = key + "ns";
        // }
        return <tbody key={key} {...htmlProps}>{newChildren}</tbody>;
    }
};


Tbody.defaultProps = {
    className: "",
};

Tbody.propTypes = {
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

    /**
     * Key
     */
    key: PropTypes.string,

    /**
     * A proxy for key that can be passed through to the Tr component
     */
    rowKey: PropTypes.string,

    /**
     * Whether row is selected
     */
    selected: PropTypes.bool,

};

export default Tbody;