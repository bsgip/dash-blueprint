import React from 'react';

import { ButtonGroup, Button } from '../lib';


export default {
  title: 'Core/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    // icon: { 
    //   control: 'select', 
    //   // options: ["select", "add"]
    //   options: [...Object.values(IconNames)]
    // },
  },

};



const Template = (args) => {
  const {tooltipText, text, ...buttonProps} = args;
  return <ButtonGroup>
      <Button>{"Button 1"}</Button>
      <Button>{"Button 2"}</Button>
      <Button>{"Button 3"}</Button>
    </ButtonGroup>
};

export const Primary = Template.bind({});
Primary.args = {
};
