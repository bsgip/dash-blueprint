import React from 'react';
import PropTypes from 'prop-types';
import { Icon as BPIcon } from "@blueprintjs/core";


const Icon = (props) => {
    return <BPIcon {...props} />;
};

Icon.defaultProps = {
    
};

Icon.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

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
     * A space-delimited list of class names to pass along to a child element.
     */
    className: PropTypes.string,

    /**
     * Color of icon. This is used as the fill attribute on the <svg> image so it will override any CSS color property, including that set by intent. If this prop is omitted, icon color is inherited from surrounding text.
     */
    color: PropTypes.string,

    /**
     * String for the title attribute on the rendered element, which will appear on hover as a native browser tooltip.
     */
    htmlTitle: PropTypes.string,

    /**
     * Name of a Blueprint UI icon, or an icon element, to render. This prop is required because it determines the content of the component, but it can be explicitly set to falsy values to render nothing.
     * 
     * If null or undefined or false, this component will render nothing.
     * 
     * If given an IconName (a string literal union of all icon names), that icon will be rendered as an <svg> with <path> tags. Unknown strings will render a blank icon to occupy space.
     * 
     * If given a JSX.Element, that element will be rendered and all other props on this component are ignored. This type is supported to simplify icon support in other Blueprint components. As a consumer, you should avoid using <Icon icon={<Element />} directly; simply render <Element /> instead.
     */
    icon: PropTypes.string,

    /**
     * numberIcon.SIZE_STANDARD = 16
     * 
     * Size of the icon, in pixels. Blueprint contains 16px and 20px SVG icon images, and chooses the appropriate resolution based on this prop.
     */
    iconSize: PropTypes.number,

    /**
     * CSS style properties.
     */
    style: PropTypes.string,

    /**
     * HTML tag to use for the rendered element.
     */
    tagName: PropTypes.string,

    /**
     * Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name. Pass an explicit falsy value to disable.
     */
    title: PropTypes.string
};

export default Icon;