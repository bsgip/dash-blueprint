import React from 'react';
import PropTypes from 'prop-types';
import { Select as BPSelect } from "@blueprintjs/select";
import { Button } from "@blueprintjs/core";
import { filterItemByQueryString, renderSelectItem } from "../utils/text";



/**
 * Use `Select` for choosing one item from a list.
 */
export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let selectedItem = null;
        if (props.value) {
            selectedItem = props.items.find(item => item.value === props.value);
        }
        props.setProps && props.setProps({label: selectedItem && selectedItem.label, valid: !props.required || !!selectedItem});
        if (!this.setProps) {
            this.state = {
                label: selectedItem && selectedItem.label,
                value: selectedItem && selectedItem.value,
                valid: !!selectedItem
            }
        }
    }

    handleChange(selected, event) {
        if (this.props.setProps) {
            this.props.setProps({
                value: selected.value, 
                label: selected.label,
                valid: true
            });
        }
        else {
            this.setState({value: selected.value, label: selected.label});
        }
        
        // Set value on parent if this property is provided
        this.props.setParentProps && this.props.setParentProps({value: selected});
    }


    render() {

        const selectedLabel = this.state && this.state.label || this.props.label;
        const {icon, disabled, minimal, popoverProps, ...htmlProps} = this.props;

        return (<BPSelect 
            itemPredicate={filterItemByQueryString}
            itemRenderer={renderSelectItem}
            onItemSelect={this.handleChange}
            popoverProps={{minimal: minimal, ...this.props.popoverProps}}
            {...htmlProps}

        >
            <Button
                        icon={icon}
                        rightIcon="caret-down"
                        text={selectedLabel ? `${selectedLabel}` : "(none)"}
                        disabled={disabled}
                    />
                </BPSelect>);
    }
}

Select.defaultProps = {
    disabled: false,
    filterable: true,
    minimal: true,
    required: true
};

Select.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * Items to choose from
     */
    'items': PropTypes.array,

     /**
      * The selected item
      */
     'value': PropTypes.string,

     /**
      * The selected item label
      */
      'label': PropTypes.string,

     /**
      * Class name
      */
     'className': PropTypes.string,

     /**
      * Whether the menu is disabled
      */
     'disabled': PropTypes.bool,

     /**
      * Whether the component should take up the full width of its container. 
      * This overrides popoverProps.fill. You also have to ensure that the 
      * child component has fill set to true or is styled appropriately.
      */
     fill: PropTypes.bool,


     /**
      * Whether the list can be filtered
      */
     'filterable': PropTypes.bool,

     /**
      * Use minimal popover style
      */
     'minimal': PropTypes.bool,

     /**
      * Button icon
      */
     'icon': PropTypes.string,

     /**
      * Additional props to define the popover behaviour
      */
     'popoverProps': PropTypes.object,

     /**
      * Whether this input is required. Used in form validation
      */
     required: PropTypes.bool,

     /**
      * Determine whether the input is valid. Used in form validation
      */
     valid: PropTypes.bool

};
