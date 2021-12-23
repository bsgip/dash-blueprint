import React from 'react';

import {Breadcrumbs} from '../lib';

export default {
    title: 'Core/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {},
};

const Template = (args) => {
    const {items, ...buttonProps} = args;
    return <Breadcrumbs {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            text: 'foo',
            href: '/foo',
        },
        {
            text: 'bar',
            href: '/foo/bar',
        },
    ],
};
