import React from 'react';

import {ProgressBar} from '../lib';

export default {
    title: 'Core/ProgressBar',
    component: ProgressBar,
    argTypes: {},
};

const Template = (args) => {
    return <ProgressBar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    value: 0.5,
    animate: false,
    stripes: false,
};
