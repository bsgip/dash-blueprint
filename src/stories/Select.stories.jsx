import React from 'react';


import { Select } from '../lib';


export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Select {...args}></Select>

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {label: "Default selection", value: "default"},
        {label: "Other option", value: "other"},
    ],
    value: "default"
};
