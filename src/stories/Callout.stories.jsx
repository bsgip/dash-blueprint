import React from 'react';

import {IconNames} from '@blueprintjs/icons';
import {Callout} from '../lib';

export default {
    title: 'Core/Callout',
    component: Callout,
    argTypes: {
        intent: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'danger'],
        },
        icon: {
            control: 'select',
            options: [...Object.values(IconNames)],
        },
    },
};

const Template = (args) => {
    const {children, ...calloutProps} = args;
    return <Callout {...calloutProps}>{children}</Callout>;
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Callout Title',
    children: 'Some information provided in the callout',
    // icon: null,
    intent: 'warning',
};
