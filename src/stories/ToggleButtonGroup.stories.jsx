import React from 'react';

import { ToggleButtonGroup, Button } from '../lib';


export default {
  title: 'Core/ToggleButtonGroup',
  component: ToggleButtonGroup,
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
  return <ToggleButtonGroup>
      <Button id={"button1"}>{"Button 1"}</Button>
      <Button id={"button2"}>{"Button 2"}</Button>
      <Button id={"button3"}>{"Button 3"}</Button>
    </ToggleButtonGroup>
};

export const Primary = Template.bind({});
Primary.args = {
};
