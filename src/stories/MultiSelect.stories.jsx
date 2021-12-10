import React from 'react';


import { MultiSelect } from '../lib';


export default {
  title: 'Input/MultiSelect',
  component: MultiSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MultiSelect {...args}></MultiSelect>

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {label: "Default selection", value: "default"},
        {label: "Other option", value: "other"},
    ],
    // value: ["default"]
};
