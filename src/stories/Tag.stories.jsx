import React from 'react';

import {Tag} from '../lib';
import {IconNames} from '@blueprintjs/icons';

export default {
    title: 'Core/Tag',
    component: Tag,
    argTypes: {
        leftIcon: {
            control: 'select',
            options: [...Object.values(IconNames)],
        },
        leftIcon: {
            control: 'select',
            options: [...Object.values(IconNames)],
        },
    },
};

const Template = (args) => {
    const {children, ...tagProps} = args;
    return <Tag {...tagProps}>{children}</Tag>;
};

export const Primary = Template.bind({});
Primary.args = {
    icon: 'confirm',
    rightIcon: 'cross',
    minimal: true,
    children: 'This is a tag',
};
