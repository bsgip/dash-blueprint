import React from 'react';

import {DateRangePicker} from '../lib';

export default {
    title: 'Date/Date Range Picker',
    component: DateRangePicker,
    argTypes: {
        timePrecision: {
            options: [null, 'minute', 'second', 'millisecond'],
            control: {type: 'radio'},
        },
    },
};

const Template = (args) => <DateRangePicker {...args}></DateRangePicker>;

export const Primary = Template.bind({});
Primary.args = {
    timePrecision: null,
};
