import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button as BPButton, Intent as BPIntent, Slider as BPSlider } from "@blueprintjs/core";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Button extends Component {
    render() {
        const {text} = this.props;

        return (
            <BPButton intent={BPIntent.PRIMARY} text={text} />
        );
    }
}

Button.defaultProps = {};

Button.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    text: PropTypes.string.isRequired,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
