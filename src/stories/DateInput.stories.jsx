import React from 'react';

import {DateInput} from '../lib';

export default {
    title: 'Date/Date Input',
    component: DateInput,
    argTypes: {
        timePrecision: {
            options: [null, 'minute', 'second', 'millisecond'],
            control: {type: 'radio'},
        },
    },
};

const Template = (args) => <DateInput {...args}></DateInput>;

export const Primary = Template.bind({});
Primary.args = {
    timePrecision: null,
};
