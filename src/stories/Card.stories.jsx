import React from 'react';

import { Card } from '../lib';


export default {
  title: 'Core/Card',
  component: Card,
  argTypes: {

    // icon: { 
    //   control: 'select', 
    //   // options: ["select", "add"]
    //   options: [...Object.values(IconNames)]
    // },
  },

};



const Template = (args) => {
  const {children, ...cardProps} = args;
  return <Card {...cardProps}>
      {children}
    </Card>
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is some text",
  interactive: true,
  elevation: 1,
  href: "/foo"
};

