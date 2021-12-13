import React from 'react';

import {RadioGroup} from '../lib';

export default {
    title: 'Form Controls/Radio Group',
    component: RadioGroup,
    argTypes: {},
};

const Template = (args) => (
    <RadioGroup
        label={args.label}
        inline={args.inline}
        options={[
            {label: 'Option 1', value: 'opt1'},
            {label: 'Option 2', value: 'opt2'},
        ]}
    />
);

export const Simple = Template.bind({});
Simple.args = {
    label: 'Group of Switches',
    inline: true,
    disabled: false,
};
