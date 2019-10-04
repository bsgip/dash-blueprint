import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem, PanelStack as BPPanelStack } from "@blueprintjs/core";



// function renderItem(item, { handleClick, modifiers, query }) {
//     if (!modifiers.matchesPredicate) {
//         return null;
//     }
//     const text = `${item.label}`;
//     return (
//         <MenuItem
//             active={modifiers.active}
//             disabled={modifiers.disabled}
//             label={item.tag}
//             onClick={handleClick}
//             text={highlightText(text, query)}
//         />
//     );
// };

function panelItems(items) {

};

/**
 * @param props
 * @returns {*}
 * @constructor
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

    

    

    // handleChange(selected, event) {
    //     if (this.props.setProps) {
    //         this.props.setProps({value: selected.value});
    //         this.props.setProps({selectedItem: selected})
    //     } else {
    //         this.setState({value: selected});
    //     }
    //     // TODO Is this needed for form groups?
    //     // if (this.props.setParentProps) {
    //     //     this.props.setParentProps({value: selected})
    //     // }
    // }


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
                </BPSelect>);
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
