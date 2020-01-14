import React from 'react';
import PropTypes from 'prop-types';

class Tr extends React.Component {

    static getDerivedStateFromProps(props, state) {
        console.log('getting derived state!');
        console.log(props);
        console.log(state);
    }

    componentWillReceiveProps(props) {
        console.log('Tr receiving props');
        console.log(props);
        this.setState({selected: this.props.selected});
    }

    render() {
        const { children, selected, ...htmlProps } = this.props;
        if (this.state && this.state.selected) {
            console.log('SELECTED');
            htmlProps.className = htmlProps.className ? htmlProps.className + " selected" : "selected";
        }
        return <tr {...htmlProps}>{children}</tr>;
    }
// const Tr = (props) => {
    // const { children, selected, ...htmlProps } = props;
    // if (selected) {
    //     console.log('SELECTED');
    //     htmlProps.className = htmlProps.className ? htmlProps.className + " selected" : "selected";
    // }
    // return <tr {...htmlProps}>{children}</tr>;
};


Tr.defaultProps = {
    className: "",
};

Tr.propTypes = {
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
     * Whether row is selected
     */
    selected: PropTypes.bool,

};

export default Tr;