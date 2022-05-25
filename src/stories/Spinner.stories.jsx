import React from 'react';

import {Spinner} from '../lib';
import {Intent} from '@blueprintjs/core';

export default {
    title: 'Core/Spinner',
    component: Spinner,
    argTypes: {
        intent: {
            control: 'select',
            options: [...Object.values(Intent)],
        },
    },
};

const Template = (args) => {
    return <Spinner {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    value: 0.5,
    size: 80,
    intent: 'primary',
};
