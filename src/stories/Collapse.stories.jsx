import React from 'react';

import { Collapse } from '../lib';
import { Intent} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export default {
  title: 'Core/Collapse',
  component: Collapse,
  argTypes: {
    // intent: {
    //   control: 'select',
    //   options: [...Object.values(Intent)]
    // }
  },

};



const Template = (args) => {
  const {children, ...collapseProps} = args;
  return (<Collapse {...collapseProps}>
    {children}
  </Collapse>)

};

export const Default = Template.bind({});
Default.args = {
  children: "This is the child of the collapse group",
  showText: "Show children",
  hideText: "Hide children",
  isOpen: false
};

