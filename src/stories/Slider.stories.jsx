import React from 'react';

import {Slider} from '../lib';

export default {
    title: 'Input/Slider',
    component: Slider,
    argTypes: {},
};

const Template = (args) => <Slider {...args}></Slider>;

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 100,
    stepSize: 10,
    value: 20,
    labelStepSize: 20
};
