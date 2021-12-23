import React from 'react';

import {EditableText} from '../lib';

export default {
    title: 'Input/EditableText',
    component: EditableText,
    argTypes: {},
};

const Template = (args) => <EditableText {...args}></EditableText>;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'insert here...',
    value: 'default value',
};
