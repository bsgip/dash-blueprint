import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as BPButtonGroup} from "@blueprintjs/core";
import Button from './Button.react';


/**
 * Wrapper around the blueprint FormGroup component.
 * @param props
 * @returns {*}
 * @constructor
 */

export default class ToggleButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(key, event) {
        if (this.props.value !== key) {
            this.props.setProps({value: key});
        }
        else {
            this.props.setProps({value: null});
        }

    }

    render() {
        console.log('value');
        console.log(this.props.value);

        const { children, ...htmlProps } = this.props;
        const clonedChildren = React.Children.map(this.props.children, child => {
            if (child.props._dashprivate_layout) {
                child.props._dashprivate_layout.props.onClick = data => this.onButtonClick(
                    child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data, child.props._dashprivate_layout
                    );
            }

            child.props._dashprivate_layout.props.active = (child.props._dashprivate_layout.props.key == this.props.value);
            // For some reason, rendering the children directly doesn't let the change in active state
            // render correctly. But since there can only be Button components as children,
            // we can recreate them here
            return <Button {...child.props._dashprivate_layout.props}/>
          });
        
        return <BPButtonGroup {...htmlProps}>
            { clonedChildren }
        </BPButtonGroup>
    }
}

ToggleButtonGroup.defaultProps = {

};

ToggleButtonGroup.propTypes = {
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
     * The ARIA role attribute
     */
    'role': PropTypes.string,

    /**
     * A wildcard data attribute
     */
    'data-*': PropTypes.string,

    /**
     * A wildcard aria attribute
     */
    'aria-*': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    alignText: PropTypes.string,

    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill: PropTypes.bool,

    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal: PropTypes.bool,

    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large: PropTypes.bool,

    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical: PropTypes.bool,

    /**
     * The key of the button last clicked
     */
    value: PropTypes.string

};