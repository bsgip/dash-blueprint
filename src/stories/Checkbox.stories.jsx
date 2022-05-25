import React from 'react';

import { Checkbox } from '../lib';


export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {
    // intent: {
    //   control: 'select',
    //   options: [...Object.values(Intent)]
    // }
  },

};



const Template = (args) => {
  const {children, ...checkboxProps} = args;
  return <Checkbox {...checkboxProps}>
      {children}
    </Checkbox>
};

export const Default = Template.bind({});
Default.args = {
  children: "This is a checkbox",
  title: "Checkbox title",
  checked: true,
  intent: "primary"
};

