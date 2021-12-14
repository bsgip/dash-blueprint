import React from 'react';

import {DatePicker} from '../lib';

export default {
    title: 'Date/Date Picker',
    component: DatePicker,
    argTypes: {
        timePrecision: {
            options: [null, 'minute', 'second', 'millisecond'],
            control: {type: 'radio'},
        },
    },
};

const Template = (args) => <DatePicker {...args}></DatePicker>;

export const Primary = Template.bind({});
Primary.args = {
    timePrecision: null,
};
