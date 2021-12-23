import React from 'react';

import {Button} from '../lib';
import {Tooltip} from '../lib';
import {IconNames} from '@blueprintjs/icons';

console.log(Object.values(IconNames));

export default {
    title: 'Core/Button',
    component: Button,
    argTypes: {
        icon: {
            control: 'select',
            // options: ["select", "add"]
            options: [...Object.values(IconNames)],
        },
    },
};

const Template = (args) => {
    const {tooltipText, text, ...buttonProps} = args;
    return (
        <Tooltip content={tooltipText}>
            <Button {...buttonProps}>{text}</Button>
        </Tooltip>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    //   children: 'Buttttoooon'
    icon: 'confirm',
    tooltipText: 'This is a tooltip',
    text: 'This is a button',
};
