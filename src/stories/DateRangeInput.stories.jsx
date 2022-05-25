import React from 'react';

import {DateRangeInput} from '../lib';

export default {
    title: 'Date/Date Range Input',
    component: DateRangeInput,
    argTypes: {
        timePrecision: {
            options: [null, 'minute', 'second', 'millisecond'],
            control: {type: 'radio'},
        },
    },
};

const Template = (args) => <DateRangeInput {...args}></DateRangeInput>;

export const Primary = Template.bind({});
Primary.args = {
    timePrecision: null,
};
