import React from 'react';

import {NumericInput} from '../lib';

export default {
    title: 'Input/NumericInput',
    component: NumericInput,
    argTypes: {},
};

const Template = (args) => <NumericInput {...args}></NumericInput>;

export const Primary = Template.bind({});
Primary.args = {};
