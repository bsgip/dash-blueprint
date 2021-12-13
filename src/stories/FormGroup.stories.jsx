import React from 'react';

import {FormGroup, Switch} from '../lib';

export default {
    title: 'Forms/FormGroup',
    component: FormGroup,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => (
    <FormGroup {...args}>
        <Switch id={'switch-1'}>{'Switch 1'}</Switch>
        <Switch id={'switch-2'}>{'Switch 2'}</Switch>
    </FormGroup>
);

export const Switches = Template.bind({});
Switches.args = {
    label: 'Group of Switches',
    inline: true,
};
