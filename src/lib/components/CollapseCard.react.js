import React from 'react';
import PropTypes from 'prop-types';
import { Card as BPCard } from "@blueprintjs/core";
import RawCollapse from './RawCollapse.react';

/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button
 * @param props
 * @returns {*}
 * @constructor
 */


export default class CollapseCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowHide = this.handleShowHide.bind(this);
        this.state = {nClicks: 0, isOpen: this.props.isOpen};

    }

    // componentDidUpdate(prevProps) {
    //     console.log('in componentDiDupdate');
    //     console.log(prevProps);
    //     this.setState({nClicks: this.state.nClicks + 1});
        
    //     // if(this.props.isOpen !== prevProps.isOpen); // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    //     // {
    //     //   this.handleShowHide();
    //     // }
    //   } 

    // shouldComponentUpdate(nextProps){
    //     console.log('checkinf gor update in CollapseCard');
    //     console.log(nextProps);
    //     console.log(this.props);
    //     // return true;
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    handleShowHide(e) {
        console.log('handling collapse card onClick');
        if (e) {
            e.stopPropagation();
        }
        this.props.setProps({isOpen: !this.props.isOpen});
        if (this.props.selectCard) {
            this.props.selectCard();
        }
    }


    render() {
        // TODO Handle props more consistently 
        const { children, ...htmlProps } = this.props;
        console.log(children);
        const collapseChildren = children.map((child) => {
            if (child.props._dashprivate_layout && child.props._dashprivate_layout.type === 'RawCollapse') {
                const {children, ...htmlProps} = child.props._dashprivate_layout.props;
                return <RawCollapse {...htmlProps} isOpen={this.props.isOpen}>
                    {children}
                </RawCollapse>
            }
            // if (child.props && child.props._dashprivate_layout) {
            //     child.props._dashprivate_layout.props.isOpen = this.props.isOpen;
            // }
            return child;
        })
        console.log(collapseChildren);

        return (
            <BPCard
                {...htmlProps}
                onClick={this.handleShowHide}
            >
                {collapseChildren}
                {/* { children.map((child) => {
                    if (child.props && child.props._dashprivate_layout) {
                        child.props._dashprivate_layout.isOpen = this.props.isOpen;
                    }
                    return child;
                }) } */}
            </BPCard>
            
                // <BPCollapse id={this.props.id} key={this.props.key}
                //     isOpen={this.props.isOpen} 
                //     transitionDuration={this.props.transitionDuration} 
                //     keepChildrenMounted={this.props.keepChildrenMounted}
                // >
                    
                // </BPCollapse>    
            );
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
CollapseCard.defaultProps = {
    n_clicks: 0,
    n_clicks_timestamp: -1
};

CollapseCard.propTypes = {
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



};
