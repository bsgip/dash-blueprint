import React from 'react';

import {Switch} from '../lib';

export default {
    title: 'Input/Switch',
    component: Switch,
    argTypes: {},
};

const Template = (args) => <Switch {...args}>{args.children}</Switch>;

export const Default = Template.bind({});
Default.args = {
    children: 'Switch description',
};
