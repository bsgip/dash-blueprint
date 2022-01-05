import React from 'react';

import {InputGroup} from '../lib';

export default {
    title: 'Input/InputGroup',
    component: InputGroup,
    argTypes: {},
};

const Template = (args) => <InputGroup {...args}></InputGroup>;

export const Primary = Template.bind({});
Primary.args = {
    leftIcon: 'add',
};
