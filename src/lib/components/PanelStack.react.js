import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem, PanelStack as BPPanelStack } from "@blueprintjs/core";




/**
 * PanelStack manages a stack of panels and displays only the topmost panel.
 * 
 * Each panel appears with a header containing a "back" button to return to the previous panel. 
 * The bottom-most initialPanel cannot be closed or removed from the stack. Panels use CSSTransition for seamless transitions.
 * 
 * Note: currently not functional
 */

export default class PanelStack extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.nextPanel = this.nextPanel.bind(this);
    }

    nextPanel(items, title, event) {
        this.props.openPanel({
            component: PanelStack,
            props: {...this.props, items: items},
            title: title
        });
    }


    render() {
        const items = [
            {
                text: 'an item',
                icon: 'cog'
            },
            {
                text: 'another item',
                icon: 'cog'
            }
        ]
        const panelMenu = items.map(item => {
            <MenuItem onClick={e => this.nextPanel(item.items, item.text, e)} {...item.props}/>
        })

        return (<BPPanelStack 
            itemPredicate={filterItem}
            itemRenderer={renderItem}
            onItemSelect={this.handleChange}
            popoverProps={{minimal: minimal, ...this.props.popoverProps}}
            {...htmlProps}
            
            
        >
            <Button
                        icon={icon}
                        rightIcon="caret-down"
                        text={selectedLabel ? `${selectedLabel}` : "(No selection)"}
                        disabled={disabled}
                    />
        </BPPanelStack>);
    }
}

PanelStack.defaultProps = {
    checked: false,
    disabled: false,
    filterable: true,
    minimal: true,
};

PanelStack.propTypes = {
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
      * Class name
      */
     'className': PropTypes.string,

     /**
      * Whether the menu is disabled
      */
     'disabled': PropTypes.bool,

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
     'popoverProps': PropTypes.object

};
