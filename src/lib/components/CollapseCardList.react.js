import React from 'react';
import PropTypes from 'prop-types';
import { Card as BPCard } from "@blueprintjs/core";
import RawCollapse from './RawCollapse.react';
import CollapseCard from './CollapseCard.react'


export default class CollapseCardList extends React.Component {
    constructor(props) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
        // this.cardRefs = {};
    }

    selectCard(key, isOpen) {
        // console.log('updating card selection');
        // console.log(isOpen);
        // console.log(this.cardRefs);
        if (isOpen) {
            // It has been closed so should be removed
            this.props.setProps({selected: this.props.selected.filter(item => item !== key)});
            this.props.setProps({opened: null});
        }
        else {
            this.props.setProps({selected: this.props.selected.concat([key])});
            this.props.setProps({opened: key});
        }
    }


    render() {
        console.log('rendering card list');
        console.log(this);
        const clonedChildren = React.Children.map(this.props.children, child => {
            if (child.props._dashprivate_layout) {
                child.props._dashprivate_layout.props.selectCard = data => this.selectCard(
                    child.props._dashprivate_layout.props.key, child.props._dashprivate_layout.props.isOpen
                    );
                // child.props._dashprivate_layout.props.isOpen = (this.props.opened === child.props._dashprivate_layout.props.key);
                child.props._dashprivate_layout.props = {
                    ...child.props._dashprivate_layout.props,
                    isOpen: this.props.selected.includes(child.props._dashprivate_layout.props.key)
                };
            }
            // const {children, ...props} = child.props._dashprivate_layout;
            // const key = child.props._dashprivate_layout.props.key;
            // this.cardRefs[key] = React.createRef();
            // child.props._dashprivate_layout.ref = this.cardRefs[key];
            return child;

          });
        return (<React.Fragment>
            {clonedChildren}
        </React.Fragment>);
    }
}

// CollapseCard.defaultProps = {
//     minimal: true,
//     transitionDuration: 200,
//     keepChildrenMounted: false,
//     showIcon: "small-plus",
//     hideIcon: "small-minus",
//     isOpen: false,
// };
CollapseCardList.defaultProps = {
    selected: []
};

CollapseCardList.propTypes = {
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
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    'n_clicks': PropTypes.number,

    /**
     * An integer that represents the time (in ms since 1970)
     * at which n_clicks changed. This can be used to tell
     * which button was changed most recently.
     */
    'n_clicks_timestamp': PropTypes.number,

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
     * The element should be automatically focused after the page loaded.
     */
    'autoFocus': PropTypes.string,

    /**
     * Indicates whether the user can interact with the element.
     */
    'disabled': PropTypes.string,

    /**
     * Indicates the form that is the owner of the element.
     */
    'form': PropTypes.string,

    /**
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    'formAction': PropTypes.string,

    /**
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    'name': PropTypes.string,

    /**
     * Defines the type of the element.
     */
    'type': PropTypes.string,

    /**
     * Defines a default value which will be displayed in the element on page load.
     */
    'value': PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
     */
    elevation: PropTypes.number,

    /**
     * Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.

Recommended when onClick is also defined.
     */
    interactive: PropTypes.bool,

    /**
     * window location to set on click
     */
    href: PropTypes.string,

    /**
     * The selected (and non-collapsed) card key
     */
    selected: PropTypes.array,

    /**
     * The last opened card key
     */
    opened: PropTypes.string,



};
