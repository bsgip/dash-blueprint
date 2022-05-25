import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is a reimplementation of html Tbody with an extra state that supports modifying the className
 * when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
 */
class Tbody extends React.Component {
    render() {
        const {children, selected, setProps, key, ...htmlProps} = this.props;
        /**
         * We need to wrangle the children objects here as the modification to the key
         * forces an update to that row so that we can actually modify the colour
         * of the selected row. This is needed as the selected row is not the only row
         * that needs to be updated.
         */
        let newChildren;
        if (children) {
            const childrenArray = Array.isArray(children)
                ? children
                : [children];
            newChildren = childrenArray.map((child) => {
                return {
                    ...child,
                    key: child.props._dashprivate_layout.props.selected
                        ? child.props._dashprivate_layout.props.key + 's'
                        : child.props._dashprivate_layout.props.key,
                };
            });
        }
        return (
            <tbody key={key || 'html-table-body'} {...htmlProps}>
                {newChildren}
            </tbody>
        );
    }
}

Tbody.defaultProps = {
    className: '',
};

Tbody.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,

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
