import React from 'react';

// import { Button } from './Button';
import { Button } from '../lib';
import { Tooltip } from '../lib';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Tooltip content={"This is a tooltip"}><Button {...args}>{"This is a button"}</Button></Tooltip>;

export const Primary = Template.bind({});
Primary.args = {
//   children: 'Buttttoooon'
    icon: 'confirm'
};
